import DashboardPage from "./MainPages/Dashboard/DashboardPage"
import PaymentPage from "./MainPages/Payment/PaymentPage"
import Pricing from "./MainPages/Home/PricingPage"
import RequestSessionPage from "./MainPages/Session/RequestSessionPage"
import SessionPage from "./MainPages/Session/SessionPage"
import SignInPage from "./MainPages/SignUpIn/SignInPage"
import SignUpPage from "./MainPages/SignUpIn/SignUpPage"
import RequestSessionFormPage from "./MainPages/Session/RequestSessionFormPage"
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
      <Route path="/" element={<SignUpPage />} />
      <Route path="/SignInPage" element={<SignInPage />} />
      <Route path="/PaymentPage" element={<PaymentPage />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/SignUpPage" element={<SignUpPage />} />
      <Route path="/RequestSessionPage" element={<RequestSessionPage forms={forms} deleteForm={deleteForm} />} />
        <Route path="/RequestSessionPage/RequestSessionFormPage" element={<RequestSessionFormPage addForm={addForm} />} />
      <Route path="/SessionPage" element={<SessionPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
