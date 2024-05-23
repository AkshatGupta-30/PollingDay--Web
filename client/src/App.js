import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Parties from "./pages/Parties"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/Parties" element={<Parties/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
