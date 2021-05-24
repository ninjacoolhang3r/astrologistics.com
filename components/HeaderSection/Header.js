import React, { Component, useState } from 'react';
import Link from 'next/link';

const Header = (props) => {

    const [ menu, setMenu ] = useState(false)

    return (
        <header className={`navbar navbar-sticky navbar-expand-lg navbar-dark ${menu  ? 'active' : ''}`}>
            <div className="container position-relative">
                <a className="navbar-brand" href="/">
                    <img className="navbar-brand-regular" src={props.imageData} alt="brand-logo" />
                    <img className="navbar-brand-sticky" src="/img/logo.png" alt="sticky brand-logo" />
                </a>
                <button className={`navbar-toggler d-lg-none`} onClick={()=>setMenu(true)} type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-inner">
                    {/*  Mobile Menu Toggler */}
                    <button className="navbar-toggler d-lg-none" onClick={()=>setMenu(false)} type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon active" />
                    </button>
                    <nav>
                        <ul className="navbar-nav" id="navbar-nav">
                            <li className="nav-item d-flex align-items-center">
                                <a className="nav-link" href="/#">
                                Home
                                </a>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <a className={`nav-link`} href="/#about">About</a>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <a className={`nav-link`} href="/#carriers">Carriers</a>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <a className={`nav-link`} href="/#shippers">Shippers</a>
                            </li>
                            <li className="nav-item d-flex align-items-center">
                                <a className={`nav-link`} href="/#contact">Contact Us</a>
                            </li>
                            <div className='d-flex align-items-center'>
                                <a className='btn btn-light' style={{margin:'auto auto'}} href={'/coming-soon'}>CARRIER LOGIN</a>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;