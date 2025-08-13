import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const doc = await db.collection("properties").doc(id).get();
      if (doc.exists) setProperty({ id: doc.id, ...doc.data() });
    };
    fetchProperty();
  }, [id]);

  if (!property) return <p>جارٍ تحميل بيانات العقار...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{property.title}</h2>
      <img src={property.image || "https://via.placeholder.com/600x400"} alt="property" style={{ width: "100%", maxWidth: 600 }} />
      <p>الموقع: {property.location}</p>
      <p>السعر: {property.price} $</p>
      <p>{property.description}</p>
    </div>
  );
};

export default PropertyDetails;
