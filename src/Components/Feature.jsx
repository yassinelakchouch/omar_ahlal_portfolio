import React from 'react'
import {FaStarOfLife} from 'react-icons/fa'
import {FaQuestion} from 'react-icons/fa'
const Feature = ({text,icon}) => {
  return (
    <div className='my-8 py-5 mx-auto bg-white bg-opacity-10 border-y gap-10 border-cyan-50 flex flex-col justify-center items-center  text-xl md:text-3xl text-white font-crimson font-extralight'>
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
    <div class=" flex justify-center items-center text-center p-8 w-24 h-24 bg-transparent border border-x-cyan-50 rounded-full capitalize text-lg md:text-xl">contact us</div>
  </div>
  )
}

export default Feature