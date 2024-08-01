import React from 'react'
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'> 
                Data is unarguably the most valuable thing in the world right now!
            </h1>
            <p className='primary-text'>
                In today's digital age, CAPTCHA systems are essential for protecting websites from bots
                 and automated abuse. However, traditional CAPTCHA solutions can be cumbersome and frustrating
                  for users. At the same time, there's a growing demand for high-quality labeled datasets
                   to train artificial intelligence models, which are crucial for advancements
                    in technology and automation.
            </p>
            <ul className='primary-text'>
            <li><strong>User-Friendly CAPTCHA:</strong> Our system is easy to use and secure, ensuring genuine users can navigate easily while blocking bots.</li>
            <li><strong>Data Labeling:</strong> We generate high-quality labeled datasets through our CAPTCHA system, essential for training AI models.</li>
            </ul>
        </div>
    </div>
  )
}

export default About
