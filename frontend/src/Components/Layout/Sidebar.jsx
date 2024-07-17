import React from 'react'
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faCubes, faDoorOpen, faComment, faBell, faCreditCard, faUser, faCalendar, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

    const [activeItem, setActiveItem] = useState(null);
    const location = useLocation();
    const [expanded, setExpanded] = useState(true)
    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }


    useEffect(() => {
        const pathname = location.pathname;
        // Update activeItem based on the current pathname
        switch (pathname) {
          case '/Dashboard':
            setActiveItem('Dashboard');
            break;
          case '/Sessions':
            setActiveItem('SessionsHistory');
            break;
          case '/PaymentHistory':
            setActiveItem('PaymentHistory');
            break;
          case '/Notification':
            setActiveItem('Notification');
            break;
          case '/Message':
            setActiveItem('Message');
            break;
          case '/Profile':
            setActiveItem('Profile');
            break;
          case '/Help':
            setActiveItem('Help');
            break;
          // Add more cases for other pages as needed
          default:
            setActiveItem(null);
            break;
        }
      }, [location.pathname]);

  return (
    <>
      <aside className={` min-h-screen border-r  ${expanded ? 'w-72' : 'w-24'}`}>
        <h1 className={`text-white text-3xl py-2 px-4 ${expanded ? 'w-96' : 'w-20'}`}>
        <button onClick={() => setExpanded (!expanded)} >
          {expanded? <img src="../Images/main-logo-black-transparent.png" alt="Logo" className='h-32 ml-12 items-center justify-center'/>:<FontAwesomeIcon icon={faBookOpenReader} className="ml-6 h-6 w-6 my-16" />} </button>
        </h1>
        <nav className="mt-2">
              <ul>
                <hr size="2"></hr>
                  <li>
                    <Link to="/Dashboard" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Dashboard' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}
                    >
                        <FontAwesomeIcon icon={faCubes} className="ml-3 mr-12" />
                        {expanded && "Dashboard"}
                    </Link>
                  </li>
                  <li>
                    <Link to="/Sessions" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'SessionsHistory' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}
                    >
                        <FontAwesomeIcon icon={faCalendar} className="ml-3 mr-11" />
                            {expanded && "Sessions"}
                    </Link>
                  </li>
                  <li>
                    <Link to="/PaymentHistory" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'PaymentHistory' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}
                    >
                    <FontAwesomeIcon icon={faCreditCard} className="ml-3 mr-11" />
                        {expanded && "Payment"}
                    </Link>
                  </li>
                  <li>
                    <Link to="/Notification" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Notification' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}
                    >
                    <FontAwesomeIcon icon={faBell} className="ml-4 mr-12" />
                        {expanded && "Notification"}
                    </Link>
                  </li>              
                  <li>
                    <Link to="/Message" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Message' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}
                    >
                    <FontAwesomeIcon icon={faComment} className="ml-4 mr-12" />
                        {expanded && "Message"}
                    </Link>
                  </li>              
                  <li>
                    <Link to="/Profile" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Profile' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}
                    >
                    <FontAwesomeIcon icon={faUser} className="ml-4 mr-12" />
                        {expanded && "Profile"}
                    </Link>
                  </li>              
                  <li>
                    <Link to="/Help" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Help' ? 'bg-custom-purple text-white' : 'hover:bg-custom-blue'}`}
                    >
                    <FontAwesomeIcon icon={faInfoCircle} className="ml-4 mr-12" />
                        {expanded && "Help"}
                    </Link>
                  </li>              
                  <li>
                    <div 
                    onClick={open}
                    className={`block text-xl my-1 py-3 px-5 rounded-md ml-2 mr-2 text-red-400 hover:bg-red-100`}
                    >
                    <FontAwesomeIcon icon={faDoorOpen} className="ml-4 mr-12" />
                        {expanded && "Log Out"}

                        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel 
                        className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out transform"
                        // className="max-w-lg space-y-4 border bg-[#D4ECD4] p-12"
                        >
                            <DialogTitle className="font-bold">
                                Deactivate account
                            </DialogTitle>
                            <Description>
                                This will permanently deactivate your account
                            </Description>
                            <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                            <div className="flex gap-4">
                            <button onClick={() => setIsOpen(false)}>Cancel</button>
                            <button className='text-red-400' onClick={() => setIsOpen(false)}>
                              Sign Out
                            </button>
                            </div>
                        </DialogPanel>
                        </div>
                        </div>
                    </Dialog>
                        

                    </div>
                  </li>                                          
              </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar