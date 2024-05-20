import React from 'react'
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2 '>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold'>Grow with data.</h1>
                <div className='flex justify-center items-center md:text-4xl sm:text-3xl text-xl font-bold py-4'>
                    <p className='mr-2'>Fast, flexible financing for
                    </p>
                    
                    <ReactTyped
                        className=' pl-2 text-gray-400'
                        strings={['BTB', 'BTC', 'SASS']}
                        typeSpeed ={140}
                        backSpeed={120}
                        loop
                    />
                    
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data  analytics to increase revenue for BTB, BTC and SASS platforms.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero