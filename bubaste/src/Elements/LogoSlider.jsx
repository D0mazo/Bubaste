import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function LogoSlider() {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed:3000, 
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 554,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="js-slick-carousel u-slick u-slick--gutters-1"
            data-slides-show="3"
            data-slides-scroll="1"
            data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-classic u-slick__arrow-centered--y rounded-circle"
            data-arrow-left-classes="fa fa-arrow-left u-slick__arrow-classic-inner u-slick__arrow-classic-inner--left ml-lg-2 ml-xl-4"
            data-arrow-right-classes="fa fa-arrow-right u-slick__arrow-classic-inner u-slick__arrow-classic-inner--right mr-lg-2 mr-xl-4"
            data-responsive='[{
               "breakpoint": 992,
               "settings": {
                 "slidesToShow": 2
               }
             }, {
               "breakpoint": 768,
               "settings": {
                 "slidesToShow": 1
               }
             }, {
               "breakpoint": 554,
               "settings": {
                 "slidesToShow": 1
               }
             }]'>
            <Slider {...settings} style={{ margin: '0 10px', height: '100%' }}>
                <div>
                    <a href="https://carnilove.com/lt" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="https://bubaste.lt/net_files/banners/title_carnilove.jpg"
                            alt="Carnilove"
                            style={{ width: 'auto', height: '100px' }} // Adjusted height
                        />
                    </a>
                </div>
                <div style={{ padding: '0 5px' }}>
                    <a href="https://fifeweb.org/" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="https://fifeweb.org/app/uploads/2023/08/FIFe_logo_150x150_white.jpg"
                            alt="Feline"
                            style={{ width: 'auto', height: '100px' }} // Adjusted height
                        />
                    </a>
                </div>
                <div>
                    <a href="https://acana.kaivana.lt/" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="https://bubaste.lt/net_files/banners/title_acana.jpg"
                            alt="Acana"
                            style={{ width: 'auto', height: '100px' }} // Adjusted height
                        />
                    </a>
                </div>
                <div>
                    <a href="https://www.nuaras.lt/" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="https://www.nuaras.lt/wp-content/uploads/2023/11/Nuaro-fondas.png"
                            alt="Nuaras"
                            style={{ width: 'auto', height: '100px' }} // Adjusted height
                        />
                    </a>
                </div>
                <div>
                    <a href="https://www.inabafoods-europe.com/" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="https://bubaste.lt/net_files/banners/title_churu.jpg"
                            alt="Inaba"
                            style={{ width: 'auto', height: '100px' }} // Adjusted height
                        />
                    </a>
                </div>
                <div>
                    <a href="https://gga.lt/" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="https://gga.lt/wp-content/themes/registracija_theme/img/logo.png"
                            alt="GGA"
                            style={{ width: 'auto', height: '100px' }} // Adjusted height
                        />
                    </a>
                </div>
            </Slider>
        </div>
    );
}

export default LogoSlider;