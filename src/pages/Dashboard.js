// src/pages/Dashboard.js
import React, { useContext } from "react";
import { UserContext } from "../firebase/context";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const Dashboard = () => {
  const { authUser } = useContext(UserContext);

  if (!authUser) {
    return (
      <Container className="mt-5">
        <h4>يجب تسجيل الدخول للوصول إلى لوحة التحكم</h4>
      </Container>
    );
  }

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">لوحة التحكم</h2>
      <Card>
        <Card.Body>
          <Card.Title>مرحبًا، {authUser.email}</Card.Title>
          <Card.Text>
            UID: {authUser.uid}
          </Card.Text>
          <Card.Text>
            تم تسجيل الدخول باستخدام: {authUser.providerData[0]?.providerId}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
