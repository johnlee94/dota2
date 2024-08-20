import React from "react";
import trollFace from "../images/troll-face.png";
import "./style.css";

const Header = () => {
  return (
    <header className="header--container">
      <div className="logo--container">
        <img src={trollFace} alt="Troll Face" className="logo--container-item"/>
        <h2 className="logo--container-item">Meme Generator</h2>
      </div>
      <p>React Course - Project 3</p>
    </header>
  );
};

export default Header;
