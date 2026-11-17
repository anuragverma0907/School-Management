import { BrowserRouter, Routes, Route, Navigate } from "./router.jsx";
import Homepage from "./pages/Home/Homepage.jsx";
import SchoolDashboard from "./pages/Dashboard/SchoolDashboard.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<Homepage />} />

       
        <Route path="/dashboard" element={<SchoolDashboard />} />

        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
