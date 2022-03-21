import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import authReducer, { initialState } from "./authReducer";
import { AuthProvider } from "./authContext";
import App from './App'
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider initialState={initialState} reducer={authReducer}>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
