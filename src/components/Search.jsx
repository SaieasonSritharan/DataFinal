import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { CiSearch } from "react-icons/ci";
  
function Search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]'>
    <Select>
        <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
        <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="light">New</SelectItem>
        <SelectItem value="dark">Old</SelectItem>
        </SelectContent>
    </Select>
    <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
        <SelectValue placeholder="Make" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="light">Ford</SelectItem>
        <SelectItem value="dark">BMW</SelectItem>
        <SelectItem value="system">Buick</SelectItem>
        </SelectContent>
    </Select>

    <Select>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
        <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="light">$less then 10000</SelectItem>
        <SelectItem value="dark">$10000</SelectItem>
        <SelectItem value="system">more then $10000</SelectItem>
        </SelectContent>
    </Select>
    <div>
    <CiSearch className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transtion-all cursor-pointer'/>
    </div>
  </div>
  )
}

export default Search