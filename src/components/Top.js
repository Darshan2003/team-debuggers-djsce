import React from 'react'
import {motion, useViewportScroll, useTransform } from "framer-motion";


function Top() {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
      

    return (
        <div className='flex justify-center items-center bg-green-600 w-screen h-screen '>
        <div
            className='bg-pink-600 w-[600px] h-[600px]'
        >
        </div>
      </div>
  )
}

export default Top;
