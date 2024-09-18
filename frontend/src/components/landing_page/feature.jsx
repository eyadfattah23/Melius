
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './style.css';

// import required modules
import { EffectCards } from 'swiper/modules';
function Feature({icon, title, description, image1, image2, reverse}){
    return <div  className={`flex flex-col items-center gap-8  lg:px-8 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`} >
        
      <Swiper
        effect={'cards'}
        grabCursor={true}
        
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={image2} alt="" />
            </SwiperSlide>
      
        
      </Swiper>
    
        <div className={`content flex flex-col justify-between gap-8 lg:p-0 ${reverse && "py-8"}`}>
                <h4>
                    {title}
                </h4>
            <p>
                {description}
            </p>
        </div>
       
    </div>
}
export default Feature



