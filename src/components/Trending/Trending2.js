import React from 'react'

function Trending2() {
  return (
    <div className='h-screen w-screen flex  justify-center '>
     {/* green box */}
     <div className='bg-lime-300 w-[1000px] h-96  rounded-lg p-10 shadow-lg '>

<div className='flex justify-between items-center'>
    <div className='flex justify-center items-center '>
        <h1
            style={{
                fontFamily: 'Medium',
            }}
            className='text-4xl leading-loose'>365 Magazines Straight
            <br />To Your Magazine</h1>
    </div>
    <div className='flex justify-center items-center'>
        <h1 className='tracking-wide '>Sign up to our weekly newsletter to be the first to
            know what's on in South East.</h1>
    </div>
</div>

<div
    style={{
        fontFamily: 'Medium',
    }}
    className='flex justify-between items-center border-t border-black mt-24 pt-3'>
    <input placeholder='Enter your email address' className='outline-none bg-transparent placeholder:text-black' />
    <div className='flex justify-center items-center hover:ease-in-out '>
        <h1 className='cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 '>Subscribe</h1>
    </div>

</div>

</div>
    </div>
  )
}

export default Trending2