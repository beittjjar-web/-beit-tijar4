import React, { useContext } from "react";
import { auth } from "../firebase";
import { UserContext } from "../firebase/context";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { authUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/login");
  };

  if (!authUser) {
    return <p>جارٍ تحميل بيانات المستخدم...</p>;
  }

  return (
    <div className="container mt-5">
      <h2>حسابي الشخصي</h2>
      <p>البريد الإلكتروني: {authUser.email}</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        تسجيل الخروج
      </button>
    </div>
  );
};

export default Account;
