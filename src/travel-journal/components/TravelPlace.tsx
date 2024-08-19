import React from "react";

const TravelPlace = (props) => {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    ...rest
  } = props.place;

  console.log(rest);

  return (
    <div>
      <h1>{title}</h1>
      <p>{location}</p>
      <a href={googleMapsUrl}>View on Google Maps</a>
      <p>
        {startDate} - {endDate}
      </p>
      <p>{rest.description}</p>
      <img src={rest.imageUrl} alt={title} />
    </div>
  );
};

export default TravelPlace;
