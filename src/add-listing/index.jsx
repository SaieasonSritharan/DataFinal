import Header from '@/components/header'
import React, { useState } from 'react'
import carDetails from './../Shared/carDetails.json'
import InputField from './components/InputField'
import DropDownField from './components/DropDownField'
import TextAreaField from './components/TextAreaField'
import { Checkbox } from "@/components/ui/checkbox"
import features from './../Shared/features.json'
import { Button } from '@/components/ui/button'
import { db } from './../../config'
import { CarListing } from './../../config/schema'
import UploadImages from './components/UploadImages'
import { Separator } from '@radix-ui/react-select'
import { AiOutlineLoading3Quarters } from "react-icons/ai";


function AddListing() {
  const [formData, setFormData] = useState({}); 
  const [featuresData, setFeaturesData]=useState([]);
  const [triggerUploadImage,setTriggerUploadImage]=useState();
  const [loader,setLoader]=useState(false);

  /** use to capture User data from form */
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  }
 /** use to capture Feature tick box*/
  const handleFeatureChange=(name,values)=>{
    setFeaturesData((prev)=>({
      ...prevData,
      [name]:value
    }))

    console.log(FeaturesData);
  }

  const onSubmit=async(e)=>{
    setLoader(true);
    e.preventDefualt();
    console.log(formData);
    try
    {
    const result=await db.inset(CarListing).value({
      ...formData,
      features:featuresData
    }).returning({id:CarListing.id})
    if(result)
    {
      console.log("Data Saved")
      setTriggerUploadImage(result[0]?.id);
      setLoader(false);
    }
    }catch(e){
      console.log("Error", e)
    }
  }
 
  return (
    <div>
      <Header />
      <div className='px-10  md:px-20 my-10'>
        <h2 className='font-bold text-4xl'>Add New Listing</h2>
        <form>
          <div className='p-10 border rounded-xl mt-10'>
            <h2 className='font-medium text-xl mb-6'>Car Details</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className='text-sm'>{item?.label}{item.required && <span className='text-red-500'>*</span>}</label>
                  {item.fieldType == 'text' || item.fieldType == 'number'
                    ? <InputField item={item} handleInputChange={handleInputChange} />
                    : item.fieldType == 'dropdown' ? <DropDownField item={item} handleInputChange={handleInputChange}/>
                      : item.fieldType == 'textarea' ? <TextAreaField item={item} handleInputChange={handleInputChange} />
                        : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6"/>
          <div>
            <h2 className='font-medium text-xl my-6'>Features</h2>
            <div className='grid grid-cols-2 md:grid-cols-3'>
              {features.features.map((item, index) => (
                <div key={index} className='flex gap-2 items-center'>
                  <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name,value)} /><h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
          /**Car image */
          <Separator className="my-6"/>
          <UploadImages triggerUploadImage={triggerUploadImage}
          setLoader={(v)=>setLoader(v)}/>
          <div className='mt-10 flex justify-end'>
            <Button type='button'
            disabled={loader} onClick={(e)=>onSubmit(e)}>
              {!loader?'Submit':<AiOutlineLoading3Quarters className='animate-spin text-lg'/>}

              </Button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default AddListing