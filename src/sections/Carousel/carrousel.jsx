import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carrousel.css';
import { useMediaQuery } from '@mui/material';

const Carrousel = () => {
    const isXsScreen = useMediaQuery('(max-width:600px)');
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        { id: '1', image: 'https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fexperimente_o_hamburguer_do_churrasco_maturatta_desktop_6eb6f5dd31.png&w=1440&q=85'},
        { id: '2', image: 'https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fhamburguer_maturatta_top_3_paladar_estadao_banner_desktop_79083a8cda.png&w=1440&q=85'},
        { id: '3', image: 'https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fcostelas_maturatta_site_friboi_banner_desktop_2e097bef9a.png&w=1440&q=85'},
    ];

    const data2 = [
        { id: '1', image: 'https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fexperimente_o_hamburguer_do_churrasco_maturatta_mobile_6c4b3cba41.png&w=1280&q=85'},
        { id: '2', image: 'https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fhamburguer_maturatta_top_3_paladar_estadao_banner_mobile_a270362910.png&w=1280&q=85'},
        { id: '3', image: 'https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fcostelas_maturatta_site_friboi_banner_mobile_ae3900154d.jpg&w=1280&q=85'},
    ];

    const imagesToShow = isXsScreen ? data2 : data;

    const goToSlide = (index) => {
        setActiveIndex(index);
        swiperRef.current.swiper.slideTo(index);
    };

    return (
        <div className='container'>
            <Swiper
                ref={swiperRef}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {imagesToShow.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <div className="slide-container">
                            <img className="slide-item" src={item.image} alt="Slider" />
                            <div className="navigation-buttons">
                                {[0, 1, 2].map((buttonIndex) => (
                                    <button
                                        key={buttonIndex}
                                        className={`slide-button ${buttonIndex === activeIndex ? 'active' : ''}`}
                                        onClick={() => goToSlide(buttonIndex)}
                                    >
                                    </button>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carrousel;




















