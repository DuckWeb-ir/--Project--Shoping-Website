import React from 'react'
import SectionHeader from '../Components/Common/SectionHeader'

import contactusImg from '../../public/assets/static/contactus.png'


function Shop() {
    return (
        <div className="container my-10">
            <SectionHeader title="فروشگاه" description={"فروشگاه تکنولند "} img={contactusImg}/>
        </div>
    )
}

export default Shop