import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
   <div className='flex items-center justify-between p-4 z-[100] absolute w-full fixed'>
    
      <h1 className='text-red-600 text-4xl font-bold  cursor-pointer'>NET.</h1>
     
   
      
      <div>
      <Link to="/" className=' text-white px-4 font-bold'> Home</Link>
      <Link to="Vies" className=' text-white px-4 font-bold'>Movies</Link>
      

       <Link to="SignUp" className=' text-white px-4 font-bold'>Sign Up</Link>
     <Link to="Login" className='bg-white  px-6 py-2 rounded cursor-pointer text-black hover:bg-gray-300'>Sign In</Link>
    </div>
     </div>
  )
}

export default Navbar