import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'> Movei Name</h1>
        <div className='Banner_Button'>
             <button className='button'>Play</button>   
             <button className='button'>My list</button>
        </div>
        <h1 className='description'>kjyhfjhjhfkjhjkhjh</h1>
      </div>
      <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner
