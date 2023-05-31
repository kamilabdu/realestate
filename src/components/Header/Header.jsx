import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    const handleSeeMyWorks = () => {
        window.location.href = 'https://647698370ea91f3813d68d22--effortless-palmier-6e34ab.netlify.app/';
    };

    return (
        <div className='header flex flex-col' id="header">
            <Navbar />
            <div className='container flex'>
                <div className='header-content'>
                    <h1 className='text-white fw-6 header-title'>it's/Kamil.. <br /> what' up, I'm a <span className='text-brown'>full stack web Developer</span>~Breaking In to Tech, Passionately</h1>
                </div>
                <div className='btn-groups flex'>
                    <button type="button" className='btn-item bg-brown fw-4 ls-2' onClick={handleSeeMyWorks}>see my works</button>
                    <button type="button" className='btn-item bg-white fw-4 ls-2'>contact me</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
