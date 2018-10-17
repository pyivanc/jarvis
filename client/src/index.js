import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

console.log(process.env)
ReactDOM.render(<Router />, document.getElementById('app'));

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}