import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faCubes,faCreditCard, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

     const [activeItem, setActiveItem] = useState(null);
     const location = useLocation();
     const [expanded, setExpanded] = useState(true)


    useEffect(() => {
        const pathname = location.pathname;
        // Update activeItem based on the current pathname
        switch (pathname) {
          case '/Dashboard':
            setActiveItem('Dashboard');
            break;
          case '/BookedPage':
            setActiveItem('Booked');
            break;
          case '/PaymentPage':
            setActiveItem('Payment');
            break;
          case '/ProfilePage':
            setActiveItem('Profile');
            break;
          case '/ExtraPage':
            setActiveItem('Extra');
            break;
          // Add more cases for other pages as needed
          default:
            setActiveItem(null);
            break;
        }
      }, [location.pathname]);

  return (
    <>
      <aside className={`bg-custom-blue min-h-screen border-r  ${expanded ? 'w-72' : 'w-24'}`}>
        <h1 className={`text-white text-3xl py-2 px-4 ${expanded ? 'w-96' : 'w-20'}`}>
        <button onClick={() => setExpanded (!expanded)} >
          {expanded? <img src="../Images/main-logo-white-transparent.png" alt="Logo" className='h-32 ml-12 items-center justify-center'/>:<FontAwesomeIcon icon={faBookOpenReader} className="ml-6 h-6 w-6 my-16" />} </button>
        </h1>
        <nav className="mt-2">
              <ul>
                <hr size="2"></hr>
                  <li>
                    <Link to="/Dashboard" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Dashboard' ? 'bg-custom-purple text-white' : 'hover:bg-white'}`}
                    >
                        <FontAwesomeIcon icon={faCubes} className="ml-3 mr-12" />
                        {expanded && "Dashboard"}
                    </Link>
                  </li>
                  <li>
                    <Link to="/RequestSessionPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Booked' ? 'bg-custom-purple text-white' : 'hover:bg-white'}`}
                    >
                        <FontAwesomeIcon icon={faCalendar} className="ml-3 mr-11" />
                            {expanded && "Sessions"}
                    </Link>
                  </li>
                  <li>
                    <Link to="/PaymentPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Payment' ? 'bg-custom-purple text-white' : 'hover:bg-white'}`}
                    >
                    <FontAwesomeIcon icon={faCreditCard} className="ml-3 mr-11" />
                        {expanded && "Payment"}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ProfilePage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Profile' ? 'bg-custom-purple text-white' : 'hover:bg-white'}`}
                    >
                    <FontAwesomeIcon icon={faUser} className="ml-4 mr-12" />
                        {expanded && "Profile"}
                    </Link>
                  </li>              
                  <li>
                    <Link to="/ExtraPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-blue-100 rounded-md ml-2 mr-2 ${activeItem === 'Extra' ? 'bg-custom-purple text-white' : 'hover:bg-white'}`}
                    >
                    <FontAwesomeIcon icon={faCalendar} className="ml-4 mr-12" />
                        {expanded && "Extra"}
                    </Link>
                  </li>              
              </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar