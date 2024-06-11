import React from 'react'
import Navbar from '../Navbar'

function SignIn() {
  return (
    <div className='bg-black h-[100vh] text-white'>
    <Navbar/>
    <div className='flex flex-col p-5 sm:p-36 gap-6 mt-20'>
      <input type='text' placeholder='name' className='bg-[#121212] h-10 w-[300px] sm:w-[700px]  mt-20 sm:mt-0 p-2'/>
      <input type='email' placeholder='email' className='bg-[#121212] h-10 w-[300px] sm:w-[700px]  p-2'/>
      <input type='password' placeholder='password' className='bg-[#121212] h-10 w-[300px] sm:w-[700px]  p-2'/>
      <button className='bg-yellow-400 rounded-3xl font-bold text-black outline-none border-none cursor-pointer h-10 w-[300px] sm:w-[700px]  p-2'>Login</button>
      </div>
    </div>
  )
}

export default SignIn