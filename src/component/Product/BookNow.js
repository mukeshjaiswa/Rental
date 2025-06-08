import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


export default function BookNow({ getpost, title, index }) {
    const navigate = useNavigate();
    const email = getpost.email;

    const additionalFees = [
        { label: '24-hour water facilities', fee: `${getpost.water}` },
        { label: 'Electricity', fee: `${getpost.electricity}` },
        { label: 'Cleaning Fee', fee: `${getpost.clean}` },
        { label: 'Taxes', fee: 0 },
    ];
    const [totalprice, setTotalPrice] = useState();

    const handlerbook = () => {

        navigate(`/bookroom/${index}`, {
            state: {
                totalprice,
                 email
            }
        });

    }

    useEffect(() => {
        if (!getpost) return;

        const total = additionalFees.reduce((sum, fee) => {
            const parsefee = parseInt(fee.fee) || 0;
            return sum + parsefee
        }, parseInt(getpost.rent) || 0);
        setTotalPrice(total)
    }, [getpost, additionalFees])
    return (
        <div className='border border-gray-200 w-[100%] rounded-md p-5 '>
            <h2 className='font-semibold mb-2 text-xl'>{title}</h2>
            <h2 className='text-gray-500  mb-4 text-xl'>per month</h2>
            <div className='text-xl font-bold mb-4'>Rs.{getpost.rent} </div>

            <div className='mb-4'>
                <h1 className='text-xl mb-4 font-semibold'>Price Breakdown</h1>
                <ul className='space-y-2 text-sm '>

                    {additionalFees.map((item, index) => (
                        <li key={index} className='flex justify-between text-lg'>
                            <span>{item.label}</span>
                            <span className='text-red-500'>{item.fee}</span>
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
