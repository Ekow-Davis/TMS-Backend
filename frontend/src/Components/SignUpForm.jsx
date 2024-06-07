import React, {useState} from 'react'
import SignInputBox from './SignInputBox'
import { Link } from 'react-router-dom'

const SignUpForm = () => {
  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{2,23}$/;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
 
  const [username, setUsername] = useState('')
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
      username: username,
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
    <div className='bg-gray-100 px-12 py-20 rounded-3xl border-2 border-x-custom-blue lg:border-none lg:bg-transparent'>
    <h1 className='text-3xl justify-center flex text-blue-900 my-4'> Sign Up</h1>
    <p className='justify-center flex text-lg my-6 text-blue-900'>Welcome to 'insert name'! Please enter your details</p>
    <form onSubmit={handleSignUp}>
    <div>
      <div>
        <div className='flex flex-row my-4 gap-24 text-lg'>
          <SignInputBox
          type="text" 
          placeholder="Last Name"
          width="w-[280px]"
          setValue={setLastName}
          />
          <SignInputBox
          type="text" 
          placeholder="Other Names"
          width="w-[280px]"
          setValue={setOtherNames}
          />
        </div>
        <div className='my-4 gap-24 text-lg'>
          <SignInputBox 
            type="text"
            placeholder="Username"
            width="w-full"
            validationRegex={USER_REGEX}
            errorMessage="Username must be 3 or more characters"
            setValue={setUsername}
            />
        </div>
        <div className='my-4 gap-12 text-lg'>
          <SignInputBox 
            type="email"
            placeholder="E-mail"
            width="w-full"
            validationRegex={EMAIL_REGEX}
            errorMessage="Invalid Email"
            setValue={setEmail}
            />
        </div>
        <div className='flex flex-row my-4 gap-6 text-lg'>
          <SignInputBox
            type={showPassword ? "text" : "password"} 
            placeholder="Password"
            width="w-[280px]"
            validationRegex={PWD_REGEX}
            errorMessage="Password more than 7 characters have '0-9' and '!@#$%'"
            value={password}
            setValue={setPassword}
          />

        <button type="button"
        className='text-custom-blue'
          onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
        </button> 
                  
          <SignInputBox
            type={showPassword ? "text" : "password"} 
            placeholder="Confirm Password"
            width="w-[280px]"
            confirmedValue={password}
            differentErrorMessage="Password does not match"
          />
        </div>
        <div className='flex flex-row mt-4 mb-10 gap-24 text-lg'>
          <SignInputBox
            type="number" 
            placeholder="Phone Number"
            width="w-[280px]"
            setValue={setPhoneNumber}
          />
          <SignInputBox
            type="date" 
            placeholder="Date of Birth"
            width="w-[280px]"
            setValue={setDateOfBirth}
          />
        </div>

        <div>
          <p className='text-lg text-custom-blue'>Already have an account? 
            <Link to='/SignInPage'>Sign In</Link>
          </p>
        </div>

      </div>
      <Link to='/Dashboard'>
      <button className='text-white text-xl bg-custom-blue rounded-full px-10 py-4' type='submit'>
        Sign Up
      </button>
      </Link>
      
    </div>
    </form>
    </div>
    
    </>
  )
}

export default SignUpForm