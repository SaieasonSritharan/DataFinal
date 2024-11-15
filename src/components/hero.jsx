import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div>
        <div className='flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]'>
        <h2 className='text-lg'>Find cars to buy near you</h2>
        <h2 className='text-[65px] font-bold'>Find your dream car</h2>
        <Search/>
        <img src='/stock2.png' className="mt-5"/>
        </div>
    </div>
  )
}

export default Hero