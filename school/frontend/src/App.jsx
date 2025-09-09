import { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WhyChooseUsDetail from "./components/WhyChooseUsDetails";
import EnrollForm from "./form/EnrollForm";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import AdmissionPage from "./pages/AdmissionPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import GalleryPage from "./pages/GalleryPage";
// import { Contact } from "lucide-react";
import Contact from './pages/Contact';
import Login from "./form/Login";
import SchoolRegister from "./form/SchoolRegister";
function App() {
  const [count, setCount] = useState(0);
  const [isLanding, setLanding] = useState(true);

  return (
    <>
      {isLanding ? (
        <LandingPage isLanding={isLanding} setLanding={setLanding} />
      ) : (
        <>
          <Navbar />
          <div className="page-content pt-[80px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/why-choose-us/:id"
                element={<WhyChooseUsDetail />}
              />
              <Route path="/enroll" element={<EnrollForm />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/admission" element={<AdmissionPage/>} />
              <Route path="/facilities" element={<FacilitiesPage/>} />
              <Route path="/gallery" element={<GalleryPage/>} />
              <Route path="/contact" element={<Contact/>} />

              // login 
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<SchoolRegister/>} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;
