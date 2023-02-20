import React from 'react'
import { SearchIcon } from './svgIcons'
export default function Notification() {
    return (
    <> <div className='flex flex-row'>

    <h1 className='inline-block text-xl font-extrabold'>Notification</h1><SearchIcon className='absolute h-6  w-6   dark:stroke-orange-50 stroke-black rounded-full right-1'/>
    </div>

   
   <Notif />
   <Notif />
   <Notif />
   <Notif />
   <Notif />
   <Notif />
   <Notif />
   <Notif />
   <Notif />
   <Notif />
   <Notif />
   <Notif />
   <Notif />
   <Notif />
   <Notif />
   <Notif />
   <Notif />
    </>
  )
}
  function Notif(){
    return(

        <div className='w-full bg-slate-500  rounded-md p-1 m-1 grid grid-flow-col gap-2'>

        <div className='inline-block  float-right w-12 h-12 bg-gray-600 rounded-full'></div>
        <span className='inline-block    h-16'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, deleniti eos.  </span>
        </div>
        ) }
    