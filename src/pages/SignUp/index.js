import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      // إنشاء وثيقة المستخدم في Firestore
      await db.collection("users").doc(result.user.uid).set({
        email: result.user.email,
        createdAt: new Date(),
      });
      navigate("/"); // الرجوع للصفحة الرئيسية
    } catch (err) {
      setError("فشل إنشاء الحساب. قد يكون البريد مستخدم مسبقاً.");
    }
  };

  return (
    <Container className="my-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">إنشاء حساب جديد</h2>
      <Form onSubmit={handleSignUp}>
        <Form.Group controlId="formEmail">
          <Form.Label>البريد الإلكتروني</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>كلمة المرور</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        {error && <p className="text-danger mt-2">{error}</p>}

        <Button type="submit" className="mt-4" variant="success">
          إنشاء حساب
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
