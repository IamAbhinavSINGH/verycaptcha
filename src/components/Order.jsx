import React from 'react'
import Navbar from "./Navbar"
import BannerBackground from '../assets/home-banner-background.png'
import Form from "./Form"

const Order = () => {


  return (
    <div>
      <div className='home-container'>
        <Navbar isCaptchaPage={false}/>
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt = "" />
          </div>
        </div>
      </div>
      <div className='form-container'>
          <Form />
      </div>
      <div className='work-section-top'>
          <p className='primary-subheading-form'>
              After submitting the details, you will recieve an email
              consisting details about your order.
          </p>
      </div>
    </div>
  )
}

export default Order
