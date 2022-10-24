import React from 'react'

const Hero = () => {
    return (
        <div className='mt-10 flex-col justify-center items-center  text-center text-white font-butler text-4xl  md:text-7xl font-semibold uppercase'>
            <div className='flex flex-col gap-5'>
            <div>creative</div>
            <div className='flex flex-wrap justify-center'>
                <img
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    className="p-1 bg-white border rounded max-w-sm  overflow-hidden"
                    src="/omar_images/pexels-andre-furtado-1264210.jpg"
                    alt=""/>
            </div>
            <div>photographer</div>
            <div>Omar</div>
            </div>
        </div>
    )
}

export default Hero