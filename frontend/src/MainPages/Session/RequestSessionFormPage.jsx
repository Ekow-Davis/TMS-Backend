import React from 'react'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import VenueInputBox from "../../Components/VenueInput"
import MatchInput from '../../Components/MatchInput'
import Sidebar from '../../Components/Layout/Sidebar'
import FormInputBox from '../../Components/FormInputBox'
import CollapsableBox from '../../Components/CollapsableBox'
import CheckboxInputBox from '../../Components/CheckboxInputBox'

const RequestSessionFormPage = () => {

  const [dayTimeData, setDayTimeData] = useState({ days: [], times: [] })

  const [address, setAddress] = useState('')
  const [address2, setAddress2] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [providence, setProvidence] = useState('')

  // const [zipCode, setZipCode] = useState('')
  const [lastName, setLastName] = useState('')
  const [otherNames, setOtherNames] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [language, setLanguage] = useState('') 
  
  const [subject, setSubject] = useState('')
  const [course, setCourse] = useState('')
  const [duration, setDuration] = useState('')
  const [repetition, setRepetition] = useState('')
  const [ additional_information, setAdditional_information] = useState('')
  // const [tutorDays, setTutorDays] = useState([])
  // const [tutorTime, setTutorTime] = useState('')
  const [level_of_education, setLevelOfEducation] = useState('')
  const [venue, setVenue] = useState('')

  const navigate = useNavigate();

  const handleSessionSubmit = async (event) => {
    event.preventDefault()

    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    if (!token) {
      alert('You are not authorized. Please log in.');
      return;
    }

    const userInfoFormData = {
      lastName,
      otherNames,
      address,
      address2,
      city,
      providence,
      // zipCode,
      email,
      phoneNumber,
      dateOfBirth,
      language,
    }

    const sessionInfoFormData = {
      subject,
      course,
      // tutorDays,      
      // tutorTime,
      day: dayTimeData.days,       
      time: dayTimeData.times,
      repetition_period: repetition,
      additional_information,
      duration,
      level_of_education,
      venue,      
    }
    
    console.log("User Information Data:",userInfoFormData)
    console.log("Session Information Data:",sessionInfoFormData)

    try {
      const response = await fetch('http://localhost:8000/api/session-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Attach token in the Authorization header
        },
        body: JSON.stringify(sessionInfoFormData), // Send the form data
      });
  
      if (response.ok) {
        console.log("Session request submitted successfully.");
        alert("Session request submitted successfully.");
        navigate('/Sessions'); // Navigate to Sessions page after successful submission
      } 
      else {
        const errorData = await response.json();
        console.error("Error submitting session:", errorData);
        alert("Failed to submit session. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  

    // addForm({ userInfoFormData, sessionInfoFormData }); add {addForm} to the function if

    navigate('/Sessions');

  };


  return (
    <>
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-grow bg-gray-100 overflow-auto'>
        <div className='text-3xl font-bold text-custom-heading lg:mx-12 m-3 mb-2 mt-6'>
          <p className='mt-8'>
          Session Request Form
          </p>
          <img src="" alt=''/>
        </div>
        
        <form onSubmit={handleSessionSubmit} className="p-4">
          <CollapsableBox label="Personal Information" icon={<faChevronDown />}>
            <label className='font-bold text-custom-heading'>
              Name
            </label>
            <div className='md:flex md:gap-4'>
            <FormInputBox 
              required
              width="w-full" 
              type="text" 
              miniLabel="First Name"               
              value={otherNames}              
              setValue={setOtherNames} 
            />
            <FormInputBox 
              required
              width="w-full" 
              type="text" 
              miniLabel="Last Name"
              value={lastName}
              setValue={setLastName}            
            />
            </div>
            <label className='font-bold text-custom-heading'>
              Address
            </label>
            <FormInputBox 
              required
              width="w-full" 
              type="text" 
              miniLabel="Street Address"               
              value={address}
              setValue={setAddress}
            />
            <FormInputBox               
              width="w-full" 
              type="text" 
              miniLabel="Street Address 2"
              value={address2}
              setValue={setAddress2}
            />
            <div className='md:flex md:gap-4'>
            <FormInputBox
              required 
              width="w-full" 
              type="text" 
              miniLabel="City"
              value={city}
              setValue={setCity}  
            />
            <FormInputBox
              required 
              width="w-full" 
              type="text" 
              miniLabel="Country"
              value={providence}
              setValue={setProvidence}
            />
            </div>
            
            {/* <FormInputBox
              required 
              width="w-full" 
              type="text" 
              miniLabel="Postal / Zip Code"
              value={zipCode}
              setValue={setZipCode}  
            /> */}

            {/*Change the form input type into one that can take phone numbers*/}
            
            <FormInputBox 
              width="w-full" 
              type="text"
              placeholder="(000) 000-000"
              label="Phone Number" 
              miniLabel="Please enter a valid phone number"  
              setValue={setPhoneNumber}
              value={phoneNumber} 
              required
            />
            <FormInputBox
              required  
              width="w-full" 
              type="text"
              placeholder="example@gmail.com"
              label="Email" 
              miniLabel="Please enter your email address"  
              value={email}
              setValue={setEmail}
            />
            <FormInputBox 
              width="w-full" 
              type="text" 
              label="Birth Date"
              miniLabel="Date"
              value={dateOfBirth}
              setValue={setDateOfBirth}
            />            
            <FormInputBox 
              width="w-full" 
              type="text"           
              miniLabel="Language"
              value={language}
              setValue={setLanguage} 
            /> 
          </CollapsableBox>

      <CollapsableBox label="Session Information" icon={<faChevronDown />}>
        <p className='my-2 '>This Form Contains All Details related to Session Request</p>
          <label className='font-bold text-custom-heading'>
            Subject & Course
          </label>
        <div className='md:flex md:gap-4'>
          
          <FormInputBox 
          width="w-full" 
          type="text" 
          placeholder="Eg Biology, Chemistry" 
          miniLabel="Subject to be tutored in" 
          value={subject}
          setValue={setSubject}
          /> 
          
          <FormInputBox 
            width="w-full" 
            type="text" 
            placeholder="Eg Programming Fundamentals" 
            miniLabel="Course or Topic" 
            value={course}
            setValue={setCourse}
          /> 
        </div>        
        
        {/* <CheckboxInputBox
          options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
          selectionType="multiple"
          miniLabel="Select your preferred day(s)"
          label="Tutor Days"
          selectedOptions={tutorDays}
          setSelectedOptions={setTutorDays}
        /> */}

      <MatchInput
        label="Select a day and a corresponding time for each"
        options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
        onDataChange={setDayTimeData}        
      />

        {/* <FormInputBox
          type="text"
          placeholder="Week days 4pm to 6pm, Weekend 2pm to 4pm"
          label="Time"
          miniLabel="Time of Tutoring"
          value={tutorTime}
          setValue={setTutorTime}
        /> */}
        <label className='font-bold mt-1 text-custom-heading'>
          Timing
        </label>
          
          <div className='md:flex md:gap-4'>
            <FormInputBox
          type="number"
          width='w-full'
          placeholder="2, 4"
          label="Duration"
          miniLabel="Duration in Hours"
          value={duration}
          setValue={setDuration}
          min={1}
        />
        <FormInputBox
          type="number"
          width='w-full'
          placeholder="1, 2"
          label="Months"
          miniLabel="Number of Months"
          value={repetition}
          setValue={setRepetition}
        />
          </div>
        
        <label className='font-bold mt-1 text-custom-heading'>
          Education
        </label>

        <FormInputBox 
          miniLabel="Level of Education in regards to the Subject"
          placeholder="Eg. Degree level Biology, JHS level Biology"
          value={level_of_education}
          setValue={setLevelOfEducation}
        />

        <VenueInputBox
          options={['Online', 'In-Person', 'Fine Either Way']}
          label="Mode of Teaching"
          miniLabel="How you would like to be taught"
          selectedOption={venue}
          setSelectedOption={setVenue}
        />

        <label className='font-bold mt-1 text-custom-heading'>
          Additional Information
        </label>

        <FormInputBox
          type="text"
          width='w-full'
          required
          placeholder=""          
          miniLabel="Extra Information to take note of"
          value={additional_information}
          setValue={setAdditional_information}
        />
        
      </CollapsableBox>
      
      <div className='flex justify-center items-center'>
        <button className=' text-white text-xl hover:cursor-pointer hover:bg-custom-blue bg-custom-purple w-96 rounded-xl font-bold px-16 py-4 my-3 mx-10' type='submit'>
          Submit
        </button>
      </div>
        
         
    </form>

      </div>
    </div>
    
    </>
  )
}

export default RequestSessionFormPage