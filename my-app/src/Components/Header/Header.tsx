import React from "react";
import './Header.css';
import {Link} from "react-router-dom";


interface PropsType {
    text: string
}

const Header = (porps: PropsType) => {
    console.log("hallo");
    return (
        <nav>
            <div className="nav-wrapper  b light-blue darken-3">
            <header className="App-header" >
            <a href="#!" className="brand-logo center">{porps.text}</a>
            <Link className = "back_link" to="/">
            <button className="waves-effect btn light-blue darken-3" type="submit" name="action" > HOME</button>
        </Link>
            </header>
            </div>
        </nav>
    )

}

export default Header;