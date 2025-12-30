import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <section id="header">
            <div className="card-header">
                <Link to="/"><img src="/images/logo1.jpg" className="logo" alt="logo" /></Link>
                <ul id="nav" className={isActive ? 'active' : ''}>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Domů</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shop">Obchod</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">O nás</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Kontakty</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart"><img src="/images/cart.png" className="kosik" alt="cart" />Košík</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#" id="close" onClick={(e) => { e.preventDefault(); setIsActive(false); }}><i className="far fa-times"></i></a>
                    </li>
                </ul>
            </div>
            <div id="mobile">
                <Link className="nav-link" to="/cart"><i className="far fa-shopping-bag"></i></Link>
                <i id="bar" className="fas fa-outdent" onClick={() => setIsActive(true)}></i>
            </div>
        </section>
    );
};

export default Header;
