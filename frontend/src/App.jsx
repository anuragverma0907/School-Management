import Homepage from "./pages/Home/Homepage.jsx";
import SchoolDashboard from "./pages/Dashboard/SchoolDashboard.jsx";

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  return pathname === "/dashboard" ? <SchoolDashboard /> : <Homepage />;
}
