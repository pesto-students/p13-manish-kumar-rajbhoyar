import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {

  const handleSubmit = () => {
    alert('Thank You for Contacting Us, We will get back to you shortly!')
  }

  return (
    <div className='contactForm'>
      <div className='contactDetails'>
          <h1>Get in touch with me</h1>
          <div className='envelope'>
          <FontAwesomeIcon
            type="button"
            icon ={faEnvelope}
            size="2x"
        ></FontAwesomeIcon>
        <p>Rajbhoyar21@gmail.com</p>
        </div>
        <div className='phone'>
        <FontAwesomeIcon
            type="button"
            icon ={faPhone}
            size="2x"
        ></FontAwesomeIcon>
        <p>9420846333, 8999267084</p>
        </div>
        <div className='location'>
        <FontAwesomeIcon icon={faLocationPin}
        size="2x"
        ></FontAwesomeIcon>
        <p>Karve nagar, Pune 411052</p>
        </div>
        </div>
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input
            type="text"
            name="name"
            required
            />
        </label>
        <label>
            Email:
            <input
            type="email"
            name="email"
            required
            />
        </label>
        <label>
            Subject:
            <input
            type="text"
            name="subject"
            required
            />
        </label>
        <label>
            Message:
            <input
            type="text"
            name="message"
            required
            />
        </label>
        <button type="submit">Submit</button>
        </form>
        </div>
  );
}

export default Contact;