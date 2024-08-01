import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { FiArrowRight } from 'react-icons/fi';
const CaptchaHolder = () => {

    const [captchaImage, setCaptchaImage] = useState();
    const [selectedButton, setSelectedButton] = useState(null);
    const [responseData, setResponseData] = useState("");

    const captchaOptions = [
        "sad",
        "happy",
        "love",
        "anger",
        "fear",
        "surprise"
    ];

    const fetchCaptcha = async () => {
      try {
        const response = await axios.get('http://3.108.194.143/captcha/request_captcha/1');
        console.log(response.data);
        if(response.data.length > 0){
          setCaptchaImage(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching captcha:', error);
        // setTimeout(fetchCaptcha , 3000);
      }
    }
  
    useEffect(() => {
      fetchCaptcha();
    }, []);
  
    const handleButtonClick = (buttonString) => {
        if(buttonString == selectedButton){
            setSelectedButton(null)
            setResponseData("");
        }
        else{
            setSelectedButton(buttonString)
            setResponseData("");
        }
    }
    const handleClearSelection = () => {
        setSelectedButton(null);
        setResponseData("");
    }

    const handleSubmit = async () => {
      // ADD captchaImage != null
      if(selectedButton != null && captchaImage != null){
        console.log("submit button clicked");
        try{
          var dataToSend = [
            [
              captchaImage["id"],
              selectedButton
            ]
          ]
          const response = await axios.post('http://3.108.194.143/captcha/response_captcha' , dataToSend);
          console.log(response)

          if(response.data["human"] == true){
            setResponseData("Hurray!!, You verified as a human ( :");
          }else{
            setResponseData("sorry, fail to determine you as a human ) :")
          }
          setTimeout(async () => {
            handleClearSelection();
            await fetchCaptcha();
          }, 3000);
          
        } catch(error){
            console.log("Error : " , error);
            setResponseData("couldn't connect to our server, Try again maybe !");
        }
      }
      else if(selectedButton == null){
        setResponseData("Wait, you haven't selected anything yet!");
      }else if(captchaImage == null){
        setResponseData("sorry, couldn't load captcha for you ) :");
      }
    }

    return (
        <div className='captcha-order-form'>
            <div>
                { captchaImage ? (
                    <div>
                    <img src={`data:image/png;base64,${captchaImage["image"]}`} alt='CAPTCHA'/>
                    </div>
                ) : (
                    <p>Loading captcha...</p>
                )
                }
            </div>
            <div className='captcha-section-bottom'>
                {captchaOptions.map((option) => (
                <button
                    key={option}
                    onClick={() => handleButtonClick(option)}
                    className={selectedButton === option ? 'selected' : ''}>
                    {option}
                </button>
                ))}
            </div>
            <div className='action-buttons'>
                <button className='clear-button' onClick={handleClearSelection}>Clear Selection</button>
                <div>
                  {responseData.length != 0 ? (
                    <p className='primary-text-captcha-response'>{responseData}</p>
                  ) : (
                    <p></p>
                  )
                  }
                </div>
                <button className='submit-button' onClick={handleSubmit}>
                    Submit <FiArrowRight />
                 </button>
            </div>
      </div>
    )
  }
  

export default CaptchaHolder
