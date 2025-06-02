import React from 'react'
import { IoMdSearch } from "react-icons/io";

export default function Search() {
    return (
        <div className=' w-[90%] m-auto  px-10 py-5 flex justify-center items-center shadow-md flex-col bg-white     z-46 mt-[42px] md:-mt-[155px] rounded-md'>
            <div className='py-2 w-full border-b flex items-start justify-start'>
                <h1 className='text-xl text-[#535353]'>Search by place, neighborhood or zip code</h1>
            </div>

            <div className='flex w-full mt-5'>
                <input type="text" className='w-full p-4 border outline-none' placeholder='Search ' />
                <button className='bg-[#f16828] text-xl p-4 text-white flex items-center font-semibold   rounded-tr-md rounded-br-md '><IoMdSearch/></button>
            </div>
        </div>
    )
}
