import React from "react";
import "./travel-journal/style.css";
import TravelPlace from "./travel-journal/components/TravelPlace";
import data from "./travel-journal/data/places";
const App = () => {
  console.log(data);

  const places = data.map((place) => <TravelPlace place={place} test={5}  another={{a: 5, b: 6 }}/>);

  return <div>{places}</div>;
};

export default App;
