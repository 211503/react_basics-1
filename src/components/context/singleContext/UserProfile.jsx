import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  const handleChangeName = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name:
        prevUser.name === "Dineshkumar" ? "Divya Dineshkumar" : "Dineshkumar",
    }));
  };

  return (
    <>
      <div className="list-card">
        <h1>User Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <div className="btns">
          <button onClick={handleChangeName}>Change Name</button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
