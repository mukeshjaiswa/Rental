import React from 'react'
import { useParams } from 'react-router'
import NAvbar from '../Navbar/NAvbar'
import shortvideo from '../assest/Video/video.mp4'
import { useState } from 'react';
import { LuBuilding } from "react-icons/lu";
import { LuLayoutGrid } from "react-icons/lu";
import { FiPackage } from "react-icons/fi";
import Footer from '../Footer/Footer';
import BookNow from './BookNow';
import { useEffect } from 'react'

export default function Product() {
  const [getpost, setGetPost] = useState([])
  const { id } = useParams();
  useEffect(() => {
    const fetchpost = JSON.parse(localStorage.getItem("postdb")) || []
    const index = parseInt(id);
    setGetPost(fetchpost[index])

  }, [id])
  console.log(getpost)
  // const item = data.find((item) => item.id === id)

  // const [imageindex, setImageindex] = useState(0);
  // const handlernextimage = () => {
  //   if (item?.img?.length) {

  //     setImageindex((prev) => (prev + 1) % item.img.length)
  //   }

  // }
  // const handlerprevimage = () => {
  //   if (item?.img?.length) {

  //     setImageindex((prev) => (prev - 1 + item.img.length) % item.img.length)
  //   }
  // }


  // if (!getpost || !getpost.image || getpost.length === 0) {
  //   return <div className="p-4 text-red-600">Product not found or has no images.</div>;
  // }



  return (
    <div className=''>
      <NAvbar />
      <div className='w-full hidden md:flex items-start justify-start'>
        <div className='w-[49.5%] mt-0 text-start'>
          <img src={getpost.image} alt='' className='w-full  h-[350px] rounded-md' />
        </div>
        <div className='w-[50%] h-[350px] flex mt-0  flex-wrap m-auto text-start '>
          {/* {item.img.map((img, i) => (
            <img key={i} src={img} alt='' className='w-[48%] m-auto' />
          ))} */}
          <video className="w-full h-[100%] rounded-md " autoPlay muted loop controls>
            <source src={shortvideo} type="video/mp4"  />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>



      {/* image section */}
      <div className='w-full flex relative z-0 md:hidden'>
        {/* {item.img.map((items, index) => ( */}

        <div >
          <img src={getpost.image} alt="image" className='flex w-full  ' />


          {/* <div className='absolute bg-gray-50 rounded-full top-[50%]  right-3 flex items-center justify-center'>
            {/* <MdKeyboardArrowRight className='text-3xl' onClick={handlernextimage} /> */}
          {/* <MdKeyboardArrowRight className='text-3xl'  /> */}
          {/* </div>
          {imageindex > 0 ?


            <div className='absolute bg-gray-50 rounded-full top-[50%]  left-3 flex items-center justify-center'>
              <MdKeyboardArrowLeft className='text-3xl' onClick={handlerprevimage} />
            </div>
            : ''} */}
        </div>
        {/* ))} */}
      </div>
      <div className='w-full flex justify-between '>


        <div className='w-full   md:w-[60%] px-10   mt-10 '>
          {/* {item.map((items,index)=>( */}
          <div className='mb-5'>
            <h1 className='font-bold text-lg'>For Rent: Modern {getpost.room} in {getpost.address}</h1>

            <h1 className='text-sm text-[#6b7280]'>5641 KC (Urkhoven)</h1>
          </div>
          {/* ))} */}

          <h1 className='text-md font-bold md:text-xl'>Rs.{getpost.rent} per month</h1>

          <div className='flex flex-col sm:flex-row gap-3 mt-5  md:gap-4'>
            <div className='flex gap-2 items-center'>
              <LuBuilding size={20} />
              <h1 className='text-sm font-light '>140 m²</h1>
            </div>
            <div className='flex gap-2 items-center'>
              <LuLayoutGrid size={20} />
              <h1 className='text-sm font-light '>{getpost.room} room</h1>
            </div>
            <div className='flex gap-2 items-center'>
              <FiPackage size={20} />
              <h1 className='text-sm font-light '>Upholstered or furnished</h1>
            </div>
          </div>

          <div className='mt-10 border-y py-5'>
            <h1 className='text-md font-bold'>Description</h1>
            <p className='py-7'>
              {getpost.description}
            </p>
          </div>
          {/* Transfer */}
          <div className='mt-10 py-5'>
            <h1 className='font-bold text-md py-3'>Transfer</h1>
            <div className=''>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'> Rental price</h1>
                <h1 className='w-1/2 text-sm  py-3'> Rs.{getpost.rent} per month</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'> Offered since</h1>
                <h1 className='w-1/2 text-sm  py-3'>10-05-2025</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'> Status</h1>
                <h1 className='w-1/2 text-sm  py-3'> For rent</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>Available</h1>
                <h1 className='w-1/2 text-sm  py-3'> From 01-07-2025</h1>
              </div> <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'> Interior</h1>
                <h1 className='w-1/2 text-sm  py-3'>Upholstered or furnished</h1>

              </div>
            </div> <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
              <h1 className=' text-light w-1/2  text-sm py-3'> Upkeep</h1>
              <h1 className='w-1/2 text-sm  py-3'>Good</h1>
            </div>
          </div>

          {/* Area and Capacity */}
          <div className='mt-10 py-5'>
            <h1 className='font-bold text-md py-3'>Area and Capacity</h1>
            <div className=''>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'> Living area</h1>
                <h1 className='w-1/2 text-sm py-3'> 140 m</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>Plot area</h1>
                <h1 className='w-1/2 text-sm  py-3'>360 m²</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>Volume</h1>
                <h1 className='w-1/2 text-sm  py-3'> 444 m³</h1>
              </div>
            </div>
          </div>
          {/* Construction */}
          <div className='mt-10 py-5'>
            <h1 className='font-bold text-md py-3'>Construction</h1>
            <div className=''>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>Type of house</h1>
                <h1 className='w-1/2 text-sm py-3'> House</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>Type of house</h1>
                <h1 className='w-1/2 text-sm  py-3'>Corner house, Family home</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>  Type of construction</h1>
                <h1 className='w-1/2 text-sm  py-3'> Existing building</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>  Year of construction</h1>
                <h1 className='w-1/2 text-sm  py-3'> 1900</h1>
              </div>
            </div>
          </div>
          {/*Classification & Facilities  */}
          <div className='mt-10 py-5'>
            <h1 className='font-bold text-md py-3'>Classification & Facilities</h1>
            <div className=''>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>  Number of rooms</h1>
                <h1 className='w-1/2 text-sm py-3'> {getpost.room}</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'> Number of bedrooms</h1>
                <h1 className='w-1/2 text-sm  py-3'>{getpost.bedroom}</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>   Number of bathrooms</h1>
                <h1 className='w-1/2 text-sm  py-3'>{getpost.bathroom}</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'> Number of floors</h1>
                <h1 className='w-1/2 text-sm  py-3'> {getpost.floors}</h1>
              </div>
            </div>
          </div>
          {/* Facilities */}
          <div className='mt-10 py-3  flex flex-col md:flex-row md:text-start'>
            <div className="text-light w-full  py-3 md:w-1/2">
              Facilities
            </div>
            <div className='  w-ful3 py-2 md:w-1/2'>
              <div className='grid grid-cols-2 gap-x-2 gap-y-4'>
                <div className='flex items-center gap-2'>
                  <span className="text-green-600 ">✅</span>
                  <span>Air-conditioning</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className="text-green-600 ">✅</span>
                  <span>Bath</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className="text-green-600 ">✅</span>
                  <span>Fibre-optic connection</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className="text-green-600 ">✅</span>
                  <span>Mechanical ventilation</span>
                </div>
                <div className='flex items-center gap-2'>
                  <span className="text-green-600 ">✅</span>
                  <span>Shower</span>
                </div><div className='flex items-center gap-2'>
                  <span className="text-green-600 ">✅</span>
                  <span>Toilet</span>
                </div>
              </div>
            </div>
          </div>

          {/* Outside space */}
          <div className='mt-10 py-5'>
            <h1 className='font-bold text-md py-3'>Outside Space</h1>
            <div className=''>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>Balcony</h1>
                <h1 className='w-1/2 text-sm py-3'> Not present</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'> Garden</h1>
                <h1 className='w-1/2 text-sm  py-3'>3</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>  Present (120 m², located on the north-east)</h1>
                <h1 className='w-1/2 text-sm  py-3'>3</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>  Garden description</h1>
                <h1 className='w-1/2 text-sm  py-3'> achtertuin</h1>
              </div>
            </div>
          </div>
          {/* Energy */}
          <div className='mt-10 py-5'>
            <h1 className='font-bold text-md py-3'>Energy</h1>
            <div className=''>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>Insulation</h1>
                <h1 className='w-1/2 text-sm py-3'>  Double glazing, Fully insulated, Roof insulation</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'> Heating</h1>
                <h1 className='w-1/2 text-sm  py-3'>Central heating boiler</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>Hot water</h1>
                <h1 className='w-1/2 text-sm  py-3'>Central heating boiler</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>  Energy rating</h1>
                <h1 className='w-1/2 text-sm  py-3'> C</h1>
              </div>
            </div>
          </div>
          {/* Parking Facilities */}
          <div className='mt-10 py-5'>
            <h1 className='font-bold text-md py-3'>Parking facilities</h1>
            <div className=''>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'>Present</h1>
                <h1 className='w-1/2 text-sm py-3'>{getpost.parking}</h1>
              </div>
              <div className='w-full flex  items-center border-b border-[#e5e7eb]'>
                <h1 className='w-1/2 text-light  py-3'> Type of parking</h1>
                <h1 className='w-1/2 text-sm  py-3'>{getpost.toparking}</h1>
              </div>

            </div>
          </div>
        </div>

        <div className='md:col-span-2 md:w-[30%] mr-10 mt-5'>
          <div className='sticky top-5 hidden md:block md:top-0 w-full'>
            <BookNow title='Beautiful Apartment' getpost={getpost} index={id} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
