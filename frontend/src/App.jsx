import { BrowserRouter, Routes, Route, Navigate } from "./router.jsx";
import Homepage from "./pages/Home/Homepage.jsx";
import SchoolDashboard from "./pages/Dashboard/SchoolDashboard.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Main Home Page */}
        <Route path="/" element={<Homepage />} />

        {/* 2. School ERP Dashboard */}
        <Route path="/dashboard" element={<SchoolDashboard />} />

        {/* Future Pages can be added here easily like this: */}
        {/* <Route path="/students" element={<StudentsPage />} /> */}
        {/* <Route path="/fees" element={<FeesPage />} /> */}
        {/* <Route path="/attendance" element={<AttendancePage />} /> */}

        {/* Fallback: Koi anjaan path daale toh Homepage par redirect hoga */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
