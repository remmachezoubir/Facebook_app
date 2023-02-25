import React from 'react'
import { ProfileIcon , PlusIcon } from '@/components/svgIcons'
import Link from 'next/link'
type Myid ={
    params :{
        id:String
    }
}
export default function Story({params : {id}}:Myid) {
  return (
   <div className='storyPage'>
    <ProfileIcon className='inline'/>
    <span className=' ml-2'>
       user {id}
        </span>
    <Link href={'/'}>
    <PlusIcon className=" rotate-45 absolute right-0 top-0"/>
    </Link>

    <section className=''> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur, repudiandae, magnam vitae ex eaque praesentium vel maiores distinctio quasi dicta odit adipisci quaerat corporis quam repellendus recusandae ipsam impedit.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum tempore harum atque tenetur deleniti voluptatum error nesciunt iusto nisi minima saepe, alias sapiente consequuntur, earum aliquid amet omnis? Nam, aut.
    </section>
   </div>
  )
}
