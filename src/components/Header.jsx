import React from 'react';
import Image from './Image.jsx';

// write a stateless functional component for the header
// make it an unordered list, with two list elements. One should have the text Home, the other Profile
// be sure to include the classname 'Header' to get the correct styles

// don't forget to export your component!

const Header = () => {
    return (
        <div >
            <ul className="Header">
                <li>
                    <a href="#">
                        <Image url="https://www.placecage.com/50/50"/>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">Purr</a>
                </li>
            </ul>
        </div>
    );
};

export default Header
