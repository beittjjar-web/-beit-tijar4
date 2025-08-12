import React, { useEffect, useState } from 'react';
import { firestore } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'properties'));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>قائمة العقارات</h2>
      <Link to="/add-property" className="btn btn-primary mb-3">إضافة عقار</Link>
      {properties.length === 0 ? (
        <p>لا يوجد عقارات حالياً.</p>
      ) : (
        <div className="row">
          {properties.map(property => (
            <div key={property.id} className="col-md-4 mb-3">
              <div className="card">
                {property.imageUrl && (
                  <img src={property.imageUrl} className="card-img-top" alt={property.title} />
                )}
                <div className="card-body">
                  <h5 className="card-title">{property.title}</h5>
                  <p className="card-text">{property.location}</p>
                  <p className="card-text"><strong>السعر:</strong> {property.price} $</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
