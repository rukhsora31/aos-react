import React, { useEffect } from 'react'
import './Hero.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации в миллисекундах
            once: false,     // Анимация будет проигрываться один раз
        });
    }, []);

    return (
        <>
            <section>
                <div className="container">

                    <div className="wrap">
                        <div data-aos="flip-up"  data-aos-delay="200" className="box"></div>
                        <div data-aos="flip-up"  data-aos-delay="400" className="box"></div>
                        <div data-aos="flip-up"  data-aos-delay="600" className="box"></div>
                    </div>

                    <div className="wrap">
                        <div data-aos="flip-up"  data-aos-delay="800" className="box"></div>
                        <div data-aos="flip-up"  data-aos-delay="1000" className="box"></div>
                        <div data-aos="flip-up"  data-aos-delay="1200" className="box"></div>
                    </div>

                    <div className="wrap">
                        <div data-aos="flip-right" className="box"></div>
                        <div data-aos="flip-down" className="box"></div>
                        <div data-aos="flip-left" className="box"></div>
                    </div>

                    <div className="wrap">
                        <div data-aos="flip-right" className="box"></div>
                        <div data-aos="flip-down" className="box"></div>
                        <div data-aos="flip-left" className="box"></div>
                    </div>

                    <div className="wrap">
                        <div data-aos="flip-right" className="box"></div>
                        <div data-aos="flip-down" className="box"></div>
                        <div data-aos="flip-left" className="box"></div>
                    </div>

                    <div className="wrap">
                        <div data-aos="flip-right" className="box"></div>
                        <div data-aos="flip-down" className="box"></div>
                        <div data-aos="flip-left" className="box"></div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero
