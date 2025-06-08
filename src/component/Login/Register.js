import React from 'react'
import { VscLock, VscUnlock } from 'react-icons/vsc';
import { useState } from 'react';
import { toast } from 'react-toastify';


export default function Register() {

    const [showpassword, setShowpassword] = useState(false);
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [contactnumber, setContactnumber] = useState('')


    const handlershow = () => {
        setShowpassword(!showpassword)
    }
    const register = (e) => {
        e.preventDefault();


        if (name === '' || username === '' || password === "" || address === "" || contactnumber === "" || gender === '') {
            toast.warn("Please enter all fields")

        }
        else {
            const getfetchdata = JSON.parse(localStorage.getItem("rentaluserregister")) || []

            const matchuser = getfetchdata.find((data) => data.username === username);
            if (matchuser) {
                toast.warning("Already register with these username")
            }
            else {


                const userdata = {
                    username: username,
                    password: password,
                    name: name,
                    address: address,
                    contactnumber: contactnumber,
                    gender: gender,
                }
                console.log(userdata)
                const getdata = JSON.parse(localStorage.getItem("rentaluserregister")) || []
                const newdata = [...getdata, userdata];
                localStorage.setItem('rentaluserregister', JSON.stringify(newdata))
                toast.success("Register  as user sucess")
                setPassword('');
                setUserName('')
                setName('')
                setAddress('')
                setGender('')
                setContactnumber('')



            }
        }

    }
    return (
        <div className='bg-green-500 h-screen flex items-center justify-center'>
            <div className=' w-[90%]   px-5 sm:w-[50%] h-auto bg-white shadow-lg rounded-md '>
                <h1 className='text-center py-5 font-semibold text-xl'>Rentals Register Form</h1>
                <div className='flex flex-col w-full sm:px-10 gap-3'>
                    <form action="" onSubmit={register}>
                        <div className='w-full flex gap-2 py-3  items-center'>
                            <label htmlFor="" className='whitespace-nowrap'> Full Name</label>
                            <input value={name} type="text" className=' w-full border border-black px-2 p-1 outline-none rounded-md ' onChange={(e) => setName(e.target.value)} required placeholder='Enter you full name' />
                        </div>
                        <div className='w-full flex gap-2 py-3  items-center'>
                            <label htmlFor="">UserName</label>
                            <input required value={username} type="email" className=' w-full border border-black px-2 -1 outline-none rounded-md ' onChange={(e) => setUserName(e.target.value)} placeholder='Enter your email' />
                        </div>
                        <div className='w-full flex gap-2 py-3  items-center'>
                            <label htmlFor="">Password</label>
                            <div className=' w-full relative flex items-center'>
                                <input required value={password} type={showpassword ? 'text' : 'password'} className=' w-full border border-black px-2 p-1 outline-none rounded-md ' onChange={(e) => setPassword(e.target.value.trim())} placeholder='Enter Pasword' />
                                {showpassword ?
                                    <VscUnlock className='absolute right-2 cursor-pointer' onClick={handlershow} />
                                    : <VscLock className='absolute right-2 cursor-pointer' onClick={handlershow} />}
                            </div>
                        </div>
                        <div className='w-full flex gap-2 py-3  items-center'>
                            <label htmlFor="">Address</label>
                            <div className=' w-full relative flex items-center'>
                                <input required value={address} type='text' className=' w-full border border-black px-2 p-1 outline-none rounded-md ' onChange={(e) => setAddress(e.target.value.trim())} placeholder='Enter your Address' />

                            </div>
                        </div>
                        <div className='w-full flex gap-2 py-3  items-center'>
                            <label htmlFor="">ContactNumber</label>
                            <select required value={gender} className=' w-full border border-black px-2 p-1 outline-none rounded-md ' onChange={(e) => setGender(e.target.value.trim())}>
                                <option value=''>Select gender:</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className='w-full flex gap-2 py-3  items-center'>
                            <label htmlFor="">ContactNumber </label>
                            <div className=' w-full relative flex items-center'>
                                <input required value={contactnumber} type='number' className=' w-full border border-black px-2 p-1 outline-none rounded-md ' onChange={(e) => setContactnumber(e.target.value.trim())} placeholder='Enter your mobile number' />

                            </div>
                        </div>
                        <button className='border mb-5 rounded-md hover:bg-[#87c8f6] w-full text-center p-2 bg-[#4db5ff] text-white font-semibold hover:text-black' type='submit'> Register</button>

                    </form>

                </div>
            </div>
        </div>
    )
}
