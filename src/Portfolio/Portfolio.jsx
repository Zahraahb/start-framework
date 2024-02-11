import React, { useState } from 'react'
import port1 from '../assets/poert1.png'
import port2 from '../assets/port2.png'
import port3 from '../assets/port3.png'
import { Helmet } from 'react-helmet'

export default function Portfolio() {
    let [display, setDisplay] = useState(false)
    let [img, targetImg] = useState()
    let images = [port1, port2, port3, port1, port2, port3]

    const displayImg = (index) => {
        setDisplay(current => !current)
        targetImg(images[index])
    }

    return (
        <>
            <Helmet>
                <title>Portfolio</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className=' mainSec portfolio bg-white d-flex align-items-center '>
                <div className='container d-grid'>
                    <h1 className='m-auto mb-2 mt-5' style={{ fontWeight: '700' }}>PORTFOLIO COMPONENT</h1>
                    <div className='d-flex justify-contant-between m-auto mt-2 mb-3'>
                        <div className='iconSide me-3'></div>
                        <i className='fa-solid fa-star'></i>
                        <div className='iconSide ms-3'></div>
                    </div>
                    <div className='row g-5'>
                        {images.map((image, index) => <div className='col-md-4 photo' key={index} onClick={() => { displayImg(index) }}>
                            <img src={image} alt="" className='w-100' />
                            <div className='layer'>
                                <i className='fa-solid fa-plus fa-6x text-white '></i>
                            </div>

                        </div>)}

                    </div>

                </div>
            </div>
            <div className={`show-img ${display ? '' : 'd-none'}`} onClick={displayImg}>
                <img src={img} alt="" className='' />
            </div>


        </>


    )
}
