import React, { useState } from 'react'
import Feature from '../Components/Feature'
import Hero from '../Components/Hero'
import { TiDelete } from 'react-icons/ti'
import { GrCaretNext, GrCaretPrevious ,GrNext,GrPrevious} from 'react-icons/gr'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
const Home = () => {
    const [data, setData] = useState({ img: "", i: 0 })
    const photos = [
        "/omar_images/pics/best1.jpg",
        "/omar_images/pics/best2.jpg",
        "/omar_images/pics/best3.jpg"
    ];
    
    const imgAction = (action) => {
        let i = data.i;
                if (action === "next") {
            setData({ img: photos[(i + 1 > photos.length - 1 ? 0 : i + 1)], i: (i + 1 > photos.length - 1 ? 0 : i + 1) })
        }
        if (action === "previous") {
            setData({ img: photos[(i - 1 < 0 ? photos.length - 1 : i - 1)], i: (i - 1 < 0 ? photos.length - 1 : i - 1) })
        }
        if (!action) {
            setData({ img: '', i: 0 })
            document.querySelector("body").style.overflow = "auto"
        }
    }
    const viewImage = (img, i) => {
        setData({ img, i });
        document.querySelector("body").style.overflow = "hidden"
    }
    return (
        <>
            {
                data.img &&
                <div
                    className='w-screen h-screen bg-black z-50 fixed top-0 flex justify-center items-center'>
                    <TiDelete
                        className='absolute top-1 right-7 md:top-3 md:right-6 cursor-pointer text-white w-8 h-8 md:w-11 md:h-11'
                        onClick={() => imgAction()}
                    />
                    <GrPrevious className='aboslute top-10 right-10 cursor-pointer  bg-white rounded-full p-1 w-8 h-8  md:w-11 md:h-11'
                        onClick={() => imgAction("previous")}
                    />
                    <img src={data.img} className='w-auto max-w-full max-h-full' />
                    <GrNext className='aboslute top-10 right-10 cursor-pointer bg-white p-1 rounded-full text-grey w-8 h-8  md:w-11 md:h-11'
                        onClick={() => imgAction("next")}
                    />

                </div>
            }
            <div className='mx-auto text-white font-crimson'>
                <Hero />
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
                <Feature text={"Take your business to the next level"} icon={1} id1={"feature1"} id2={"circle1"}/>
                <div id="feature2" className=' max-w-5xl mx-auto '>
                    <h2 className='font-semibold text-2xl md:text-4xl'>Top 3 Photos I've take it</h2>
                    <div className='mt-8 '>
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                        >
                            <Masonry columnsCount={3} gutter="20px">
                                {photos.map((img, i) => (
                                    // eslint-disable-next-line jsx-a11y/alt-text
                                    <img
                                        key={i}
                                        src={img}
                                        style={{ width: "100%", display: "block", cursor: "pointer", }}
                                        onClick={() => {viewImage(img, i);}}
                                    />
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                        <div id="circle2" class="mx-auto mt-8 flex justify-center items-center text-center p-8 w-24 h-24 bg-transparent border border-x-cyan-50 rounded-full capitalize text-lg md:text-xl "><span className='cursor-pointer'>Need More</span></div>
                    </div>
                </div>
                <Feature text={"Need an amazing photos for your project"} icon={2} id1={"feature3"} id2={"circle3"} />
            </div>
        </>
    )
}

export default Home