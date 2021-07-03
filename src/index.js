import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyPolyfills, defineCustomElements } from 'nw-accordion/loader';

import App from './App';
//import * as serviceWorker from './serviceWorker';
//import { createStore, compose, applyMiddleware } from 'redux';
//import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
//import allReducers from './store/reducers/combine_reducers';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();


//const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//const composeEnhances = compose
//const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose

//STORE ->  GLOBALIZED STATE
//const store = createStore(allReducers, composeEnhances(
//    applyMiddleware(thunk)
//));

const app = (
    //<Provider store={store}>
        <App / >
    //</Provider>
)

ReactDOM.render(app, document.getElementById('root'));
//serviceWorker.register();

applyPolyfills().then(() => {
  defineCustomElements(window);
});