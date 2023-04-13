import React, { useState } from "react";
import { AuthContext } from "./cousera/src/context/AuthContext";
export const Auth = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState();
  return (
    <AuthContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </AuthContext.Provider>
  );
};
