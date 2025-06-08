import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { toast } from 'react-toastify'
import Clients from '../Clients/Clients'
import Footer from '../Footer/Footer'
import NAvbar from '../Navbar/NAvbar'

export default function Rent() {

    const [postdata, setPostData] = useState([])
    // const [profiledata, setProfileData] = useState([])
    const [loginemail, setLoginemail] = useState('')
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        const getemail = JSON.parse(localStorage.getItem('logindata')) || []
        setLoginemail(getemail)
    }, [])
    useEffect(() => {
        const getpostdata = JSON.parse(localStorage.getItem("postdb")) || []

        setPostData(getpostdata)
    }, [loginemail])
    const handlerseach = () => {
        if (search === '') {
            toast.warn("please enter search city")
        }
        else {


            const getpostdata = JSON.parse(localStorage.getItem("postdb")) || []
            const checkemail = getpostdata.filter((post) => post.address.toLowerCase() === search.toLowerCase())

            setPostData(checkemail)
        }
        //    console.log(search)
    }
    useEffect(() => {
        if (filter === '') {

        }
        else {
            const getpostdata = JSON.parse(localStorage.getItem("postdb")) || []
            const checkfilter = getpostdata.filter((data) => data.room === filter)
            setPostData(checkfilter)
        }
    })


    return (
        <div className='w-full h-auto bg-gray-100'>
            <NAvbar />
            <div className='w-[80%] m-auto'>
                {/* {search section anf filter section} */}
                <div className='flex flex-col sm:flex-row gap-3 items-center bg-white shadow-lg px-10 mt-10 py-3 rounded-md'>
                    <div className='flex w-full px-5 items-center'>
                        <input type='text' className='border w-full py-1 sm:py-2  px-2 sm:px-4 rounded-l-md outline-none  sm:text-lg text-sm' placeholder="Search by city" onChange={(e) => setSearch(e.target.value)} />
                        <button className='text-white rounded-r-md bg-red-500 p-1 sm:p-2  sm:text-lg text-sm' onClick={handlerseach}>Search</button>
                    </div>
                    <div className='flex  items-center gap-3'>
                        <h1 className='whitespace-nowrap'>Filter By</h1>
                        <select name="" id="" className='border border-black p-1 text-center' onChange={(e) => setFilter(e.target.value)}>
                            <option selected disabled value=''>  Filter by room </option>
                            <option value='1'>  single room </option>
                            <option value='2'> Double room</option>
                            <option value='2'> 1Bkh</option>
                            <option value='3'> 2BKh</option>

                        </select>
                    </div>
                </div>

                {/* {post section} */}
                {postdata.length > 0 ?
                    <div className='w-[full grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
                        {/* {post section} */}
                        {postdata.map((item, index) => (


                            <div key={index} className='bg-white mt-10 h-[400px] shadow-xl  rounded-xl  '>
                                {/* {profile section of post} */}
                                <div className='flex px-5 items-center py-3'>
                                    <div className='w-full flex justify-between items-center'>
                                        <div className='flex items-center '>
                                            <div className='w-[60px h-[60] rounded-full gap-5'>
                                                <img src={item.profile} alt="" className='w-[50px] h-[50px]  object-cover rounded-full p-1' />
                                            </div>

                                            <div className='flex flex-col'>
                                                <h1 className='text-sm font-semibold'>{item.name}</h1>
                                                <h1 className='text-sm text-gray-500'>{item.date}</h1>
                                            </div>
                                        </div >
                                        <div className='mt-0' ><h1 className='text-3xl text-gray-500 font-semibold hover:text-black cursor-pointer'>...</h1>
                                        </div>
                                    </div>
                                </div>
                                {/* {description} */}
                                <div className='px-5 '>
                                    <h1>{item.description.substring(30, 0)}....</h1>
                                </div>

                                {/* {post image section} */}
                                <Link to={`/product/${index}`} className='mt-2 '>
                                    <div className='w-full h-[100px]'>
                                        <img src={item.image} alt="" className='w-full h-[300px] rounded-b-xl' />
                                    </div>
                                </Link>
                            </div>

                        ))}
                    </div>
                    : <div className='flex items-center bg-white shadow-lg px-10 mt-10 py-3 rounded-md justify-center text-3xl'>No data founded</div>}
            </div>
            <Clients className='mt-10'/>

            <Footer />
        </div>
    )
}
