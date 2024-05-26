import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Parties from "./pages/Parties/Parties";
import Candidates from "./pages/Candidates/Candidates";
import PartyRegistration from "./pages/PartyRegistration/PartyRegistration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<Home/>}/>
          <Route path="/parties" element={<Parties/>}/>
          <Route path="/parties/registration" element={<PartyRegistration />} />
          <Route path="/candidates" element={<Candidates/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
