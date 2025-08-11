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
        admin: false, // يمكن تعيينه لاحقاً يدوياً من لوحة التحكم
      });
      navigate("/account");
    } catch (error) {
      alert("فشل إنشاء الحساب. حاول مرة أخرى.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>تسجيل جديد</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success">تسجيل</button>
      </form>
    </div>
  );
};

export default SignUp;
