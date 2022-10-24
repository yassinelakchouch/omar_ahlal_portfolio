import { useNavigate } from 'react-router-dom'
import Feature from '../Components/Feature'
import Hero from '../Components/Hero'
import ImageGallery from '../Components/ImageGallery'
import {AnimationOnScroll} from 'react-animation-on-scroll'

const Home = () => {
     const navigation = useNavigate()
    const photos = [
        "/omar_images/pics/best1.jpg",
        "/omar_images/pics/best2.jpg",
        "/omar_images/pics/best3.jpg"
    ];
    
    return (
        <>
            <div className='mx-auto text-white font-crimson'>
                <Hero />
                <div  className='max-w-5xl mx-auto mt-10  '>
                    <div className='mx-4'>
                    <h1  data-aos="fade-right" data-aos-delay="400" className='text-center md:text-left text-3xl md:text-6xl leading-normal font-semibold '>Hi<span className='text-darkblue'>,</span>
                        I'm Omar Ahlal a passionate photographer !</h1>
                    <p  data-aos="fade-right" data-aos-delay="500" className=' mt-6 text-xl md:text-3xl leading-tight font-medium text-center md:text-justify '>
                        I help brands to improve the quality of their ads to gain customers by using
                        professional and attractive image content based on their purpose and
                        artistically to influence the target audience and special design in the style
                        and touch of the brand.
                    </p>
                    </div>
                </div>
                <Feature  data-aos="zoom-in-down" data-aos-delay="500" text={"Take your business to the next level"} icon={1} id1={"feature1"} id2={"circle1"}/>
                <div id="feature2" className=' mx-auto ' >
                    <div className='max-w-5xl mx-auto'>
                    <h2 data-aos="zoom-in-down" data-aos-delay="500" className=' mx-4 text-center md:text-left font-semibold text-2xl md:text-4xl' >Top 3 Photos I've take it</h2>
                    </div>
                    <div className='mt-8'>
                       <ImageGallery photos={photos} />
                       <div className='w-full overflow-hidden'>
                       <AnimationOnScroll animateIn="animate__jello">
                        
                        <div id="circle2" class="mx-auto mt-8 flex justify-center items-center text-center my-1 p-8 w-24 h-24 bg-transparent border border-x-cyan-50 rounded-full capitalize text-lg md:text-xl "><span className='cursor-pointer' onClick={()=>{window.scrollTo(0,0);navigation('/work')}}>Need More</span></div></AnimationOnScroll>
                        </div>
                    </div>
                </div>
                <Feature  text={"Need an amazing photos for your project"} icon={2} id1={"feature3"} id2={"circle3"} />
            </div>
        </>
    )
}

export default Home