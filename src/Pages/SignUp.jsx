import React from 'react'
import {Link} from "react-router-dom"
const SignUp = () => {
 
  return (
    <>
    <div className='w-full h-screen'>
   <img  className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://www.freepik.com/free-photos-vectors/netflix-background')",
        }}
        aria-hidden="true" />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
        <div className='max-w-[320px] mx-auto py-16'>
      <h1 className='text-3xl font-bold '> SignUp</h1>
      <form className='w-full flex flex-col py-4'>
        <input className='p-3 my-2 bg-gray-600 rounded' type='email' placeholder='Email' autoComplete='email'/>
        <input   className='p-3 my-2 bg-gray-600 rounded'  type='password' placeholder='Password'  autoComplete='current'/>
        <button className='bg-red-600 py-3 my-6 rounded font-bold'>SignUp</button>
        <div className='flex justify-between items-center text-sm text-gray-600'>
          <p><input  className='mr-2' type='checkbox'/>Remember me</p>
          <p>Need Help </p>
        </div>
        <p className='py-4'><span className='text-gray-600'>Already subscribed</span>{''}<Link to='/Login'>Sign In</Link></p>
      </form>
        </div>
        </div>

      </div>
    </div>
    </>
  )
}


export default SignUp