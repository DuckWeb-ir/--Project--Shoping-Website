import React from 'react'

function MainProductImage({image}) {
  return (
    <div className='flex flex-center'>
        <img src={image} alt="" className='rounded-2xl w-112'/>
    </div>
  )
}

export default MainProductImage