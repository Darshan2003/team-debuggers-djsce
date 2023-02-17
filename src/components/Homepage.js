import React from 'react'
import Header from './Header'


import Trending1 from '../components/Trending/Trending1'
import Trending2 from '../components/Trending/Trending2'
import Trending3 from '../components/Trending/Trending3'

function Homepage() {

  return (
    <div style={{ fontFamily: 'Light' }}>

      <Header />
      <Trending1 />
      <Trending2 />
      <Trending3 />

    </div>
  )
}

export default Homepage