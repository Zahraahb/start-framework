import React from 'react'
import homeImg from '../assets/avataaars.svg'
import { Helmet } from 'react-helmet'



export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className=' mainSec d-flex align-items-center'>
        <div className=' home container text-center text-white d-flex flex-column '>
          <img src={homeImg} alt="home" className='home-image m-auto' />
          <h1 className='mt-5 ' style={{ fontWeight: '700' }}>START FRAMEWORK</h1>

          <div className='d-flex justify-contant-between m-auto mt-2 mb-2'>
            <div className='iconSide me-3'></div>
            <i className='fa-solid fa-star'></i>
            <div className='iconSide ms-3'></div>
          </div>
          <span className='mb-3' style={{ fontWeight: '500' }}>Graphic Artist - Web Designer - Illustrator</span>

        </div>
      </div>
    </>


  )
}
