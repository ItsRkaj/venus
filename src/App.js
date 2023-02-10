import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Day from "./components/Day";
import Week from "./components/Week";
import Month from "./components/Month";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<div>Homepage</div>}></Route>
            <Route path="/home" element={<Day />}></Route>
            <Route path="/adapters" element={<Week />}></Route>
            <Route path="/table" element={<Month />}></Route>
            <Route path="*" element={<div>404 Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
