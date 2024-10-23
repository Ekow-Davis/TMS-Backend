import React, { useState, useMemo, useEffect, Fragment } from 'react';
import { MoreVert as MenuIcon } from '@mui/icons-material';
import { Dialog, Transition } from '@headlessui/react';
import NavBar from '../AdComponent/Layout/NavBar';
import '../Dashboard/style.css';

const AdStudents = () => {
  const [students, setStudents] = useState([]); // Fetching data
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(3);

  // Fetch student data from backend API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/admin/students', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setStudents(data);
        setFilteredData(data); // Initially, show all students
      } 
      catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  const closeModal = () => setIsOpen(false);

  const openModal = (student) => {
    setSelectedStudent(student);
    setIsOpen(true);
  };

  // Handle search and filter logic
  useEffect(() => {
    const filtered = students.filter((student) =>
      student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.otherNames.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.includes(searchQuery)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page when search query changes
  }, [searchQuery, students]);

  // Pagination variables
  const totalEntries = filteredData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

  return (
    <>
      <div className="top-container">
        <NavBar />
        <section className="status">
          <div className="header">
            <h4>Weekly Activity</h4>
          </div>
          <div className="items-list">
            <div className="item">
              <div className="info">
                <div>
                  <h5>New Students This Week</h5>
                  <p>- 3 New Students</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <div>
                  <h5>Students with 0 Sessions</h5>
                  <p>- 8 students with no session requests</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <div>
                  <h5>Students With Unpaid Sessions</h5>
                  <p>- 2 Students</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Student Table */}
      <div className="p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Student List</h3>
        </div>

        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search students..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-md"
          />
          <select
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            className="p-2 border rounded-md"
          >
            <option value="3">3 per page</option>
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
          </select>
        </div>

        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Phone Number</th>
              <th className="py-3 px-6">updated_at</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.length > 0 ? (
              currentEntries.map((student, index) => (
                <tr key={student.id} className="border-b">
                  <td className="py-2 px-4 text-center">{index + 1 + (currentPage - 1) * entriesPerPage}</td> {/* Incremental ID */}
                  <td className="py-2 px-4 text-center">{`${student.lastName}, ${student.otherNames}`}</td>
                  <td className="py-2 px-4 text-center">{student.email}</td>
                  <td className="py-2 px-4 text-center">{student.phoneNumber}</td>
                  <td className="py-2 px-4 text-center">{new Date(student.updated_at).toLocaleDateString()}</td>
                  <td className="py-2 px-4 text-center">
                    <button
                      onClick={() => openModal(student)}
                      className="bg-custom-purple text-white p-2 rounded-lg hover:bg-custom-hover"
                    >
                      <MenuIcon />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-6">
                  <img src="../Images/Admin/empty-grey.svg" alt="No Data" className="mx-auto h-32" />
                  <p>No Data Found</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p>
            Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries
          </p>
          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-gray-400' : 'bg-gray-200'} rounded-md`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dialog for viewing student details */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Student Details
                </Dialog.Title>
                {selectedStudent && (
                  <div className="mt-4">
                    <p><strong>Student ID:</strong> {selectedStudent.id}</p>
                    <p><strong>Last Name:</strong> {selectedStudent.lastName}</p>
                    <p><strong>Other Names:</strong> {selectedStudent.otherNames}</p>
                    <p><strong>Email:</strong> {selectedStudent.email}</p>
                    <p><strong>Phone Number:</strong> {selectedStudent.phoneNumber}</p>
                    <p><strong>Created At:</strong> {new Date(selectedStudent.created_at).toLocaleDateString()}</p>
                    <p><strong>Last Updated:</strong> {new Date(selectedStudent.updated_at).toLocaleDateString()}</p>
                  </div>
                )}
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="bg-custom-purple text-white px-4 py-2 rounded-lg hover:bg-custom-hover"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

export default AdStudents