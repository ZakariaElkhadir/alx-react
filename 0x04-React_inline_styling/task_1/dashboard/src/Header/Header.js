import React from "react";
import logo from "../assets/holber_logo.jpg";
import { StyleSheet, css } from "aphrodite";
function Header() {
  return (
    <header className={`App-header ${css(styles.header)}`}>
      <img src={logo} width={150} alt="holberton school" />
      <h1>School dashboard</h1>
    </header>
  );
}
const styles = StyleSheet.create({
  header: {
    color: '#e0354b',
    fontFamily: 'Arial, Helvetica, sans-serif',
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
  }
})
export default Header;
