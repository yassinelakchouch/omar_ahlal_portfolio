import React from 'react'
import {FaWhatsappSquare,FaInstagramSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='my-10  max-w-5xl mx-auto text-center text-white flex justify-between items-center font-serif font-xs md:font-base flex-col-reverse md:flex-row gap-8  '>
    <p className='mx-4'>Omar Ahlal - 2022 &copy;</p>
    <p >Happy day to see you</p>
    <ul className='flex justify-between gap-6 mx-4'>
      <li><a target='_black' href='https://wasap.my/212657710619'><FaWhatsappSquare className="w-7 h-7 md:w-9 md:h-9  hover:text-darkblue transition delay-150 cursor-pointer"/></a></li>
      <li><a target='_black' href='https://www.instagram.com/omar_ahallal1/?igshid=YmMyMTA2M2Y%3D'><FaInstagramSquare className="w-7 h-7 md:w-9 md:h-9 hover:text-darkblue  transition delay-150 cursor-pointer" /></a></li>
    </ul>
  </footer>

  )
}

export default Footer