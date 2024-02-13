import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Stressometer from "./components/Stressometer";
import About from "./components/About";
import View from "./components/View";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import PrivateRoutes from "./components/PrivateRoutes";
import Logout from "./components/Logout";


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stressometer" element={<Stressometer />} />
            <Route path="/about" element={<About />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/signup" element={<Signup />} />

            <Route path="/user" element={<PrivateRoutes />} >

                    <Route path="view" element={<View />} />
                    <Route path="dashboard" element={<Dashboard/>} />
                    <Route path="logout" element={<Logout />} />

            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
