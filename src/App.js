import React from "react";
import "./SASS/App.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Loginpage from "./Pages/LoginPage";

import Signuppage from "./Pages/SignUpPage";
function App() {
  return (
  <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
   
        <Routes> 
          <Route path="/signup" exact element={<Signuppage/>} />

          <Route path="/login" exact element={<Loginpage />} />

        
            <Route exact path="/" element={<Homepage />} />
          
          
        </Routes>
      
    </div>
   </BrowserRouter>
  
  </>
  );
}

export default App;
