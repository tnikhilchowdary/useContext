import React, { useContext } from "react";
import userContext from "./userContext";

const Profile = () => {
  const { user } = useContext(userContext);

  return (
    <div>
      {user ? (
        <h2> Welcome, {user}!</h2>
      ) : (
        <h2>You are not logged in.</h2>
      )}
    </div>
  );
};

export default Profile;
