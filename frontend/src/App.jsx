import DashboardPage from "./Pages/DashboardPage"
import PaymentPage from "./Pages/PaymentPage"
import RequestSessionPage from "./Pages/RequestSessionPage"
import BookedPage from "./Pages/BookedPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/PaymentPage" element={<PaymentPage />} />
      <Route path="/RequestSessionPage" element={<RequestSessionPage />} />
      <Route path="/BookedPage" element={<BookedPage />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
