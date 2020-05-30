import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import App from './App';
import reducer from "./store/reducers";

const store = createStore(reducer);

ReactDOM.render(
 <Provider store={store}>
   <BrowserRouter> 
    <App /> 
  </BrowserRouter>
 </Provider>,
 document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
