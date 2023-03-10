import React from 'react';
import ReactDOM from 'react-dom';
import { ReactNotifications } from 'react-notifications-component';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getAxiosConnection } from './utils/hooks';

import 'react-notifications-component/dist/theme.css';

getAxiosConnection();
ReactDOM.render(
  <React.StrictMode>
    <ReactNotifications />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
