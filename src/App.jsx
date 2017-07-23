import React from 'react';
import Header from './components/Header.jsx'
import Image from './components/Image.jsx';
import HelloWorld from './components/HelloWorld.jsx';


const App = () => {
    return (
        <div className="App">
            Hello from the App component!
            <Header/>
            <div className="content">
                <Image url="https://www.placecage.com/330/350"/>
                <HelloWorld/>
            </div>
        </div>
    );
};

export default App;
