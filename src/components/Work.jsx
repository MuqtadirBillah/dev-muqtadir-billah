import React, { useState, useRef } from "react";
import Slider from "react-slick";

function Work(){

    function nextSlider(){
        customeSlider.current.slickNext()
    }
    function prevSlider(){

    }

    const customeSlider = useRef();

    var workOnebackStyle = {
        backgroundImage: `url("/assets/images/work1.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var workOnebackStyle2 = {
        backgroundImage: `url("/assets/images/work2.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var workOnebackStyle3 = {
        backgroundImage: `url("/assets/images/work3.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var workOnebackStyle4 = {
        backgroundImage: `url("/assets/images/work4.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var workOnebackStyle5 = {
        backgroundImage: `url("/assets/images/work5.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var workOnebackStyle6 = {
        backgroundImage: `url("/assets/images/work6.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var workOnebackStyle7 = {
        // backgroundImage: `url("/assets/images/work7.jpg")`,
        backgroundImage: `url("https://i.postimg.cc/dVsJbqs0/work7.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var workOnebackStyle8 = {
        // backgroundImage: `url("/assets/images/work8.jpg")`,
        backgroundImage: `url("https://i.postimg.cc/WzmPyyxr/work8.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1280,
            settings: {
            slidesToShow: 3,
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
            }
        ]
    };

    function nextSlider(){
        customeSlider.current.slickNext()
    }
    function prevSlider(){
        customeSlider.current.slickPrev()
    }

    return(
        <div className="work">
            <div className="container reactSlick">
                <div className="headings">
                    <h2 className="mainSectionHeading">Projects</h2>
                    <h2 className="subSectionHeading">Just Look at it!</h2>
                    <div className="buttonControls">
                        <button className="sliderControlBut" onClick={()=>{prevSlider()}}><i class="fas fa-chevron-circle-left"></i></button>
                        <button className="sliderControlBut" onClick={()=>{nextSlider()}}><i class="fas fa-chevron-circle-right"></i></button>
                    </div>
                </div>
                <div className="slider">
                    <Slider {...settings} ref={customeSlider}>
                        <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                            <div className="singleWork" style={workOnebackStyle7}>                             
                                <div className="inner d-flex align-items-center justify-content-center fadeIn">
                                    <a  href="https://www.gradetuitionacademy.com" target="_blank">
                                        <button>Visit Site</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                            <div className="singleWork" style={workOnebackStyle8}>                             
                                <div className="inner d-flex align-items-center justify-content-center fadeIn">
                                    <a  href="https://www.buildintegrate.com" target="_blank">
                                        <button>Visit Site</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                            <div className="singleWork" style={workOnebackStyle6}>                             
                                <div className="inner d-flex align-items-center justify-content-center fadeIn">
                                    <a  href="https://www.xharptech.com" target="_blank">
                                        <button>Visit Site</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                            <div className="singleWork" style={workOnebackStyle}>
                                <div className="inner d-flex align-items-center justify-content-center fadeIn">
                                    <a href="https://www.berocca.pk" target="_blank">
                                        <button href="https://www.berocca.pk">Visit Site</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                            <div className="singleWork" style={workOnebackStyle2}>
                                <div className="inner d-flex align-items-center justify-content-center fadeIn">
                                    <a href="https://www.redoxon.pk" target="_blank">
                                        <button>Visit Site</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                            <div className="singleWork" style={workOnebackStyle3}>
                                <div className="inner d-flex align-items-center justify-content-center fadeIn">
                                    <a  href="https://www.rennie.pk" target="_blank">
                                        <button>Visit Site</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                            <div className="singleWork" style={workOnebackStyle4}>
                                <div className="inner d-flex align-items-center justify-content-center fadeIn">
                                    <a  href="https://www.sun-grid.com" target="_blank">
                                        <button>Visit Site</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                            <div className="singleWork" style={workOnebackStyle5}>
                            </div>
                        </div> */}
                    </Slider>
                    <div className="swipe">
                        <p className="pulse-infinite"><i className="fas fa-arrow-left"></i> SWIPE LEFT & RIGHT <i className="fas fa-arrow-right"></i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;