import React, {useState} from 'react'
import SignInputBox from './SignInputBox'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
  // const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,23}$/;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
 
  // const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [lastName, setLastName] = useState('')
  const [otherNames, setOtherNames] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }
 
  const handleSignUp = async (event) => {
    event.preventDefault()

    const formData = {
      // username: username,
      email: email,
      password: password,
      lastName: lastName,
      otherNames: otherNames,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth
    }

    console.log("User Data:",formData)

  //   try {
  //     const response = await axios.post('https://www.pythonanywhere.com/user/daberko/webapps/#id_daberko_pythonanywhere_com', {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     })

  //     if (response.status === 200) {
  //       const data = response.data; // Analyzing JSON response
  //       const { token } = data;

  //       // Store JWT token in local storage
  //       localStorage.setItem('token', token)

  //       console.log("token:", token)

  //       // Redirect to another page or do something else upon successful signup
  //       alert("User signed up successfully!")
  //   } else {
  //       // Handle error response
  //       let errorMessage
  //       try {
  //           const errorData = await response.json() // Analysing JSON error response
  //           errorMessage = errorData.message || 'Unknown error' //Error message from system
  //       } catch (error) {
  //           errorMessage = 'Error occurred while processing response'
  //       }
  //       alert("Error signing up: " + errorMessage)
  //   }
  //     } catch (error) {
  //       alert("Error signing up: " + error.message)
  //     }
  // }

  }

  return (
    <>
    

<div className='bg-gray-100 px-10 rounded-3xl border-2 border-x-custom-purple lg:border-none lg:bg-transparent'>
      
      <div className='flex flex-col items-center'>
        <img src='.\Images\main-logo-black-transparent.png' alt='Logo' className='h-32 w-32'/>
        <h1 className='text-4xl justify-center font-bold flex text-custom-purple my-3'> 
          SIGN UP 
        </h1>
      </div>

            <form onSubmit={handleSignUp}> 

              <div className='flex flex-row my-4 gap-10 lg:gap-24 text-lg'>
                <SignInputBox
                type="text" 
                placeholder="Last Name"
                width="w-fit"
                setValue={setLastName}
                />
                <SignInputBox
                type="text" 
                placeholder="Other Names"
                width="w-fit"
                setValue={setOtherNames}
                />
              </div>

              {/* <div className='my-4 gap-2 lg:gap-24 text-lg'>
                <SignInputBox 
                  type="text"
                  placeholder="Username"
                  width="w-full"
                  validationRegex={USER_REGEX}
                  errorMessage="Username must be 3 or more characters"
                  setValue={setUsername}
                  />
              </div> */}
              <div className='my-4 text-lg'>
                <SignInputBox 
                  type="email"
                  placeholder="E-mail"
                  width="w-full"
                  validationRegex={EMAIL_REGEX}
                  errorMessage="Invalid Email"
                  setValue={setEmail}
                  />
              </div>

              <div className='flex flex-row my-4 gap-2 lg:gap-6 text-lg'>
                <SignInputBox
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password"
                  width="w-fit"
                  validationRegex={PWD_REGEX}
                  errorMessage="Password more than 7 characters have '0-9' and '!@#$%'"
                  value={password}
                  setValue={setPassword}
                />

              <button type="button"
                className='text-custom-purple my-1'
                  onClick={togglePasswordVisibility}>
                    {showPassword ? "Hide" : "Show"}
              </button> 
                        
                <SignInputBox
                  type={showPassword ? "text" : "password"} 
                  placeholder="Confirm Password"
                  width="w-fit"
                  confirmedValue={password}
                  differentErrorMessage="Password does not match"
                />
              </div>
              
              <div className='flex flex-row mt-3 mb-7 gap-12 lg:gap-24 text-lg'>
                <SignInputBox
                  type="number" 
                  placeholder="Phone Number"
                  width="w-fit"
                  setValue={setPhoneNumber}
                />
                <SignInputBox
                  type="date" 
                  placeholder="Date of Birth"
                  width="w-full"
                  setValue={setDateOfBirth}
                />
              </div>

            <div>
             <Link to='/SignIn'>
                <p className='text-lg mb-3 text-custom-purple'>
                  Already have an account? 
                  Sign In
                </p>
              </Link>
            </div>
            
            <Link to='/Dashboard'>
              <button className='text-white text-xl bg-custom-purple rounded-xl font-bold  w-full px-10 py-4 mt-2 mb-1' 
              type='submit'>
                Sign Up
              </button>
            </Link>

          </form>
        </div>
    
    </>
  )
}

export default SignUpForm