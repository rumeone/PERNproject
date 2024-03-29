import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import createSagaMiddleware from "redux-saga"
import {sagaWatcher} from "./redux/saga/sagas";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(saga)));

saga.run(sagaWatcher);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
