import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/Views/HomeView"
import TableView from "./components/Views/TableView";
import AdapterView from "./components/Views/AdapterView";
import ChartView from "./components/Views/ChartView";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeView />}></Route>
            <Route path="/charts" element={<ChartView />}></Route>
            <Route path="/adapters" element={<AdapterView />}></Route>
            <Route path="/table" element={<TableView />}></Route>
            <Route path="*" element={<div>404 Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
