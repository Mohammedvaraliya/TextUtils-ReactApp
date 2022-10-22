import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';


export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand mb-0 h1" to="/home">{props.title}</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={`nav-link ${({isActive}) => isActive ? 'active' : ''}`} aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${({isActive}) => isActive ? 'active' : ''}`} to="/about">{props.aboutText}</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.textTheme}</label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "Title",
    aboutText: "About",
}