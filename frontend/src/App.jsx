import DashboardPage from "./Pages/DashboardPage"
import PaymentPage from "./Pages/PaymentPage"
import RequestSessionPage from "./Pages/RequestSessionPage"
import BookedPage from "./Pages/BookedPage"
import SignInPage from "./Pages/SignInPage"
import SignUpPage from "./Pages/SignUpPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Dashboard" element={<DashboardPage />} />
      <Route path="/" element={<SignUpPage />} />
      <Route path="/SignInPage" element={<SignInPage />} />
      <Route path="/PaymentPage" element={<PaymentPage />} />
      <Route path="/RequestSessionPage" element={<RequestSessionPage />} />
      <Route path="/BookedPage" element={<BookedPage />} />
    </Routes>
    </BrowserRouter>
    

  );
}

export default App;
