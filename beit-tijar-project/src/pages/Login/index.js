import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate("/account");
    } catch (err) {
      alert("فشل تسجيل الدخول");
    }
  };

  return (
    <div className="container mt-5">
      <h2>تسجيل الدخول</h2>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="البريد الإلكتروني" className="form-control mb-3" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="كلمة المرور" className="form-control mb-3" />
        <button type="submit" className="btn btn-primary">دخول</button>
      </form>
    </div>
  );
};

export default Login;
