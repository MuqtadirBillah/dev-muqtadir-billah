import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Tilt from 'react-parallax-tilt';

function Technologies(){
    
    function nextSlider(){
        customeSlider.current.slickNext()
    }
    function prevSlider(){

    }

    const customeSlider = useRef();
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            }
        ]
    };

    var tiltOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            10,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          200,    // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,   // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)"    // Easing on enter/exit.
    }

    function nextSlider(){
        customeSlider.current.slickNext()
    }
    function prevSlider(){
        customeSlider.current.slickPrev()
    }

    return(
        <div className="technologies">
            <div className="container">
                <div className="headings">
                    <h2 className="mainSectionHeading">Tech Stack</h2>
                    <h2 className="subSectionHeading">Technologies</h2>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="slider">
                            <Slider {...settings} ref={customeSlider}>
                                <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                    <Tilt className="Tilt" options={tiltOptions}>
                                        <img src="/assets/images/mongodb.png" alt="react-logo" />
                                    </Tilt>
                                </div>
                                <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                    <Tilt className="Tilt" options={tiltOptions}>
                                        <img src="/assets/images/express.png" alt="react-logo" />
                                    </Tilt>
                                </div>
                                <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                    <Tilt className="Tilt" options={tiltOptions}>
                                        <img src="/assets/images/react.png" alt="react-logo" />
                                    </Tilt>
                                </div>
                                <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                    <Tilt className="Tilt" options={tiltOptions}>
                                        <img src="/assets/images/node.png" alt="react-logo" />
                                    </Tilt>
                                </div>
                                <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                    <Tilt className="Tilt" options={tiltOptions}>
                                        <img src="/assets/images/next.png" alt="react-logo" />
                                    </Tilt>
                                </div>
                                <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                    <Tilt className="Tilt" options={tiltOptions}>
                                        <img src="/assets/images/mysql.png" alt="react-logo" />
                                    </Tilt>
                                </div>
                            </Slider>
                            <div className="swipe">
                                <p className="pulse-infinite"><i className="fas fa-arrow-left"></i> SWIPE LEFT & RIGHT <i className="fas fa-arrow-right"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;