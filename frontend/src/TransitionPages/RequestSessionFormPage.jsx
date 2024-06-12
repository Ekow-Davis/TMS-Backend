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
  const [lastName, setLastName] = useState('')
  const [otherNames, setOtherNames] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [password, setPassword] = useState('') 
 
  const handleSessionSubmit = async (event) => {
    event.preventDefault()

    const sessionFormData = {
      address,
      email,
      password,
      lastName,
      otherNames,
      phoneNumber,
      dateOfBirth
    }

    console.log("User Data:",sessionFormData)

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
            setInputValue={setLastName}            
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
            />
            <FormInputBox
            required 
            width="w-full" 
            type="text" 
            miniLabel="State/Province"  
            />
            <FormInputBox
            required 
            width="w-full" 
            type="text" 
            miniLabel="Postal / Zip Code"  
            />
            {/*Change the form input type into one that can take phone numbers*/}
            <FormInputBox
            required 
            width="w-full" 
            type="text"
            placeholder="(000) 000-000"
            label="Phone Number" 
            miniLabel="Please enter a valid phone number"  
            />
            <FormInputBox
            required 
            width="w-full" 
            type="text" 
            label="Birth Date"
            miniLabel="Date"  
            />
            <FormInputBox 
              width="w-full" 
              type="text"           
              miniLabel="Language" 
            /> 
          </CollapsableBox>

      <CollapsableBox label="Session Information" icon={<faChevronDown />}>
        <p>This Form Contains All Details related to Session Request</p>

        <FormInputBox 
          width="w-full" 
          type="text" 
          placeholder="Eg Biology, Chemistry" 
          miniLabel="Subject to be tutored in" 
        /> 
        
        <FormInputBox 
          width="w-full" 
          type="text" 
          placeholder="Eg Programming Fundamentals" 
          miniLabel="Course or Topic" 
        /> 
        
        <CheckboxInputBox
          options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
          selectionType="multiple"
          miniLabel="Select your preferred day(s)"
          label="Tutor Days"
        />

        <FormInputBox
        type="text"
        placeholder="Week days 4pm to 6pm, Weekend 2pm to 4pm"
        label="Time"
        miniLabel="Time of Tutoring"
        />
        <CheckboxInputBox 
        options={['Online','In-Person', 'Fine Either Way']}
        label="Mode of Teaching"
        miniLabel="How you would like to be taught"
        />
        <CheckboxInputBox 
        options={['Yes','No']}        
        miniLabel="Use of Videos and Images in the lesson"
        />
      </CollapsableBox>

      <CollapsableBox label='Tutor Details'>

        <FormInputBox 
        miniLabel="Level of Education"
        placeholder="Eg. Degree, Masters"
        />

        <textbox>

        </textbox>

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