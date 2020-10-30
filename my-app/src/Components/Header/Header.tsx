import React from "react";
import './Header.css';
import {Link} from "react-router-dom";

interface PropsType {
    text: string
}

const Header = (porps: PropsType) => {
    console.log("hallo");
    return (
        <div className="header">
            <header className="App-header">
                <h1>{porps.text}</h1>
            </header>
        </div>
    )

}

export default Header;