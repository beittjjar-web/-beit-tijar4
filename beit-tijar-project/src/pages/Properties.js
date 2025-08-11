import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection("properties").get();
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProperties(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2>العقارات المتوفرة</h2>
      <div className="row">
        {properties.map((property) => (
          <div className="col-md-4 mb-4" key={property.id}>
            <div className="card">
              <img src={property.imageURL} className="card-img-top" alt="property" />
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text">السعر: {property.price} ل.س</p>
                <p className="card-text">الموقع: {property.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;