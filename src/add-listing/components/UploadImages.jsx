<<<<<<< HEAD
=======

>>>>>>> 63afb77ae8ce13b94dd24c066cea83f4298185a7
import { storage } from './../../../config/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import { IoCloseCircle } from "react-icons/io5";
<<<<<<< HEAD
import { carpictures } from './../../../config/schema';
import { db } from './../../../config';
function UploadImages(triggerUploadImages){

    useEffect(()=>{
        if(triggerUploadImages)
        {
            UploadImageToServer();
=======
import { useState } from 'react';
import { useEffect } from 'react';
import { CarImages } from './../../../config/schema';
import { db } from './../../../config';



const UploadImages = (triggerUploadImages) => {
    const [selectedFileList,setSelectFileList]=useState([]);
    
    useEffect(()=>{
        if(triggerUploadImages)
        {UploadImagesToServer();}

    },[triggerUploadImages])
    
    const onFileSelected=(event)=>{
        const files=event.target.files;
        

       for(let i=0; i<files?.length;i++){
        const file=files[i];
        setSelectFileList((prev)=>[...prev,file])
>>>>>>> 63afb77ae8ce13b94dd24c066cea83f4298185a7
        }
    },[triggerUploadImages])
    const [selectedFileList,setSelectFileList]=useState([]);

  const onFileSelected = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setSelectFileList((prev) => [...prev, file]);
    }
<<<<<<< HEAD
  }
  const onImageRemove=(image,index)=>{
    const result=selectedFileList.filter((item)=>item!=image);
    setSelectFileList(result);
  }
  const UploadImageToServer= ()=>{
    selectedFileList.forEach((file)=>{
        const fileName=Date.now()+'.jpeg';
        const storageRef=ref(storage,'carsalesDB/'+fileName);
        const metaData={
            contentType:'image/jpeg'
        }
        uploadBytes(storageRef,file,metaData).then((snapShot)=>{
            console.log('Uploaded File');
        }).then(resp=>{
            getDownloadURL(storageRef).then(async(downloadUrl)=>{
                await db.insert(carpictures).values({
                    imageUrl:downloadUrl,
                    carListingId:triggerUploadImages
=======

    const onImageRemove=(image,index)=>{
        const result=selectedFileList.filter((item)=>item!=image);
        setSelectFileList(result)
    }
    
    const UploadImagesToServer= async()=>{
 
       await selectedFileList.forEach(async(file) => {
            const fileName = Date.now()+'.jpeg';
            const storageRef=ref(storage,'carsalesDB/'+fileName)
            const metaData={
                contentType:'image/jpeg'
                
            }
            await uploadBytes(storageRef,file,metaData).then((snapShot) =>{
                console.log('Uploaed file')
            }).then(resp=>{
                getDownloadURL(storageRef).then(async(downloadURL)=>{
                    console.log(downloadURL)
                    console.log(triggerUploadImages)
                
                await db.insert(CarImages).values({
                        imageUrl:downloadURL,
                        CarListingId:triggerUploadImages
                    })

>>>>>>> 63afb77ae8ce13b94dd24c066cea83f4298185a7
                })
            })
        })
    })
  }
  return (
    <div>
      <h2 className='font-medium text-xl my-3'>Upload Car Images</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
        {selectedFileList.map((image, index) => (
          <div key={index}>
            <IoCloseCircle className='absolute m-2 text-white cursor-pointer'
              onClick={() => onImageRemove(image,index)} />
            <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl' alt={`Car ${index + 1}`} />
          </div>
        ))}

<<<<<<< HEAD
        <label htmlFor='upload-images'>
          <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
            <h2 className='text-lg text-center'>+</h2>
          </div>
        </label>
        <input type="file" multiple={true} id='upload-images' className='opacity-0' onChange={onFileSelected} />
      </div>
    </div>
  );
=======
        });
      }


    return (
        <div>
            <h2 className='font-meidum text-xl my-3'>Upload Car Images</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                {selectedFileList.map((image,index)=> (
                    <div key={index}>
                        <IoCloseCircle className='absolute m-2 text-white'
                        onClick={()=>onImageRemove(image,index)}/>
                        <img src={URL.createObjectURL(image)} className='w-full h-[130px] object-cover rounded-xl'/>        
                     </div>   
                ))}

                <label htmlFor='upload-images'>
                    <div className='border rounded-xl border-dotted 
                    border-primary bg-blue-100 p-10 cursor-pointer hover:shadow-md'>
                        <h2 className='text-lg text-center'>+</h2>
                    </div>
                </label>
                <input type="file" multiple={true} id='upload-images' className='opacity-0' onChange={onFileSelected}/>
            </div>
        </div>
    );
>>>>>>> 63afb77ae8ce13b94dd24c066cea83f4298185a7
}

export default UploadImages;