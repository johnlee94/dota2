import React from 'react';
import logo from "logo.svg";
import './style.css'

const Header = () => {
    return (
      <header>
        <nav className="nav">
          <img className="logo" src={logo} alt="React Logo"/>
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact </li>
          </ul>
        </nav>
        <h1>Reasons why I love React</h1>
      </header>
    );
  }

export default Header;