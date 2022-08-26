import CardsRender from '../Cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { card1, card2, card3, card4 } from '../../Content/Content';

export default function Carrousel() {

    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            spaceBetween={5}
            slidesPerView={"auto"}
            centeredSlides={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="mySwiper"
        >
            <SwiperSlide><CardsRender card={card1} /></SwiperSlide>
            <SwiperSlide><CardsRender card={card2} /></SwiperSlide>
            <SwiperSlide><CardsRender card={card3} /></SwiperSlide>
            <SwiperSlide><CardsRender card={card4} /></SwiperSlide>
        </Swiper>
    );
};
