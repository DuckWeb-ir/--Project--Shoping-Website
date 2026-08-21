import React from "react";
import SectionTitle from "../../../Common/SectionTitle";
import ProductCard from "../../../Common/Cards/ProductCard";
import WatchImg from "../../../../../public/assets/static/ProductsCard/Watch.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Watch } from "lucide-react";


const BestSelling = () => {

const products = [
    {
        id: 1,
        brand: "Samsung",
        title: "Galaxy Watch6 Classic 47mm",
        specs: ["BT", "47mm", "Black"],
        rating: 4.7,
        reviews: 73,
        oldPrice: "16,000,000",
        price: "13,990,000",
        discount: 12,
        colors: ["000000", "F5F5DC"],
        image: WatchImg,
    },
    {
        id: 2,
        brand: "Apple",
        title: "Apple Watch Series 9 GPS 45mm",
        specs: ["GPS", "45mm", "Midnight"],
        rating: 4.9,
        reviews: 128,
        oldPrice: "24,500,000",
        price: "21,900,000",
        discount: 10,
        colors: ["171717", "C0C0C0"],
        image: WatchImg,
    },
    {
        id: 3,
        brand: "Xiaomi",
        title: "Xiaomi Watch S3 Smart Watch",
        specs: ["AMOLED", "46mm", "Silver"],
        rating: 4.5,
        reviews: 96,
        oldPrice: "8,900,000",
        price: "7,490,000",
        discount: 16,
        colors: ["C0C0C0", "000000"],
        image: WatchImg,
    },
    {
        id: 4,
        brand: "Huawei",
        title: "Huawei Watch GT 4 46mm",
        specs: ["GPS", "46mm", "Green"],
        rating: 4.8,
        reviews: 215,
        oldPrice: "18,000,000",
        price: "15,750,000",
        discount: 13,
        colors: ["1F4D3A", "000000"],
        image: WatchImg,
    },
    {
        id: 5,
        brand: "Garmin",
        title: "Garmin Venu 3 Smart Watch",
        specs: ["AMOLED", "45mm", "Black"],
        rating: 4.6,
        reviews: 54,
        oldPrice: "32,000,000",
        price: "28,500,000",
        discount: 11,
        colors: ["000000", "FFFFFF"],
        image: WatchImg,
    },
    {
        id: 6,
        brand: "Amazfit",
        title: "Amazfit GTR 4 Premium Edition",
        specs: ["GPS", "46mm", "Gray"],
        rating: 4.4,
        reviews: 87,
        oldPrice: "12,500,000",
        price: "10,990,000",
        discount: 12,
        colors: ["808080", "000000"],
        image: WatchImg,
    },
    {
        id: 7,
        brand: "Samsung",
        title: "Galaxy Watch5 Pro 45mm",
        specs: ["LTE", "45mm", "Titanium"],
        rating: 4.7,
        reviews: 143,
        oldPrice: "22,000,000",
        price: "18,990,000",
        discount: 14,
        colors: ["343434", "FFFFFF"],
        image: WatchImg,
    },
    {
        id: 8,
        brand: "Honor",
        title: "Honor Watch 4 Pro Smart Watch",
        specs: ["AMOLED", "46mm", "Brown"],
        rating: 4.3,
        reviews: 41,
        oldPrice: "11,000,000",
        price: "9,490,000",
        discount: 14,
        colors: ["5B3A29", "000000"],
        image: WatchImg,
    },
];

    return (

        <section className="">

            <SectionTitle text="پرفروش‌ترین ها" btn={'مشاهده همه ساعت ها'} icon={<Watch/>} />

            <Swiper
                spaceBetween={16}
                slidesPerView="auto"
                modules={[FreeMode, Pagination, Autoplay]}
                freeMode={{
                    enabled: true,
                    sticky: true,
                }}
                grabCursor={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide
                        key={index}
                        className="!w-[280px] sm:!w-[300px]"
                    >
                        <ProductCard {...product} />
                    </SwiperSlide>
                ))}
            </Swiper>




        </section >
    );
};

export default BestSelling;
