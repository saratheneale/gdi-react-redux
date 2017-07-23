import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import MySecondComponent from './components/MySecondComponent.jsx'
import './style.css';

ReactDOM.render(
    <App />,
    document.getElementById('app-root')
);

ReactDOM.render(
	<MySecondComponent/>,
    document.getElementById('my-second-component')
);



