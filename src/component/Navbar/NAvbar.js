import React from 'react'
import logo from '../assest/logo.png'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { ImCross } from "react-icons/im";
import { LuCircleCheckBig } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { LuLogIn } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline, IoLogOutOutline } from "react-icons/io5";
import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { Link } from 'react-router';
import { CgProfile } from "react-icons/cg";

export default function NAvbar() {

    const [menuopen, setMenuopen] = useState(false);
    const handlermenu = () => {
        setMenuopen(menuopen => !menuopen)
    }
    return (
        <>

            <div className='w-full  z-50 sticky top-0 border-b overscroll-y:shadow-lg  h-auto sm:px-10 py-3 bg-[#D6EAEE] flex justify-between'>
                <Link to='/home' className='flex items-center justify-center px-5 sm:px-10 py-2'>
                    <img src={logo} alt=" logo" className='w-[128px] h-auto' />
                </Link>
                <div className='flex md:hidden items-center px-5 sm:px-10  py-2'>

                    <IoMdMenu size={32} className='p-1 rounded-md bg-[#248eb7] text-white' onClick={handlermenu} />

                </div>
                <div className=' hidden md:flex items-center gap-6 px-5'>
                    <Link to='/rent' className='flex gap-2 cursor-pointer justify-start text-[#27325b] items-center  hover:text-slate-900' >
                        <LuCircleCheckBig size={18} strokeWidth={2} className='icon-color' />Rent


                    </Link>
                    <Link to='/about' className='flex gap-2 cursor-pointer justify-start text-[#27325b] items-center whitespace-nowrap  hover:text-slate-900'>
                        <FiHome size={18} strokeWidth={2} className='icon-color ' />My House


                    </Link>
                    <Link to='/booked' className='flex gap-2 cursor-pointer justify-start text-[#27325b] whitespace-nowrap items-center  hover:text-slate-900' >
                        <CiHeart size={18} strokeWidth={2} className='icon-color' /> My Booked


                    </Link>
 
                        <Link to='/profile' className='flex gap-2 cursor-pointer justify-start text-[#27325b] items-center hover:text-slate-900'>
                            <CgProfile size={18} strokeWidth={2} className='icon-color' />Profile


                        </Link>
                        <Link to='/' className='flex gap-2 cursor-pointer justify-start text-red-500 items-center hover:text-slate-900'>
                            <IoLogOutOutline  size={18} strokeWidth={2} className='icon-color' />Logout


                        </Link>
                       
                </div>
            </div>
            {menuopen ?
                <>
                    <div className="sticky  z-50 bg-black bg-opacity-30 backdrop-blur-sm z-100"></div>
                    <div className="pointer-events-auto md:hidden fixed opacity-100 border borde-black duration-300" style={{ background: 'rgba(0,0,0,0.18)' }} onClick={() => setMenuopen(false)}>
                        <div className='bg-white border borde-black overflow-y-scroll  py-3  w-[300px] h-full max-h-screen'>
                            <div className='flex px-10 border-b  py-5 justify-between items-center '>
                                <img src={logo} alt="logo" className='w-[80px] h-[30px]' />

                                <ImCross size={20} className='p-1 font-bold tex-sm rounded-md  text-red-600' onClick={handlermenu} />
                            </div>
                            <nav className=' mt-10 mb-8  space-y-6 px-6 '>
                                <Link to='/rent' className='flex gap-2 cursor-pointer justify-start text-[#27325b] items-center  hover:text-gray-300' onClick={() => setMenuopen(false)}>
                                    <LuCircleCheckBig size={18} strokeWidth={2} className='icon-color' />Rent


                                </Link>
                                <Link to='/about' className='flex gap-2 cursor-pointer justify-start text-[#27325b] items-center  hover:text-gray-300' onClick={() => setMenuopen(false)}>
                                    <FiHome size={18} strokeWidth={2} className='icon-color' />My House


                                </Link>
                                <Link to='/booked' className='flex gap-2 cursor-pointer justify-start text-[#27325b] items-center  hover:text-gray-300' onClick={() => setMenuopen(false)}>
                                    <CiHeart size={18} strokeWidth={2} className='icon-color' /> My Booked


                                </Link>
                                <Link to='/' className='flex gap-2 cursor-pointer justify-start text-[#27325b] items-center hover:text-gray-300' onClick={() => setMenuopen(false)}>
                                    <LuLogIn size={18} strokeWidth={2} className='icon-color' />Logout


                                </Link>
                            </nav>
                            <div className='space-y-6 py-8  flex flex-col border-t-[1px] px-6 text-start'>
                                <h1 className='font-sans text-lg font-semibold' >Get In Touch</h1>
                                <Link to='tel:9817361906' target='_blank' className='flex gap-2 cursor-pointer justify-start text-[#27325b] items-center  hover:text-gray-300'>
                                    <div className="flex items-center justify-center rounded-md bg-blue-100 p-2">
                                        <IoCallOutline size={18} strokeWidth={2} className='icon-color text-blue-600 ' />
                                    </div>
                                    <span className='select-all text-sm font-medium text-gray-700'> 9817361906</span>


                                </Link>
                                <Link to='mailto:rental@gmail.com' target='_blank' className='flex gap-2 cursor-pointer justify-start text-[#27325b] items-center  hover:text-gray-300'>
                                    <div className="flex items-center justify-center rounded-md bg-blue-100 p-2">
                                        <MdOutlineEmail size={18} strokeWidth={2} className='icon-color text-blue-600 ' />
                                    </div>
                                    <span className='select-all text-sm font-medium text-gray-700'> rental@gmail.com</span>


                                </Link>
                            </div>
                            <div className='px-6 flex flex-col border-t-[1px] text-start'>
                                <h1 className='font-sans text-lg mt-6 font-semibold' >Social Media</h1>
                                <div className=' w-full gap-3 py-6  flex' >


                                    <Link to="https://facebook.com" target="_blank" className="flex items-center justify-center rounded-md bg-[#4867AA] p-3">
                                        <SlSocialFacebook size={20} strokeWidth={2} className='text-white  ' />
                                    </Link>
                                    <Link to="https://instagram.com" target="_blank" className="flex items-center justify-center rounded-md bg-[#FB3958] p-3">
                                        <CiInstagram size={20} strokeWidth={2} className='text-white  ' />
                                    </Link>
                                    <Link to="https://twitter.com" target="_blank" className="flex items-center justify-center rounded-md bg-[#56D7FE] p-3">
                                        <CiTwitter size={20} strokeWidth={2} className='text-white  ' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                : ""
            }
        </>
    )
}
