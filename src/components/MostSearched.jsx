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

function createRandomCarList() {
    const names = ["Toyota Camry", "Honda Civic", "Ford F-150", "Chevrolet Silverado", "Tesla Model 3", "BMW X5", "Audi A4"];
    const fuelTypes = ["Gasoline", "Diesel", "Electric", "Hybrid"];
    const models = ["Sedan", "SUV", "Truck", "Hatchback", "Coupe"];
    const types = ["Economy", "Luxury", "Sports", "Off-road"];
  
    function getRandomItem(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    }
  
    return {
      name: getRandomItem(names),
      fuelType: getRandomItem(fuelTypes),
      model: getRandomItem(models),
      type: getRandomItem(types),
      miles: 1000,
      gearType: "Automatic",
      price: Math.floor(Math.random() * 90000) + 9999.99, // Generate a price between 10,000 and 100,000
    };
  }
const carList = [];
for (let i = 0; i < 7; i++) {
  carList.push(createRandomCarList());
}

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
            <div className=' bg-white hover:shadow-md cursor-pointer'>
              <div className="border p-4 rounded flex items-center"> 
              <img
                  src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg"
                  width={'100%'} height={150} alt="Auto Sales" 
                  className='rounded-t-xl'
                  
                />
              </div>
              <h3 className="font-bold text-lg mb-2">{car.name}</h3>

                <div className='grid grid-cols-3 mt-3'>
                  <div className='flex flex-col items-center'>
                  <BsFuelPump className='text-lg mb-2' />
                  <h2>{car.miles} Miles</h2>
                  </div>
                  <div className='flex flex-col items-center'>
                  <MdOutlineSpeed className='text-lg mb-2' />
                  <h2>{car.fuelType}</h2>
                  </div>
                  <div className='flex flex-col items-center'>
                  <TbManualGearboxFilled className='text-lg mb-2' />
                  <h2>{car.gearType}</h2>
                  </div>
                  <div className='flex flex-row items-center justify-between col-span-3'> {/* Changed to col-span-3 */}
                            <h2 className=' font-bold text-xl'>${car.price}</h2>
                            <h2>View Details</h2> 
                  </div>
                </div>
                </div>
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