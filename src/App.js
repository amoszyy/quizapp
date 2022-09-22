import React from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Setquestion from "./pages/Setquestion";
import Takequiz from "./pages/Takequiz";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setquestion" element={<Setquestion />} />
        <Route path="/takequiz" element={<Takequiz />} />
      </Routes>
    </>
  );
};

export default App;
