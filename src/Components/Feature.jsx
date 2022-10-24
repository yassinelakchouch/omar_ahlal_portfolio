import React, { useEffect } from 'react'
import {FaStarOfLife} from 'react-icons/fa'
import {FaQuestion} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import {AnimationOnScroll} from 'react-animation-on-scroll'
const Feature = ({text,icon,id1,id2}) => {
  const navigation = useNavigate()
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./Bubble.js";
    script.async = true;
    document
        .body
        .appendChild(script);
    
}, [])
  return (
    <div  id={id1} className=' feature my-8 py-5 mx-auto bg-white bg-opacity-10 border-y gap-10 border-cyan-50 flex flex-col justify-center items-center  text-xl md:text-3xl text-white font-crimson font-extralight overflow-hidden' >
    <p className='flex'>
    {text} {
    icon===1?
    <div className='flex items-start'>
        <FaStarOfLife className='text-darkblue text-sm md:text-lg'/>
        </div>
    :
    <div className='flex items-center'>
        <FaQuestion className=' text-darkblue text-sm md:text-lg'/>
        </div>
    }
    </p>
    <AnimationOnScroll animateIn="animate__jello">
    <div  id={id2}   className=" flex justify-center items-center text-center p-8 w-24 h-24 bg-transparent border border-x-cyan-50 rounded-full capitalize text-lg md:text-xl"  ><span className='cursor-pointer' onClick={()=>{window.scrollTo(0,0);navigation('/contact')}}> contact Me</span>
    </div>
    </AnimationOnScroll> 
  </div>
  )
}

export default Feature