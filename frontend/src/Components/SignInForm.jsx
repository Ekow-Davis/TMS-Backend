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
    event.preventDefault()

  const signInData = {
    username: username,
    email: email,
    password: password,
  };

  const signInDataString = JSON.stringify(signInData)

//Saves the data in the local memory and console
    localStorage.setItem('signInData', signInDataString);

    console.log('User Data:', signInData);
//Sends a prompt to the user if the formData is properly saved
    alert("Success")

}

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

            
            <Link to='/Dashboard'>
              <button className='text-white text-xl font-bold bg-custom-purple rounded-xl w-full px-10 py-4 my-3' type='submit'>
                Sign In
              </button>
            </Link>

          </form>
        </div>
    </>
  )

}

export default SignInForm