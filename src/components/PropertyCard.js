import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: 10, margin: 10, width: 250 }}>
      <img src={property.image || "https://via.placeholder.com/250"} alt="property" style={{ width: "100%", height: 150, objectFit: "cover" }} />
      <h3>{property.title}</h3>
      <p>{property.location}</p>
      <p>السعر: {property.price} $</p>
      <Link to={`/property/${property.id}`}>تفاصيل أكثر</Link>
    </div>
  );
};

export default PropertyCard;
