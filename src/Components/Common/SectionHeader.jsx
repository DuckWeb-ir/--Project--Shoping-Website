import React from 'react'


function SectionHeader({title , description , img}) {
    return (
        <div className=" h-50 flex-ic flex-col-reverse md:flex-row gap-7.5 md:gap-10 justify-between w-full  p-5 md:p-10 bg-linear-to-br from-primary-50 via-primary-100 to-primary-200 rounded-2xl">
            {/* Header content */}
            <div className="flex-center flex-col gap-5 md:w-110">
                <h2 className='font-extrabold text-2xl md:text-4xl '>{title}</h2>
                <div className="w-10 h-0.5 bg-primary-500"></div>
                <div className="text-center text-sm md:text-md">
                    {description}
                </div>
            </div>
            {/* img */}
            <div className="flex-center max-w-65 md:max-w-85 ">
                <img src={img} alt="" className='w-full h-auto object-contain' />
            </div>
        </div>
    )
}

export default SectionHeader