import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <Link to="/" style={{ marginRight: 10 }}>🏠 الرئيسية</Link>
      <Link to="/properties" style={{ marginRight: 10 }}>📋 العقارات</Link>
      <Link to="/add-property" style={{ marginRight: 10 }}>➕ إضافة عقار</Link>
      <Link to="/login" style={{ marginRight: 10 }}>🔑 تسجيل الدخول</Link>
      <Link to="/signup">🆕 إنشاء حساب</Link>
    </nav>
  );
};

export default Navbar;
