import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 bg-black text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'> 
                <h1 className='py-2 md:text-3xl sm:text-3xl text-xl font-bold'>Want tips & tricks to optimize your flow?</h1>
                <p className='font-thin'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                <input className='w-full p-3 rounded-md text-black' type="email" placeholder='Enter Email' />
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-6 my-6 mx-auto py-3 px-2 text-black'>Notify me</button>
           </div>
           <p>we care about the protection of your data. Read our <span className='text-[#00df9a] underline'>Privacy Policy.</span>  </p>
        </div>
         </div>
    </div>
  )
}

export default Newsletter