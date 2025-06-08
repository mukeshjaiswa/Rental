import React from 'react'
import { VscLock, VscUnlock } from "react-icons/vsc";
import { useState } from 'react';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


export default function Login() {
    const navigate = useNavigate()
    const [showpassword, setShoepassword] = useState(false);
    const [loginas, setLoginas] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [login, setlogin] = useState(false);

    const handlershow = () => {
        setShoepassword(!showpassword)
    }
    const register = () => {
        navigate('/register')
    }

    const handlerlogin = (e) => {
        e.preventDefault();
        const getdata = JSON.parse(localStorage.getItem('rentaluserregister')) || []
        const founddata = getdata.find((user) => user.username.toLowerCase() === username.toLowerCase() && user.password === password)
        if (founddata) {
            toast.success("Match data")
            setPassword('')
            setLoginas('')
            setUserName('')
            setlogin(true);
            navigate('/home')

            localStorage.setItem('logindata',JSON.stringify(username));
        }
        if (!founddata) {
            toast.warn("not match")
        }




    }

    return (
        <div className='bg-green-500 h-screen flex items-center justify-center'>
            <div className=' w-[90%] sm:w-[50%] h-auto bg-white shadow-lg rounded-md '>
                <h1 className='text-center py-5 font-semibold text-xl'>Rentals Login Form</h1>
                <div className='flex flex-col w-full px-10 gap-3'>
                    <form action="" onSubmit={handlerlogin}>


                        <div className='w-full flex gap-2 py-3  items-center'>
                            <label htmlFor="">UserName</label>
                            <input value={username} required onChange={(e) => setUserName(e.target.value)} type="text" className=' w-full border border-black px-2 p-1 outline-none rounded-md ' placeholder='Email Address' />
                        </div>
                        <div className='w-full flex gap-2 py-3  items-center'>
                            <label htmlFor="">Password</label>
                            <div className=' w-full relative flex items-center'>
                                <input value={password} required onChange={(e) => setPassword(e.target.value.trim())} type={showpassword ? 'text' : 'password'} className=' w-full border border-black px-2 p-1 outline-none rounded-md ' placeholder='Password' />
                                {showpassword ?
                                    <VscUnlock className='absolute right-2 cursor-pointer' onClick={handlershow} />
                                    : <VscLock className='absolute right-2 cursor-pointer' onClick={handlershow} />}
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-center mt-5'>
                        <button type='submit' className='w-[50%] border rounded-md hover:bg-[#87c8f6] text-center p-2 bg-[#4db5ff] text-white font-semibold hover:text-black' > Submit</button>
                        </div>
                    </form>
                    <div className=' mb-5 text-center'>
                        <h1 className='hover:text-blue-500 cursor-pointer' onClick={register}>Sign up</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
