import React, { useState } from "react";
import { auth } from "../firebase";  // عدّل المسار حسب مشروعك

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert("تم تسجيل الدخول بنجاح!");
      // يمكن تحويل المستخدم لصفحة أخرى هنا
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>تسجيل الدخول</h2>
      <input
        type="email"
        placeholder="البريد الإلكتروني"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="كلمة المرور"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">دخول</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Login;
