import React from 'react'
import { useState } from 'react';
import axios from 'axios'

// CHANGE THE SERVER ADDRESS 
const Form = () => {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        description: ''
      });

    const [submitStatus , setSubmitStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubmitStatus("");
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleFileChange = (e) => {
        setSubmitStatus("");
        setFormData({
          ...formData,
          sample: e.target.files[0]
        });
      };
      
  
          
    async function sendDataToServer(formData){
      const formDataToSend = new FormData();

      formDataToSend.append('name', formData.name);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('request_detail', formData.description);

      try {
        const response = await axios.post('http://3.108.194.143/submit_request', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const message = response.data.message || "";
        setSubmitStatus(message);
      } catch (error) {
        setSubmitStatus("coudln't connect to server, Try again maybe!");
        console.error('Error:', error);
      }
    }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        await sendDataToServer(formData)
      };

  return (
    <div className='form-container'>
        <h2 className='primary-heading-form'> Fill out the details!</h2>
         <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="sample">Sample:</label>
          <input
            type="file"
            id="sample"
            name="sample"
            onChange={handleFileChange}
          />
        </div>

        <div className='form-group-subheading'>
          <p className='form-submit-status-subheading'>
            {typeof submitStatus === 'string' ? submitStatus : 'Unexpected status format'}
          </p>
        </div>

        <div className='form-button-container'>
            <button className='submit-button' type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
    