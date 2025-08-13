import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    db.collection("properties").onSnapshot(snapshot => {
      setProperties(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>قائمة العقارات</h2>
      {properties.map((property) => (
        <div key={property.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{property.title}</h3>
          <p>{property.description}</p>
          <p>💵 السعر: {property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Properties;
