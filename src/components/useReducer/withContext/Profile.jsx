import React from "react";
import { useAuth } from "./AuthContext";

const Profile = () => {
  const { state, logout } = useAuth();

  if (!state.isAuthenticated) {
    return <p>Please log in.</p>;
  }

  return (
    <div>
      <h2>Welcome, {state.user.name}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
