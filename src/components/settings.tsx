import React from 'react'
import { FacebookIcon } from './svgIcons'
import Link from 'next/link'
import Image from 'next/image'
export default function Settings() {
  const [text, setText] = React.useState("DarkMode")

  function Darkmod() {

    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
      setText("DarkMode")
    } else {
      document.documentElement.classList.add("dark")
      setText("LightMode")

    }

  }

  return (
    <div className='p-2 dark:text-white'>
      <h1 className='text-xl font-bold '>
        Settings
      </h1>
      <hr />

      <button className='text-3xl text-white bg-sky-700 shadow-lg  p-2 rounded-lg shadow-indigo-600  top-1/2 absolute left-1/2 -translate-y-1/2 -translate-x-1/2 ' onClick={Darkmod}>{text} </button>
      <div className='absolute  bottom-16    rounded-lg h-24 p-2 py-4 '>
        <h1 className=' text-lg '>This app was created by : <br /> <i className='font-bold'> Ramache Zoubir</i> </h1>
        <div className='flex justify-around  flex-row border-t-2 border-sky-400'>

          <h2>contact me :</h2>
          <Link href={'https://www.facebook.com/zoubir.ramach'}>
            <FacebookIcon />
          </Link>
          <Link href={'https://instagram.com/ramache_zoubir'}>
            <Image alt='Instagram' src={'/Images/instagram-1-svgrepo-com.svg'} width={32} height={32} />
          </Link>
        </div>
          <Link href={'https://ramache-zoubir.vercel.app'} className='flex  text-blue-700 underline mt-2 mb-4 justify-center'>
            My Portfolio
          </Link>
      </div>
    </div>
  )
}
