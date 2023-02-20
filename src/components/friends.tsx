import React from 'react'
import { SearchIcon ,ProfileIcon } from './svgIcons'
export default function Friends() {
    const [requests ,setRequests]=React.useState("requests")
    const [yourFriends , setFriends]=React.useState('Your Friends ')
    let peopole=[]
    for (let index = 1; index < 100; index++) {
        const friend =`user ${index}`
        peopole.push(friend)
      }
  return  (

    <>
    <div className='flex flex-row px-1'>
        <span className='text-2xl   font-extrabold'>Friends</span>
        <SearchIcon className='absolute right-0'/>

    </div>
    <div className='border-b-1 border-gray-400 py-2'>
        <button onClick={()=>{setRequests('you dont have any requests '); setFriends('Your friends')}} className='bg-gray-300 rounded-xl m-2 px-2 p-1 dark:text-black'>{requests}</button>
        <span className='bg-gray-300 rounded-xl m-2 px-2 p-1 dark:text-black' onClick={()=>{setFriends("you don't have any friends ;(" ); setRequests('requests')}}>{yourFriends}</span>
    </div>
    
    <h1 className='font-bold text-xl'>peopole you might know </h1>
    
    {peopole.map(friend=>(
    <User userName={friend} key={friend} />
    ))}

    </>
  )}

const User=(props :any)=>{
    const [text , setText]=React.useState({add:'add friend' , remove:'remove'})
    const [zo ,setZo]=React.useState(true)
    return zo? ( <div key={props.userName} className='grid grid-col-3 grid-flow-col gap-2 mx-2'>
        <ProfileIcon className='h-20  w-20  dark:bg-white rounded-full'/>
    <span className=' grid grid-flow-row col-span-2 grid-cols-2 gap-x-3'>
       <span className=' col-span-2 text-lg font-semibold  '>{props.userName} </span>
        <button className=' bg-sky-600 rounded-xl   ' onClick={()=>setText({add:'requested ' , remove:'remove request '})} >{text.add}</button>
        <button className='bg-gray-300 rounded-xl   dark:text-black' onClick={()=>{setText({add:'add friend ' , remove:'remove '}); setZo(!zo)}}>{text.remove}</button>
    </span>
    </div>):( <div key={props.userName} className='font-semibold mt-2 bg-gray-300 dark:text-black rounded-lg h-12 flex items-center justify-center border-2 '>{props.userName} removed </div>)
    
}
