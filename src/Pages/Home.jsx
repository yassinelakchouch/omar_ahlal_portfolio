import { database, storage } from "../firebase";
import {  onValue, ref } from "firebase/database";
import { useNavigate } from 'react-router-dom'
import Feature from '../Components/Feature'
import Hero from '../Components/Hero'
import ImageGallery from '../Components/ImageGallery'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import { useCallback, useEffect, useState } from 'react'
import { toast } from "react-toastify";

const Home = () => {

     const navigation = useNavigate()
     const [photos, setPhotos] = useState([]);
     const [count,setCount] = useState(0)
         /* To get the liste of all images */
    const handleFetch = async () => {
        let temp = []
        const bestPics = []
        const storageRef = storage.ref(`images/`)
        const res = await storageRef.listAll().then(function (result) {
          let path = storageRef.fullPath
          path = path.replace(/\b\/\b(?!.*?\b\/\b)/, "%2F");
          path = "https://firebasestorage.googleapis.com/v0/b/omar-dashboard.appspot.com/o/" + path;
          result.items.forEach(async (fileRef) => {
            temp.push({
              name: fileRef.name,
              url: path + "%2F" + fileRef.name + "?alt=media"
            })
          });
        })
        .then(() => {

          const photoRef = ref(database, "/photos/");
          onValue(photoRef, (snapshot) => {
            // console.log(snapshot)
            const data = snapshot.val();
            //updateStarCount(postElement, data);
    
            if (snapshot.exists()) {
              let _StarredPhotos = []
              let _NoStarredPhotos = []
              temp.map((e)=>{
                const nameToUse = encodeURIComponent(e?.name).replace('.', "%2E")
                const isStarred = (data?.[nameToUse])?true:false;
                if(data?.[nameToUse]) _StarredPhotos.push({...e,star:isStarred})
                else _NoStarredPhotos.push({...e,star:isStarred})
              })
              temp = [..._StarredPhotos,..._NoStarredPhotos]
            }
    
          });
           temp.map((item)=>{
            if(item.star){
            bestPics.push(item.url)
            }
          })
        
          // set data in your any state variable for later use
          setCount(bestPics.length)
          setPhotos(bestPics)
        })
        .catch(error => {
          console.log(error);
          toast("Something went wrong while refreshing",{type:'error'})
        })
    }

    const handleGetData = useCallback(async () => {
        await handleFetch()
      }, []);
  
      useEffect(() => {
        async function fetchData() {
          await handleGetData()
        }
        fetchData();
      }, [handleGetData,setPhotos,photos]);
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
                    <h2 data-aos="zoom-in-down" data-aos-delay="500" className=' mx-4 text-center md:text-left font-semibold text-2xl md:text-4xl' >Top {count} Photos I've take it</h2>
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