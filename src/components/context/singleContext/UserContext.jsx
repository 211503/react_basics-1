import React, { createContext, useState } from "react";

// Create the UserContext
export const UserContext = createContext();

// Create a provider component
export const UserProviderSingle = ({ children }) => {
  const [user, setUser] = useState({
    name: "Dineshkumar",
    email: "dinesh@gmail.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;
