import React, { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("كلمتا المرور غير متطابقتين.");
      return;
    }

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      navigate("/"); // رجوع للصفحة الرئيسية بعد التسجيل
    } catch (err) {
      setError("فشل تسجيل الحساب. تأكد من البريد وكلمة المرور.");
    }
  };

  return (
    <Container className="my-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">تسجيل حساب جديد</h2>
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

        <Form.Group controlId="formConfirmPassword" className="mt-3">
          <Form.Label>تأكيد كلمة المرور</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        {error && <p className="text-danger mt-2">{error}</p>}

        <Button type="submit" className="mt-4" variant="primary">
          تسجيل
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
