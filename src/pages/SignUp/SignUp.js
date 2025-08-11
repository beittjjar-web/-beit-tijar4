import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      await db.collection("users").doc(userCredential.user.uid).set({
        email,
        createdAt: new Date(),
      });
      navigate("/account");
    } catch (err) {
      alert("فشل إنشاء الحساب");
    }
  };

  return (
    <div className="container mt-5">
      <h2>تسجيل جديد</h2>
      <form onSubmit={handleSignUp}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="البريد الإلكتروني" className="form-control mb-3" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="كلمة المرور" className="form-control mb-3" required />
        <button type="submit" className="btn btn-success">تسجيل</button>
      </form>
    </div>
  );
};

export default SignUp;
