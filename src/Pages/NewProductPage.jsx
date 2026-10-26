
import Breadcrumbs from '../Components/Common/Breadcrumbs'
import HeroProductDetails from '../Components/Templates/NewProduct/Content/HeroProductDetails'
import SellersList from '../Components/Templates/NewProduct/Content/SellersList'

function NewProductPage() {
    return (
        <div className="container my-10">
                <Breadcrumbs />
                <HeroProductDetails />
                <SellersList/>

        </div>

    )
}

export default NewProductPage