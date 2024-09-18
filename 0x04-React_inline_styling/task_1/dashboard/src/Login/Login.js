import React from "react";
import { StyleSheet, css } from "aphrodite";
function Login() {
  return (
    <div className={`App-body ${css(styles.Login)}`}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email"> Email: </label>
      <input type="text" id="email" />
      <label htmlFor="password"> Password: </label>
      <input type="password" id="password" />
      <button>OK</button>
    </div>
  );
}
const styles = StyleSheet.create({
  Login: {
    margin: '20px'
  }
})
export default Login;
