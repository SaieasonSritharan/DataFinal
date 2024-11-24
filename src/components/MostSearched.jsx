import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import Caritem from './Caritem';
import { CarListing } from './../../config/schema';
import { desc } from 'drizzle-orm';
import { db } from './../../config';

function CarList() {
  const [carList,setCarList]=useState([]);
useEffect(()=>{
  GetPopularCarlist();
}, []);
const GetPopularCarlist=async()=>{
  const result=await db.select().from(CarListing)
    .orderBy(desc(CarListing.id)) 
    .limit(10)
    console.log(result);
    setCarList(result);
};
  return (
    <div className='mx-24'>
      <h2 className='font-bold text-center text-3xl mt-16 mb-16'>
        Most Searched Cars
      </h2>
      <Carousel>
        <CarouselContent>
          {carList.map((car, index) => (
            <CarouselItem key={index} className='basis-1/3'> 
           <Caritem car={car} key={index}/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default CarList;