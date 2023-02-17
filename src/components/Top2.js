import React from 'react'
import {motion, useViewportScroll, useTransform } from "framer-motion";


function Top2() {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
      

    return (
        <motion.div
        style={{ scale }}
        className='bg-red-600 w-screen h-screen'
      >
        <motion.div
            className='bg-red-600 w-[600px] h-[600px]'
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>
  )
}

export default Top2