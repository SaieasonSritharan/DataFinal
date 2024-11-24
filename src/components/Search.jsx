import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
  
function Search() {
  const [cars,setCars]=useState();
  const [make,setMake]=useState();
  const [price,setPrice]=useState();
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]'>
    <Select onValueChange={(value)=>setCars(value)}>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
        <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="New">New</SelectItem>
        <SelectItem value="Used">Used</SelectItem>
        <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
        </SelectContent>
    </Select>
    <Select onValueChange={(value)=>setMake(value)}>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
        <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="Sedan">Sedan</SelectItem>
        <SelectItem value="SUV">SUV</SelectItem>
        <SelectItem value="Truck">Truck</SelectItem>
        <SelectItem value="Coupe">Coupe</SelectItem>
        <SelectItem value="Convertible">Convertible</SelectItem>
        <SelectItem value="Hatchback">Hatchback</SelectItem>
        <SelectItem value="Electric">Electric</SelectItem>
        <SelectItem value="Hybrid">Hybrid</SelectItem>
        </SelectContent>
    </Select>

    <Select onValueChange={(value)=>setPrice(value)}>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
        <SelectValue placeholder="Transmission" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="Automatic">Automatic</SelectItem>
        <SelectItem value="Manual">Manual</SelectItem>
        <SelectItem value="CVT">CVT</SelectItem>
        </SelectContent>
    </Select>
    <Link to={'/search?cars='+cars+'&category='+make+'&transmission='+price}>
    <CiSearch className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transtion-all cursor-pointer'/>
    </Link>
  </div>
  )
}

export default Search