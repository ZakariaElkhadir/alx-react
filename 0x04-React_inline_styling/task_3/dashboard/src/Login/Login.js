import React from "react";
import { StyleSheet, css } from "aphrodite";
function Login() {
  return (
    
    <div className={`App-body ${css(styles.Login)}`}>
      <p>Login to access the full dashboard</p>
      
      <div className={css(styles.inputGroup)}>
        <label htmlFor="email"> Email: </label>
        <input type="text" id="email" />
      </div>
      
      <div className={css(styles.inputGroup)}>
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" />
      </div>
      <button>OK</button>
    </div>
  );
}
const styles = StyleSheet.create({
  Login: {
    margin: '20px',
    '@media (max-width: 900)' :{
      margin: '10px',
    },
  },
  inputGroup: {
    display: 'flex',
    flexDirection: "column",
    marginBottom: '10px',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '20px'
    },
  },
  button: {
    display: 'block',
    marginTop: '20px',
    '@media (min-width: 900px)': {
      marginTop: '30px'
    }
  }
})
export default Login;
