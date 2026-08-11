import "swiper/css";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderButtons from "./Fragments/SliderButtons";

const HeroSection = () => {
    return (
        <section className="w-full h-100">
            <Swiper
                loop
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 1500 }}
                className="mySwiper h-100 relative"
            >
                <SwiperSlide>
                    <div className="h-100 w-full">
                        <img src="/assets/static/banner1.png" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-100 w-full">
                        <img src="/assets/static/banner2.png" />
                    </div>
                </SwiperSlide>

                <SliderButtons />
                
            </Swiper>
        </section>
    );
};

export default HeroSection;
