import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import Feature from '../Components/Feature'
import ImageGallery from '../Components/ImageGallery'
import { database, storage } from '../firebase';

const Work = () => {
  const [photos, setPhotos] = useState([]);
      /* To get the liste of all images */
 const handleFetch = async () => {
     let temp = []
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
        temp = temp.map((item)=>{
           return item.url
       })
     setPhotos(temp)
       // set data in your any state variable for later use
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