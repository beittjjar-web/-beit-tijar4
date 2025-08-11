import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { UserContext } from "../firebase/context";

const NavBar = () => {
  const { authUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      if (authUser) {
        const doc = await db.collection("users").doc(authUser.uid).get();
        if (doc.exists) {
          setUserData(doc.data());
        }
      } else {
        setUserData(null);
      }
    };

    fetchUserData();
  }, [authUser]);

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          🏠 بيت_تجار
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              الرئيسية
            </Nav.Link>
            <Nav.Link as={Link} to="/properties">
              العقارات
            </Nav.Link>
            {authUser && (
              <Nav.Link as={Link} to="/add-property">
                إضافة عقار
              </Nav.Link>
            )}
            {authUser && userData?.admin && (
              <Nav.Link as={Link} to="/admin">
                لوحة التحكم
              </Nav.Link>
            )}
          </Nav>
          <Nav className="ms-auto">
            {authUser ? (
              <>
                <Nav.Link as={Link} to="/account">
                  الحساب
                </Nav.Link>
                <Button variant="outline-danger" onClick={handleLogout}>
                  تسجيل الخروج
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  دخول
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  تسجيل
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
