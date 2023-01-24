import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AuthConsumer from "../hooks/useAuth";

import "../styles/styles.css"

function Navbar() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => { setClicked(!clicked) }

    const [auth] = AuthConsumer()

    return (
        <>
            <nav className="nav">
                {<NavLink to="/"><img className="App-logo" alt="Logo" />VibeAI</NavLink>}
                <div id='menuList'>
                    <ul id='navbar' className={clicked ? "#navbar active" : "#navbar"}>

                        <li><NavLink id='navbar' to="/aboutUs">About Us</NavLink></li>

                        {
                            auth.isAuth ?
                                <li><NavLink id='navbar' className="nav-link" to="/profile">My profile</NavLink></li>
                                : null
                        }

                        {
                            auth.isAuth ?
                                <li><NavLink id='navbar' className="nav-link" to="/logout"><i className="fa-solid fa-right-to-bracket"></i></NavLink></li>
                                :
                                null
                        }

                    </ul>
                </div>
            </nav>
        </>
    )
}


export default Navbar;