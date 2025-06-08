import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import NAvbar from '../Navbar/NAvbar'
import cart1 from '../assest/Cart/cartImage.avif'
import Footer from '../Footer/Footer'
import { Link } from 'react-router'


export default function Booked() {
    const [book, setBook] = useState([])
    const [post, setPost] = useState([]);


    useEffect(() => {
        const fetch = () => {
            const fetchdata = JSON.parse(localStorage.getItem('booked')) || []
            const getemail = JSON.parse(localStorage.getItem('logindata'))

            const matchdata = fetchdata.filter((data) => data.useremail === getemail);
            setBook(matchdata)

        }
        fetch();

    }, [])


    const handlerunbooked = (id) => {
        const olddatafetch = JSON.parse(localStorage.getItem('booked')) || []
        const fetchdata = olddatafetch.filter((data) => data.id !== id);
        localStorage.setItem('booked', JSON.stringify(fetchdata))


        const getemail = JSON.parse(localStorage.getItem('logindata'));
        const matchdata = fetchdata.filter((data) => data.useremail === getemail);

        setBook(matchdata);



    }
    console.log(book)
    // {get post list}
    useEffect(() => {
        const fetchpost = JSON.parse(localStorage.getItem('postdb'))
        setPost(fetchpost)
    }, [])
    console.log(post)

    return (
        <div>
            <NAvbar />
            <div className=' w-[100%]  flex   '>
                <div className='w-[100%] md:w-[80%] '>
                    {book.length === 0 && (
                        <div className="text-center text-2xl font-semibold text-gray-500 mt-10">
                            You have not booked any room yet.
                        </div>
                    )}
                    <div className='w-[90%] h-auto   mt-10 ml-auto flex  justify-between gap-5 '>
                        <div className='w-[100%]'>
                            {book.map((data, index) => (
                                <div key={data.id} className=' w-[100%] border-b border-gray-300 py-5  h-auto m-auto flex gap-4  '>
                                    <h1 className=' w-[5%] h-[5%] flex items-center justify-center font-semibold text-xl bg-gray-300 rounded-full p-1 '>{index + 1}</h1>
                                    <div className=' w-full  lg:w-[400px] h-[300px] rounded-md '>
                                        <img src={data.image} className='w-full h-[100%] mb-5 rounded-md' />
                                    </div>
                                    <div className='text-left ml-5 '>
                                        <div className=''>
                                            <h1 className='text-2xl font-semibold'>Room Details</h1>
                                            <h1 className='text-2xl '>Room: {data.roomtype}</h1>
                                            <h1 className='text-2xl font-normal '>Address: {data.oweneraddress}</h1>
                                        </div>
                                        <div className='mt-5'>
                                            <h1 className='text-2xl font-semibold'>Owner Deatil</h1>
                                            <h4 className='text-2xl whitespace-nowrap'>Name: {data.ownername}</h4>
                                            <h4 className='text-2xl '>Contact: {data.owenernumber}</h4>
                                        </div>

                                        <h1 className='text-2xl font-semibold'>Total Rent:Rs. {data.roomprice}</h1>
                                        <button className='w-full mt-5 bg-blue-600 text-white border py-2 rounded-lg text-md cursor-pointer hover:bg-blue-500' onClick={() => handlerunbooked(data.id)}>unbooked</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='md:col-span-2 lg:w-[30%] mr-10 mt-5'>

                        </div>

                    </div>
                </div>
                <div className=' sticky top-0  w-[30%]  hidden lg:block border-l   mt-10 px-2'>
                    <h1 className='text-2xl font-semibold'>Lastest post </h1>
                    {post.slice(0,4).map((item, index) => (
                        <Link to={`/product/${index}`} key={index} className=' cursor-pointer flex mt-5 gap-2 border-b '>
                            <img src={item.image} alt='' className='w-[150px] mb-4 h-auto rounded-md object-cover' />
                            <div className='mb-4'>
                                <h1 className='text-md font-semibold'>{item.room} Room</h1>
                                <h1 className='text-md font-semibold'>{item.address}</h1>
                                <p className='text-md'>{item.description} </p>
                                <h1>Price:{item.rent}</h1>
                            </div>

                        </Link>
                    ))}

                </div>
            </div>
            <Footer />
        </div>
    )
}
