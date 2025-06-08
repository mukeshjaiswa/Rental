import React from 'react'
import { data } from './Propertiesdata'

import { Link } from 'react-router'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';


export default function Properties() {
    const [imageindex, setImageindex] = useState(data.map(() => 0))
    const handlernextimage = (i) => {
        setImageindex((previndex) => {

            const newindex = [...previndex]
            newindex[i] = (newindex[i] + 1) % data[i].img.length;
            return newindex;
        })
    }
    const handlerprevimage = (i) => {
        setImageindex((previndex) => {
            const newindex = [...previndex];
            newindex[i] = (newindex[i] - 1 + data[i].img.length) % data[i].img.length
            return newindex
        })
    }


    return (
        <div className='w-[80%] m-auto  text-start'>
            <h1 className='text-[#37404d] text-[30px] font-sans'>Recent Properties</h1>
            <div className=' flex flex-wrap flex-col md:flex-row items-center justify-start gap-5 '>

                {data.map((item, index) => (
                    <div key={index} className=' '>
                        <div className='w-full relative z-0 md:w-[320px] h-[320px]'>
                            <img src={item.img[imageindex[index]]} alt="title" className=' w-full md:w-[320px] h-[320px] ' />

                            <div className='absolute bg-gray-50 rounded-full top-[50%]  right-3 flex items-center justify-center'>
                                <MdKeyboardArrowRight className='text-3xl' onClick={() => handlernextimage(index)} />
                            </div>
                            {imageindex[index] > 0 ?


                                <div className='absolute bg-gray-50 rounded-full top-[50%]  left-3 flex items-center justify-center'>
                                    <MdKeyboardArrowLeft className='text-3xl' onClick={() => handlerprevimage(index)} />
                                </div>
                                : ''}
                        </div>
                   
                        <Link  to={`/product/${item.id}`}  className="flex flex-col items-start  ">
                            <h2 className="text-base font-semibold text-black">{item.location}</h2>
                            <p className="text-sm text-gray-500">{item.type}</p>
                            <p className="text-sm text-gray-500">{item.capacity}</p>
                            <p className="text-sm text-gray-600">
                                <span className="font-bold text-black">Rs. {item.price}</span> / month
                            </p>
                        </Link>
                    </div>
                ))}


            </div>
        </div>
    )
}
