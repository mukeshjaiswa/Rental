import React from 'react'
import client1 from '../assest/Client/client1.jpg'
import { FaStar } from 'react-icons/fa'
import clientdata from './Clientsdata'

export default function Clients() {
    return (
        <div className='w-[80%] m-auto  mt-5'>
            <h1 className='text-center text-3xl py-10 font-semibold'>What Your Client
                Say About Us</h1>
            <div className=' grid sm:grid-cols-2 lg:grid-cols-3  items-start justify-center gap-3 '>
                {clientdata.map((item, index) => (
                    <div key={index} className=' bg-white shadow-xl flex flex-col  gap-3 py-5  items-start justify-center rounded-md  px-10 hover:bg-red-100 cursor-pointer '>

                        <div className=' flex gap-3 py-3  items-center justify-center'>
                            <div className='w-[80px] h-[80px] rounded-full'>
                                <img src={item.image} alt="client1" className='w-[80px] h-[80px] rounded-full' />
                            </div>
                            <div className='flex flex-col '>
                                <h1 className='text-2xl font-semibold whitespace-nowrap'>{item.name}</h1>
                                <h1 className='text-xl font-semibold text-gray-600'>{item.username}</h1>
                            </div>
                        </div>
                        <div className=''>{item.decsription}</div>
                        <div className='flex justify-start items-start gap-2 w0full'>
                            <FaStar className='size-4 text-yellow-400' />
                            <FaStar className='size-4 text-yellow-400' />
                            <FaStar className='size-4 text-yellow-400' />
                            <FaStar className='size-4 text-yellow-400' />
                            <FaStar className='size-4 text-yellow-400' />
                        </div>
                    </div>

                ))}


            </div>

        </div>
    )
}
