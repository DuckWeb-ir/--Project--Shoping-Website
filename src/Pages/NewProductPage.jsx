import React from 'react'
import SideBar from '../Components/Templates/NewProduct/SideBar'
import Content from '../Components/Templates/NewProduct/content'

function NewProductPage() {
    return (
        <div className="container grid grid-cols-10 gap-5 my-10 items-start">
            <div className="col-span-7 w-full bg-amber-200">
                <Content />
            </div>

            <aside className="col-span-3 w-full sticky top-5">
                <div className="bg-white shadow-card-md rounded-md p-5">
                    <SideBar />
                </div>
            </aside>
        </div>
    )
}

export default NewProductPage