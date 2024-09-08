import React from "react";
import "./Login.css";
function Login() {
  return (
    <body className="App-body">
      <p>Login to access the full dashboard</p>

      <label htmlFor="email"> Email: </label>
      <input type="text" id="email" />
      <label htmlFor="password"> Password: </label>
      <input type="password" id="password" />
      <button>OK</button>
    </body>
  );
}
export default Login;
