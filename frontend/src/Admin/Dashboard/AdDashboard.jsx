import React, { useState, useEffect } from 'react';
import { MoreVert as MenuIcon } from '@mui/icons-material';
import NavBar from '../AdComponent/Layout/NavBar';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; 
import './style.css';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,  
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'

const AdminDashboard = () => {
  const [weekDates, setWeekDates] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [chartRange, setChartRange] = useState('1Y'); // Options: '1Y', '6M', '3M'
  const [currentMonth, setCurrentMonth] = useState('');

  useEffect(() => {
    const currentWeekDates = getWeekDates();
    setWeekDates(currentWeekDates);
    setCurrentMonth(new Date().toLocaleDateString('en-US', { month: 'long' }));
    updateChartData(chartRange);
  }, [chartRange]);

  const getWeekDates = () => {
    const currentDate = new Date();
    const startOfWeek = currentDate.getDate() - currentDate.getDay() + 1;
    let tempDate = new Date(currentDate.setDate(startOfWeek));
    let weekArray = [];

    for (let i = 0; i < 7; i++) {
      const day = tempDate.getDate();
      const dayOfWeek = tempDate.toLocaleDateString('en-US', { weekday: 'short' });
      weekArray.push({ dayOfWeek, day });
      tempDate.setDate(tempDate.getDate() + 1);
    }
    return weekArray;
  };

  const updateChartData = (range) => {
    let newData;
    if (range === '1Y') {
      newData = [6, 10, 8, 14, 6, 7, 4]; 
    } else if (range === '6M') {
      newData = [7, 9, 5, 10, 8, 6, 5];
    } else if (range === '3M') {
      newData = [5, 6, 4, 9, 7, 5, 3];
    }
    setChartData(newData);
  };

  return (
    <>
    <div className="top-container">
      {/* Navbar */}
      <NavBar />

      {/* Status */}
      <section className="status">
        <div className="header">          
          <h4>Dashboard: Weekly Activity</h4>
        </div>
        <div className="items-list">
          
          {/* 1st Card */}
          <div className="item">            
            <div className="info">
              <div>
                <h5>Session Requests This Week</h5>
                <p>- 3 sessions unrevised</p>
                
              </div>
              <i className="bx bx-data"></i>
            </div>
            
          </div>

          {/* 2nd Card */}
          <div className="item">
            <div className="info">
              <div>
                <h5>Unpaid Sessions Remaining</h5>
                <p>- 5  sessions payment remaining</p>
                
              </div>
              <i className="bx bx-terminal"></i>
            </div>
            
          </div>

          {/* 3rd Card */}
          <div className="item">            
            <div className="info">
              <div>
                <h5>Top Requested Subject</h5>
                <p>- French</p>
                
              </div>
              <i className="bx bx-data"></i>
            </div>
            
          </div>

          {/* 4th Card */}
          <div className="item">
            <div className="info">
              <div>
                <h5>Average Session Request</h5>
                <p>- 8 requests daily</p>
                
              </div>
              <i className="bx bx-terminal"></i>
            </div>
            
          </div>

        </div>
      </section>
    </div>

    {/* Main Content */}
          {/* Bottom Container */}
          <div className="bottom-container">
        {/* Week days */}
        <div className="upcoming">
          <div className="header">
            <h4>Session Requests <br/> This Week</h4>
            <p className='bg-slate-300 p-1 rounded-full'>{currentMonth} <i className="bx bx-chevron-down"></i></p>
          </div>
          <div className="dates">
            {weekDates.map(({ dayOfWeek, day }) => (
              <div 
                className={`item `} 
                key={`${dayOfWeek}-${day}`}
              >
                <h5>{dayOfWeek}</h5>
                <p className={`item ${new Date().getDate() === day ? 'bg-custom-blue px-2 rounded-full text-white' : ''}`}>{day}</p>
              </div>
            ))}
          </div>
          
          {/* Events */}
          <div className="events">
            <div className="item">
              <div>
                <i className='bx bx-time'></i>
                <div className="event-info">
                  <p className='text-black'>Data Science</p>
                  <p>10:00-11:30</p>                  
                </div>
                  <div className='absolute left-80'>
                  <Menu>
                      <MenuButton >          
                        <MenuIcon />
                      </MenuButton>

                      <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-custom-heading transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                      >
                        <MenuItem>
                          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <PencilIcon className="size-4 fill-custom-blue" />
                            Reschedule            
                          </button>
                        </MenuItem>
                        <MenuItem>
                          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <Square2StackIcon className="size-4 fill-custom-blue" />
                            View Details             
                          </button>
                        </MenuItem>
                        
                        <MenuItem>
                          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <ArchiveBoxXMarkIcon className="size-4 fill-custom-blue" />
                            Cancel              
                          </button>
                        </MenuItem>
                        <MenuItem>
                          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <TrashIcon className="size-4 fill-custom-blue" />
                            Reject              
                          </button>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </div>
              </div>
              <i className='bx bx-dots-horizontal-rounded'></i>
            </div>
            <div className="item">
              <div>
                <i className='bx bx-time'></i>
                <div className="event-info">
                  <p>Machine Learning</p>
                  <p>13:30-15:00</p>
                </div>
                <div className='absolute left-80'>
                  <Menu>
                      <MenuButton >          
                        <MenuIcon />
                      </MenuButton>

                      <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-52 origin-top-right rounded-xl border bg-white p-1 text-sm/6 text-custom-heading transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                      >
                        <MenuItem>
                          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <PencilIcon className="size-4 fill-custom-blue" />
                            Reschedule            
                          </button>
                        </MenuItem>
                        <MenuItem>
                          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <Square2StackIcon className="size-4 fill-custom-blue" />
                            Copy Details             
                          </button>
                        </MenuItem>
                        <div className="my-1 h-px bg-white/5" />
                        <MenuItem>
                          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <ArchiveBoxXMarkIcon className="size-4 fill-custom-blue" />
                            Details              
                          </button>
                        </MenuItem>
                        <MenuItem>
                          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                            <TrashIcon className="size-4 fill-custom-blue" />
                            Cancel              
                          </button>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </div>
              </div>
              <i className='bx bx-dots-horizontal-rounded'></i>
            </div>
          </div>
        </div>

        {/* Chart section */}
        <div className="prog-status">
          <div className="header">
            <h4>Viewership Progress</h4>
            <div className="tabs">
              <p className={chartRange === '1Y' ? 'active' : ''} onClick={() => setChartRange('1Y')}>1Y</p>
              <p className={chartRange === '6M' ? 'active' : ''} onClick={() => setChartRange('6M')}>6M</p>
              <p className={chartRange === '3M' ? 'active' : ''} onClick={() => setChartRange('3M')}>3M</p>
            </div>
          </div>
          <div className="details">
            {/* <div className="item">
              <h2>3.45</h2>
              <p>Current GPA</p>
            </div> */}
            <div className="separator"></div>
            <div className="item">
              <h2>4.78</h2>
              <p>Visits on Average(/min)</p>
            </div>
          </div>
          {/* Chart */}
          <Line 
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
              datasets: [{
                label: 'Class GPA',
                data: chartData,
                borderColor: '#0891b2',
                tension: 0.4
              }]
            }}
          />
        </div>

        {/* Popular section */}
        <div className="popular">
          <div className="header">
            <h4>Popular</h4>
            <p># Course</p>
          </div>
          <img src="../Images/Admin/Science-Image.jpg" alt="Science" />
          <div className="audio">
            <i className="bx bx-podcast"></i>
            <p>Tutor Topic Most Taught</p>          
          </div>
          Cellular Biology <br />
          <br />
          <p>Tutor With the Most Related Sessions</p>
          <div className="listen">         
            <div className="author">
              <img src="assets/profile.png" alt="Tutor" />
              <div>
                <p>Ella Kumah</p>
                <p>Biology</p>
              </div>
            </div>
            <button>More<i className="bx bx-right-arrow-alt"></i></button>
          </div>
        </div>
        
      </div>
    </>
    
  );
};

export default AdminDashboard;
