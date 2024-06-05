import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
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
          case '/':
            setActiveItem('Dashboard');
            break;
          case '/BookedPage':
            setActiveItem('Booked');
            break;
          case '/PaymentPage':
            setActiveItem('Payment');
            break;
          case '/RequestSessionPage':
            setActiveItem('RequestSession');
            break;
          // Add more cases for other pages as needed
          default:
            setActiveItem(null);
            break;
        }
      }, [location.pathname]);

  return (
    <>
    <aside className={`bg-custom-blue min-h-screen border-r border-green-200 ${expanded ? 'w-96' : 'w-24'}`}>
      <h1 className={`text-green-700 text-3xl py-2 px-4 ${expanded ? 'w-96' : 'w-20'}`}>{expanded && "Hi, User"} 
      <button onClick={() => setExpanded (!expanded)} >
        {expanded? <FontAwesomeIcon icon={faChevronLeft} className="ml-56 h-6 w-6" />:<FontAwesomeIcon icon={faHamburger} className="ml-6 h-6 w-6" />} </button>
      </h1>
      <p className="text-green-600 text-2xl py-1 px-4">{expanded && "Your affiliation with us is greatly appreciated!"}</p>
      <nav className="mt-2">
            <ul>
              <hr size="2"></hr>
                <li>
                    <Link to="/" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2 ${activeItem === 'Dashboard' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}
                    >
                        <FontAwesomeIcon icon={faUser} className="ml-3 mr-12" />
                        {expanded && "Dashboard"}
                    </Link>
                </li>
                <li>
                    <Link to="/BookedPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2 ${activeItem === 'Booked' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}
                    >
                        <FontAwesomeIcon icon={faAddressBook} className="ml-3 mr-11" />
                            {expanded && "Booked Sessions"}
                    </Link>
                </li>
                <li>
                    <Link to="/PaymentPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2 ${activeItem === 'Payment' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}
                    >
                    <FontAwesomeIcon icon={faHeart} className="ml-3 mr-11" />
                        {expanded && "Payment"}
                    </Link>
                </li>
                <li>
                    <Link to="/RequestSessionPage" 
                    className={`block text-xl my-1 py-3 px-5 hover:bg-green-500 hover:text-white rounded-md ml-2 mr-2 ${activeItem === 'RequestSession' ? 'bg-green-500 text-white' : 'hover:bg-green-500 hover:text-white'}`}
                    >
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="ml-4 mr-12" />
                        {expanded && "RequestSession"}
                    </Link>
                </li>              
            </ul>
      </nav>
    </aside>
    </>
  )
}

export default Sidebar