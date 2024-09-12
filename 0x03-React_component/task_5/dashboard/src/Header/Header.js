import React from "react";
import logo from "../assets/holber_logo.jpg";
import "./Header.css";
function Header() {
  return (
    <header className="App-header">
      <img src={logo} width={150} alt="holberton school" />
      <h1>School dashboard</h1>
    </header>
  );
}
export default Header;
