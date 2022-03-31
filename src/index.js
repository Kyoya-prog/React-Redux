import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from "redux";

const initialState = {
  count: 1,
};

const reducer = (state = initialState) => {
  return state
}

const store = createStore(reducer);

export default store;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
