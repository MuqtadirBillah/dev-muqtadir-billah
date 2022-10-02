import React, { useState, useRef } from "react";
import Slider from "react-slick";

function Art(){

    function nextSlider(){
        customeSlider.current.slickNext()
    }
    function prevSlider(){

    }

    const customeSlider = useRef();

    var artOnebackStyle = {
        backgroundImage: `url("/assets/images/art1.png")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var artOnebackStyle2 = {
        backgroundImage: `url("/assets/images/art2.png")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var artOnebackStyle3 = {
        backgroundImage: `url("/assets/images/art3.png")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var artOnebackStyle4 = {
        backgroundImage: `url("/assets/images/art4.png")`,
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
        <div className="art">
            <div className="container reactSlick">
                <div className="headings">
                    <h2 className="mainSectionHeading">Hobbies</h2>
                    <h2 className="subSectionHeading">Digital Art!</h2>
                    <div className="buttonControls">
                        <button className="sliderControlBut" onClick={()=>{prevSlider()}}><i class="fas fa-chevron-circle-left"></i></button>
                        <button className="sliderControlBut" onClick={()=>{nextSlider()}}><i class="fas fa-chevron-circle-right"></i></button>
                    </div>
                </div>
                <div className="slider">
                    <Slider {...settings} ref={customeSlider}>
                        <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                            <div className="singleart" style={artOnebackStyle}>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                            <div className="singleart" style={artOnebackStyle2}>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                            <div className="singleart" style={artOnebackStyle3}>
                            </div>
                        </div>
                        <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                            <div className="singleart" style={artOnebackStyle4}>
                            </div>
                        </div>
                    </Slider>
                    <div className="swipe">
                        <p className="pulse-infinite"><i className="fas fa-arrow-left"></i> SWIPE LEFT & RIGHT <i className="fas fa-arrow-right"></i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art;