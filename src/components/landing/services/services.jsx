import Lottie from "react-lottie"
import "bootstrap/dist/css/bootstrap.min.css"

import "./services.scss"
import { toolImage } from "../tools/toolImages"

import GraphicsAnimation from "../../../assets/lottie/Graphics.json"
import UIUXAnimation from "../../../assets/lottie/UI-UX Design.json"
import MobileAnimation from "../../../assets/lottie/Mobile Development.json"
import FrontendAnimation from "../../../assets/lottie/Frontend Development.json"
import BackendAnimation from "../../../assets/lottie/Backend Development.json"
import AIAnimation from "../../../assets/lottie/AI.json"
import TestingAnimation from "../../../assets/lottie/Testing.json"

function Services() {
  const graphics = [
    {
      name: "Audition",
      icon: "audition"
    },
    {
      name: "Gimp",
      icon: "gimp"
    },
    {
      name: "Illustrator",
      icon: "illustrator"
    },
    {
      name: "Lightroom",
      icon: "lightroom"
    },
    {
      name: "Photoshop",
      icon: "photoshop"
    },
    {
      name: "Picsart",
      icon: "picsart"
    },
    {
      name: "Premier",
      icon: "premier"
    }
  ]

  const ui_ux = [
    {
      name: "Figma",
      icon: "figma"
    },
    {
      name: "Marvel",
      icon: "marvel"
    },
    {
      name: "Sketch",
      icon: "sketch"
    },
    {
      name: "Adobe XD",
      icon: "xd"
    }
  ]

  const mobile = [
    {
      name: "Dart",
      icon: "dart"
    },
    {
      name: "Flutter",
      icon: "flutter"
    },
    {
      name: "Firebase",
      icon: "firebase"
    },
    {
      name: "Iconic",
      icon: "iconic"
    },
    {
      name: "Jave",
      icon: "java"
    },
    {
      name: "Kotlin",
      icon: "kotlin"
    },
    {
      name: "Objective C",
      icon: "objective_c"
    },
    {
      name: "React Native",
      icon: "react_native"
    },
    {
      name: "SQLite",
      icon: "sqlite"
    },
    {
      name: "Swift",
      icon: "swift"
    },
    {
      name: "Xamarin",
      icon: "xamarin"
    },
  ]

  const frontend = [
    {
      name: "Angular",
      icon: "angular"
    },
    {
      name: "Bootstrap",
      icon: "bootstrap"
    },
    {
      name: "CSS",
      icon: "css"
    },
    {
      name: "HTML",
      icon: "html"
    },
    {
      name: "JaveScript",
      icon: "javascript"
    },
    {
      name: "JQuery",
      icon: "jquery"
    },
    {
      name: "Material UI",
      icon: "materialui"
    },
    {
      name: "Next JS",
      icon: "next"
    },
    {
      name: "React JS",
      icon: "react"
    },
    {
      name: "Redux",
      icon: "redux"
    },
    {
      name: "TypeScript",
      icon: "typescript"
    },
    {
      name: "Vite JS",
      icon: "vite"
    },
    {
      name: "Vue JS",
      icon: "vue"
    },
    {
      name: "WordPress",
      icon: "wordpress"
    },
    {
      name: "Tailwind",
      icon: "tailwind"
    },
    {
      name: "SCSS",
      icon: "scss"
    },
  ]

  const backend = [
    {
      name: "DJango",
      icon: "django"
    },
    {
      name: "ASP.NET",
      icon: "dot_net"
    },
    {
      name: "Express JS",
      icon: "express"
    },
    {
      name: "GO",
      icon: "go"
    },
    {
      name: "Laravel",
      icon: "laravel"
    },
    {
      name: "Mongo DB",
      icon: "mongodb"
    },
    {
      name: "SQL Server",
      icon: "mssql"
    },
    {
      name: "MySQL",
      icon: "mysql"
    },
    {
      name: "Nest JS",
      icon: "nest"
    },
    {
      name: "Node JS",
      icon: "node"
    },
    {
      name: "TypeScript",
      icon: "typescript"
    },
    {
      name: "PostgreSQL",
      icon: "postgresql"
    },
    {
      name: "Ruby",
      icon: "ruby"
    },
    {
      name: "Java Spring",
      icon: "spring"
    },
  ]

  const ai = [
    {
      name: "MatLab",
      icon: "matlab"
    },
    {
      name: "Numpy",
      icon: "numpy"
    },
    {
      name: "Open CV",
      icon: "opencv"
    },
    {
      name: "Pytorch",
      icon: "pytorch"
    },
    {
      name: "Tensorflow",
      icon: "tensorflow"
    }
  ]

  const testing = [
    {
      name: "Selenium",
      icon: "selenium"
    },
    {
      name: "Selenium",
      icon: "selenium"
    },
    {
      name: "Selenium",
      icon: "selenium"
    },
    {
      name: "Selenium",
      icon: "selenium"
    },
    {
      name: "Selenium",
      icon: "selenium"
    },
    {
      name: "Selenium",
      icon: "selenium"
    }
  ]

  return (
    <div id="services" className="my-5">
      <h2>Our Services</h2>

      {/* Graphic Design */}
      <div className="service my-3 row">
        <div className="rightSkills col-10 col-lg-5">
          <h3>Graphic Design</h3>
          <div>
            {graphics.map(({ name, icon }, index) => {
              return (
                <div className="Rskills" key={index}>
                  <img src={toolImage(icon)} alt="" />
                  <div className="showingName">{name}</div>
                </div>
              )
            })}
          </div>
          <div className="text">
            <p>⚡ Experience of working on multiple cloud platforms</p>
            <p>⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases</p>
            <p>⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions</p>
          </div>
        </div>
        <div className="leftImage col-lg-4 col-10">
          <Lottie options={{
            loop: true,
            autoplay: true,
            animationData: GraphicsAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
            height={370}
            isStopped={false}
            isPaused={false} />
        </div>
      </div>

      {/* UI/UX Design */}
      <div className="service my-3 row">
        <div className="leftImage col-lg-4 col-10">
          <Lottie options={{
            loop: true,
            autoplay: true,
            animationData: UIUXAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
            height={350}
            isStopped={false}
            isPaused={false} />
        </div>
        <div className="rightSkills col-10 col-lg-5">
          <h3>UI/UX Design</h3>
          <div>
            {ui_ux.map(({ name, icon }, index) =>
              <div className="Rskills" key={index}>
                <img src={toolImage(icon)} alt="" />
                <div className="showingName">{name}</div>
              </div>
            )}
          </div>
          <div className="text">
            <p>⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js</p>
            <p>⚡ Building responsive static websites using Next.js</p>
            <p>⚡ Building RESTful APIs in Django & Django REST Framework</p>
          </div>
        </div>
      </div>

      {/* Mobile Development */}
      <div className="service my-3 row">
        <div className="rightSkills col-10 col-lg-5">
          <h3>Mobile Development</h3>
          <div>
            {mobile.map(({ name, icon }, index) => {
              return (
                <div className="Rskills" key={index}>
                  <img src={toolImage(icon)} alt="" />
                  <div className="showingName">{name}</div>
                </div>
              )
            })}
          </div>
          <div className="text">
            <p>⚡ Experience of working on multiple cloud platforms</p>
            <p>⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases</p>
            <p>⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions</p>
          </div>
        </div>
        <div className="leftImage col-lg-4 col-10">
          <Lottie options={{
            loop: true,
            autoplay: true,
            animationData: MobileAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
            height={370}
            isStopped={false}
            isPaused={false} />
        </div>
      </div>

      {/* Frontend Development */}
      <div className="service my-3 row">
        <div className="leftImage col-lg-4 col-10">
          <Lottie options={{
            loop: true,
            autoplay: true,
            animationData: FrontendAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
            height={370}
            isStopped={false}
            isPaused={false} />
        </div>
        <div className="rightSkills col-10 col-lg-5">
          <h3>Frontend Development</h3>
          <div>
            {frontend.map(({ name, icon }, index) =>
              <div className="Rskills" key={index}>
                <img src={toolImage(icon)} alt="" />
                <div className="showingName">{name}</div>
              </div>
            )}
          </div>
          <div className="text">
            <p>⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js</p>
            <p>⚡ Building responsive static websites using Next.js</p>
            <p>⚡ Building RESTful APIs in Django & Django REST Framework</p>
          </div>
        </div>
      </div>

      {/* Backend Development */}
      <div className="service my-3 row">
        <div className="rightSkills col-10 col-lg-5">
          <h3>Backend Development</h3>
          <div>
            {backend.map(({ name, icon }, index) => {
              return (
                <div className="Rskills" key={index}>
                  <img src={toolImage(icon)} alt="" />
                  <div className="showingName">{name}</div>
                </div>
              )
            })}
          </div>
          <div className="text">
            <p>⚡ Experience of working on multiple cloud platforms</p>
            <p>⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases</p>
            <p>⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions</p>
          </div>
        </div>
        <div className="leftImage col-lg-4 col-10">
          <Lottie options={{
            loop: true,
            autoplay: true,
            animationData: BackendAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
            height={370}
            isStopped={false}
            isPaused={false} />
        </div>
      </div>

      {/* Artificial Intelligence */}
      <div className="service my-3 row">
        <div className="leftImage col-lg-4 col-10">
          <Lottie options={{
            loop: true,
            autoplay: true,
            animationData: AIAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
            height={370}
            isStopped={false}
            isPaused={false} />
        </div>
        <div className="rightSkills col-10 col-lg-5">
          <h3>Artificial Intelligence</h3>
          <div>
            {ai.map(({ name, icon }, index) =>
              <div className="Rskills" key={index}>
                <img src={toolImage(icon)} alt="" />
                <div className="showingName">{name}</div>
              </div>
            )}
          </div>
          <div className="text">
            <p>⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js</p>
            <p>⚡ Building responsive static websites using Next.js</p>
            <p>⚡ Building RESTful APIs in Django & Django REST Framework</p>
          </div>
        </div>
      </div>

      {/* Software Testing */}
      <div className="service my-3 row">
        <div className="rightSkills col-10 col-lg-5">
          <h3>Software Testing</h3>
          <div>
            {testing.map(({ name, icon }, index) => {
              return (
                <div className="Rskills" key={index}>
                  <img src={toolImage(icon)} alt="" />
                  <div className="showingName">{name}</div>
                </div>
              )
            })}
          </div>
          <div className="text">
            <p>⚡ Experience of working on multiple cloud platforms</p>
            <p>⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases</p>
            <p>⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions</p>
          </div>
        </div>
        <div className="leftImage col-lg-4 col-10">
          <Lottie options={{
            loop: true,
            autoplay: true,
            animationData: TestingAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
            height={335}
            isStopped={false}
            isPaused={false} />
        </div>
      </div>

    </div>
  )
}

export default Services
