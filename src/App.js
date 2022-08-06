import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Learning from "./Components/Learning";
import Detection from "./Components/Detection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/detection" element={<Detection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
