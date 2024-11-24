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
import { useUser } from '@clerk/clerk-react'
import moment from 'moment'
function AddListing() {
<<<<<<< HEAD
  const [formData, setFormData] = useState({});
  const [featuresData, setFeaturesData] = useState([]);
  const [triggerUploadImages, setTriggerUploadImages] = useState();
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({}); 
  const {user}=useUser();
=======
  const [formData, setFormData] = useState({}); 
  const [featuresData, setFeaturesData]=useState([]);
  const [triggerUploadImages,setTriggerUploadImages]=useState();
  const [loader,setLoader]=useState(false);

  /** use to capture User data from form */
>>>>>>> 63afb77ae8ce13b94dd24c066cea83f4298185a7
  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for the field when the user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined })); 
  }
<<<<<<< HEAD

  const handleFeatureChange = (name, values) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: values
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    carDetails.carDetails.forEach((item) => {
      if (item.required && !formData[item.name]) {
        newErrors[item.name] = `${item.label} is required`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return; 
=======
 /** use to capture Feature tick box*/
  const handleFeatureChange=(name,values)=>{
    setFeaturesData((prevData)=>({
      ...prevData,
      [name]:values
    }))

    console.log(featuresData);
  }

  const onSubmit=async(e)=>{
    e.preventDefault();
    console.log(formData);
    try
    {
    const result=await db.insert(CarListing).values({
      ...formData,
      features:featuresData
    }).returning({id:CarListing.id});
    if(result)
    {
      console.log("Data Saved")
      setTriggerUploadImages(result.id);
      
>>>>>>> 63afb77ae8ce13b94dd24c066cea83f4298185a7
    }

    setLoader(true); 
    try {
      const result = await db.insert(CarListing).values({
        ...formData,
        features: featuresData,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        postedOn:moment().format('DD/MM/YYYY')
      }).returning({ id: CarListing.id });
      if (result) {
        console.log("Data Saved")
        setTriggerUploadImages(result[0].id);
      }
    } catch (e) {
      console.log("Error", e)
    } finally {
      setLoader(false); 
    }
  }

  return (
    <div>
      <Header />
      <div className='px-10 md:px-20 my-10'>
        <h2 className='font-bold text-4xl'>Add New Listing</h2>
        <form>
          <div className='p-10 border rounded-xl mt-10'>
            <h2 className='font-medium text-xl mb-6'>Car Details</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className='text-sm'>
                    {item?.label}
                    {item.required && <span className='text-red-500'>*</span>}
                  </label>
                  {item.fieldType === 'text' || item.fieldType === 'number' ? (
                    <InputField item={item} handleInputChange={handleInputChange} error={errors[item.name]} />
                  ) : item.fieldType === 'dropdown' ? (
                    <DropDownField item={item} handleInputChange={handleInputChange} error={errors[item.name]} />
                  ) : item.fieldType === 'textarea' ? (
                    <TextAreaField item={item} handleInputChange={handleInputChange} error={errors[item.name]} />
                  ) : null}
                  {errors[item.name] && (
                    <p className="text-red-500 text-xs mt-1">{errors[item.name]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-6" />
          <div>
            <h2 className='font-medium text-xl my-6'>Features</h2>
            <div className='grid grid-cols-2 md:grid-cols-3'>
              {features.features.map((item, index) => (
                <div key={index} className='flex gap-2 items-center'>
                  <Checkbox onCheckedChange={(value) => handleFeatureChange(item.name, value)} />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>
<<<<<<< HEAD

          <Separator className="my-6" />
          <UploadImages triggerUploadImages={triggerUploadImages} />
          <div className='mt-10 flex justify-end'>
            <Button type='button' onClick={(e) => onSubmit(e)}>
              {!loader ? 'Submit' : <AiOutlineLoading3Quarters className='animate-spin text-lg' />}
            </Button>
=======
          
          <Separator className="my-6"/>
          <UploadImages triggerUploadImages={triggerUploadImages}/>
          <div className='mt-10 flex justify-end'>
            <Button type='button'
           onClick={(e)=>onSubmit(e)}>
              {!loader?'Submit':<AiOutlineLoading3Quarters className='animate-spin text-lg'/>}
              </Button>
>>>>>>> 63afb77ae8ce13b94dd24c066cea83f4298185a7
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddListing