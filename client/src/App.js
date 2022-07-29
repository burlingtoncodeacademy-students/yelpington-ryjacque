import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Business from "./components/Business";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [allData, setAllData] = useState([])
  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:5000/api");
      //fetch path from server
      let data = await res.json();
      setAllData(data);
    }
    getData();
  }, [])
  console.log(allData)
  //router and nav bar
  //renders perfectly in Safari, not in Firefox, so that's cool
  return (
    <Router>
      <div className="wrapper">
      <Link className="nav-item" to="/"><h1>Yelpington</h1></Link>
        <nav>
        {allData.map((business)=>{
          return (
            <Link className="nav-item" to={business.path}>{business.name}</Link>
          )
        })}
        </nav>
        <Routes>
          <Route exact path="/" element={<Home allData={allData}/>} />
          {allData.map((business)=>{
            return (
              <Route exact path={business.path} element={<Business fetchPath={business.path} />} />
            )
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
