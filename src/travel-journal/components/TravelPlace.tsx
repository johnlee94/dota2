import React from "react";

const TravelPlace = ({
  place: {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  },
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{location}</p>
      <a href={googleMapsUrl}>View on Google Maps</a>
      <p>
        {startDate} - {endDate}
      </p>
      <p>{description}</p>
      <img src={imageUrl} alt={title} style={{width: "200px"}} />
    </div>
  );
};

export default TravelPlace;
