import React from 'react';
import PendingIcon from '@mui/icons-material/AccessTime';
import OngoingIcon from '@mui/icons-material/Autorenew';
import PaidIcon from '@mui/icons-material/Paid';
import CompletedIcon from '@mui/icons-material/CheckCircle';
import MenuIcon from '@mui/icons-material/List';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'

const RightCards = () => {
  return (
    <>
      <div className="flex-col sm:w-full lg:w-[50%]">
        <p className="text-xl text-custom-heading my-4 font-bold">
          Session Data
        </p>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <Card title="Pending Requests" value="12" Icon={PendingIcon} bgColor="bg-[#FFD043]" />
          <Card title="Ongoing Sessions" value="5" Icon={OngoingIcon} bgColor="bg-[#FF993A]" />
          <Card title="Amount to be Paid" value="$1500" Icon={PaidIcon} bgColor="bg-custom-blue" />
          <Card title="Completed" value="20" Icon={CompletedIcon} bgColor="bg-custom-purple" />
        </div>
        {/* Planning Section */}
        <section className="mt-6">
          <h3 className="font-bold my-1 text-custom-heading mb-2">Sessions Today</h3>
          <div>
            <TaskCard time="8:00 - 10:00" task="Reading - Topic 1" />
            <TaskCard time="13:00 - 14:00" task="Writing - Topic 2" />
            <TaskCard time="15:00 - 16:00" task="Listening - Topic 1" />
            <TaskCard time="19:00 - 20:00" task="Listening - Topic 2" />
          </div>
        </section>
      </div>
    </>
  );
};

const Card = ({ title, value, Icon, bgColor }) => (
  <div className={`flex justify-between items-center ${bgColor} p-4 rounded-lg shadow-lg text-white`}>
    <div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-md font-semibold">{value}</p>
    </div>
    <Icon className="h-24 w-24" />
  </div>
);

const TaskCard = ({ time, task }) => (
  <div className="flex justify-between items-center p-2 bg-white rounded-lg shadow-md mb-2">
    <div>
      <p>{task}</p>
      <span>{time}</span>
    </div>
        
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
  
);

export default RightCards;
