import { AppProvider } from "./context/context/app_context";

import "./App.css";

import Skills from "./components/landing/skills/skills";
import Contact from "./components/landing/contact/contact";
import Footer from "./components/landing/footer/footer";
import Services from "./components/landing/services/services";
import Banner from "./components/landing/banner/banner";
import Header from "./components/landing/navbar/Header";

import { skills } from "./components/landing/skills/skillImages";
import Projects from "./components/landing/projects/Projects";
import { useState } from "react";

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
          <Banner />
          <Services />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </AppProvider>
      </div>
    )
  );
};

export default App;
