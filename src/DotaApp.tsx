import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeroesMap from "./components/Heroes";
import Player from "./components/Player";

function DotaApp() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroesMap />
        <Player />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default DotaApp;
