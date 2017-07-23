import React from 'react';

// make a class component that renders 'Hello World' in a div

class HelloWorld extends React.Component {
    hello () {
        console.log('hello')
    }

    goodbye() {
         return "Baaaaiiii~~~~~~~";
    }

    render () {
        return (
            <div className="HelloWorld">
                HAY {this.hello()} {this.goodbye()}
            </div>
        );
    }
}

export default HelloWorld;