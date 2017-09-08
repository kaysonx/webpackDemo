import React from 'react';
import { render } from 'react-dom';

const component = (props) => (<h1>Hello, babel</h1>);

const renderApp = () => render(component(), document.getElementById('root'));
renderApp();


if(module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated print module!');
        renderApp();
    })
}