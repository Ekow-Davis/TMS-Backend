import React from 'react'
import Sidebar from '../Components/Sidebar'
import FormInputBox from '../Components/FormInputBox'
import CollapsableBox from '../Components/CollapsableBox'
import CheckboxInputBox from '../Components/CheckboxInputBox'

const RequestSessionFormPage = () => {
  return (
    <>
    <div className='flex'>
      <Sidebar />
      <div className='flex-grow'>
        
      <form className="p-4">
      <FormInputBox 
      width="w-full" 
      type="text" 
      miniLabel="Enter your name" 
      label="Name" 
      />
      <FormInputBox 
      width="w-full" 
      type="email" 
      miniLabel="Enter your email" 
      label="Email" 
      />
      <CheckboxInputBox
        options={['Option 1', 'Option 2', 'Option 3']}
        selectionType="multiple"
        miniLabel="Select your preferences"
        label="Preferences"
      />
      <CollapsableBox label="Additional Information" icon={<faChevronDown />}>
        <p>This is some additional information you can toggle.</p>
      </CollapsableBox>
    </form>

      </div>
    </div>
    
    </>
  )
}

export default RequestSessionFormPage