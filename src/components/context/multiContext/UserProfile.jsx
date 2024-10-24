import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { ThemeContext } from "./ThemeContext";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className="list-card"
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Theme: {theme}</p>
      <div className="btns">
        <button onClick={handleChangeTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default UserProfile;
