// Extra Utils
import ProtectedRoute from "./Components/Utils/ProtectedRoute"
import { UserProvider } from "./Components/Utils/UserContext"

// Public Parts
import ContactUsPage from "./MainPages/Help/ContactUsPage"
import HomePage from "./MainPages/Home/HomePage"
import PricingPage from "./MainPages/Home/PricingPage"
import StudentPage from "./MainPages/Home/StudentPage"
import TutorPage from "./MainPages/Home/TutorPage"
import AboutUsPage from "./MainPages/Home/AboutUsPage"

// Student Parts
import DashboardPage from "./MainPages/Dashboard/DashboardPage"
import HelpPage from "./MainPages/Help/HelpPage"

// import MessagePage from "./MainPages/Message/MessagePage"
// import MDetailPage from "./MainPages/Message/MDetailPage"
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
import AdminFeedback from './Admin/Feedback/AdFeedback'
import AdminNotification from './Admin/Notifications/AdNotification'

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

 

  return (       
    

    <BrowserRouter>
    

    <Routes>
      {/* Public Routes */}      
      <Route path="/Help" element={<HelpPage />} />
      <Route path="/ContactUs" element={<ContactUsPage />} />

      <Route path="/" element={<HomePage />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/Student" element={<StudentPage />} />
        <Route path="/Tutor" element={<TutorPage />} />        
        <Route path="/AboutUs" element={<AboutUsPage />} />  

      <Route path="/SignIn" element={<SignInPage />} />

      {/* Student Routes */}

      <Route path="/Dashboard" element={
        <UserProvider>
          <ProtectedRoute roleRequired="Student"> <DashboardPage /> </ProtectedRoute>
        </UserProvider>} 
      />

      {/* <Route path="/Message" element={<MessagePage />} />
        <Route path="/MDetail" element={<MDetailPage />} /> */}

      <Route path="/Notification" element={ 
        <UserProvider>
        <ProtectedRoute roleRequired="Student"> <NotificationPage /> </ProtectedRoute>
      </UserProvider> }
      />
        <Route path="/NDetail/:id" element={ 
          <UserProvider>
          <ProtectedRoute roleRequired="Student"> <NDetailPage /> </ProtectedRoute>
        </UserProvider> } />

      <Route path="/PaymentHistory" element={
        <UserProvider>
        <ProtectedRoute roleRequired="Student"> <PaymentHistoryPage /> </ProtectedRoute>
      </UserProvider> } />

        <Route path="/Payment" element={ 
          <UserProvider>
          <ProtectedRoute roleRequired="Student"> <PaymentPage /> </ProtectedRoute>
        </UserProvider> 
         } />
        <Route path="/MakePayment" element={ 
          <UserProvider>
          <ProtectedRoute roleRequired="Student"> <MakePayment /> </ProtectedRoute>
        </UserProvider> 
        } />

      <Route path="/Profile" element={ 
        <UserProvider>
          <ProtectedRoute roleRequired="Student"> <ProfilePage /> </ProtectedRoute>
        </UserProvider>
       } />

        <Route path="/Security" element={ 
          <UserProvider>
          <ProtectedRoute roleRequired="Student"> <SecurityPage /> </ProtectedRoute>
        </UserProvider> 
         } />

        <Route path="/Settings" element={ 
          <UserProvider>
          <ProtectedRoute roleRequired="Student"> <SettingsPage /> </ProtectedRoute>
        </UserProvider> 
         } />
        <Route path="/NSettings" element={ 
          <UserProvider>
          <ProtectedRoute roleRequired="Student"> <NSettingsPage /> </ProtectedRoute>
        </UserProvider> 
        } />
        <Route path="/ExportData" element={ 
          <UserProvider>
          <ProtectedRoute roleRequired="Student"> <ExportDataPage /> </ProtectedRoute>
        </UserProvider> 
         } />

      <Route path="/Sessions" element={ 
        <UserProvider>
        <ProtectedRoute roleRequired="Student"> <SessionHistoryPage /> </ProtectedRoute>
        </UserProvider> 
       } />
        <Route path="/BookedSessions" element={ 
          <UserProvider>
          <ProtectedRoute roleRequired="Student"> <BookedSessionsPage /> </ProtectedRoute>
        </UserProvider> 
         } />
        <Route path="/RequestSessionPage" element={ 
          <UserProvider>
          <ProtectedRoute roleRequired="Student"> <RequestSessionPage /> </ProtectedRoute>
        </UserProvider> 
        } />
        <Route path="/RequestSessionFormPage" element={ 
          <UserProvider>
          <ProtectedRoute roleRequired="Student"> <RequestSessionFormPage /> </ProtectedRoute>
        </UserProvider> 
        } />

        {/* Admin Routes */}
      <Route path="/Admin/Session" element={
        <UserProvider>
        <ProtectedRoute roleRequired="Admin"> <AdminSession /> </ProtectedRoute>
      </UserProvider> 
      } />
      <Route path="/Admin/Dashboard" element={
        <UserProvider>
        <ProtectedRoute roleRequired="Admin"> <AdminDashboard /> </ProtectedRoute>
      </UserProvider> 
      } />
      <Route path="/Admin/Jobs" element={
        <UserProvider>
        <ProtectedRoute roleRequired="Admin"> <AdminJobs /> </ProtectedRoute>
      </UserProvider> 
      } />
      <Route path="/Admin/Students" element={
        <UserProvider>
        <ProtectedRoute roleRequired="Admin"> <AdminStudents /> </ProtectedRoute>
      </UserProvider> 
      } />
      <Route path="/Admin/Tutors" element={
        <UserProvider>
        <ProtectedRoute roleRequired="Admin"> <AdminTutors /> </ProtectedRoute>
      </UserProvider> 
      } />
      <Route path="/Admin/Feedback" element={
        <UserProvider>
        <ProtectedRoute roleRequired="Admin"> <AdminFeedback /> </ProtectedRoute>
      </UserProvider> 
      } />
      <Route path="/Admin/Settings" element={
        <UserProvider>
        <ProtectedRoute roleRequired="Admin"> <AdminSettings /> </ProtectedRoute>
      </UserProvider> 
      } />
      <Route path="/Admin/Notification" element={
        <UserProvider>
        <ProtectedRoute roleRequired="Admin"> <AdminNotification /> </ProtectedRoute>
      </UserProvider> 
      } />
      
    </Routes>
   
    </BrowserRouter>
    
    
  );
}

export default App;
