import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import { BsFuelPump } from "react-icons/bs";
import { MdOutlineSpeed } from "react-icons/md";
import { TbManualGearboxFilled } from "react-icons/tb";
import Caritem from './Caritem';


function CarList() {
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