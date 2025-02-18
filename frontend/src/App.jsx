import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";

function App() {
  return (

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/signup" element={<SignUp />} />
              {/* <Route path="*" element={<NoPage />} /> */}
              <Route path="/contacts" element={<Contacts />} />
            </Route>
          </Routes>
      
     
  
  );
}

export default App;