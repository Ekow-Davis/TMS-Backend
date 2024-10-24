import React, { useContext } from 'react';
import DonutChart from '../../Components/DonutChart';
import { UserContext } from '../../Components/Utils/UserContext'

const Aside = () => {

  const { user } = useContext(UserContext)

  return (
    <aside className="lg:w-[50%] p-4 ">
      {/* Greeting */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Hello {user?.lastName || 'user'}, welcome back!</h2>
      </div>

      {/* My Courses */}
      <section>
        <h3 className="font-bold mb-2">Statistic</h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
          <CourseCard title="Sessions In Progress" numData="35" />
          <CourseCard title="Sessions Completed" numData="30"  />
          <CourseCard title="Sessions Remaining" numData="45"  />
          <CourseCard title="Sessions Awaiting" numData="20" />
        </div>
      </section>
    
      {/* Weekly Work */}
      <section className="mt-6">
        <h3 className="font-bold mb-2">Weekly Progress</h3>
        <div className="flex items-center justify-center">
          <div className="relative ">
            {/* Circle Progress */}
            <div className='bg-[#EBF6FF] p-3 lg:gap-4 flex rounded-lg'>
              <div className='items-center content-center'>
                <p>Currently Completed Sessions:</p>
              </div>
              <DonutChart percentage={70} color={'#aeefef'}/>
            </div>
            
          </div>
        </div>
      </section>
    </aside>
  );
};

const CourseCard = ({ title, numData }) => (
  <div className="bg-[#EBF6FF] p-6 rounded-lg flex flex-col">

    <div>
      <h4 className="font-bold text-xl text-custom-heading">{title}</h4>
    </div>

    <div className='flex bottom-10 mt-8 items-center'>
      {/* Small rectangle on the left */}
      <div className="w-2 h-10 bg-custom-purple mr-4"/>
      
      
      <div className="ml-auto">
        <p className="text-lg font-semibold">{numData}</p>
      </div>
    </div>
  </div>
);



export default Aside;
