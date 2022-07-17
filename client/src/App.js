import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Business from "./components/Business";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <h1>Yelpington</h1>
        <nav>
          <Link className="nav-item" to="/">Home</Link>
          <Link to="/tacogordo">Taco Gordo</Link>
          <Link to="/cafemamajuana">Cafe Mamajuana</Link>
          <Link to="/mauditepoutine">Maudite Poutine</Link>
          <Link to="/poppycafe">Poppy Cafe</Link>
          <Link to="/mayday">May Day</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tacogordo" element={<Business fetchPath="tg" />}/>
          <Route exact path="/cafemamajuana" element={<Business fetchPath="mj" />}/>
          <Route exact path="/mauditepoutine" element={<Business fetchPath="mp" />}/>
          <Route exact path="/poppycafe" element={<Business fetchPath="pc" />}/>
          <Route exact path="/mayday" element={<Business fetchPath="md" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
