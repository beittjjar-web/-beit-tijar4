import React, { useState } from "react";
import { db } from "../firebase";

const AddProperty = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection("properties").add({
      title,
      location,
      price: Number(price),
      description,
      createdAt: new Date()
    });
    alert("تم إضافة العقار بنجاح");
    setTitle("");
    setLocation("");
    setPrice("");
    setDescription("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>إضافة عقار جديد</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>عنوان العقار:</label><br />
          <input value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>الموقع:</label><br />
          <input value={location} onChange={e => setLocation(e.target.value)} required />
        </div>
        <div>
          <label>السعر ($):</label><br />
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>الوصف:</label><br />
          <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>إضافة العقار</button>
      </form>
    </div>
  );
};

export default AddProperty;
