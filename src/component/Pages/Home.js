import React from 'react'
import Hero from '../Hero/Hero'
import NAvbar from '../Navbar/NAvbar'
import Search from '../Search/Search'
import find01 from '../assest/find01.webp'
import find02 from '../assest/find02.webp'
import Properties from './Properties'
import Footer from '../Footer/Footer'
import { IoIosSend } from "react-icons/io";
import Popularcity from '../PropularCity/Popularcity'



export default function Home() {
  
  return (
    <div>
      <NAvbar  />
      <Hero />
      <Search />
      <div className='w-[80%] m-auto  mt-10 mb-20 gap-10 flex flex-col items-center justify-between  md:flex-row'>
        <div className=' w-full flex p-4 border gap-10  items-center justify-between'>

          <a href="#" className='text-[#0d81af] cursor-pointer'>Find a NVM broker</a>

          <img src={find01} alt='' className='w-[200px] h-[120px]' />

        </div>
        <div className='  w-full flex p-4 border gap-10  items-center justify-between'>

          <a href="#" className='text-[#0d81af] cursor-pointer'>Find a business space</a>

          <img src={find02} alt='' className='w-[200px] h-[120px]' />

        </div>

      </div>
      <Properties />
      <div className='w-[80%] m-auto   mt-10 mb-20 gap-10 flex flex-col items-center justify-between  md:flex-row'>
        <div className=' w-full flex bg-[#e1eef2] p-4 border gap-10  items-center justify-between'>
          <div className=' w-full flex flex-col items-start justify-between gap-2'>
            <a href="#" className='text-[#0d81af] cursor-pointer'>Find a NVM broker</a>
            <button className='bg-[#0d81af] border text-[12px] px-4 py-2 text-white rounded-lg whitespace-nowrap'>Get All The Details</button>
          </div>
          <img src={find01} alt='' className='w-[25%] h-[12%]  sm:h-[120px]' />

        </div>

        <div className=' bg-[#e1eef2] w-full flex p-4 border gap-2 items-center justify-between'>
          <div className='flex flex-col items-start justify-start gap-2'>

            <a href="#" className='text-[#0d81af] cursor-pointer'>Receive relevant inspiration, news and tips with our newsletter.</a>
            <div className='flex flex-col lg:flex-row  gap-2 items-start justify-start '>
              <input type='email' placeholder="Enter your email" className='p-2 outline-none bg-[#f8f0ef]' />
              <div className="flex flex-col sm:flex-row items-center justify-center rounded-sm bg-[#0D81AF] p-2.5 hover:bg-[#333] text-white">
                <IoIosSend size={20} />
              </div>
            </div>
          </div>

          <img src={find02} alt='' className='w-[30%] h-[12%]  sm:h-[120px]'  />

        </div>

      </div>
      <Popularcity/>
      <Footer />
    </div>
  )
}
