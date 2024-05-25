import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Parties from "./pages/Parties/Parties";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<Home/>}/>
          <Route path="/parties" element={<Parties/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
