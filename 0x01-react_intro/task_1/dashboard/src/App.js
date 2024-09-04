import './App.css';
import { getFooterCopy } from './utils';
import logo from './holber_logo.jpg'
function App() {
  return (
    <>
    <header className='App-header'>
      <img src={logo} width={150} alt='holberton school'/>
      <h1>School dashboard</h1>
    </header>
    <hr />
    <body className='App-body'>
      <p>Login to access the full dashboard</p>

    </body>
    <hr />
    <footer className='App-footer'>
      {getFooterCopy()}
    </footer>
    </>
    
  );
}

export default App;
