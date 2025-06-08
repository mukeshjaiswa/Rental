import React from 'react'
import { useLocation, useParams } from 'react-router'
import { useState } from 'react';
import Footer from '../Footer/Footer';
import NAvbar from '../Navbar/NAvbar'
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function BookForm() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [people, setPeople] = useState('');
    const [occupation, setOccupation] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const location = useLocation();
    const [getpost, setGetPost] = useState([])
    const [email, setEmail] = useState('');
    const[roomimage,setRoomImage]=useState();
    const [ownerdetails, setOwnerdetails] = useState({});
    const totalprice = location.state?.totalprice
    const owneremail=location.state?.email

   
    const handlerbook = (e) => {

        e.preventDefault();
        setSubmitted(true)
        if (
            name.trim() === '' ||
            address.trim() === '' ||
            number.trim() === '' ||
            people === '' ||
            occupation === ''
        ) {
            // alert("Please fill all required fields.");
            return;
        }
        else if (number.length !== 10) {
            alert('please enter your valid number')
        }
        else {
            setSubmitted(false)
            setName('');
            setAddress('');
            setNumber('');
            setOccupation('')
            setPeople('')


            setbooktolocalstorage();


        }


    }


    const setbooktolocalstorage = () => {
        const detail = {
            id:Date.now(),
            username: name,
            useraddress: address,
            usernumber: number,
            userperson: people,
            useroccupation: occupation,
            ownername: ownerdetails.userdata?.name,
            oweneraddress: ownerdetails.userdata?.address,
            owenernumber:ownerdetails.userdata?.contactnumber ,
            roomtype: getpost.room,
            roomprice: totalprice,
            image:roomimage,
            useremail:email,
        }

        try {
            const prevdata = JSON.parse(localStorage.getItem('booked')) || []
            const newdataa = [...prevdata, detail]
            localStorage.setItem("booked", JSON.stringify(newdataa))
            toast.success("Booked sucessfully")
        } catch (error) {
            toast.warn('Not Booked')
        }

    }
    useEffect(() => {
        const fetchpost = JSON.parse(localStorage.getItem("postdb")) || []
        const index = parseInt(id);
        setGetPost(fetchpost[index])
        setRoomImage(fetchpost[index].image)


    }, [id])
    useEffect(() => {
        const logindata = JSON.parse(localStorage.getItem('logindata')) || '';
        setEmail(logindata);
    }, []);

    useEffect(() => {
        if (!owneremail) return;
        const fetchuser = JSON.parse(localStorage.getItem('profiledb')) || []
        const matchuserdata = fetchuser.find((data) => data.userdata.username === owneremail)
        setOwnerdetails(matchuserdata);
        console.log(matchuserdata)
    }, [owneremail])

    // console.log('id :', new Date().getTime().toString() )
    return (
        <>

            <NAvbar />
            <div className='w-full flex flex-col mt-10 px-10 md:flex-row gap-5 justify-between '>
                <div className='px-10'>
                    <h1 className='text-black font-semibold text-2xl'>  Owner Details

                    </h1>
                    <div className='mt-10 space-y-4'>
                        <div className='flex items-center text-xl font-semibold gap-4'> Name: <span className=' text-xl font-normal'>{ownerdetails.userdata?.name}</span></div>
                        <div className='flex text-xl font-semibold gap-4'> Address: <span className=' text-xl font-normal'>{ownerdetails.userdata?.address}</span></div>
                        <div className='flex text-xl font-semibold gap-4'> Contact : <span className=' text-xl font-normal'>{ownerdetails.userdata?.contactnumber}</span></div>
                    </div>
                    <div className='mt-5 text-start'>
                        <h1 className='text-black font-semibold text-2xl'>  Room Details </h1>
                        <div className='mt-5 space-y-3 '>
                            <div className='font-semibold flex text-xl gap-3'> Type:<span className='font-normal '>{getpost.room} room</span></div>
                            <div className='text-xl flex gap-3 font-semibold'>Total Price:<span className='font-normal' >Rs.{totalprice}</span> </div>
                        </div>
                    </div>
                </div>
                {/* {form booked} */}
                <div className='px-10 w-1/2 shadow-md rounded-lg border'>
                    <h1 className='text-black text-3xl mt-5 text-center font-semibold'>Book From</h1>
                    <div className='mt-10 py-5 '>
                        <form onSubmit={handlerbook}>
                            <div className=' w-full items-center grid grid-cols-2  '>
                                <label htmlFor="" className='font-semibold text-xl'>
                                    Name
                                    {submitted && name === '' && (
                                        <span className='text-2xl text-red-500'>*</span>
                                    )}
                                    :
                                </label>
                                <input value={name} type='text' placeholder='Enter your full name' className='w-full border text-md border-black p-2 outline-none rounded-md' onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className=' w-full items-center mt-5  grid grid-cols-2  gap-2'>
                                <label htmlFor="" className='font-semibold text-xl'>Address{submitted && address === '' && (<span className='text-red-500 text-2xl'>*</span>)}:</label>
                                <input value={address} type='text' placeholder='Enter your Address' className='w-[100%] border text-md border-black p-2 outline-none rounded-md' onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className=' w-full items-center mt-5  grid grid-cols-2  gap-2'>
                                <label htmlFor="" className='font-semibold text-xl'>Contact {submitted && number === '' && (<span className='text-2xl text-red-500'>*</span>)}:</label>
                                <input value={number} type='number' placeholder='Mobile Number' className='w-[100%] border text-md border-black p-2 outline-none rounded-md' onChange={(e) => setNumber(e.target.value)} />
                            </div>
                            <div className=' w-full items-center mt-5  grid grid-cols-2  gap-2'>
                                <label htmlFor="" className='font-semibold text-xl'>Person{submitted && people === '' && (<span className='text-2xl text-red-500'>*</span>)}:</label>
                                <select value={people} type='text' placeholder='Enter your Address' className='w-[100%] border text-md border-black p-2 outline-none rounded-md' onChange={(e) => setPeople(e.target.value)}>
                                    <option disabled value=''> how many people living</option>
                                    <option value="1">1 Person</option>
                                    <option value="2">2 Person</option>
                                    <option value="3">3 Person</option>
                                    <option value="more">More</option>

                                </select>
                            </div>
                            <div className=' w-full items-center mt-5  grid grid-cols-2  gap-2'>
                                <label htmlFor="" className='font-semibold text-xl'>Occupation {submitted && occupation === '' && (<span className='text-2xl text-red-500'>*</span>)}:</label>
                                <select value={occupation} type='text' placeholder='Enter your Address' className='w-full border text-md border-black p-2 outline-none rounded-md' onChange={(e) => setOccupation(e.target.value)}>
                                    <option disabled value='' >Select your Occupation</option>
                                    <option value="students">Students</option>
                                    <option value="teacher">Teacher </option>
                                    <option value="dr">Dr</option>
                                    <option value="more">Other</option>

                                </select>
                            </div>
                            <button type='submit' className='w-full mt-5 bg-blue-600 text-white border py-2 rounded-lg text-md cursor-pointer hover:bg-blue-500'>Booked</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
