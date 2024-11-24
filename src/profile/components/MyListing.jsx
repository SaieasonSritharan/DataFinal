import { Button } from '@/components/ui/button'
import { db } from './../../../config'
import { CarListing } from './../../../config/schema'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';
import Caritem from '@/components/Caritem';

function MyListing() {
  const { user } = useUser();
  const [carList, setCarList] = useState([]); // Add state for carList

  useEffect(() => {
    user && GetUserCarListing();
  }, [user])

  const GetUserCarListing = async () => {
    try {
      const result = await db.select().from(CarListing)
        .orderBy(desc(CarListing.id))
        .where(eq(CarListing.createdBy, user?.primaryEmailAddress?.emailAddress));
      console.log(result);
      setCarList(result); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  }

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-4xl'>My Listing</h2>
        <Link to={'/add-listing'}>
          <Button>+ Add New Listing</Button>
        </Link>
      </div>
      <div>
        {carList.map((item, index) => ( // Correct map syntax
          <div key={index}>
            <Caritem car={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyListing