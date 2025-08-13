import React from "react";
import { auth } from "../firebase";

const Account = () => {
  const user = auth.currentUser;

  return (
    <div style={{ padding: 20 }}>
      <h2>حساب المستخدم</h2>
      {user ? (
        <div>
          <p>البريد الإلكتروني: {user.email}</p>
          <button onClick={() => auth.signOut()}>تسجيل الخروج</button>
        </div>
      ) : (
        <p>لم يتم تسجيل الدخول.</p>
      )}
    </div>
  );
};

export default Account;
