import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Country from './Country';
import State from './State';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
