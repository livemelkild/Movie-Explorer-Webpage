import React from "react";
import './Header.css';

interface PropsType {
    text: string
}

const Header = (porps: PropsType) => {
    return (
        <div className="header">
            <header className="App-header">
                <h1>{porps.text}</h1>
            </header>
        </div>
    )

}

export default Header;