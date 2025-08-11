import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { db } from "../firebase";
import { UserContext } from "../firebase/context";

const AdminRoute = ({ children }) => {
  const { authUser } = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      if (!authUser) {
        setIsAdmin(false);
        return;
      }

      try {
        const doc = await db.collection("users").doc(authUser.uid).get();
        const userData = doc.data();
        setIsAdmin(userData?.admin === true);
      } catch (error) {
        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, [authUser]);

  if (isAdmin === null) {
    return <p className="text-center mt-5">جارٍ التحقق من الصلاحيات...</p>; // تحميل مؤقت
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
