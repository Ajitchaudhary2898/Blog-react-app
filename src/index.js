import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
    domain="dev-t7xnblwg2rz1wlz2.us.auth0.com"
    clientId="GIEEbwfzFGkwcj0mUjwIWD8uHhkzuUFT"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
