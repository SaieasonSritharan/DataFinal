import Header from '@/components/header'
import Search from '@/components/Search'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from './../../../config'
import { CarListing } from './../../../config/schema'
import { eq } from 'drizzle-orm';


function SearchByCategory() {
    const {category}=useParams();
    const [carList,SetCarList]=useState([]);
    useEffect(()=>{
        GetCarList();
    },[])
 const GetCarList=async()=>{
        const result=await db.select().from(CarListing).where(eq(CarListing.category,category))
       SetCarList(result);
    }
    
  return (
    <div>
        <Header/>

        <div className='p-10 bg-black flex justify-center'>
            <Search/>
        </div>
        <div>
            <h2 className='font-bold text-4xl p-10 md:px-20'>{category}</h2>
        {carList.map((item,index)=>{
            <div key={index}>
                <CarItem car={item}/>

            </div>
        })}
        </div>
    </div>
  )
}

export default SearchByCategory