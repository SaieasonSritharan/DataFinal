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

function Caritem({car}) {
  return (
    <div><div className=' bg-white hover:shadow-md cursor-pointer'>
    <div className="border p-4 rounded flex items-center"> 
    <img
        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg"
        width={'100%'} height={150} alt="Auto Sales" 
        className='rounded-t-xl'
        
      />
    </div>
    <h3 className="font-bold text-lg mb-2">{car?.listingTitle}</h3>

      <div className='grid grid-cols-3 mt-3'>
        <div className='flex flex-col items-center'>
        <BsFuelPump className='text-lg mb-2' />
        <h2>{car.mileage} Miles</h2>
        </div>
        <div className='flex flex-col items-center'>
        <MdOutlineSpeed className='text-lg mb-2' />
        <h2>{car.fueltype}</h2>
        </div>
        <div className='flex flex-col items-center'>
        <TbManualGearboxFilled className='text-lg mb-2' />
        <h2>{car.transmission}</h2>
        </div>
        <div className='flex flex-row items-center justify-between col-span-3'> {/* Changed to col-span-3 */}
                  <h2 className=' font-bold text-xl'>${car.sellingPrice}</h2>
                  <h2>View Details</h2> 
        </div>
      </div>
      </div>
      </div>
  )
}

export default Caritem