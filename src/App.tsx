import React from "react";
import "./styles/style.css";
// import Card from "./airbnb-components/Card";
// import Hero from "./airbnb-components/Hero";
// import Navbar from "./airbnb-components/Navbar";
import Joke from "./joke-components/Joke";
import jokes from "./joke-components/jokes";
const App = () => {
  return (
    <div>
      {/* <Navbar/>
      <Hero/>
      <Card/> */}

      {jokes.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />;
      })}
    </div>
  );
};

export default App;
