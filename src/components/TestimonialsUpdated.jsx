import React, { useState, useRef } from "react";
import Slider from "react-slick";
// import Tilt from 'react-tilt'
import Tilt from 'react-parallax-tilt';

function TestimonialsUpdated(){

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
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
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
        <div className="testimonialsUpdated">
            <div className="container">
                <div className="headings">
                    <div className="row">            
                        <h3 className="mainSectionHeading">Endorsement</h3>
                    </div>
                    <div className="row whatHeading">
                        <div className="col-lg-12 col-md-8 col-sm-12 align-self-center whatLeft" data-aos="slide-up" data-aos-delay="100" data-aos-duration="600">
                            <h1 className="subSectionHeading">What People says about me</h1>
                        </div>
                        <div className="whatRight">
                            <button className="sliderControlBut" onClick={()=>{prevSlider()}}><i className="fas fa-chevron-circle-left"></i></button>
                            <button className="sliderControlBut" onClick={()=>{nextSlider()}}><i className="fas fa-chevron-circle-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="row reviews">
                    <div className="slider">
                        <Slider {...settings} ref={customeSlider}>
                            <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                <Tilt className="Tilt" options={tiltOptions}>
                                    <div className="singleCard">
                                        <div className="reviewCard">
                                            <div className="rating">
                                                <span className="ratingNo">5.00</span> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i>
                                            </div>
                                            <div className="comments">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non earum quidem minus sapiente, nihil, assumenda distinctio mollitia repellendus reiciendis culpa magni, adipisci quis ducimus sint doloribus commodi iusto! Maiores, sed natus sapiente dolore totam saepe enim cupiditate iure nam?</p>
                                            </div>
                                            <div className="client">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-10 col-8  align-self-center">
                                                        <h2>Lorem ipsum</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </div>
                            <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                <Tilt className="Tilt" options={tiltOptions}>
                                    <div className="singleCard">
                                        <div className="reviewCard">
                                            <div className="rating">
                                                <span className="ratingNo">5.00</span> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i>
                                            </div>
                                            <div className="comments">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non earum quidem minus sapiente, nihil, assumenda distinctio mollitia repellendus reiciendis culpa magni, adipisci quis ducimus sint doloribus commodi iusto! Maiores, sed natus sapiente dolore totam saepe enim cupiditate iure nam?</p>
                                            </div>
                                            <div className="client">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-10 col-8  align-self-center">
                                                        <h2>Lorem ipsum</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </div>
                            <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                <Tilt className="Tilt" options={tiltOptions}>
                                    <div className="singleCard">
                                        <div className="reviewCard">
                                            <div className="rating">
                                                <span className="ratingNo">5.00</span> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i>
                                            </div>
                                            <div className="comments">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non earum quidem minus sapiente, nihil, assumenda distinctio mollitia repellendus reiciendis culpa magni, adipisci quis ducimus sint doloribus commodi iusto! Maiores, sed natus sapiente dolore totam saepe enim cupiditate iure nam?</p>
                                            </div>
                                            <div className="client">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-10 col-8  align-self-center">
                                                        <h2>Lorem ipsum</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </div>
                            <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                <Tilt className="Tilt" options={tiltOptions}>
                                    <div className="singleCard">
                                        <div className="reviewCard">
                                            <div className="rating">
                                                <span className="ratingNo">5.00</span> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i> <i className="fas fa-star filled"></i>
                                            </div>
                                            <div className="comments">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non earum quidem minus sapiente, nihil, assumenda distinctio mollitia repellendus reiciendis culpa magni, adipisci quis ducimus sint doloribus commodi iusto! Maiores, sed natus sapiente dolore totam saepe enim cupiditate iure nam?</p>
                                            </div>
                                            <div className="client">
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12 col-sm-10 col-8  align-self-center">
                                                        <h2>Lorem ipsum</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsUpdated;