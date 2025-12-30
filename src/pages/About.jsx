import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/styleA.css';

const About = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Programátor', 'Bojovník', 'Hráč her'],
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
        <section className="home">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 ">
                        <div className="left">
                            <h3>Ahoj, jsem</h3>
                            <h1>Jan Macner</h1>
                            <h4>
                                Jsem <span className="multiple" ref={el}></span>
                            </h4>
                            <p>
                                Ahoj, jsem Jan Macner, zápalený Programátor se specializací na back-end.
                                Umím programovat v Java, HTML, CSS a JavaScript. Umím používat v  SQL databáze. Ovládám také vizualizace
                                v PowerBi a MS Office. Aktivně ve svých projektech využívám umělou inteligenci k zefektivnění práce. Rád se vzdělávám a učím novým věcem.
                            </p>
                            <div className="btn">
                                <button>Stáhnout CV</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="right">
                            <div className="profile">
                                <img src="/images/Profilovka.jpg" alt="profilovka" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
