import React from 'react'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/Layout/Sidebar'
import FormInputBox from '../../Components/FormInputBox'
import CollapsableBox from '../../Components/CollapsableBox'
import CheckboxInputBox from '../../Components/CheckboxInputBox'

const RequestSessionFormPage = ({addForm}) => {

  const [address, setAddress] = useState('')
  const [address2, setAddress2] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [providence, setProvidence] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [lastName, setLastName] = useState('')
  const [otherNames, setOtherNames] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [language, setLanguage] = useState('') 
  
  const [subject, setSubject] = useState('')
  const [course, setCourse] = useState('')
  const [tutorDays, setTutorDays] = useState([])
  const [tutorTime, setTutorTime] = useState('')
  const [levelOfEducation, setLevelOfEducation] = useState('')
  const [modeOfTeaching, setModeOfTeaching] = useState([])
  const [videos, setVideos] = useState([])

  const navigate = useNavigate();

  const handleSessionSubmit = async (event) => {
    event.preventDefault()

    const userInfoFormData = {
      lastName,
      otherNames,
      address,
      address2,
      city,
      providence,
      zipCode,
      email,
      phoneNumber,
      dateOfBirth,
      language,
    }

    const sessionInfoFormData = {
      subject,
      course,
      tutorDays,
      tutorTime,
      levelOfEducation,
      modeOfTeaching,
      videos,
    }

    console.log("User Information Data:",userInfoFormData)
    console.log("Session Information Data:",sessionInfoFormData)

    addForm({ userInfoFormData, sessionInfoFormData });

    navigate('/RequestSessionPage');

  }


  return (
    <>
    <div className='flex '>
      <Sidebar />
      <div className='flex-grow bg-gray-100 overflow-auto'>
        <div className='text-3xl mx-12 mb-2 mt-6'>
          <p>
          Session Request Form
          </p>
          <img src="" alt=''/>
        </div>
        
        <form onSubmit={handleSessionSubmit} className="p-4 mx-10">
          <CollapsableBox label="Personal Information" icon={<faChevronDown />}>
            <FormInputBox 
              width="w-full" 
              type="text" 
              miniLabel="Name" 
              label="First Name"
              value={otherNames}              
              setValue={setOtherNames} 
            />
            <FormInputBox 
              width="w-full" 
              type="text" 
              miniLabel="Last Name"
              value={lastName}
              setValue={setLastName}            
            />
            <FormInputBox 
              width="w-full" 
              type="text" 
              miniLabel="Street Address" 
              label="Address"
              value={address}
              setValue={setAddress}
            />
            <FormInputBox
              required 
              width="w-full" 
              type="text" 
              miniLabel="Street Address 2"
              value={address2}
              setValue={setAddress2}
            />
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
              miniLabel="State/Province"
              value={providence}
              setValue={setProvidence}
            />
            <FormInputBox
              required 
              width="w-full" 
              type="text" 
              miniLabel="Postal / Zip Code"
              value={zipCode}
              setValue={setZipCode}  
            />

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
        <p>This Form Contains All Details related to Session Request</p>

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
        
        <CheckboxInputBox
          options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
          selectionType="multiple"
          miniLabel="Select your preferred day(s)"
          label="Tutor Days"
          selectedOptions={tutorDays}
          setSelectedOptions={setTutorDays}
        />

        <FormInputBox
          type="text"
          placeholder="Week days 4pm to 6pm, Weekend 2pm to 4pm"
          label="Time"
          miniLabel="Time of Tutoring"
          value={tutorTime}
          setValue={setTutorTime}
        />

        <FormInputBox 
          miniLabel="Level of Education"
          placeholder="Eg. Degree, Masters"
          value={levelOfEducation}
          setValue={setLevelOfEducation}
        />

        <CheckboxInputBox 
          options={['Online','In-Person', 'Fine Either Way']}
          label="Mode of Teaching"
          miniLabel="How you would like to be taught"         
          selectedOptions={modeOfTeaching}
          setSelectedOptions={setModeOfTeaching}
        />
        
      </CollapsableBox>

      <CollapsableBox label='Tutor Details'>

        <CheckboxInputBox 
          options={['Yes','No']}        
          miniLabel="Use of Videos and Images in the lesson"
          selectedOptions={videos}
          setSelectedOptions={setVideos}
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