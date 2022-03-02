import Link from 'next/link'
import React from 'react'

function HeaderDropDown() {
  return (
    <div className='rounded-lg shadow-md  px-3 py-3 border w-[200px] bg-white absolute top-[75px] left-[15px] md:left-[30px]'>
          <ul className=" space-y-4 font-bold  ">
          <li  >
          <Link href="/">
            <a className='hover:text-[#1024be] duration-100 md:hidden '> Sign In / Register</a>
          </Link>
              </li>
              <li >
          <Link href="/">
            <a className='hover:text-[#1024be] duration-100 md:hidden'> Get help</a>
          </Link>
        </li>
      <li >
      <Link href="/">
        <a className='hover:text-[#1024be] duration-100'> About</a>
      </Link>
    </li>
        <li>
          <Link href="/">
            <a className='hover:text-[#1024be] duration-100'> Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className='hover:text-[#1024be] duration-100'>Enterprise</a>
          </Link>
        </li>
      </ul>
      </div>
  )
}

export default HeaderDropDown