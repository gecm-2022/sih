import { useState,useMemo } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
import Error from "./Pages/Error";
import Events from "./Pages/Events";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import Donations from "./Pages/Donations";
import Alumini from "./Pages/Alumini";
import Logout from "./Pages/Logout";


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <BrowserRouter>
      <Main/>
      
      </BrowserRouter>
    </>
  );
}
function Main() {
  const location = useLocation();
  const bg = useMemo(() => location.pathname === "/", [location]);

  return (
    <div className={`${bg ? "bg-[url('/img/bg.png')]" : ""} bg-cover bg-no-repeat min-h-screen`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/NewsandEvents" element={<Events />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}


export default App;
