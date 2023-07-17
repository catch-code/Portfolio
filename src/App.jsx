import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { AppProvider } from "./context/context/app_context"

import "./App.css"


import { useState } from "react";

import Landing from "./components/landing/landing"
import Projects from "./components/projects/projects"
import Footer from "./components/shared/footer/footer"
import Header from "./components/shared/navbar/Header"


const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (

    !loading && (
       <div className="app">
      <AppProvider>
        <Header />

        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route path="*" element={() => "404 NOT FOUND"} />
          </Routes>
        </Router>

        <Footer />
      </AppProvider>
    </div>
    )
  );
};

   


export default App
