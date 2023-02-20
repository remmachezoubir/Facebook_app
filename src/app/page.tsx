"use client"
import React from "react"
import Profile from "@/components/profile"
import HomePage from "@/components/home"
import Friends from "@/components/friends"
import Notification from "@/components/notification"
import Settings from "@/components/settings"
import Link from "next/link"
import { HomeIcon , ProfileIcon , FriendsIcon, NotificationIcon ,SettingIcon , MessengerIcon , PlusIcon ,SearchIcon} from "@/components/svgIcons"
export default function Home() {
  const [userPage , setUserPage]=React.useState("home")
  const [topLogo , settopLogo]=React.useState(true) 

    const HandlePage=(page:any , e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      //todo learn something about the events
      setUserPage(page)
      if(page === "home"){
        settopLogo(true)
        return
      }
      settopLogo(false)
    }
  return (
    <>
    <header className='   w-full   top-0   fixed  bg-white z-10 dark:bg-black  border-b-4 dark:border-none'>
        
       {topLogo && <div className='px-3 flex flex-row'> 
            <h1 className='text-blue-500 font-extrabold text-2xl '>
           <Link  href={'https://www.facebook.com/zoubir.remmache'}> Facebook</Link> 
            </h1>
           <section>

            <MessengerIcon className='absolute h-6   dark:fill-white w-6 right-0'/>
            <SearchIcon className='absolute h-6  w-6   dark:stroke-orange-50 stroke-black rounded-full right-7'/>
            <PlusIcon className='absolute h-6  w-6   dark:fill-white  rounded-full right-16'/>
           </section>

        </div> }
        <div className=' flex  justify-around mt-4 '>
            <button className={`${userPage==="home" && 'clicked-top-button'} topButtons`} onClick={(e)=>HandlePage("home" , e)}><HomeIcon className="dark:fill-white dark:stroke-white" /></button>
            <button className={`${userPage==="friends" && 'clicked-top-button'} topButtons`} onClick={(e)=>HandlePage("friends", e)}><FriendsIcon className="dark:fill-white dark:stroke-white" /></button>
            {/* <button className='topButtons' onClick={()=>HandlePage("shop")}>Sh</button> */}
            <button className={`${userPage==='profile' && 'clicked-top-button'} topButtons`} onClick={(e)=>HandlePage("profile" ,e)}><ProfileIcon className=" dark:bg-white rounded-full" /></button>
            <button className={`${userPage==='notification' && 'clicked-top-button'} topButtons`} onClick={(e)=>HandlePage("notification" ,e)}><NotificationIcon className="dark:fill-white dark:stroke-white"/></button>
            <button className={`${userPage==='settings' && 'clicked-top-button'} topButtons`} onClick={(e)=>HandlePage("settings" ,e)}><SettingIcon className="dark:fill-white dark:stroke-white"/></button>
        </div>
    </header>

  <div className={` ${topLogo && ' mt-24'} ${!topLogo && 'mt-16'}  dark:bg-black  dark:text-white`}>
    {userPage==="home"&& <HomePage/>}
    {userPage==="friends"&& <Friends/>}
    {/* {userPage==="shop"&& <h1>shop</h1>} */}
    {userPage==="profile"&& <Profile/>}
    {userPage==="notification"&& <Notification/>}
    {userPage==="settings"&& <Settings/>}

  </div>    
    </>
    )}