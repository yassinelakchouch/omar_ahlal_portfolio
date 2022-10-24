import React from 'react'
import {FaWhatsappSquare,FaInstagramSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='my-10  max-w-5xl mx-auto text-center text-white flex justify-between items-center font-serif font-xs md:font-base flex-col-reverse md:flex-row gap-8  '>
    <p className='mx-4'>Omar Ahlal - 2022 &copy;</p>
    <p >Happy day to see you</p>
    <ul className='flex justify-between gap-6 mx-4'>
      <li><FaWhatsappSquare className="w-7 h-7 md:w-9 md:h-9  hover:text-darkblue transition delay-150 cursor-pointer "/></li>
      <li><FaInstagramSquare className="w-7 h-7 md:w-9 md:h-9 hover:text-darkblue  transition delay-150 cursor-pointer " /></li>
    </ul>
  </footer>

  )
}

export default Footer