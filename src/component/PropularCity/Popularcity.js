import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { useState } from 'react';

export default function Popularcity() {
    const cities = [
        ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad'],
        ['Chennai', 'Kolkata', 'Pune', 'Ahmedabad'],
        ['Jaipur', 'Surat', 'Lucknow', 'Kanpur'],
        ['Nagpur', 'Indore', 'Bhopal', 'Patna'],
        ['Ludhiana', 'Agra', 'Nashik', 'Vadodara'],
        ['Faridabad', 'Meerut', 'Rajkot', 'Varanasi'],
    ]
    const [showcity, setShowcity] = useState(false);
    const arraytoshow = showcity ? cities : [cities[0]];
    return (
        <div className='w-[80%] m-auto'>
            <h1 className=' text-black text-2xl'>Popular Cities</h1>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-3 md:grid mt-5'>
                {arraytoshow.map((item, index) => (
                    <div key={index} className={`w-full flex gap-2 justify-between ${
                        showcity ? 'flex-col' : ''
                      }`}>
                        {item.map((city) => (

                            <a key={city} href={`#city-${city.toLowerCase()}`}   className={` font-normal text-base text-[#0D81AF] hover:underline cursor-pointer`}>{city}</a>
                        ))}
                    </div>
                ))}
            </div>

            <div className=' mt-5 '>
                <a href="#morecities" className='flex items-center gap-1  text-[#0d81af]'> <h1 className='text-[15px] font-semibold hover:underline' onClick={() => setShowcity(!showcity)}>{showcity ? 'Show Less ' : 'More Cities'} </h1>
                    <FaChevronRight />
                </a>
            </div>
        </div>
    )
}
