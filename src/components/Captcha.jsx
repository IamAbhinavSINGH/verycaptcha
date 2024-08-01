import React from 'react'
import BannerBackground from '../assets/home-banner-background.png'
import Navbar from './Navbar'
import CaptchaHolder from './CaptchaHolder'
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";

const Captcha = () => {
  return (
    <div>
      <div className='home-container'>
        <Navbar isCaptchaPage={true} />
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
              <img src={BannerBackground} alt = "" />
          </div>
        </div>
      </div>
      <div className='form-container'>
        <h6 className='primary-heading-captcha'>Demo Captcha</h6>
        <CaptchaHolder />

          <div className='about-section-container'>
          <div className='about-background-image-container'>
              <img src={AboutBackground} />
          </div>
          <div className='about-section-image-container'>
              <img src={AboutBackgroundImage} />
          </div>
          <div className='about-section-text-container'>
                <h1 className='primary-heading'>Why Captcha ?</h1>
                <p className='primary-text'>
                Captcha is almost everywhere nowadays, it is used to differentiate between a human 
                and a bot, but how does it do so? The answer is, it uses tasks which are difficult
                for a bot to perform like extracting an emotion out of a sentence or classifyng 
                images according to given text and this is where we can take use of captcha
                and use it to label datasets which can be used further to train LLMs and
                other ML models.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Captcha