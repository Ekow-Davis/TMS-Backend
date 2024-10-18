import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  
  Facebook as FacebookIcon, 
  Twitter as TwitterIcon, 
  Google as GoogleIcon, 
  LinkedIn as LinkedInIcon, 
} from '@mui/icons-material';
import styles from './ContactUsPage.module.css'; 

const ContactUsPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    // name: '',
    // email: '',
    // phone: '',
    message: ''
  });

  useEffect(() => {
    const inputs = document.querySelectorAll(`.${styles.input}`);

    const focusFunc = (e) => {
      let parent = e.target.parentNode;
      parent.classList.add(`${styles.focus}`);
    };

    const blurFunc = (e) => {
      let parent = e.target.parentNode;
      if (e.target.value === "") {
        parent.classList.remove(`${styles.focus}`);
      }
    };

    inputs.forEach((input) => {
      input.addEventListener('focus', focusFunc);
      input.addEventListener('blur', blurFunc);
    });

    // Clean up event listeners on unmount
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('focus', focusFunc);
        input.removeEventListener('blur', blurFunc);
      });
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem('token');
    
    if (!token) {
      alert("No token found. Please login first.");
      return;
    }
  
    try {
      const response = await fetch('https://tms.ghanaglobalinitiative.com/api/reports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Include token in headers
        },
        body: JSON.stringify(formData), // Assuming formData is an object containing the form details
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log(result); // Log the server response
        alert("Form submitted successfully!");
        navigate('/Help'); // Redirect on successful form submission
      } else {
        const errorData = await response.json();
        console.error("Submission error:", errorData);
        alert("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error('Submission Error:', error);
      alert("An error occurred. Please try again later.");
    }
  };
  

  return (
    <div className={styles.container}>      
      <span className={styles['big-circle']}></span>
      <img src="img/shape.png" className={styles.square} alt="shape" />
      
      <div className={styles.form}>
        <div className={styles['contact-info']}>
          <h3 className={styles.title}>Let's get in touch</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className={styles.info}>
            <div className={styles.information}>
              <img src="img/location.png" className={styles.icon} alt="location" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className={styles.information}>
              <img src="img/email.png" className={styles.icon} alt="email" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className={styles.information}>
              <img src="img/phone.png" className={styles.icon} alt="phone" />
              <p>123-456-789</p>
            </div>
          </div>

          <div className={styles['social-media']}>
            <p>Connect with us :</p>
            <div className={styles['social-icons']}>
              <GoogleIcon className='h-12 w-12 mr-4 border rounded-full text-custom-blue' />
              <TwitterIcon className='h-12 w-12 mr-4 border rounded-full text-custom-blue' />
              <FacebookIcon className='h-12 w-12 mr-4 border rounded-full text-custom-blue' />
              <LinkedInIcon className='h-12 w-12 mr-4 border rounded-full text-custom-blue' />
            </div>
          </div>
        </div>

        <div className={styles['contact-form']}>
          <span className={`${styles.circle} ${styles.one}`}></span>
          <span className={`${styles.circle} ${styles.two}`}></span>

          <form onSubmit={handleSubmit} autoComplete="off">
            <h3 className={styles.title}>Contact us</h3>
            {/* <div className={styles['input-container']}>
              <input 
                type="text" 
                name="name" 
                className={styles.input} 
                value={formData.name}
                onChange={handleChange}
              />
              <label>Full Name</label>
              <span>Full Name</span>
            </div> */}
            <div className={styles['input-container']}>
              <input 
                type="email" 
                name="email" 
                className={styles.input} 
                value={formData.email}
                onChange={handleChange}
              />
              <label>Email</label>
              <span>Email</span>
            </div>
            {/* <div className={styles['input-container']}>
              <input 
                type="tel" 
                name="phone" 
                className={styles.input} 
                value={formData.phone}
                onChange={handleChange}
              />
              <label>Phone</label>
              <span>Phone</span>
            </div> */}
            <div className={`${styles['input-container']} ${styles.textarea}`}>
              <textarea 
                name="message" 
                className={styles.input}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
           <div className='flex gap-2'>
           <button className={styles.btn}>
              Send
            </button>
            <button type="button" onClick={() => navigate(-1)} className={styles.btn}>
              Back
            </button>
           </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
