
import Breadcrumbs from '../Components/Common/Breadcrumbs'
import HeroProductDetails from '../Components/Templates/NewProduct/Content/HeroProductDetails'
import ProductDetails from '../Components/Templates/NewProduct/Content/ProductDetails'
import SellersList from '../Components/Templates/NewProduct/Content/SellersList'
import SideBar from '../Components/Templates/NewProduct/SideBar'

function NewProductPage() {
    return (
        <div className="container space-y-10 mb-20">
            <HeroProductDetails />
            <SellersList />
            
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                <div className="grid col-span-1 lg:col-span-9 ">
                <ProductDetails />
                </div>
                <div className="grid col-span-1 lg:col-span-3 box-style sticky top-2">
                <SideBar />
                </div>
            </section>

        </div>

    )
}

export default NewProductPage