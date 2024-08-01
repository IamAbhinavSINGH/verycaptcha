import React from 'react'
import OrderCustomData from "../assets/pick-meals-image.png";
import Captcha from "../assets/choose-image.png";
import DelieversLabelledData from "../assets/delivery-image.png";

const Work = () => {

    const workInfoData = [
        {
            image : OrderCustomData,
            title : "Order custom data",
            text : "order any type of data which you want according to your needs."
        },
        {
            image: Captcha,
            title: "Choose Captcha",
            text : "The captcha service is used to label the ordered dataset."
        },
        {
            image: DelieversLabelledData,
            title: "Delivering the dataset",
            text: "Once the dataset is labelled, it is delivered to the owner."
        }
    ];

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>
                How does it work?
            </h1>
            <p className='primary-text'>
                When the user orders any type of data, the data gets collected manually then it gets fed across 
                all the captcha service to label it. The CAPTCHA service is used to label the dataset which is
                further gets delivered to the requested user.
            </p>
        </div>
        <div className='work-section-bottom'>
            {
                workInfoData.map((data) => (
                    <div className='work-section-info' key={data.title}>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt = "" width='150' height='150'/>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work;
