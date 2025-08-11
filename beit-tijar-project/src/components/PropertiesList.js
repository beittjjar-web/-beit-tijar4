import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const PropertiesList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const snapshot = await db.collection("properties").get();
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProperties(data);
      } catch (error) {
        console.error("خطأ أثناء جلب البيانات:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="container mt-5">
      <h2>قائمة العقارات</h2>
      <div className="row">
        {properties.length === 0 ? (
          <p>لا توجد عقارات حالياً.</p>
        ) : (
          properties.map((property) => (
            <div className="col-md-4 mb-3" key={property.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{property.title}</h5>
                  <p className="card-text">{property.description || "لا يوجد وصف"}</p>
                  <p className="card-text"><strong>السعر:</strong> {property.price || "غير محدد"}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PropertiesList;
