import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import Sidebar from '../../Components/Layout/Sidebar';
import sessionData from '../../Placeholders/bookedSessions.json';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Dialog } from '@headlessui/react';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const colors = {
  Nobleson: '#FF5733',
  Kongo: '#33FF57',
  Joshua: '#3357FF',
  Ella: '#FF33A1',
  Caleb: '#FF6600',
  Ewurafua: '#0099FF',
  Elikem: '#CC66FF',
  Adwoa: '#66FF66',
};

const getNextDayOfWeek = (startDate, dayOfWeek) => {
  const date = new Date(startDate);
  const resultDate = new Date(date);
  resultDate.setDate(date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7));
  return resultDate;
};

const parseTime = (timeString) => {
  const [time, period] = timeString.split(' ');
  const [hours, minutes] = time.split(':').map(Number);
  return new Date(0, 0, 0, period === 'pm' ? hours + 12 : hours, minutes);
};

const ScheduledSessionsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const events = Array.isArray(sessionData)
    ? sessionData
        .filter((session) => session.SessionStatus === 'Accepted')
        .flatMap((session) =>
          session.Days.map((day, index) => {
            const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(day);

            const startDate = getNextDayOfWeek(session.StartDate, dayOfWeek);
            const startTime = parse(`${format(startDate, 'yyyy-MM-dd')} ${session.Time[index]}`, 'yyyy-MM-dd HH:mm', new Date());
            const endTime = new Date(startTime.getTime() + session.DurationOfMeeting * 60000);

            return {
              title: `${session.Topic} - ${session.Tutor}`,
              start: startTime,
              end: endTime,
              allDay: false,
              resource: session,
              backgroundColor: colors[session.Tutor] || '#000',
            };
          })
        )
    : [];

  console.log('Events:', events);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-8 bg-gray-100 overflow-hidden">
        <h1 className="text-2xl font-bold mb-6">Scheduled Sessions</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg h-full">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%' }}
            eventPropGetter={(event) => {
              console.log('Event:', event);
              return {
                style: {
                  backgroundColor: event.backgroundColor,
                },
              };
            }}
            onSelectEvent={openModal}
          />
        </div>
      </div>

      <Dialog open={isOpen} onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
          <div className="inline-block bg-white rounded-lg p-6 shadow-xl transform transition-all align-middle">
            {selectedEvent && (
              <>
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  {selectedEvent.title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <strong>Tutor:</strong> {selectedEvent.resource.Tutor}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Topic:</strong> {selectedEvent.resource.Topic}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Subject:</strong> {selectedEvent.resource.Subject}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Level:</strong> {selectedEvent.resource.Level}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Duration:</strong> {selectedEvent.resource.DurationOfMeeting} minutes
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Location:</strong> {selectedEvent.resource.Location}
                  </p>
                  {selectedEvent.resource.Location === 'Online' && (
                    <>
                      <p className="text-sm text-gray-500">
                        <strong>Meeting Link:</strong> <a href={selectedEvent.resource.MeetingLink} target="_blank" rel="noopener noreferrer">{selectedEvent.resource.MeetingLink}</a>
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Instructor Contact:</strong> {selectedEvent.resource.InstructorContact}
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Additional Materials:</strong> {selectedEvent.resource.AdditionalMaterials.join(', ')}
                      </p>
                    </>
                  )}
                  <p className="text-sm text-gray-500">
                    <strong>Notes:</strong> {selectedEvent.resource.Notes}
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ScheduledSessionsPage;
