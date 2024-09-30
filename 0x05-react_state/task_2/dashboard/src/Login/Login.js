import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

function handleLoginSubmit(event, setIsLoggedIn) {
  event.preventDefault();
  setIsLoggedIn(true);
}

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEnableSubmit(value !== "" && password !== "");
  };

  const handleChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
    setEnableSubmit(email !== "" && value !== "");
  };

  return (
    <div className={`App-body ${css(styles.Login)}`}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={(event) => handleLoginSubmit(event, setIsLoggedIn)}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email"> Email: </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password"> Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <input type="submit" value="Login" disabled={!enableSubmit} />
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  Login: {
    margin: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
});

export default Login;