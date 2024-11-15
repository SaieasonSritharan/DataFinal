import React from 'react';

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
      price: Math.floor(Math.random() * 90000) + 10000, // Generate a price between 10,000 and 100,000
    };
  }
const carList = [];
for (let i = 0; i < 7; i++) {
  carList.push(createRandomCarList());
}

function CarList() {
  return (
    <div>
      <h2 className='font-bold text-center text-3xl my-16'>
        Most Searched Cars
      </h2>
      <ul>
        {carList.map((car, index) => (
            <div>
          <li key={index} className="p-4 my-2 rounded ">
            <h3 className="font-bold">{car.name}</h3>
            <p>Fuel Type: {car.fuelType}</p>
            <p>Model: {car.model}</p>
            <p>Type: {car.type}</p>
            <p>Miles: {car.miles}</p>
            <p>Gear Type: {car.gearType}</p>
            <p>Price: ${car.price}</p>
          </li>
          <img 
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg" 
              alt="Car" 
              className="flex w-200 h-200 ml-auto"  
            />
          </div>

        ))}
      </ul>
      
    </div>
  );
}

export default CarList;