import React from 'react'
import Logo from '../images/logo.png'
import {Link} from 'react-router-dom'

export default function Nav() {
    // const linkStyle = {
    //     textDecoration: 'none',
    //     color: 'var(--bg-secondary)',
    // }

    return (
        <nav className="navbar">
            <Link to="/">
                <img src={Logo} height="40" alt=""/>
            </Link>
            <ul className="nav-links">
                <li>About</li>
                <li>Contact Us</li>
                <Link className="linkStyle" to='/login'>
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    )
}
