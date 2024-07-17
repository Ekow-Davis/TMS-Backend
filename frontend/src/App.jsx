import DashboardPage from "./MainPages/Dashboard/DashboardPage"
import HelpPage from "./MainPages/Help/HelpPage"
import HomePage from "./MainPages/Home/HomePage"
import PricingPage from "./MainPages/Home/PricingPage"
import MessagePage from "./MainPages/Message/MessagePage"
import MDetailPage from "./MainPages/Message/MDetailPage"
import NotificationPage from "./MainPages/Notification/NotificationPage"
import NDetailPage from "./MainPages/Notification/NDetailPage"
import PaymentHistoryPage from "./MainPages/Payment/PaymentHistoryPage"
import PaymentPage from "./MainPages/Payment/PaymentPage"
import ProfilePage from "./MainPages/Profile/ProfilePage"
import SessionHistoryPage from "./MainPages/Session/SessionHistoryPage"
import RequestSessionPage from "./MainPages/Session/RequestSessionPage"
import RequestSessionFormPage from "./MainPages/Session/RequestSessionFormPage"
import BookedSessionsPage from "./MainPages/Session/BookedSessionsPage"
import SignInPage from "./MainPages/SignUpIn/SignInPage"
import SignUpPage from "./MainPages/SignUpIn/SignUpPage"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react"

function App() {

  const [forms, setForms] = useState([]);

  const addForm = (form) => {
    setForms([...forms, form]);
  };

  const deleteForm = (index) => {
    setForms(forms.filter((_, i) => i !== index));
  };

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Dashboard" element={<DashboardPage />} />
      <Route path="/Help" element={<HelpPage />} />
      <Route path="/" element={<HomePage />} />
        <Route path="/Pricing" element={<PricingPage />} />
      <Route path="/Message" element={<MessagePage />} />
        <Route path="/MDetail" element={<MDetailPage />} />
      <Route path="/Notification" element={<NotificationPage />} />
        <Route path="/NDetail" element={<NDetailPage />} />
      <Route path="/PaymentHistory" element={<PaymentHistoryPage />} />
        <Route path="/Payment" element={<PaymentPage />} />
      <Route path="/Profile" element={<ProfilePage />} />
      <Route path="/Sessions" element={<SessionHistoryPage />} />
        <Route path="/BookedSessions" element={<BookedSessionsPage />} />
        <Route path="/RequestSessionPage" element={<RequestSessionPage forms={forms} deleteForm={deleteForm} />} />
          <Route path="/RequestSessionPage/RequestSessionFormPage" element={<RequestSessionFormPage addForm={addForm} />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/SignIn" element={<SignInPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
