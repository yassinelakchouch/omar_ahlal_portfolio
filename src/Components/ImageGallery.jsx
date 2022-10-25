import React, { useState } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr';
import { TiDelete } from 'react-icons/ti';
import {FiImage} from 'react-icons/fi'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const ImageGallery = ({photos}) => {
    const [data, setData] = useState({ img: "", i: 0 })
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
                    className='w-full h-screen bg-black z-50 fixed top-0  flex justify-center items-center'>
                    <TiDelete
                        className='absolute md:top-3  my-5 md:right-6 im:top-4/5 mx-auto bottom-0  cursor-pointer text-white w-16 h-16 md:w-11 md:h-11'
                        onClick={() => imgAction()}
                    />
                    <GrPrevious className='aboslute top-10 right-10 cursor-pointer  bg-white rounded-full p-1 w-8 h-8  md:w-11 md:h-11'
                        onClick={() => imgAction("previous")}
                    />
                    <img src={data.img} className='w-4/5 md:w-auto h-auto p-4 my-2 md:h-full' />
                    <GrNext className='aboslute top-10 right-10 cursor-pointer bg-white p-1 rounded-full text-grey w-8 h-8  md:w-11 md:h-11'
                        onClick={() => imgAction("next")}
                    />

                </div>
            }
            {
              photos.length===0&&
                <>              
                <div className='mt-10 max-w-5xl mx-auto font-crimson text-white flex flex-col items-center gap-5'>
                <FiImage className='w-10 h-10 md:w-20 md:h-20' />
                </div>
                </>

            }

             <ResponsiveMasonry className='max-w-5xl px-2 mx-auto'
                            columnsCountBreakPoints={{ 350: 1, 550: 2, 900: 3 }}
                        >
                            <Masonry columnsCount={3} gutter="20px">
                                {photos.map((img, i) => (
                                    // eslint-disable-next-line jsx-a11y/alt-text
                                    <img
                                        key={i}
                                        src={img}
                                        onClick={() => {viewImage(img, i);}}
                                        data-aos="fade-up" data-aos-delay="500"
                                        className='block w-4/5 md:w-full cursor-pointer mx-auto'
                                    />
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>


            </>
  )
}

export default ImageGallery