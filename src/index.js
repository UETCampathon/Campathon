import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Register from "./Components/Register/Register";

ReactDOM.render(<Register />, document.getElementById('root'));
registerServiceWorker();
