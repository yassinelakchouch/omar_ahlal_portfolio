import React, { useState } from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr';
import { TiDelete } from 'react-icons/ti';
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
                    className='w-full h-screen bg-black z-50 fixed top-0 flex justify-center items-center'>
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
             <ResponsiveMasonry className='max-w-5xl mx-auto'
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
            </>
  )
}

export default ImageGallery