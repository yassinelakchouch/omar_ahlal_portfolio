import React from 'react'
import Hero from '../Components/Hero'
import FaStarOfLife from 'react-icons/'
const Home = () => {
  return (
    <div className='max-w-5xl mx-auto'>
      <Hero />
      <div className='mt-10 text-white font-crimson'>
        <h1 className='text-3xl md:text-6xl leading-normal font-semibold '>Hi<span className='text-darkblue'>,</span> I'm Omar Ahlal a passionate photographer !</h1>
        <p className='mt-6 text-xl md:text-3xl leading-tight font-medium text-justify'>
        I help brands to improve the quality of their ads to gain customers by using professional and attractive image content based on their purpose and artistically to influence the target audience and special design in the style and touch of the brand.
        </p>
      </div>
      <div>
        <p>
        Take your business to the next level 
        </p>
      </div>
    </div>
  )
}

export default Home