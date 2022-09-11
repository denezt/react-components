import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);

/* Deprecated in React v18.0 */
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// serviceWorker.unregister();