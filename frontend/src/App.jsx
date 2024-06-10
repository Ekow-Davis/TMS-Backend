import DashboardPage from "./MainPages/DashboardPage"
import PaymentPage from "./MainPages/PaymentPage"
import RequestSessionPage from "./MainPages/RequestSessionPage"
import BookedPage from "./MainPages/BookedPage"
import SignInPage from "./MainPages/SignInPage"
import SignUpPage from "./MainPages/SignUpPage"
import RequestSessionFormPage from "./TransitionPages/RequestSessionFormPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Dashboard" element={<DashboardPage />} />
      <Route path="/" element={<SignUpPage />} />
      <Route path="/SignInPage" element={<SignInPage />} />
      <Route path="/PaymentPage" element={<PaymentPage />} />
      <Route path="/SignUpPage" element={<SignUpPage />} />
      <Route path="/RequestSessionPage" element={<RequestSessionPage />} />
      <Route path="/RequestSessionPage/RequestSessionFormPage" element={<RequestSessionFormPage />} />
      <Route path="/BookedPage" element={<BookedPage />} />
    </Routes>
    </BrowserRouter>
    

  );
}

export default App;
