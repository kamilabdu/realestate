import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [navToggler, setNavToggler] = useState(false);
    const closeNavbar = () => setNavToggler(false);
    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='navbar-content'>
                    <div className='brand-and-toggler flex flex-sb'>
                    <a href='/' className='navbar-brand text-uppercase fw-4 text-white ls-2 fs-22'>Kamil~Portfolio</a>
                    <button type = "button" className='navbar-open-btn text-white' onClick={() => setNavToggler(!navToggler)}>
                        <FaBars size = {30} />
                    </button>
                    <div className='navbar-collapse'>
                        <button type = "button" className='navbar-close-btn text-white'>
                            <FaTimes size = {30} />
                        </button>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to = "/" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to = "/" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>service</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to = "/" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>works</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to = "/" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>Aboute me</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to = "/" className='nav-link text-white ls-1 text-uppercase fw-6 fs-22'>Contact</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;