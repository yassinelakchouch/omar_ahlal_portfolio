import React from 'react'
import {TbFaceIdError} from 'react-icons/tb'
const Error = () => {
  return (
    <div className='mt-10 max-w-5xl mx-auto font-crimson text-white flex flex-col items-center gap-5'>
      <TbFaceIdError className='w-10 h-10 md:w-20 md:h-20'/>
      <h1 className='text-3xl md:text-7xl leading-normal font-semibold'>Error 404</h1>
      <p className='mt-6 text-xl md:text-3xl leading-tight font-medium text-justify'>we could not find this page !</p>
      </div>
  )
}

export default Error