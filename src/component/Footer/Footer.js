import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <div className='w-full px-[40px] text-white py-3 mt-10 bg-[#248eb7]'>
      <div className='grid grid-cols-1 py-3 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* {first section:About} */}
        <div className=''>
          <h1 className='font-semibold'>About scam Free</h1>
          <ul className='space-y-2 text-gray-300 mt-5 '>
            <li>                <Link href="/" className="text-gray-300 hover:text-green-300">Advertise</Link></li>
            <li>                <Link href="/" className="hover:text-green-300">Press releases</Link></li>
            <li>                <Link href="/" className=" hover:text-green-300">Mediation fees</Link></li>
            <li>                <Link href="/" className=" hover:text-green-300">User statistics</Link></li>
            <li>                <Link href="/" className=" hover:text-green-300">Pararius+</Link></li>
            <li>                <Link href="/" className="hover:text-green-300">Frequently asked questions</Link></li>
            <li>                <Link href="/" className=" hover:text-green-300">Sign up for free</Link></li>
            <li>                <Link href="/" className=" hover:text-green-300">Avoid scams</Link></li>
            <li>                <Link href="/" className="hover:text-green-300">Tenant screening process</Link></li>
            <li>                <Link href="/" className="hover:text-green-300">Expat guide</Link></li>
          </ul>
        </div>

        {/* {second section:Find a Property} */}
        <div className=''>
          <h1 className='font-semibold'>Find a Property</h1>
          <div className='mt-5 space-y-2 text-gray-200'>

            <ul>
              <li>                <Link href="/" className="text-gray-200 hover:text-green-300">Huurwoningen</Link></li>
              <li>                <Link href="/" className="text-gray-200 hover:text-green-300">Rentaroof</Link></li>
              <li>                <Link href="/" className="text-gray-200 hover:text-green-300">Toitpourtoi</Link></li>

            </ul>
          </div>
        </div>

        {/* {third section:term} */}
        <div className=''>
          <h1 className='font-semibold'>Term</h1>
          <ul className='space-y-2 text-gray-200 mt-5'>

            <li><Link href='/' className='hover:text-green-300'>Terms and Conditions</Link></li>
            <li><Link href='/' className='hover:text-green-300'>Privacy Policy</Link></li>
          </ul>
          <h1 className='font-semibold mt-5'>Follow</h1>
          <div className='mt-5 flex gap-2'>
            <Link to='https://www.facebook.com/' className='flex border p-2 border-white items-center justify-center rounded-full '>

              <FiFacebook size={20} className='' />
            </Link>
            <Link to='https://www.instagram.com/' className='flex border p-2 border-white items-center justify-center rounded-full '>

              <FiInstagram size={20} className='' />
            </Link>
            <Link to='https://www.twitter.com/' className='flex border p-2 border-white items-center justify-center rounded-full '>

              <FiTwitter size={20} className='' />
            </Link>
            <Link to='https://www.linkedin.com/' className='flex border p-2 border-white items-center justify-center rounded-full '>

              <FiLinkedin size={20} className='' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
