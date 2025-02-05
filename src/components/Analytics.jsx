import React from 'react'
import Lpatop from '../assets/laptop.jpg'


const Analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 'src={Lpatop} alt ="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>
                    DATA ANALYTICS DASHBOARD
                </p>
                <h1 className='md:text-3xl sm:text-2xl text-xl py-2'>
                    Manage Data Analytics Centrally
                </h1>
                <p className='font-thin'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis obcaecati voluptates est repellat! Temporibus ab, quidem tenetur quibusdam reprehenderit rerum commodi exercitationem quo at placeat impedit ipsum recusandae molestias culpa!
                </p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 text-[#00df9a]'>Get Started</button>
            </div>
           
        </div>
    </div>
  )
}

export default Analytics