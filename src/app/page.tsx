"use client"
import React from "react"
import Profile from "@/components/profile"
import HomePage from "@/components/home"
import Friends from "@/components/friends"
import Notification from "@/components/notification"
import Settings from "@/components/settings"
import { useStateContext } from "./MyProvider"
import Header from "@/components/Header"
export default function Home() {
  const {HandlePage,topLogo,userPage}=useStateContext()
  return (
    <>
  <Header/>
  <div className={` ${topLogo && ' mt-24 '} ${!topLogo && 'mt-16'}  dark:bg-black  dark:text-white`}>
    {userPage==="home"&& <HomePage/>}
    {userPage==="friends"&& <Friends/>}
    {/* {userPage==="shop"&& <h1>shop</h1>} */}
    {userPage==="profile"&& <Profile/>}
    {userPage==="notification"&& <Notification/>}
    {userPage==="settings"&& <Settings/>}

  </div>    
    </>
    )}