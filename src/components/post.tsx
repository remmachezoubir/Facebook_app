import React from 'react'
import { ProfileIcon , ThreepointsIcon , PlusIcon , ShareIcon , LikeIcon , ComentIcon} from './svgIcons'
export default function Post( props :any) {

  const [postexist , setPost]=React.useState(true)
  return postexist?(<div key={props.user} className=' p-1 border-b-4 border-gray-400'>
        <div className='  flex flex-row'>
            <ProfileIcon className=" dark:bg-white rounded-full" />
            <h1 className=' text-lg font-bold mx-2'>{props.user}</h1>
            <ThreepointsIcon className='absolute right-7  dark:fill-white -mt-1 rotate-90'/>
            <button onClick={()=>setPost(!postexist)} className='absolute right-0'>
              <PlusIcon  className=' dark:fill-white h-5 rotate-45'/>
            </button>
        </div>

        <section className='px-4  ' >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis provident rerum, vero repellendus, sint et ut asperiores, aspernatur natus aut culpa maiores ipsum dolorem laudantium itaque facere necessitatibus eaque! Minus.
        </section>

        <section className=' mt-1'>
          <span className=' '>50 haha</span>
          <span className='absolute right-12 mx-2 '>comments</span>
          <span className='absolute right-0 mx-2 '> share</span>
        </section>
        <section className='flex justify-around  h-10   border-t-2  '>
          <button className=' flex flex-row   justify-around  items-center'><LikeIcon   className="dark:fill-white   fill-black  " /><span className='ml-2'>Like</span> </button>
          <button className=' flex flex-row   justify-around  items-center'><ComentIcon className=" dark:stroke-white  stroke-black"   /><span className='ml-2'>Comment</span> </button>
          <button className=' flex flex-row   justify-around  items-center'><ShareIcon  className=" dark:stroke-white  stroke-black"  /><span className='ml-2'>Share</span> </button>
        </section>
    </div>
  ):( <div key={props.user} className='font-semibold mt-2 bg-gray-300 dark:text-black rounded-lg h-12 flex items-center justify-center border-2 '>{props.user} post removed </div>)

}   
