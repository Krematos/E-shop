import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="section-p1">
            <div className="col">
                <img src="/images/logo1.jpg" className="logo" alt="logo" />
                <h3>Kontakty:</h3>
                <p><strong>Adresa: </strong>   Školní 524, Praha 4, Česká republika</p>
                <p><strong>Telefon: </strong>   601 532 331</p>
                <p><strong>Hodiny: </strong>   8:00 - 18:00. Po-Pá </p>
                <div className="follow"></div>
                <h3>Sleduj nás na:</h3>
                <div className="icon">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="far fa-envelope"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
            <div className="col">
                <h4>O nás:</h4>
                <Link to="/about">O nás</Link>
                <a href="#">Často kladené dotazy</a>
                <a href="#">Klikni a vyzvedni</a>
                <a href="#">Podmínky</a>
                <a href="#">Kontaktní formulář</a>
            </div>
            <div className="col">
                <h4>Informace:</h4>
                <a href="#">Prodejny</a>
                <a href="#">Vrácení zboží</a>
                <a href="#">Reklamace</a>
                <a href="#">Věrnostní program</a>
                <a href="#">Dárkové karty</a>
            </div>
            <div className="col install">
                <h3>Stáhni appku!</h3>
                <p>Z App Store nebo Google Play</p>
                <div className="row">
                    <img src="/images/apple-app-store-logo.jpg" className="alogo" alt="apple" />
                    <img src="/images/googl.png" className="glog" alt="google" />
                </div>
            </div>
            <div className="copyright">
                <p>@Vytvořil Jan Macner/2023</p>
            </div>

            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
        </footer>
    );
};

export default Footer;
