import React, { createContext, useReducer, useContext } from "react";

// Create a context
const AuthContext = createContext();

// Define action types
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true, user: action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

// Initial state for authentication
const initialAuthState = {
  isAuthenticated: false,
  user: null,
};

// AuthProvider component to provide the context
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  // Login function
  const login = (user) => {
    dispatch({ type: LOGIN, payload: user });
  };

  // Logout function
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
