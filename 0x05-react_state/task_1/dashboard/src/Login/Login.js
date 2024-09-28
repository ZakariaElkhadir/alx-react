import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";


function handleLoginSubmit(event) {
  event.preventDefault();
  setIsLoggedIn(true);
}
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("")

  return (
    
    <div className={`App-body ${css(styles.Login)}`}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="email"> Email: </label>
        <input type="text"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      
      <div className={css(styles.inputGroup)}>
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" />
      </div>
      <input type="submit" />
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  Login: {
    margin: '20px',
    '@media (max-width: 900px)': {
      margin: '10px',
    },
  },
  inputGroup: {
    display: 'flex',
    flexDirection: "column",
    width: '20em',
    marginBottom: '10px',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '20px'
    },
  },
  button: {
    border: '1px solid #FFBF00',
    display: 'block',
    marginTop: '20px',
    '@media (min-width: 900px)': {
      marginTop: '30px'
    }
  }
});
export default Login;
