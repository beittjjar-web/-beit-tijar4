import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../firebase/context";

const PrivateRoute = ({ children }) => {
  const { authUser } = useContext(UserContext);

  if (authUser === null) {
    // تحميل أو تحقق من تسجيل الدخول
    return <p className="text-center mt-5">جارٍ التحقق من تسجيل الدخول...</p>;
  }

  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
