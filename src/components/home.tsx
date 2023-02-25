import React from 'react'
import Post from './post'
import Link from 'next/link'
import { ProfileIcon , PhotoIcon } from './svgIcons'
export default function Home() {

  let stories =[]
  let posts=[]
  for (let index = 1; index < 100; index++) {
    const element =`story ${index}`
    stories.push(element)
    const post =`user ${index}`
    posts.push(post)
  }
  return (
    <>

    {/* <Image src={`hey`} alt="profile picture " width={3} height={4}>P</Image> */}


    <div className='border-b-4  h-10 w-full flex border-gray-400  justify-between'>
    <ProfileIcon className=" dark:bg-white rounded-full" />
      <span className=' border-2  h-8  w-72 rounded-2xl px-4 border-gray-600    overflow-hidden' >what is in your mind? </span>
      <PhotoIcon className=' mr-4'/>
    </div>

    <div className='   flex flex-row  overflow-x-scroll border-b-4 border-gray-400'>
     
     {stories.map((story ,key)=>(

       <span className='px-1' key={key}>
      <Link href={`/story/${key+1}`}><section className='story'>{story}</section></Link>
      </span> 
       ))}
    </div>
    
    {
    posts.map((post ,key)=>(

      <Post user={post} key={post}/>
      ))
    }



    </>
  )
}
