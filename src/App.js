import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
        {/* General Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Formpage" element={<FormLogin />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Game" element={<Game />} />

        {/* E-commerce Sections */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Fruits" element={<Fruits />} />
        <Route path="/Vegetables" element={<Vegetables />} />
        <Route path="/Electronic" element={<Electronic />} />
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Customer & Services" element={<Customer />} />

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
