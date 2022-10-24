import React, { useEffect, useState } from 'react'
import Feature from '../Components/Feature'
import ImageGallery from '../Components/ImageGallery'

const Work = () => {
  const photos =[ "/omar_images/pics/best1.jpg",
 "/omar_images/pics/best2.jpg",
 " omar_images/pics/best3.jpg",
"/omar_images/pics/pexels-florian-eckerle-13719224.jpg",
 " omar_images/pics/pexels-marek-339379.jpg",
  "/omar_images/pics/pexels-olena-bohovyk-13684830.jpg",
  "/omar_images/pics/pexels-ricardo-oliveira-13952413.jpg"]
  return (
    <>
    <div className=' mx-auto text-white font-crimson'>
    <div className='mx-4'>
<div className='my-8 max-w-5xl text-center md:text-left mx-auto text-3xl md:text-6xl leading-normal font-semibold'>Projects I've Done</div>
</div>
<ImageGallery photos={photos} />
<div className='mx-auto mt-8 flex justify-center items-center text-center p-8 capitalize text-lg md:text-xl'>There is more.. stay tuned..!</div>
<Feature text={"Need an amazing photos for your project"} icon={2} id1={"feature3"} id2={"circle3"} />

</div>
</>
  )
}

export default Work