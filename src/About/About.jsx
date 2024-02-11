import React from 'react'
import { Helmet } from 'react-helmet'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className=' mainSec d-flex align-items-center'>
        <div className='about container  text-white  d-grid '>
          <h1 className='m-auto mb-2' style={{ fontWeight: '700' }}>ABOUT COMPONENT</h1>
          <div className='d-flex justify-contant-between m-auto mt-2 mb-3'>
            <div className='iconSide me-3'></div>
            <i className='fa-solid fa-star'></i>
            <div className='iconSide ms-3'></div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
            <div className='col-md-6'>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
