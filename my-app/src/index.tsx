import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//add to more imports for the store and provider
import {Provider} from "react-redux";
import store from "./Store";

ReactDOM.render(
  //the provider needs a store, and it is changed to provider witch suraounds the APP
  <Provider store = {store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
