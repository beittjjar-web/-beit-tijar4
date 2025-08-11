import React, { useState } from "react";
import { db, storage } from "../firebase";

const AddProperty = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const storageRef = storage.ref();
    const imageRef = storageRef.child(`images/${image.name}`);
    await imageRef.put(image);
    const imageURL = await imageRef.getDownloadURL();

    await db.collection("properties").add({
      title,
      price,
      location,
      imageURL,
      createdAt: new Date(),
    });

    setTitle("");
    setPrice("");
    setLocation("");
    setImage(null);
    alert("تمت إضافة العقار بنجاح!");
  };

  return (
    <div className="container mt-5">
      <h2>إضافة عقار</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="عنوان العقار" className="form-control mb-3" required />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="السعر" className="form-control mb-3" required />
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="الموقع" className="form-control mb-3" required />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} className="form-control mb-3" required />
        <button type="submit" className="btn btn-primary">إضافة</button>
      </form>
    </div>
  );
};

export default AddProperty;