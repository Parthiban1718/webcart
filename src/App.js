import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";

// General Pages
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Formpage";
import Contact from "./Components/Contact/Contact";
import Calculator from "./Components/Projects/Calculator";
import FormLogin from "./Components/Projects/Formpage";
import Game from "./Components/Projects/Game";

// E-commerce Components
import Header from "./Components/Projects/Ecomcomp/Componets/Header";
import Template from "./Components/Projects/Ecomcomp/Componets/Template";
import Fruits from "./Components/Projects/Ecomcomp/Componets/Fruits";
import Vegetables from "./Components/Projects/Ecomcomp/Componets/Vegetables";
import Electronic from "./Components/Projects/Ecomcomp/Componets/Electronic";
import Fashion from "./Components/Projects/Ecomcomp/Componets/Fashion";
import Payment from "./Components/Projects/Ecomcomp/Componets/Payment";
import Customer from "./Components/Projects/Ecomcomp/Componets/Customer";

function App() {
  const [headercount, setheadercount] = useState(0);
  const [popupstatus, setpopupstatus] = useState(false);

  function closePopup() {
    setpopupstatus(false);
  }

  return (
    <Router>
      <Routes>
 <Link to="/">Home</Link>
  <Link to="/About">About</Link>
  <Link to="/Education">Education</Link>
  <Link to="/Projects">Projects</Link>
  <Link to="/Calculator">Calculator</Link>
  <Link to="/Formpage">Form</Link>
  <Link to="/Contact">Contact</Link>
  <Link to="/Game">Game</Link>


        {/* E-commerce Sections */}
  <Link to="/Fruits">Fruits</Link>
  <Link to="/Vegetables">Vegetables</Link>
  <Link to="/Electronic">Electronic</Link>
  <Link to="/Fashion">Fashion</Link>
  <Link to="/payment">Payment</Link>
  <Link to="/Customer-Service">Customer Service</Link>

        {/* Full Template Page */}
        <Route
          path="/Template"
          element={
            <Template
              showPopup={popupstatus}
              closePopup={closePopup}
              sendHeadercount={setheadercount}
            />
          }
        />

        {/* Header Preview Route */}
        <Route
          path="/Header"
          element={<Header headercount={headercount} showPopup={setpopupstatus} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
