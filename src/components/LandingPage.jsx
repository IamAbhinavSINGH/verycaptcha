import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../assets/home-banner-background.png'
import BannerImage from '../assets/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate();

  const navigateToOrderPage = () => {
    navigate("/order");
  }

  return (
    <div className='home-container'>
      {/* <Navbar isCaptchaPage={false}/> */}
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt=''/>
        </div>
        <div className='home-text-section'>
            <h3 className='primary-heading'>
                All Your Data Needs At One Place
            </h3>
            <p className='primary-text'>
                Get any type of data for all your needs whether to train LLMs or 
                even a small ML model.
                All your custom data needs are catered personally.
            </p>
            <button className='secondary-button' onClick={navigateToOrderPage}>
                order your custom dataset right now <FiArrowRight />
            </button>
        </div>
        <div className='home-image-container'>
            <img src={BannerImage} />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
