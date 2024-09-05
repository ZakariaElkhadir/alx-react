import "./App.css";
import { getFooterCopy } from "./utils";
import logo from "./holber_logo.jpg";
import { getFullYear } from "./utils";

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} width={150} alt="holberton school" />
        <h1>School dashboard</h1>
      </header>
      <hr />
      <body className="App-body">
        <p>Login to access the full dashboard</p>

        <label htmlFor="email"> Email: </label>
        <input type="text" id="email" />
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" />
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <hr className="footer-divider" />
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
}

export default App;
