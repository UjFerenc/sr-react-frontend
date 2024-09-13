import React from 'react'
import './Navbar.scss';
import { Link, useNavigate } from 'react-router-dom';

import { loggedIn, logout } from '../../services/user-service';

const Navbar = () => {
    const navigation = useNavigate()

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">

        <div className="container-fluid">
            <Link className="navbar-brand" to="/" >Shattered Realm</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/lore">Lore</Link>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <div className="dropdown">
                    <li className="nav-item" id="profile">
                        <Link  className="nav-link" to={loggedIn.value !== null? "profile": "login"}>{ loggedIn.value !== null? "Profile": "Login" }</Link>
                    </li>
                    {
                        loggedIn.value && <ul class="dropdown-menu">
                            <li><button className="dropdown-item"onClick={OnLogoutClick} href="#">Logout</button></li>
                        </ul>
                    }
                </div>
            </ul>
            </div>
        </div>
        </nav>
  )

  function OnLogoutClick() {
    logout()
    navigation('/#')
  }
}

export default Navbar