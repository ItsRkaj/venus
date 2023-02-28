import "./App.css";
import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const HomeView = lazy(() => import("./components/Views/HomeView"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Suspense fallback={<CircularProgress />}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="*" element={<div>404</div>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

