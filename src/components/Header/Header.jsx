import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.scss';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации
            once: true,     // Анимация проигрывается только один раз
        });
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo" data-aos="fade-down" data-aos-delay="200">
                MyLogo
            </div>
            <div
                className={`burger ${menuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li data-aos="fade-down" data-aos-delay="300"><a href="#home">Home</a></li>
                    <li data-aos="fade-down" data-aos-delay="400"><a href="#about">About</a></li>
                    <li data-aos="fade-down" data-aos-delay="500"><a href="#services">Services</a></li>
                    <li data-aos="fade-down" data-aos-delay="600"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

