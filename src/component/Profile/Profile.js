import React from 'react'
import NAvbar from '../Navbar/NAvbar'
import bg1 from '../assest/properties-01.jpg'
import { FaCamera } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';
import { IoMdContact } from 'react-icons/io';
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";


export default function Profile() {
  const [bgimage, setBgimage] = useState(bg1);
  const [profile, setProfile] = useState(bgimage);
  const [loginemail, setLoginemail] = useState('')
  const [getprofile, setGetprofile] = useState({})
  const [userdata, setUserdata] = useState({})
  const [postdata, setPostData] = useState([])

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

  const handlerprofile = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await getBase64(file);
      setProfile(base64);
    }
  };

  useEffect(() => {
    const getemail = JSON.parse(localStorage.getItem('logindata')) || []
    setLoginemail(getemail)
  }, [loginemail])
  useEffect(() => {
    const fetchuser = JSON.parse(localStorage.getItem('rentaluserregister')) || []
    const matchuser = fetchuser.find((useremail) => useremail.username === loginemail);
    if (matchuser) {
      setUserdata(matchuser)

    }
  }, [loginemail])
  const addprofile = () => {

    if (bgimage === bg1) {
      toast.warn("Please add cover photo")
    }
    else if (profile === '') {
      toast.warn("Please add profile image")
    }
    else {
      const profiledata = {
        userdata: userdata,
        bgcover: bgimage,
        profileimage: profile,
      }
      const addprofile = JSON.parse(localStorage.getItem('profiledb')) || []

      const matchprofile = addprofile.find((profile) => profile.userdata.username === loginemail)
      if (matchprofile) {

        toast.warn("Already add profile ")
      }
      else {
        const newdata = [...addprofile, profiledata];
        localStorage.setItem('profiledb', JSON.stringify(newdata))
        toast.success("Add sucessfully profile")
      }

    }



  }

  useEffect(() => {
    const getprofiledata = JSON.parse(localStorage.getItem("profiledb")) || []
    const matchprofile = getprofiledata.find((user) => user.userdata.username === loginemail)
    if (matchprofile) {

      setGetprofile(matchprofile)
      setBgimage(matchprofile.bgcover);
      setProfile(matchprofile.profileimage)
    }
  }, [loginemail])


  useEffect(() => {
    const getpostdata = JSON.parse(localStorage.getItem("postdb")) || []
    const checkemail = getpostdata.filter((post) => post.email === loginemail)

    setPostData(checkemail)

  }, [loginemail])

  const handlerdelete = (id) => {
    try {
      const fetchpostdata = JSON.parse(localStorage.getItem("postdb")) || []
      const matchdata = fetchpostdata.filter((data) => data.id !== id);
      localStorage.setItem('postdb', JSON.stringify(matchdata))
      setPostData(matchdata)
    } catch (error) {
      console.log(error)
    }
    // console.log(id)
  }

  return (
    <div>
      <NAvbar />
      <div className='bg-white'>
        {/* {cover section} */}
        <div className=' w-[80%]  relative h-[350px] shadow-md rounded-b-xl bg-gray-100 m-auto hover:bg-gray-200'>

          <img src={bgimage || bg1} className='w-full h-full object-center rounded-b-xl ' />


          <label
            htmlFor='imagefile'
            className='flex cursor-pointer bg-white p-2 gap-2 rounded-lg items-center absolute right-5 bottom-1 z-10'
            style={{ cursor: 'pointer' }}
          >
            <FaCamera />
            <h1 className='font-semibold text-sm cursor-pointer'>Add cover photo</h1>
          </label>
          <input type='file' id='imagefile' style={{ display: 'none' }} onChange={handlerbgimage} />
        </div>
        {/* {profile section} */}
        <div className='w-[80%] m-auto relative mb-5 border-b'>
          <div className='flex relative items-center justify-between'>
            <div className=' w-full flex absolute  left-5 -bottom-[90px] '>
              <div className=' w-[200px] h-[200px]  rounded-full bg-white items-center flex justify-center  ' >
                <img src={profile || bg1} alt='' className='w-[190px] h-[190px] p-[1px] rounded-full  ' />

              </div>
              <label htmlFor='profile' className='w-[40px] h-[40px] rounded-full  absolute top-[140px] left-[140px]    bg-gray-300 flex items-center justify-center cursor-pointer'>

                <FaCamera className='w-[30px] h-[30px]  text-black p-1' />
              </label>
              <input type='file' id='profile' style={{ display: 'none' }} onChange={handlerprofile} />
            </div>

            <div className='flex justify-start gap-3 items-center absolute  left-[220px] md:left-[220px] top-1 w-[70%]'>
              <h1 className=' text-lg md:text-3xl font-bold'>{userdata.name}</h1>
              <div className='flex flex-wrap   gap-3'>
                <button className='bg-[#4db5ff] px-1 md:px-5 py-2 rounded-md hover:bg-[#79bff1]' onClick={addprofile}>Save Profile</button>

                <a href='/post' className='bg-[#4db5ff] px-1 md:px-5 py-2 rounded-md hover:bg-[#79bff1]'>Add Post</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {details section} */}
      <div className='w-full bg-gray-50'>
        <div className=' w-[95%] md:w-[80%]  m-auto border-t py-5 mt-[100px] flex   gap-3 md:gap-5'>
          {/* {introduction section} */}
          <div className='w-[35%] h-[400px] hidden sm:block sticky top-0 shadow-lg rounded-xl mt-5  bg-white  '>
            <h1 className='text-left px-2 text-2xl py-1 font-semibold'>Intro </h1>
            <div className='mt-5 space-y-4 px-2 '>
              <div className='border-b py-2 gap-2 flex'>
                <IoMdContact size={30} className='text-gray-400' /> <span className='text-xl text-black font-semibold '>{userdata.name}</span>
              </div>
              <a href={`mailto:${userdata.username}`} className='border-b py-2 flex gap-2 items-center '>
                <MdOutlineEmail size={30} className='text-gray-400' /> <span className='text-xl  font-semibold'>{userdata.username}</span>
              </a>
              <div className='border-b py-2 flex gap-2 items-center '>
                <FaLocationDot size={30} className='text-gray-400' /> <span className='text-xl font-normal'>Live in <span className='font-semibold '>{userdata.address}</span> </span>
              </div>
              <a href={`tel:${userdata.contactnumber}`} className='border-b py-2 flex gap-2 items-center '>
                <IoCall size={30} className='text-gray-400' /> <span className='text-xl font-normal'><span className='font-semibold '>{userdata.contactnumber}</span> </span>
              </a>
              <div className='border-b py-2 flex gap-2 items-center '>
                <IoMdContact size={30} className='text-gray-400' /> <span className='text-xl font-normal'><span className='font-semibold '>{userdata.gender}</span> </span>
              </div>
            </div>
          </div>

          <div className='sm:w-[65%] w-[100%]    '>
            <h1 className='text-center py-2 bg-white shadow-xl mt-5 rounded-xl text-2xl font-semibold'>Post Section</h1>

            <div className='mt-5'>
              {/* {post section} */}
              {postdata.map((item, index) => (


                <div key={index} className='bg-white mt-10 h-[400px] shadow-xl  rounded-xl '>
                  {/* {profile section of post} */}
                  <div className='flex px-5 items-center py-3'>
                    <div className='w-full flex justify-between items-center'>
                      <div className='flex items-center '>
                        <div className='w-[60px h-[60] rounded-full gap-5'>
                          <img src={profile || bg1} alt="" className='w-[50px] h-[50px] rounded-full p-1' />
                        </div>

                        <div className='flex flex-col'>
                          <h1 className='text-sm font-semibold'>{userdata.name}</h1>
                          <h1 className='text-sm text-gray-500'>{item.date}</h1>
                        </div>
                      </div >
                      <div className='mt-0 relative group' >
                        <h1 className='text-3xl text-gray-500 font-semibold hover:text-black cursor-pointer text-end'>...</h1>
                        <div className='w-[200px] absolute -left-20 mt-1 mb-1 hidden group-hover:block  px-5 bg-white shadow-2xl rounded-md  text-black text-xs  py-1 rounded"'>
                          <div className='flex gap-3 px-5 items-center  text-red-500' onClick={() => handlerdelete(item.id)}>
                            <MdDelete size={30} />
                            <h1 className='text-start  text-red-500 cursor-pointer text-xl font-semibold' >Delete </h1>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  {/* {description} */}
                  <div className='px-5 '>
                    <h1>{item.description}</h1>
                  </div>

                  {/* {post image section} */}
                  <div className='mt-2 '>
                    <div className='w-full h-[100px]'>
                      <img src={item.image} alt="" className='w-full h-[300px] rounded-b-xl' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
