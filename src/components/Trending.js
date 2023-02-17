import React from 'react'
import First from './First'


function Trending() {
  let desc = 'In other news, Union Home Minister Amit Shah is set to arrive in Maharashtra today for a three-day visit. During his trip, Shah will attend events in Nagpur, Pune and Kolhapur. His arrival comes ahead of the Kasbapeth and Pimpri-Chinchwad Assembly by-elections on February 26.'
  let headline = "Mumbai News Live Updates: On Sena crisis, SC says decision on Nabam Rebia ruling can't be decided in abstract, to hear merits of case"
  
  return (
    <div className='md:flex md:justify-center md:items-center '>
      <First headline={headline} desc={desc}/>
      <First headline={headline} desc={desc}/>
      <First headline={headline} desc={desc}/>
      <First headline={headline} desc={desc}/>
    </div>
  )
}

export default Trending