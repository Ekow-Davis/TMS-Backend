import React from 'react'
import { useState} from 'react'
import Sidebar from '../Components/Sidebar'
import FormInputBox from '../Components/FormInputBox'
import CollapsableBox from '../Components/CollapsableBox'
import CheckboxInputBox from '../Components/CheckboxInputBox'

const RequestSessionFormPage = () => {

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

  }


  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        <div>
          <p>
          Session Request Form
          </p>
          <img src="" alt=''/>
        </div>
        
        <form onSubmit={handleSessionSubmit} className="p-4">
          <CollapsableBox label="Personal Information" icon={<faChevronDown />}>
            <FormInputBox 
              width="w-full" 
              type="text" 
              miniLabel="Name" 
              label="First Name"
              setValue={setOtherNames} 
            />
            <FormInputBox 
              width="w-full" 
              type="text" 
              miniLabel="Last Name"
              setValue={setLastName}            
            />
            <FormInputBox 
              width="w-full" 
              type="text" 
              miniLabel="Street Address" 
              label="Address"
              setValue={setAddress}
            />
            <FormInputBox
              required 
              width="w-full" 
              type="text" 
              miniLabel="Street Address 2"
              setValue={setAddress2}
            />
            <FormInputBox
              required 
              width="w-full" 
              type="text" 
              miniLabel="City"
              setValue={setCity}  
            />
            <FormInputBox
              required 
              width="w-full" 
              type="text" 
              miniLabel="State/Province"
              setValue={setProvidence}
            />
            <FormInputBox
              required 
              width="w-full" 
              type="text" 
              miniLabel="Postal / Zip Code"
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
            />
            <FormInputBox 
              width="w-full" 
              type="text"
              placeholder="example@gmail.com"
              label="Email" 
              miniLabel="Please enter your email address"  
              setValue={setEmail}
            />
            <FormInputBox 
              width="w-full" 
              type="text" 
              label="Birth Date"
              miniLabel="Date"
              setValue={setDateOfBirth}
            />
            <FormInputBox 
              width="w-full" 
              type="text"           
              miniLabel="Language"
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
          setValue={setSubject}
        /> 
        
        <FormInputBox 
          width="w-full" 
          type="text" 
          placeholder="Eg Programming Fundamentals" 
          miniLabel="Course or Topic" 
          setValue={setCourse}
        /> 
        
        <CheckboxInputBox
          options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
          selectionType="multiple"
          miniLabel="Select your preferred day(s)"
          label="Tutor Days"
          setSelectedOptions={setTutorDays}
        />

        <FormInputBox
          type="text"
          placeholder="Week days 4pm to 6pm, Weekend 2pm to 4pm"
          label="Time"
          miniLabel="Time of Tutoring"
          setValue={setTutorTime}
        />

        <FormInputBox 
          miniLabel="Level of Education"
          placeholder="Eg. Degree, Masters"
          setValue={setLevelOfEducation}
        />

        <CheckboxInputBox 
          options={['Online','In-Person', 'Fine Either Way']}
          label="Mode of Teaching"
          miniLabel="How you would like to be taught"
          setSelectedOptions={setModeOfTeaching}
        />
        
      </CollapsableBox>

      <CollapsableBox label='Tutor Details'>

        <CheckboxInputBox 
          options={['Yes','No']}        
          miniLabel="Use of Videos and Images in the lesson"
          setSelectedOptions={setVideos}
        />

        
      </CollapsableBox>

      <button type='submit'>
        Submit
      </button>
    </form>

      </div>
    </div>
    
    </>
  )
}

export default RequestSessionFormPage