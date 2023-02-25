import React from 'react'
import { ProfileIcon } from './svgIcons'
import Image from 'next/image'
export default function Profile() {
  return (
    <>
      <Image alt='cover' width={32} height={32} src="/Images/svg/patternpad.svg" className=' bg-gray-600 w-full border-2 border-gray-400  h-52'/>
       <ProfileIcon className='bg-white   rounded-full  top-36 left-1 absolute   w-40 h-40'/>
      <div className="mt-16 ml-2">
       <h1 className='text-2xl overflow-hidden font-bold' >User name</h1>
        </div>
        
    </>
    )
}
