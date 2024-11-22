import { CarImages, CarListing } from './../../../config/schema';
import { storage } from './../../config/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Download } from 'lucide-react';
import React from 'react';
import { IoCloseCircle } from "react-icons/io5";


const UploadImages = (triggerUploadImage,setLoader) => {
    const [selectedFileList,setSelectFileList]=useState([]);
    
    useEffect(()=>{
        if(triggerUploadImage)
        {UploadImageToServer()}

    },[triggerUploadImage])
    
    const onFileSelected=(event)=>{
        const files=event.targer.files;
        
        for(let i=0;i<files?.lenght;i++){
            const file=files[i];
            setSelectFileList((prev)=>[...prev,file])
        }
    }

    const onImageRemove=(image,index)=>{
        const result=selectedFileList.filter((item)=>item!=image);
        setSelectFileList(result)
    }
    const UploadImageToServer=async ()=>{
        setLoader(true);
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
                    console.log(downloadURL);

                    await db.insert(CarImages).values({
                        imageUrl:downloadURL,
                        CarListingid:triggerUploadImage,

                    })
                })
            })

            setLoader(false);
        });
      }


    return (
        <div>
            <h2 className='font-meidum text-xl my-3'>Upload Car Images</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
                {selectedFileList.map((image,index)=> (
                    <div key={index}>
                        <IoCloseCircle className='absolute m-2 text-white'
                        onClick={()=>onImageRemove(image,index)}/>
                        <img src={URL.createObjectURL(image)} className='2-full h-[130px] object-cover'/>        
                     </div>   
                ))}

                <label htmlfor='upload-images'>
                    <div className='border rounded-xl border-dotted border-primary bg-blue-100 p-10'>
                        <h2 className='text-lg text-center'>+</h2>
                    </div>
                </label>
                <input type="file" multiple={true} id='upload-images' className='opacity-0' onChange={onFileSelected}/>
                
            </div>
        </div>
    );
}

export default UploadImages;
