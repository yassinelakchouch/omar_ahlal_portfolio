import React, { useState } from 'react'
import Feature from '../Components/Feature'
import Hero from '../Components/Hero'
import {TiDelete} from 'react-icons/ti'
import {GrCaretNext,GrCaretPrevious} from 'react-icons/gr'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
const Home = () => {
    const [data,setData] = useState({img:"",i:0})
    const photos = [
            "/omar_images/pics/best1.jpg",
            "/omar_images/pics/best2.jpg",
            "/omar_images/pics/best3.jpg"
    ];
    const imgAction = (action)=>{
        
    }
    const viewImage = (img,i)=>{
        setData({img,i});
    }
    return (
        <>
        {
            data.img&&
            <div
            className='w-screen h-screen bg-black fixed top-0 flex justify-center items-center'>
                <TiDelete 
                className='absolute top-3 right-6 cursor-pointer text-white w-6 h-6 md:w-11 md:h-11'
                onClick={()=>{}}
                />
                <GrCaretNext className='cursor-pointer text-white w-6 h-6 md:w-11 md:h-11'/>
                <GrCaretPrevious className='cursor-pointer text-white w-6 h-6 md:w-11 md:h-11'/>
               <img src={data.img}  className='w-auto max-w-full max-h-full '/>
            </div>
        }
        <div className='mx-auto text-white font-crimson'>
            <Hero/>
            <div className='max-w-5xl mx-auto mt-10  '>
                <h1 className='text-3xl md:text-6xl leading-normal font-semibold '>Hi<span className='text-darkblue'>,</span>
                    I'm Omar Ahlal a passionate photographer !</h1>
                <p className='mt-6 text-xl md:text-3xl leading-tight font-medium text-justify'>
                    I help brands to improve the quality of their ads to gain customers by using
                    professional and attractive image content based on their purpose and
                    artistically to influence the target audience and special design in the style
                    and touch of the brand.
                </p>
            </div>
            <Feature text={"Take your business to the next level"} icon={1}/>
            <div className='max-w-5xl mx-auto '>
                <h2 className='font-semibold text-2xl md:text-4xl'>Top 3 Photos I've take it</h2>
                <div className='mt-8'>
                <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry columnsCount={3} gutter="20px">
                {photos.map((img, i) => (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img
                        key={i}
                        src={img}
                        style={{width: "100%", display: "block",cursor:"pointer"}}
                        onClick={()=>viewImage(img, i)}
                    />
                ))}
            </Masonry>
            </ResponsiveMasonry>
                </div>
            </div>
            <Feature text={"Need an amazing photos for your project"} icon={2}/>
        </div>
        </>
    )
}

export default Home