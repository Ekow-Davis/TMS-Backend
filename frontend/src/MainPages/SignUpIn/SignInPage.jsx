import React, { useState } from 'react';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Person as PersonIcon, 
  Lock as LockIcon, 
  // Facebook as FacebookIcon, 
  // Twitter as TwitterIcon, 
  // Google as GoogleIcon, 
  // LinkedIn as LinkedInIcon, 
  Visibility as EyeIcon, 
  VisibilityOff as EyeOffIcon 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './signinup.css';

const SignInPage = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerForm, setRegisterForm] = useState({
    otherNames: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  // Email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignUpClick = () => setIsSignUpMode(true);
  const handleSignInClick = () => setIsSignUpMode(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    console.log("the Login button was clicked")
  
    const loginData = { email: loginEmail, password: loginPassword };
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });
  
      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();
        
        // Log the entire response data to verify if the token is being returned
        console.log('Response Data:', data);
        
        if (data.access_token) {
          localStorage.setItem('token', data.access_token); // Store the token in localStorage
          console.log('Token:', data.access_token);
          console.log('Login message:', data.message);

          
          // Show success message based on the login response message
          if (data.message === 'Student login successful') {
            localStorage.setItem('role', 'Student');
            console.log("It's a student")
            alert('Student login successful');
            navigate('/Dashboard'); // Navigate to the student dashboard
          }
          else if (data.message == 'Administrator login successful') {
            localStorage.setItem('role', 'Admin');
            console.log("It's an admin")
            alert('Administrator login successful');
            navigate('/Admin/Dashboard'); // Navigate to the admin dashboard
          }
        }
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login Error:', error);
    }
  };
  
    


  // Handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(registerForm.email)) {
      alert('Please enter a valid email.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerForm),
      });

      if (response.ok) {
        // After successful registration, move the email to login form
        setLoginEmail(registerForm.email);
        setIsSignUpMode(false); // Switch back to login mode
      } else {
        alert('Registration failed.');
      }
    } catch (error) {
      console.error('Registration Error:', error);
    }
  };

  // Update form state for registration
  const handleRegisterChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title">Login</h2>
            <div className="input-field">
              <EmailIcon className="text-[#acacac] h-[1.1rem] mt-4 ml-3 text-center" />
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-field relative">
              <LockIcon className="text-[#acacac] h-[1.1rem] mt-4 ml-3 text-center" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
              <span
                className="absolute right-4 top-[10px] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </span>
            </div>
            <button className="btn" type="submit">
              Login
            </button>
            {/* <p className="social-text">Or Sign In with</p>
            {/* <div className="social-media">
              <FacebookIcon className="social-icon" />
              <TwitterIcon className="social-icon" />
              <GoogleIcon className="social-icon" />
              <LinkedInIcon className="social-icon" />
            </div> */}
          </form>

          {/* Register Form */}
          <form onSubmit={handleRegister} className="sign-up-form">
            <h2 className="title">Register</h2>
            <div className="input-field">
              <PersonIcon className="text-[#acacac] h-[1.1rem] mt-4 ml-3 text-center" />
              <input
                type="text"
                name="otherNames"
                placeholder="Other Names"
                value={registerForm.otherNames}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="input-field">
              <PersonIcon className="text-[#acacac] h-[1.1rem] mt-4 ml-3 text-center" />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={registerForm.lastName}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="input-field">
              <PhoneIcon className="text-[#acacac] h-[1.1rem] mt-4 ml-3 text-center" />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={registerForm.phoneNumber}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="input-field">
              <EmailIcon className="text-[#acacac] h-[1.1rem] mt-4 ml-3 text-center" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={registerForm.email}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="input-field relative">
              <LockIcon className="text-[#acacac] h-[1.1rem] mt-4 ml-3 text-center" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={registerForm.password}
                onChange={handleRegisterChange}
                required
              />
              <span
                className="absolute right-4 top-[10px] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </span>
            </div>
            <button className="btn" type="submit">
              Register
            </button>
            {/* <p className="social-text">Or Register with</p>
            <div className="social-media">
              <FacebookIcon className="social-icon" />
              <TwitterIcon className="social-icon" />
              <GoogleIcon className="social-icon" />
              <LinkedInIcon className="social-icon" />
            </div> */}
          </form>
        </div>
      </div>

      {/* Panels for switching between forms */}
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Register now to start booking your tutoring sessions and enhance your learning experience.</p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
          <img src="../Images/Login/education-blue.svg" className="image" alt="education-img" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already a member?</h3>
            <p>Sign in to access your tutoring dashboard and manage your sessions.</p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <img src="./Images/Login/reading-blue.svg" className="image" alt="reading-img" />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
