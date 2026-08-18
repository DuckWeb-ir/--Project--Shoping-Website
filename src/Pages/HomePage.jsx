import BenefitsBar from "../Components/Common/BenefitsBar";
import BestSelling from "../Components/Templates/Home/Best-Selling";
import HeroSection from "../Components/Templates/Home/Hero-Section";
import LatestProducts from "../Components/Templates/Home/Latest-Products";
import OfferProducts from "../Components/Templates/Home/Offer-Product";
import SEOSection from "../Components/Templates/Home/SEO";

const HomePage = () => {
    return (

        <div className="container mx-auto flex flex-col gap-7 mt-5">
            <HeroSection />
            <BenefitsBar />
            <BestSelling />
            <LatestProducts />
            <OfferProducts />
            <SEOSection />
        </div>
    );
};

export default HomePage;
