import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function Profile() {
  const { loggedUser } = useContext(AuthContext);
  return <div>hello</div>;
}

export default Profile;
