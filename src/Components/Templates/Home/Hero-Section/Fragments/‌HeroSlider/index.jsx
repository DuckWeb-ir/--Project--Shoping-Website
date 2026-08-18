import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import banner1 from "../../../../../../../public/assets/static/Hero/banner1.png";
import banner2 from "../../../../../../../public/assets/static/Hero/banner2.png";
import banner3 from "../../../../../../../public/assets/static/Hero/banner3.png";
import banner4 from "../../../../../../../public/assets/static/Hero/banner4.png";
import banner5 from "../../../../../../../public/assets/static/Hero/banner5.png";
import banner6 from "../../../../../../../public/assets/static/Hero/banner6.png";

import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = () => {

  const banners = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
  ];

  return (
    <section className="container m-auto  h-150  rounded-2xl overflow-hidden">

      <Swiper
        loop={true}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[
          Pagination,
          Autoplay,
          EffectFade,
          Navigation,
        ]}
        className="mySwiper h-full"
      >

        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              src={banner}
              alt={`banner-${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
};

export default HeroSlider;