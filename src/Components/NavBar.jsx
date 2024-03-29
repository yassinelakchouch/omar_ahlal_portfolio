import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
export const NavBar = () => {
const location = useLocation()
  
    const navigation = useNavigate();

    const links = [
        {
            id: 0,
            name: "home",
            link: "/"
        }, {
            id: 1,
            name: "work",
            link: "/work"
        }, {
            id: 2,
            name: "contact",
            link: "/contact"
        }
    ]
    return (
        <div
            className='max-w-5xl mx-auto flex flex-col md:flex-row justify-center md:justify-around items-center'>
            <div className='flex justify-center md:justify-start mx-4'>
                <img
                    onClick={() => navigation('/')}
                    className="w-2/6 md:w-1/5 cursor-pointer"
                    src="/omar_images/Logo1.png"
                    alt="logo"/>
            </div>
            <div>
                <ul
                    className='flex justify-around mx-4 gap-20 text-lg md:gap-2 md:text-midium md:flex-col text-white capitalize'>
                    {
                        links.map(
                            ({id, name, link}) => <li
                                key={id}
                                className="font-crimson font-medium hover:scale-105 hover:brightness-200 hover:text-darkblue duration-200 cursor-pointer">
                                <Link 
                                className={location.pathname===link?"active":"inactive"}
                                to={link}>{name}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
