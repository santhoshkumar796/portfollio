import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import './contact.css'; 
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "9fe831a0-fde5-406a-8889-2be49e0399db");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className='topic'>Contact</h2>
      <p className='heading'>Feel free to reach out to me for any questions or opportunities!</p>
      
      <div className="form-container">
        <h3>Email Me 🚀</h3>
        <form className="contact-form" onSubmit={onSubmit}>
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit" className="send-button">Send</button>
        </form>
        
        <p className="form-result">{result}</p>
        
        <div className="social-icons">
          <a href="https://github.com/santhoshkumar796" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/santhosh-kumar-b55a48264/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>

        
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

