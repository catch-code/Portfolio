import { AppProvider } from "./context/context/app_context";

import "./App.css";

import Skills from "./components/landing/skills/skills";
import Contact from "./components/landing/contact/contact";
import Footer from "./components/landing/footer/footer";
import Services from "./components/landing/services/services";
import Banner from "./components/landing/banner/banner";
import Header from "./components/landing/navbar/Header";

import Projects from "./components/landing/projects/Projects";

const App = () => {
  return (
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
  );
};

export default App;
