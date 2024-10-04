import { useState } from 'react'
import { Link } from 'react-router-dom';
import SignInputBox from '../Components/SignInputBox'

const SignInForm = () => {

  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [isChecked, setIsChecked] = useState(false);

  const [username, setUsername] = useState('');
  const [email] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = async (event) => {
    event.preventDefault();

    const signInData = {
        username: username,
        email: email,
        password: password,
    };

    try {
        // Send login request to the server
        const response = await fetch('https://5z95skmt-8000.uks1.devtunnels.ms/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signInData), // Send the user credentials
        });

        // Check if the response is OK (status code 200–299)
        if (!response.ok) {
            // Handle error
            const errorData = await response.json();
            alert(`Error: ${errorData.message || 'Login failed'}`);
            return;
        }

        const data = await response.json();

        // Assuming your API returns a token upon successful login
        const { token, user } = data;

        // Save the token and user info to localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        console.log('User Data:', user);
        alert("Login successful");

        // Redirect to the dashboard or another page
        window.location.href = '/Dashboard'; // Update this to the path you want

    } catch (error) {
        console.error('Login error:', error);
        alert("An error occurred during login. Please try again.");
    }
};


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <>
    <div className='bg-gray-100 px-10 rounded-3xl border-2 border-x-custom-purple lg:border-none lg:bg-transparent'>
      
      <div className='flex flex-col items-center'>
        <img src='.\Images\main-logo-black-transparent.png' alt='Logo' className='h-32 w-32'/>
        <h1 className='text-4xl font-bold justify-center flex text-custom-purple my-4'> 
          SIGN IN
        </h1>
      </div>

            <form onSubmit={handleSignIn}>            

            <div className='mt-10 mb-16 lg:text-lg'>
              <SignInputBox 
              type="text"
              placeholder="Username or Email"
              width="w-full"
              setValue={setUsername}
              />
            </div>
            <div className='my-12 lg:text-lg'>
              <SignInputBox 
              type="password"
              placeholder="Password"
              width="w-full"
              validationRegex={PWD_REGEX}
              errorMessage="Password is incorrect"
              setValue={setPassword}
              />
            </div>
            

            <div className='text-sm lg:text-lg my-8 text-custom-purple flex'>

            <p><Link to='/SignUp'> 
            Do not have an account? Sign Up
            </Link></p>

            <p className='ml-10 lg:ml-32'> 
              <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='mr-1'
              id='remember'
              /> 
              <label for='remember'>Remember Me</label></p>
            </div>

            
            
              <button type="submit" className='text-white text-xl font-bold bg-custom-purple rounded-xl w-full px-10 py-4 my-3'>
                Sign In
              </button>
            

          </form>
        </div>
    </>
  )

}

export default SignInForm