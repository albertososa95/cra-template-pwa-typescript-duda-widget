import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

let loadContainer: any;

// @ts-ignore
export function init({container, props = {}} = {}) {
  loadContainer = container;
  ReactDOM.render(<App {...props} />, loadContainer);
}

export function clean() {
  if (loadContainer) {
    ReactDOM.unmountComponentAtNode(loadContainer);
  }
}

if (process.env.NODE_ENV === "development") {
  init({container: document.getElementById("root")});
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
