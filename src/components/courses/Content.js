import React, { useEffect } from 'react'
import { useState } from 'react'
import { storage } from '../../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';
import './Content.css';

function Content({course, topic, video, files}) {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  
  const imageListRef = ref(storage, `${course}/${topic}/`);

  const uploadImage = () => {
    if(imageUpload == null){
      return;
    }
    
    const imageRef = ref(storage, `${course}/${topic}/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) =>{
        setImageList((prev) => [...prev, url])
      })
    })
  };

  useEffect(() => {
    var div = document.getElementById('links');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    listAll(imageListRef).then((response)=>{
      response.items.forEach((items) => {
        getDownloadURL(items).then((url) => {
          setImageList((prev)=>[...prev, url])
        })
      })
    });
  }, [topic]);

  return (
    <div className='content'>
        <div className='inputs'>
          <input type='file' onChange={(event) => {setImageUpload(event.target.files[0])}}/>
          <button onClick={uploadImage}>Upload</button>
        </div>

        <div className='links' id = 'links'>
          {
            imageList.map((url)=>{
              return <a className='file' target="_blank" href={url}>FILE</a>;
            })
          }
        </div>
        
    </div>
  )
}

export default Content