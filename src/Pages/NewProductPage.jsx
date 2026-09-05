import React from 'react'
import SideBar from '../Components/Templates/NewProduct/SideBar'
import Content from '../Components/Templates/NewProduct/content'

function NewProductPage() {
    return (
        <div className='container grid bg-amber-400 grid-cols-10 gap-2 my-10'>
            <div className="w-full col-span-7 bg-amber-200">
            <Content />
            </div>
            <div className="w-full col-span-3 bg-white shadow-card-md rounded-md p-5">
                <SideBar />
            </div>
        </div>
    )
}

export default NewProductPage