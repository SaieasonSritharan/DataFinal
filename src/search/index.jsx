import Header from "@/components/header";
import { db } from "./../../config";
import { CarListing } from "./../../config/schema";
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Search from "@/components/Search";
import Caritem from "@/components/Caritem";

function SearchByOptions() {
    const [searchParams] = useSearchParams();
    const cars = searchParams.get('cars');
    const category = searchParams.get('category');
    const transmission = searchParams.get('transmission'); 
    const [carList, setCarList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log(cars, category, transmission);

    useEffect(() => {
        getCarList();
    }, []);

    const getCarList = async () => {
        setIsLoading(true);
        try {
            const result = await db.select().from(CarListing)
                .where((cars === undefined || eq(CarListing.condition, cars)) &&
                    (category === undefined || eq(CarListing.category, category)) &&
                    (transmission === undefined || eq(CarListing.transmission, transmission))); // Assuming you have a price field
            console.log(result);
            setCarList(result);
        } catch (error) {
            console.error("Error fetching car list:", error);
            // Optionally, display an error message to the user
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <Header />

            <div className="p-10 bg-black flex justify-center">
                <Search />
            </div>
            <div>
                <h2 className="font-bold text-4xl p-10 md:px-20">{category}</h2>
                {isLoading ? (
                    <p>Loading cars...</p>
                ) : (
                    carList.map((item) => (
                        <Caritem key={item.id} car={item} /> 
                    ))
                )}
            </div>
        </div>
    )
}

export default SearchByOptions