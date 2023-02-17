import React from 'react'
import Header from './Header'
import First from './First'
import Trending from './Trending'
import Trending1 from '../components/Trending/Trending1'
import Trending2 from './Trending/Trending2'

function Homepage() {

  return (
    <div style={{ fontFamily: 'Light' }}>

      <Header />
      <Trending1 />
      <Trending2 />
      {/* <Trending /> */}

    </div>
  )
}

export default Homepage