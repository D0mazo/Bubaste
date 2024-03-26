import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function LogoSlider() {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
    const getImageStyle = (width, height) => {
        if ( width > 100 ) {
            
            return { width: '50%', height: 'auto' };
        } else {
            
            return { maxWidth: '100%', height: 'auto' };
        }
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '63px',
            zIndex: 999,
            backgroundColor: 'white'
        }}>
            <Slider {...settings}>
                
                {logos.map((logo, index) => (
                    <div key={index} style={{ width: '70%', display: 'flex', justifyContent: 'center' }}>
                        <a href={logo.link}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '40%'
                            }}>
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={getImageStyle(logo.width, logo.height)}
                            />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default LogoSlider;


const logos = [
    {
        src: "https://bubaste.lt/net_files/banners/title_carnilove.jpg",
        alt: "Carnilove",
        link: "https://carnilove.com/lt"
    },
    {
        src: "https://bubaste.lt/net_files/banners/title_acana.jpg",
        alt: "Acana",
        link: "https://acana.kaivana.lt/"
    },
    {
        src: "https://www.nuaras.lt/wp-content/uploads/2023/11/Nuaro-fondas.png",
        alt: "Nuaras",
        link: "https://www.nuaras.lt/",
        width: 189, // Image width
        height: 63 // Image height
    },
    {
        src: "https://bubaste.lt/net_files/banners/title_churu.jpg",
        alt: "Inaba",
        link: "https://www.inabafoods-europe.com/"
    },
    {
        src: "https://gga.lt/wp-content/themes/registracija_theme/img/logo.png",
        alt: "GGA",
        link: "https://gga.lt/",
        width: 189, // Image width
        height: 63 // Image height
    },
    {
        src: "https://fifeweb.org/app/uploads/2023/08/FIFe_logo_150x150_white.jpg",
        alt: "FIFe",
        link: "https://fifeweb.org/",
         width: 189, // Image width
        height: 63 // Image height
    }
];