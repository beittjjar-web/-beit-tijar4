import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth, db } from "./index";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setAuthUser(user);

        const userDoc = await db.collection("users").doc(user.uid).get();
        if (!userDoc.exists) {
          await db.collection("users").doc(user.uid).set({
            email: user.email,
            createdAt: new Date(),
          });
        }
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ authUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider };