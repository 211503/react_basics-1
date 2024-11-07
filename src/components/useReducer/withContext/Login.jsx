import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    // Simulate a user object
    const user = { name: username };
    login(user); // Login with the user object
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
