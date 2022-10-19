import React from 'react'
export const NavBar = () => {
    const links = [
        {
          id:0,
          link:"home",
        },        
        {
          id:1,
          link:"work",
        },       
         {
          id:2,
          link:"contact",
        }
    ]
  return (
    <div className='max-w-5xl mx-auto flex flex-col md:flex-row justify-center md:justify-around items-center'>
        <div className='flex justify-center md:justify-start'>
       <img className="w-2/6 md:w-1/5 cursor-pointer" src="/omar_images/Logo1.png" alt="logo"/>
       </div>
       <div>
        <ul className='flex justify-around mx-2 gap-20 text-lg md:gap-2 md:text-base md:flex-col text-white capitalize'>
             {
                links.map(({id, link})=>
                    <li key={id} className=" font-crimson font-medium hover:scale-105 hover:brightness-200 hover:text-darkblue duration-200 cursor-pointer">
                      {link}
                    </li>
                )
             }
        </ul>
       </div>
    </div>
  )
}
