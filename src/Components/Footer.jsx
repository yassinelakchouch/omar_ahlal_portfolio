import React from 'react'
import {FaWhatsappSquare,FaInstagramSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='my-10  max-w-5xl mx-auto text-center text-white flex justify-between items-center font-serif font-xs md:font-base'>
    <p>Omar Ahlal - 2022 &copy;</p>
    <p>Happy day to see you</p>
    <ul className='flex justify-between gap-6'>
      <li><FaWhatsappSquare className="w-5 h-5 md:w-6 md:h-6  hover:text-darkblue transition delay-150 cursor-pointer "/></li>
      <li><FaInstagramSquare className="w-5 h-5 md:w-6 md:h-6 hover:text-darkblue  transition delay-150 cursor-pointer " /></li>
    </ul>
  </footer>

  )
}

export default Footer