import React from 'react'
import Hero from '../Hero/Hero'
import NAvbar from '../Navbar/NAvbar'
import Search from '../Search/Search'
import find01 from '../assest/find01.webp'
import find02 from '../assest/find02.webp'
import Properties from './Properties'
import Footer from '../Footer/Footer'

export default function Home() {
  return (
    <div>
      <NAvbar />
      <Hero />
      <Search />
      <div className='w-[80%] m-auto  mt-10 mb-20 gap-10 flex flex-col items-center justify-between  md:flex-row'>
        <div className=' w-full flex p-4 border gap-10  items-center justify-between'>
         
            <a href="" className='text-[#0d81af] cursor-pointer'>Find a NVM broker</a>
       
            <img src={find01} alt='' className='w-[200px] h-[120px]' />
        
          </div>
          <div className='  w-full flex p-4 border gap-10  items-center justify-between'>
         
         <a href="" className='text-[#0d81af] cursor-pointer'>Find a business space</a>
    
         <img src={find02} alt='' className='w-[200px] h-[120px]' />
     
       </div>
         
      </div>
      <Properties/>
      <Footer/>
    </div>
  )
}
