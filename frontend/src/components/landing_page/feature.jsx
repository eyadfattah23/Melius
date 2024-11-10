
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { ArrowBigDown, Book } from 'lucide-react';
import FlipArrow from '../../assets/icons/flip_arrow';

function Feature({icon, title, description, image1, image2, reverse}){
    return <Swiper
        effect={'flip'}
        loop={true}
        grabCursor={true}
        modules={[EffectFlip]}
        className="mySwiper w-[350px] h-[420px]"
      >
        <SwiperSlide className='content flex flex-col items-start gap-2 bg-white p-8 rounded-[30px] max-w-[350px] min-h-[420px]'>          
                <img src={icon} alt="Feature Icon" className='feature_icon' />
               <h3>
                    {title}
                </h3>
                <p className='paragraph'>
                {description}
            </p>
             
        
        <div>
            
            <FlipArrow className="flip_arrow_face absolute bottom-4 right-4"/>
          
        </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage: `url(${image1})`}} className='card_image rounded-[30px]'>
          <FlipArrow className="flip_arrow_back absolute bottom-4 right-4"/>
        </SwiperSlide>
        
        
      </Swiper>
    
}
export default Feature



