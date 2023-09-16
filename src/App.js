import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Services from "./components/Services";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
