import React from 'react'
import banner from '../assest/banner-img.webp'

export default function Hero() {
  return (
    <div className='w-full h:[200px] md:h-[400px] '>
        <div className='bg-[#D6EAEE] w-full h-[80px] md:h-[300px]'>
            <img src={banner} alt="banner" className='w-full h-[130px] md:h-[250px]' />

        </div>
        
       
    </div>
  )
}
