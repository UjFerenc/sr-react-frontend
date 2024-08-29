import React, { useContext, useState } from 'react'
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../App';
import { signal } from '@preact/signals-core';

import { loggedIn } from '../../services/user-service';

const Navbar = () => {
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
                    <Link className="nav-link" to="/#">Lore</Link>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item" >
                    <Link  className="nav-link" to={loggedIn.value !== null? "profile": "login"}>{ loggedIn.value !== null? "Profile": "Login" }</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>

  )
}

export default Navbar