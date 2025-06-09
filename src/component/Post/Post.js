import React from 'react'
import { useState } from 'react'

import { toast } from 'react-toastify'
import { useEffect } from 'react'

import NAvbar from '../Navbar/NAvbar'

export default function Post() {
    const [image, setBgimage] = useState('')
    const [video, setVideo] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [rent, setRent] = useState('')
    const [water, setWater] = useState('')
    const [electricity, setElectricity] = useState('')
    const [clean, setClean] = useState('')
    const [parking, setParking] = useState('');
    const [toparking, setTOParking] = useState('');
    const [room, setRoom] = useState();
    const [bedroom, setBedroom] = useState();
    const [bathroom, setBathroom] = useState();
    const [floors, setFloors] = useState();
    const [name, setname] = useState('');
    const [profile, setprofile] = useState('')
    const [date, setDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const formatted =
            String(today.getDate()).padStart(2, '0') + '/' +
            String(today.getMonth() + 1).padStart(2, '0') + '/' +
            today.getFullYear();
        setDate(formatted)

    })
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file); // Convert to base64
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handlerbgimage = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const base64 = await getBase64(file);
            setBgimage(base64);
        }

    };
    const handlervideo = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const base64 = reader.result;
                setVideo(base64)

            }
            reader.readAsDataURL(file)
        }
    }

    const handlerform = (e) => {
        e.preventDefault();
        const getemail = JSON.parse(localStorage.getItem("logindata"))


        const postdata = {
            id: Date.now(),
            profile: profile,
            name: name,
            date: date,
            image: image,
            address: address,
            description: description,
            rent: rent,
            water: water,
            clean: clean,
            electricity: electricity,
            parking: parking,
            toparking: toparking,
            room: room,
            bedroom: bedroom,
            bathroom: bathroom,
            floors: floors,
            email: getemail,

        }
        const setdata = JSON.parse(localStorage.getItem("postdb")) || []
        const newdata = [...setdata, postdata];
        localStorage.setItem('postdb', JSON.stringify(newdata));

        setBgimage('');
        setAddress("");
        setDescription('');
        setRent('')
        setWater('')
        setClean('')
        setElectricity('')
        setParking('')
        setTOParking('')
        setRoom('')
        setBedroom('')
        setBathroom('')
        setFloors('')
        toast.success("Sucess add post")

    }
    useEffect(() => {
        const getemail = JSON.parse(localStorage.getItem("logindata"))
        const getprofiledata = JSON.parse(localStorage.getItem('profiledb')) || [];
        const checkprofile = getprofiledata.find((data) => data.userdata.username === getemail)

        if (checkprofile) {
            setprofile(checkprofile.profileimage);
            setname(checkprofile.userdata.name)
        }
    }, [])
    console.log(profile, name)



    return (
        <div className='w-full h-auto bg-gray-100'>
            <NAvbar />
            <div className=' w-[90%] sm:w-[80%] mt-5 py-3 rounded-xl bg-white shadow-xl  m-auto '>
                <h1 className='text-center font-semibold text-xl'>Rental Post Room</h1>
                <form action="" onSubmit={handlerform}>
                    {/* {Room details} */}
                    <div className='w-full px-10 grid sm:grid-cols-2 mt-10 gap-5 sm:gap-3'>
                        <div className='flex gap-3 items-center'>
                            <label className='whitespace-nowrap'>Room Image</label>
                            <input type="file" multiple accept="image/*" className="w-full px-2 py-2 border border-black outline-none rounded-md" required onChange={handlerbgimage} />
                        </div>
                        <div className=' flex gap-3 items-center'>
                            <label htmlFor="">Video</label>
                            <input type="file" accept="video/mp4" className="w-full px-2 py-2 border border-black outline-none rounded-md" required  onChange={handlervideo} />
                        </div>
                    </div>
                    <div className='flex gap-3 items-center mt-5 px-10'>
                        <div className=' flex gap-3 items-center'>
                            <label htmlFor="">Address</label>
                            <input value={address} type='text' className="w-full px-2 py-2 border border-black outline-none rounded-md" required onChange={(e) => setAddress(e.target.value)} />
                        </div>
                    </div>
                    <div className='flex gap-3 items-center mt-5 px-10'>
                        <label className='whitespace-nowrap'>Description</label>
                        <textarea value={description} cols={5} rows={5} type="file" className="w-full px-2 py-2 border border-black outline-none rounded-md" required onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    {/* {Rent details} */}
                    <div className='mt-10'>
                        <h1 className='font-semibold text-xl text-center'>Rent Details</h1>
                        <div className=''>
                            <div className='w-full px-10 grid sm:grid-cols-2 mt-5 gap-5 sm:gap-3'>
                                <div className='flex gap-3 items-center'>
                                    <label className='whitespace-nowrap'>Monthly Rent</label>
                                    <input value={rent} type="number" className="w-full px-2 py-2 border border-black outline-none rounded-md" placeholder='Monthly Rent' required onChange={(e) => setRent(e.target.value)} />
                                </div>
                                <div className=' flex gap-3 items-center'>
                                    <label htmlFor="">Water</label>
                                    <input value={water} type='number' className="w-full px-2 py-2 border border-black outline-none rounded-md" placeholder='Water Facilities' required onChange={(e) => setWater(e.target.value)} />
                                </div>
                            </div>
                            <div className='w-full px-10 grid sm:grid-cols-2 mt-5 gap-5 sm:gap-3'>
                                <div className='flex gap-3 items-center'>
                                    <label className='whitespace-nowrap'>Electricity Fee</label>
                                    <input value={electricity} type="number" className="w-full px-2 py-2 border border-black outline-none rounded-md" placeholder='Electricity fee' required onChange={(e) => setElectricity(e.target.value)} />
                                </div>
                                <div className=' flex gap-3 items-center'>
                                    <label htmlFor="" className='whitespace-nowrap'>Clean Fee</label>
                                    <input value={clean} type='number' className="w-full px-2 py-2 border border-black outline-none rounded-md" placeholder='Cleaning Fee' required onChange={(e) => setClean(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {facilites details} */}
                    <div className='mt-10'>
                        <h1 className='font-semibold text-xl text-center'>Facilities Details</h1>
                        <div className=''>
                            <div className='w-full px-10 grid sm:grid-cols-2 mt-5 gap-5 sm:gap-3'>
                                <div className='flex gap-3 items-center'>
                                    <label className='whitespace-nowrap'>Parking</label>
                                    <select value={parking} className="w-full px-2 py-2 border border-black outline-none rounded-md" required onChange={(e) => setParking(e.target.value)}>
                                        <option selected disabled value="">Select parking </option>
                                        <option value='yes'>Yes</option>
                                        <option value='no'>No</option>
                                    </select>
                                </div>
                                <div className=' flex gap-3 items-center'>
                                    <label className='whitespace-nowrap'>Types Of parking</label>
                                    <select value={toparking} className="w-full px-2 py-2 border border-black outline-none rounded-md" required onChange={(e) => setTOParking(e.target.value)}>
                                        <option selected disabled value="">Select parking types</option>
                                        <option value='public'>Public </option>
                                        <option value='private'>Private</option>
                                        <option value='other'>other</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* {Room details} */}
                    <div className='mt-10'>
                        <h1 className='font-semibold text-xl text-center'>Rooms Details</h1>
                        <div className=''>
                            <div className='w-full px-10 grid sm:grid-cols-2 mt-5 gap-5 sm:gap-3'>
                                <div className='flex gap-3 items-center'>
                                    <label className='whitespace-nowrap'>Number of rooms</label>
                                    <select value={room} className="w-full px-2 py-2 border border-black outline-none rounded-md" required onChange={(e) => setRoom(e.target.value)}>
                                        <option selected disabled value="">Select rooms</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='more'>More than 3</option>
                                    </select>
                                </div>
                                <div className=' flex gap-3 items-center'>
                                    <label className='whitespace-nowrap'>Number of bedroom</label>
                                    <select value={bedroom} className="w-full px-2 py-2 border border-black outline-none rounded-md" required onChange={(e) => setBedroom(e.target.value)}>
                                        <option selected disabled value="">Select bedroom</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='more'>More than 4</option>
                                    </select>
                                </div>
                                <div className=' flex gap-3 items-center'>
                                    <label className='whitespace-nowrap'>Number of bathroom</label>
                                    <select value={bathroom} className="w-full px-2 py-2 border border-black outline-none rounded-md" required onChange={(e) => setBathroom(e.target.value)}>
                                        <option selected disabled value="">Select bathroom</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='more'>More than 3</option>
                                    </select>
                                </div>
                                <div className=' flex gap-3 items-center'>
                                    <label className='whitespace-nowrap'>Number of floors</label>
                                    <select value={floors} className="w-full px-2 py-2 border border-black outline-none rounded-md" required onChange={(e) => setFloors(e.target.value)}>
                                        <option selected disabled value="">Select floors</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='more'>More then 3</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='w-full flex mt-10 items-center justify-center'>
                        <button type='submit' className='px-10 rounded-md tracking-widest py-2 bg-[#4db5ff] text-white font-semibold hover:bg-[#77bcee]' >Post</button></div>
                </form>
            </div>
        </div>






    )
}
