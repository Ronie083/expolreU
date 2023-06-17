import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Banner.css"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Home/Home';


const Banner = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <div className='text-black text-left absolute top-20 left-12  mb-3'>
                        <h1 className='text-3xl font-bold'>Unleash Your Inner <br /> Shutterbug</h1>
                        <p className='my-4'>Frame the World. Ignite Your Creativity. <br /> Unlock Your Photographic Potential. <br /> Learn Photography from the Experts. <br /> Unlock Your Photographic Potential. <br /> Enroll in Our Photography Program</p>
                        <Link to="register" className="btn btn-outline">Register Now</Link>
                    </div>
                    <img src="https://images.unsplash.com/photo-1457038770541-b6a1afae40f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1500634245200-e5245c7574ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1567324216285-61f36e5b719f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1471999796791-874f5de3b3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1246&q=80" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://plus.unsplash.com/premium_photo-1667055670847-14e0dbe20ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1542992669-58b851a73881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1575411602736-5e9f24e277d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <FaArrowLeft></FaArrowLeft>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <FaArrowRight></FaArrowRight>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;