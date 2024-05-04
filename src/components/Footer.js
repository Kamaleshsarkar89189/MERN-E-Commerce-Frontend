import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <footer className='bg-gray-700'>
      {/* <div className='container mx-auto p-4'>
        <p className='text-center font-bold' title="Youtube Channel">Dynamic code with Kamalesh</p>
      </div> */}

      <div className='container mx-auto py-14 px-6'>
        <div className='grid md:grid-cols-12 grid-cols-1 gap-7'>
          <div className='lg:col-span-4 col-span-12'>
            <Link to={"/"} className='flex items-center'>
              <HiShoppingBag className='m-5 text-4xl' />
              <h2 className='text-lg mb-0 text-black font-semibold'>Kamalesh Shop </h2>
              {/* <Logo w={90} h={50} /> */}
            </Link>
            {/**FOr logo */}
            <p className='mt-6 text-white'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='flex '>
              <div className='m-6 flex item-center text-4xl text-'>

              <FaWhatsappSquare className='m-6 cursor-pointer'/>
              <FaFacebook className='m-6 cursor-pointer'/>
              <FaSquareInstagram className='m-6 cursor-pointer'/>
              <FaGithubSquare className='m-6 cursor-pointer'/>
              </div>
            </div>
          </div>
          <div className='lg:col-span-2 md:col-span-4 col-span-12'>
            <h5 className=' text-gray-100 font-semibold'>Company</h5>
            <ul className=' text-white list-none mt-6 space-y-2'>
              <li>
                <a
                  href=''
                  className=" hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href=''
                  className=" hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href=''
                  className=" hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href=''
                  className=" hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className='lg:col-span-3 md:col-span-4 col-span-12'>
            <div className='lg:col-span-2 md:col-span-4 col-span-12'>
              <h5 className=' text-gray-100 font-semibold'>Impotant Links</h5>
              <ul className=' text-white list-none mt-6 space-y-2'>
                <li>
                  <a
                    href='#'
                    className=" hover:text-gray-400 transition-all duration-500 ease-in-out"
                  >
                    Terms of Services
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className=" hover:text-gray-400 transition-all duration-500 ease-in-out"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className=" hover:text-gray-400 transition-all duration-500 ease-in-out"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className=" hover:text-gray-400 transition-all duration-500 ease-in-out"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='lg:col-span-3 md:col-span-4 col-span-12'>
            <h5 className='tracking-wide text-gray-100 font-semibold'>
              Newsletter
              </h5>
              <p className='mt-6 text-white'>Sign up and receive the latest tips via email.</p>
              <form action=''>
                <div className='my-3'>
                  <label for="email-input" className='text-white'>Write your email <span className='text-red-600'>*</span></label>
                  <input 
                  type='email'
                  id='email-input'
                  className='text-white mt-3 w-full py-2 h-10 bg-transparent rounded outline-none border border-gray-500 focus:border-[#FFCDA3] focus:ring-0'
                  placeholder='name@example.com'
                  required
                  
                  />

                </div>
                <input 
                type='submit'
                className='py-2 px-5 tracking-wide border duration-500 text-base text-center bg-[#FFCAD3] hover:bg-[#FFCDA3] border-[#FFCDA3] hover:border-[#FFCD88] text-black rounded-md w-full'
                />

              </form>
          </div>
        </div>
      </div>
      <div className='border-t border-slate-700'>
        <div className='md:text-left text-center container mx-auto py-7 px-6'>
          <p className='mb-0'>
            &copy;
           2024
            Dynamic code with Kamalesh

          </p>

        </div>
      </div>

    </footer>
  )
}

export default Footer