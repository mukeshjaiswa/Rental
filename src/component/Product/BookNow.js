import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function BookNow({ title, price }) {
    const additionalFees = [
        { label: '24-hour water facilities', fee: 0, free: true },
        { label: 'Electricity', fee: 20, free: false },
        { label: 'Cleaning Fee', fee: 10, free: false },
        { label: 'Taxes', fee: 30, free: false },
    ];
    const[totalprice, setTotalPrice]=useState();
    const handlerbook=()=>{
        toast.success('Book Sucessfully')
    }

    useEffect(()=>{
        const total=additionalFees.reduce((sum,fee)=>sum+fee.fee,price);
        setTotalPrice(total)
    },[price])
    return (
        <div className='border border-gray-200 w-[100%] rounded-md p-5 '>
            <h2 className='font-semibold mb-2 text-xl'>{title}</h2>
            <h2 className='text-gray-500  mb-4 text-xl'>per month</h2>
            <div className='text-xl font-bold mb-4'>€{price} </div>

            <div className='mb-4'>
                <h1 className='text-xl mb-4 font-semibold'>Price Breakdown</h1>
<ul className='space-y-2 text-sm '>

               {additionalFees.map((item,index)=>(
                   <li key={index} className='flex justify-between text-lg'>
                       <span>{item.label}</span>
                       <span className={item.free?'text-green-600':'text-red-500'}>{item.free?'Free':`€${item.fee}`}</span>
                   </li>
                   ))}

                   </ul>
                   </div>
                   <div className='mb-4'>
                       <span className='font-semibold'>Total Price:</span>
                       <span className='text-2xl'> €{totalprice}</span>
                   </div>
                   <button className='w-full bg-blue-600 text-white border py-2 rounded-lg text-md cursor-pointer hover:bg-blue-500' onClick={handlerbook}>Book Now</button>
           
        </div>
    )
}
