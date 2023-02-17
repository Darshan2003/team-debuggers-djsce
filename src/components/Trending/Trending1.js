import React from 'react'

function Trending1() {
    return (
        <div className='h-screen w-screen'>
            {/* Wrapper div  */}
            <div className='flex justify-center items-center space-x-12'>
                <div className='space-y-4'>
                    <h1 className='text-2xl' style={{
                        fontFamily: 'Medium'
                    }}>Headlines</h1>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                        <img className='w-[500px] h-[250px] object-cover rounded-lg shadow-lg' src="https://c.ndtvimg.com/2021-07/jfi112a8_tesla-generic_625x300_31_July_21.jpg" alt="" />
                        <h1 className='' style={{
                            fontFamily: 'Medium'
                        }}>Tesla Recalls 3.6 Lakh Vehicles Over Self- Driving Software Glitch</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-4'>
                        <img className='w-[500px] h-[250px] object-cover rounded-lg  shadow-lg' src="https://cdn.racingnews365.com/2022/Leclerc/_1125x633_crop_center-center_85_none/8143521/FiAtfG4XoAAlG5.webp?v=1668956734" alt="" />
                        <h1 className='' style={{
                            fontFamily: 'Medium'
                        }}>Vasseur reveals 'adjustments' made after Ferrari strategy issues</h1>
                    </div>
                </div>
                {/* First div */}
                <div className='flex flex-col  justify-center relative '>
                    <h1 className='text-sm text-left p-2' style={{
                        fontFamily: 'Medium'
                    }}>Lifestyle</h1>
                    <h1 className='text-4xl bg-white text-black p-2 rounded-lg absolute z-10 ' style={{
                        fontFamily: 'Medium',
                        top: '30px'
                    }}>8 Things to consider
                    </h1>

                    <h1 className='text-4xl bg-white text-black p-2 rounded-lg absolute z-10 ' style={{
                        fontFamily: 'Medium',
                        top: '80px',
                        left: '-5px'
                    }}>
                        for photography</h1>
                    <img className='rounded-lg h-[670px] w-full object-cover  shadow-lg' src="https://images.unsplash.com/photo-1676624765470-98b4544df2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="img1" />
                </div>
                {/* Second div */}
                <div className='space-y-3'>

                    <div className='space-y-2'>
                        <img className=' rounded-lg w-[220px] h-[280px] object-cover  shadow-lg' src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img2" />
                        <h1 className='text-sm' style={{
                            fontFamily: 'Medium'
                        }}>Property</h1>
                        <h1 className='' style={{
                            fontFamily: 'Medium'
                        }}>Unique architectures in the world</h1>
                    </div>
                    <div className='space-y-2'>
                        <img className='w-56 rounded-lg  shadow-lg' src="https://images.unsplash.com/photo-1618537993538-0690d0976a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhpcGhvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="img2" />
                        <h1 className='text-sm' style={{
                            fontFamily: 'Medium'
                        }}>Music</h1>
                        <h1 className='' style={{
                            fontFamily: 'Medium'
                        }}>This Rapper got kidnapped</h1>
                    </div>
                </div>

            </div>


          
        </div>

    )
}

export default Trending1