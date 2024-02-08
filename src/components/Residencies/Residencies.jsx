import React from 'react';
import { Swiper, SwiperSlide , useSwiper} from 'swiper/react';
import 'swiper/css';
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from '../../utils/common';

function Residencies() {
    return (
        <section className='r-wrapper'>
            <div className=" paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choice</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>

                    <Swiper {...sliderSettings}>
                        <SliderButtons />
                        {
                            data.map((card, i) => (
                                <SwiperSlide key={i}>
                                    <div className=" flexColStart r-card">
                                        <img src={card.image} alt="home" />

                                        <span className="secondaryText r-price">
                                            <span style={{color: "orange"}}>$</span>
                                            <span>{card.price}</span>
                                        </span>

                                        <sapn className="primaryText">{card.name}</sapn>
                                        <sapn className="secondaryText">{card.detail}</sapn>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>


            </div>
        </section>
    )
}

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className=" flexCenter r-button">
            <button onClick={() => swiper.slidePrev()} >&lt;</button>
            <button onClick={() => swiper.slideNext()} >&gt;</button>
        </div>
    )
}
