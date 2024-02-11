import React, { Suspense, useState } from 'react';
import { Helmet } from 'react-helmet'

export default function Contact() {
  let [lableName, setLableName] = useState(false)
  let [lableAge, setLableAge] = useState(false)
  let [lableEmail, setLableEmail] = useState(false)
  let [lablePass, setLablePass] = useState(false)

  function showLable(e) {
    if (e.target.value !== '' && !lableName && e.target.id == 'name') {
      setLableName(current => !current)
    }
    else if (e.target.value === '' && lableName && e.target.id == 'name') {
      setLableName(current => !current)

    }
    if (e.target.value !== '' && !lableAge && e.target.id == 'age') {
      setLableAge(current => !current)
    }
    else if (e.target.value === '' && lableAge && e.target.id == 'age') {
      setLableAge(current => !current)

    }
    if (e.target.value !== '' && !lableEmail && e.target.id == 'email') {
      setLableEmail(current => !current)
    }
    else if (e.target.value === '' && lableEmail && e.target.id == 'email') {
      setLableEmail(current => !current)

    }
    if (e.target.value !== '' && !lablePass && e.target.id == 'password') {
      setLablePass(current => !current)
    }
    else if (e.target.value === '' && lablePass && e.target.id == 'password') {
      setLablePass(current => !current)

    }


  }



  return (

    <>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className=' mainSec contact bg-white d-flex align-items-center justify-content-center'>
        <div className='container d-grid'>
          <h1 className='m-auto mb-2 mt-5' style={{ fontWeight: '700' }}>CONTACT SECTION</h1>
          <div className='d-flex justify-contant-between m-auto mt-2 mb-3'>
            <div className='iconSide me-3'></div>
            <i className='fa-solid fa-star'></i>
            <div className='iconSide ms-3'></div>
          </div>
          <form action="" className=' m-auto '>
            <label htmlFor="name" className={lableName ? 'top-0' : ''} >User Name:</label>
            <input type="text" id='name' className='form-control ' placeholder='User Name' onChange={showLable} />
            <label htmlFor="age" className={lableAge ? 'top-0' : ''}>User Age:</label>
            <input type="number" id='age' className='form-control ' placeholder='User Age' onChange={showLable} />
            <label htmlFor="email" className={lableEmail ? 'top-0' : ''} >User Email:</label>
            <input type="email " id='email' className='form-control ' placeholder='User Email' onChange={showLable} />
            <label htmlFor="password" className={lablePass ? 'top-0' : ''}>User Password:</label>
            <input type="password" id='password' className='form-control mb-5 ' placeholder='User Password' onChange={showLable} />
            <button className='btn text-white'>Sent Message</button>
          </form>
        </div>




      </div>
    </>
  )
}
