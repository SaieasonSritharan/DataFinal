import Header from "@/components/header";
import Search from "@/components/Search";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./../../../config";
import { CarListing } from "./../../../config/schema";
import { eq } from "drizzle-orm";
import Caritem from "@/components/Caritem";

function SearchByCategory() {
  const { category } = useParams();
  const [carList, SetCarList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCarList();
  }, []);

  const getCarList = async () => {
    setIsLoading(true);
    try {
      const result = await db
        .select()
        .from(CarListing)
        .where(eq(CarListing.category, category));
      SetCarList(result);
    } catch (error) {
      console.error("Error fetching car list:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
  );
}

export default SearchByCategory;