import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';
import './index.css'; // If you have CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='root-notification'>
      <Notifications />
    </div>
    <App />
  </React.StrictMode>
);
