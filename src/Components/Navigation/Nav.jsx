import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav className='flex justify-between item-center w-full px-14 py-5 shadow-md'>
        <div>
            <h1>BXN</h1>
        </div>
        <ul className='flex item-center gap-10 '>
            <li>
            <Link to={"/landing"}>Home</Link>
            </li>
            <li>
            <Link to={"/product"}>Product</Link>
            </li>
            <li>
            <Link to={"/about"}>About</Link>
            </li>
            <li>
            <Link to={"/login"} className='bg-blue-500 p-3 rounded-md text-white'>Get started</Link>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Nav