import React, { useEffect, useState, useContext } from "react";
import { db } from "../firebase";
import { UserContext } from "../firebase/context";

const AdminDashboard = () => {
  const { authUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await db.collection("users").get();
      setUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    const fetchProperties = async () => {
      const snapshot = await db.collection("properties").get();
      setProperties(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchUsers();
    fetchProperties();
  }, []);

  return (
    <div className="container mt-5">
      <h2>لوحة تحكم المشرف</h2>
      <h4>المستخدمون</h4>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email} - {user.admin ? "مشرف" : "مستخدم"}</li>
        ))}
      </ul>
      <h4>العقارات</h4>
      <ul>
        {properties.map((prop) => (
          <li key={prop.id}>
            {prop.title} - {prop.price} ل.س - {prop.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
