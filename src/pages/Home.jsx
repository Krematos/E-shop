import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';

const Home = () => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(buttonRef.current, {
            strings: ['Nakupuj ihned!'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <section id="hero">
                <h4>Špička v oboru</h4>
                <h2>Kvalita na 1. místě</h2>
                <h1>U všech produktů</h1>
                <p>Kvalita za rozumnou cenu a široký výběr k tomu!</p>
                <Link to="/shop">
                    <button id="cirkle-button" ref={buttonRef}>
                    </button>
                </Link>
            </section>

            <section id="feature" className="section-p1">
                <div className="fe-box">
                    <img className="free-shipping" src="/images/free-shipping.jpg" alt="Free Shipping" />
                    <h6>Doprava zdarma!</h6>
                </div>
                <div className="fe-box">
                    <img className="free-shipping" src="/images/online-order.jpg" alt="Online Order" />
                    <h6>Objednání online<br /> z pohodlí domova</h6>
                </div>
                <div className="fe-box">
                    <img className="free-shipping" src="/images/save-money.jpg" alt="Save Money" />
                    <h6>Šetřite své peníze</h6>
                </div>
                <div className="fe-box">
                    <img className="free-shipping" src="/images/propagace.jpg" alt="Promotion" />
                    <h6>Propagace</h6>
                </div>
                <div className="fe-box">
                    <img className="free-shipping" src="/images/happy.jpg" alt="Happy Customers" />
                    <h6>Mnoho spokojených zákazníků</h6>
                </div>
                <div className="fe-box">
                    <img className="free-shipping" src="/images/zákaznická podpora.jpg" alt="Support" />
                    <h6>24/7 podpora</h6>
                </div>
            </section>

            <section id="product1" className="section-p1">
                <h1>Vlajkové lodi:</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="pro-container">
                                <div className="pro">
                                    <h1><span>Nvidia</span></h1>
                                    <h5>GeForce RTX 4090 Gaming OC</h5>
                                    <img src="/images/90-ti.jpg" alt="RTX 4090" />
                                    <div className="des">
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h4>39 999,-</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="pro">
                                <h1><span>Intel</span></h1>
                                <h5>Intel Core I9-14900K</h5>
                                <img src="/images/arch5.jpg" alt="Intel i9" />
                                <div className="des">
                                    <div className="star">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4>16 490,-</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="banner" className="section-m1">
                <h4>Doručení a SERVIS zdarma na cokoliv</h4>
                <p>Díky <strong>Premium</strong> můžeš napukovat s doručením a servisem ZDARMA <strong>celý rok.</strong></p>
                <div className="button">
                    <button>Koupit za 499,-</button>
                    <button>Zjistit více</button>
                </div>
            </section>

            <section id="product1" className="section-p1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="pro-container">
                                <div className="pro">
                                    <h1><span>AMD</span></h1>
                                    <h5>AMD Radeon™ NITRO+ RX 7900 XTX Vapor-X</h5>
                                    <img src="/images/amdgrafika.jpg" alt="AMD GPU" />
                                    <div className="des">
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h4>29 999,-</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="pro">
                                <h1><span>AMD</span></h1>
                                <h5>AMD Ryzen 9 7950X3D</h5>
                                <img src="/images/amdprocesor.jpg" alt="AMD CPU" />
                                <div className="des">
                                    <div className="star">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4>16 490,-</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                    <h4>Black Friday</h4>
                    <h2>Slevy až 70%</h2>
                    <span>Slevy na vybrané zboží až 70%!</span>
                    <button className="white">Zjistit více</button>
                </div>
                <div className="banner-box banner-box2">
                    <h4>Akce!</h4>
                    <h2>1 + 1 Zdarma!</h2>
                    <span>Kup jedny Naše Kapusle a další máš zdarma!</span>
                    <button className="black">Zjistit více</button>
                </div>
            </section>

            <section id="newsletter">
                <div className="newstext">
                    <h2>Newsletter:</h2>
                    <h4>Přihlásit se k odběru</h4>
                    <p>Zadej svůj e-mail, aby ti neutekly <span>slevy</span> a <span>exkluzivní nabídky.</span></p>
                </div>
                <div className="form">
                    <input type="text" placeholder="Zadej e-mail" />
                    <button className="normal">Odběr</button>
                </div>
            </section>
        </>
    );
};

export default Home;
