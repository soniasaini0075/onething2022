import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/vendors/fontawesome/css/all.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "locomotive-scroll/dist/locomotive-scroll.css";
// import "./assets/scss/_font.scss";
// import "./assets/scss/_keyframes.scss";
// import "./assets/scss/_colors.scss";
// import "./assets/scss/_typography.scss";

import "./assets/scss/main.scss";
import "./style.scss"
import App from './App';

import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
