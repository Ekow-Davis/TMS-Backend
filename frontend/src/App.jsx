// Extra Utils
import ProtectedRoute from "./Components/Utils/ProtectedRoute"

// Student Parts
import DashboardPage from "./MainPages/Dashboard/DashboardPage"
import HelpPage from "./MainPages/Help/HelpPage"
import ContactUsPage from "./MainPages/Help/ContactUsPage"
import HomePage from "./MainPages/Home/HomePage"
import PricingPage from "./MainPages/Home/PricingPage"
import StudentPage from "./MainPages/Home/StudentPage"
import TutorPage from "./MainPages/Home/TutorPage"
import AboutUsPage from "./MainPages/Home/AboutUsPage"
import MessagePage from "./MainPages/Message/MessagePage"
import MDetailPage from "./MainPages/Message/MDetailPage"
import NotificationPage from "./MainPages/Notification/NotificationPage"
import NDetailPage from "./MainPages/Notification/NDetailPage"
import PaymentHistoryPage from "./MainPages/Payment/PaymentHistoryPage"
import MakePayment from "./MainPages/Payment/MakePayment"
import PaymentPage from "./MainPages/Payment/PaymentPage"
import ProfilePage from "./MainPages/Profile/ProfilePage"
import SecurityPage from "./MainPages/Profile/SecurityPage"
import SettingsPage from "./MainPages/Profile/SettingsPage"
import NSettingsPage from "./MainPages/Profile/NSettingsPage"
import ExportDataPage from "./MainPages/Profile/ExportDataPage"
import SessionHistoryPage from "./MainPages/Session/SessionHistoryPage"
import RequestSessionPage from "./MainPages/Session/RequestSessionPage"
import RequestSessionFormPage from "./MainPages/Session/RequestSessionFormPage"
import BookedSessionsPage from "./MainPages/Session/BookedSessionsPage"
import SignInPage from "./MainPages/SignUpIn/SignInPage"

//Admin Parts
import AdminDashboard from './Admin/Dashboard/AdDashboard'
import AdminSession from './Admin/Sessions/AdSessions'
import AdminJobs from './Admin/Jobs/AdJobs'
import AdminStudents from './Admin/Students/AdStudents'
import AdminTutors from './Admin/Tutors/AdTutors'
import AdminSettings from './Admin/Settings/AdSettings'
import AdminEmployee from './Admin/Employee/AdEmployee'
import AdminNotification from './Admin/Notifications/AdNotification'



import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

 

  return (
    <BrowserRouter>
    <Routes>
   
      <Route path="/SignIn" element={<SignInPage />} />

      <Route path="/Help" element={<HelpPage />} />
      <Route path="/ContactUs" element={<ContactUsPage />} />

      <Route path="/" element={<HomePage />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Student" element={<StudentPage />} />
        <Route path="/Tutor" element={<TutorPage />} />        
        <Route path="/AboutUs" element={<AboutUsPage />} />  

      
      <Route path="/Dashboard" element={<ProtectedRoute> <DashboardPage /> </ProtectedRoute>} />

      <Route path="/Message" element={<MessagePage />} />
        <Route path="/MDetail" element={<MDetailPage />} />

      <Route path="/Notification" element={<ProtectedRoute> <NotificationPage /> </ProtectedRoute>} />
        <Route path="/NDetail/:id" element={<ProtectedRoute> <NDetailPage /></ProtectedRoute>} />

      <Route path="/PaymentHistory" element={<ProtectedRoute><PaymentHistoryPage /></ProtectedRoute>} />
        <Route path="/Payment" element={<ProtectedRoute> <PaymentPage /> </ProtectedRoute>} />
        <Route path="/MakePayment" element={<ProtectedRoute> <MakePayment /></ProtectedRoute>} />

      <Route path="/Profile" element={<ProtectedRoute> <ProfilePage /> </ProtectedRoute>} />
        <Route path="/Security" element={<ProtectedRoute> <SecurityPage /> </ProtectedRoute>} />
        <Route path="/Settings" element={<ProtectedRoute> <SettingsPage /> </ProtectedRoute>} />
        <Route path="/NSettings" element={<ProtectedRoute> <NSettingsPage /></ProtectedRoute>} />
        <Route path="/ExportData" element={<ProtectedRoute> <ExportDataPage /> </ProtectedRoute>} />

      <Route path="/Sessions" element={<ProtectedRoute> <SessionHistoryPage /> </ProtectedRoute>} />
        <Route path="/BookedSessions" element={<ProtectedRoute> <BookedSessionsPage /> </ProtectedRoute>} />
        <Route path="/RequestSessionPage" element={<ProtectedRoute> <RequestSessionPage /> </ProtectedRoute>} />
          <Route path="/RequestSessionFormPage" element={<ProtectedRoute> <RequestSessionFormPage /> </ProtectedRoute>} />

      <Route path="/Admin/Session" element={<AdminSession />} />
      <Route path="/Admin/Dashboard" element={<AdminDashboard />} />
      <Route path="/Admin/Jobs" element={<AdminJobs />} />
      <Route path="/Admin/Students" element={<AdminStudents />} />
      <Route path="/Admin/Tutors" element={<AdminTutors />} />
      <Route path="/Admin/Employee" element={<AdminEmployee />} />
      <Route path="/Admin/Settings" element={<AdminSettings />} />
      <Route path="/Admin/Notification" element={<AdminNotification />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
