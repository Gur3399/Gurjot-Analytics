import React from 'react'
import Single from '../assets/Single.png'
import Double from '../assets/Double.png'
import Triple from '../assets/Triple.png'

const Cards = () => {
  return (
    <div className='bg-white w-full py-[10rem] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
            <div className='w-full shadow-xl flex flex-col p-4 my-5 rounded-lg hover:scale-105 duration-300'>
                <img src={Single} className='w-20 mx-auto mt-[-3rem]'alt="/" />
                <h1 className='font-bold text-2xl text-center py-8'>Single User</h1>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Sends up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-2 text-black'>Start Trial</button>
             </div>
             <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4  md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img src={Double} className='w-20 mx-auto mt-[-3rem]'alt="/" />
                <h1 className='font-bold text-2xl text-center py-8'>Partnership</h1>
                <p className='text-center text-4xl font-bold'>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Sends up to 2 GB</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-2 text-[#00df9a]'>Start Trial</button>
             </div>
             <div className='w-full shadow-xl flex flex-col p-4 my-5 rounded-lg hover:scale-105 duration-300 '>
                <img src={Triple} className='w-20 mx-auto mt-[-3rem]'alt="/" />
                <h1 className='font-bold text-2xl text-center py-8'>Group Account</h1>
                <p className='text-center text-4xl font-bold'>$299</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Sends up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-2 text-black'>Start Trial</button>
             </div>
             
        </div>
    </div>
  )
}

export default Cards