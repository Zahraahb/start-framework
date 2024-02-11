import React from 'react'
import Navbar from './Navb/Navb.jsx'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
   <>
   <Navbar/>
   <div >
    <Outlet />
    <footer>
    <div className='sec-one text-center text-white' style={{padding:'80px',fontWeight:'500'}}>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-4'>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className='col-md-4'>
            <h3>AROUND THE WEB</h3>
            <div className='icons mt-3'>
              <i className='fa-brands fa-facebook mx-3 icon'></i>
              <i className='fa-brands fa-twitter mx-3 icon'></i>
              <i className='fa-brands fa-linkedin-in mx-3 icon'></i>
              <i className='fa-solid fa-globe mx-3 icon'></i>

            </div>
          </div>
          <div className='col-md-4'>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </div>
    <div className='sec-two p-3 text-white d-flex'>
      <p className='mt-2'> Copyright © Your Website 2024</p>
    </div>
   </footer>

   </div>
   
   </>
  )
}
