import React, { useState } from 'react'
import Header from './components/Header'
import Images from './components/Images'

const App = () => {
  const [issearch,setissearch]=useState(false);
  const [searchimg,setsearchimg]=useState([]);
  return (
    <div className='container'>
      <Header issearch={issearch} setissearch={setissearch} searchimg={searchimg} setsearchimg={setsearchimg} />
      <Images issearch={issearch} setissearch={setissearch} searchimg={searchimg} setsearchimg={setsearchimg} />
    </div>
  )
}

export default App