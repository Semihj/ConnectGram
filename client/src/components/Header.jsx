import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch} from "react-icons/fa"
export default function Header() {
  return (
    <header className='bg-green-600 shadow-md  ' >
      <div className="flex max-w-6xl p-3 mx-auto items-center justify-between ">
     <Link to="/">  
     <h1 className='font-bold text-sm sm:text-xl flex flex-wrap text-slate-100 items-center ' >
      <span>Connect</span>
      <span className='text-purple-800 text-2xl ' >Gram</span>  </h1>
     </Link> 
     <form className='flex gap-2' >
      <input type="text" placeholder='Search friends...' className='p-2 px-3  focus:outline-none bg-slate-200 rounded-md w-24 sm:w-64 ' />
      <button className='' > <FaSearch className='text-slate-800' /> </button>
     </form>
      <ul className='flex gap-3 sm:gap-6 text-xl sm:text-2xl text-slate-200' >
        <li><a href="/about" className='hover:underline' >About</a></li>
        <li><a href="/sign-in" className='hover:underline' >Sign In</a></li>
        <li><a href="/profile" className='hover:underline' >Profile</a></li>
      </ul>
      </div>
    </header>
  )
}
