import "./services.scss"
import banner from "../../../assets/imgs/aaa.gif"
import "bootstrap/dist/css/bootstrap.min.css"
import { skillImage } from "../skills/skillImages"
import Lottie from "react-lottie"

import MobileAnimation from "../../../assets/lottie/Mobile Development.json"
import UIUXAnimation from "../../../assets/lottie/UI-UX Design.json"
import FrontendAnimation from "../../../assets/lottie/Frontend Development.json"
import BackendAnimation from "../../../assets/lottie/Backend Development.json"
import AIAnimation from "../../../assets/lottie/AI.json"
import TestingAnimation from "../../../assets/lottie/Testing.json"

function Services() {
  const skills = [
    {
      name: "HTML-5",
      icon: "html",
      id: 1,
    },
    {
      name: "CSS-3",
      icon: "css",
      id: 2,
    },
    {
      name: "javaScript",
      icon: "javascript",
      id: 3,
    },
    {
      name: "Reactjs",
      icon: "react",
      id: 4,
    },
    {
      name: "Nextjs",
      icon: "nextJS",
      id: 5,
    },
    {
      name: "Python",
      icon: "python",
      id: 6,
    },
    {
      name: "Django",
      icon: "django",
      id: 7,
    },
    {
      name: "Redux",
      icon: "th",
      id: 8,
    },
    {
      name: "NPM",
      icon: "th",
      id: 9,
    },
    {
      name: "YARN",
      icon: "th",
      id: 10,
    },
  ]
  const cloud = [
    {
      name: "AWS",
      icon: "aws",
      id: 1,
    },
    {
      name: "Azure",
      icon: "azure",
      id: 2,
    },
    {
      name: "Heroku",
      icon: "Heroku",
      id: 3,
    },
    {
      name: "PostgreSQL",
      icon: "postgresql",
      id: 4,
    },
    {
      name: "Github",
      icon: "Github",
      id: 5,
    },
    {
      name: "Docker",
      icon: "docker",
      id: 6,
    },
    {
      name: "GithubActions",
      icon: "GithubActions",
      id: 7,
    },
    {
      name: "Cloudinary",
      icon: "Cloudinary",
      id: 8,
    },
    {
      name: "Nginx",
      icon: "nginx",
      id: 9,
    },
    {
      name: "Sentry",
      icon: "Sentry",
      id: 10,
    },
  ]
  const Blockchain = [
    {
      name: "Ethereum",
      icon: "Ethereum",
      id: 1,
    },
    {
      name: "Solidity",
      icon: "Solidity",
      id: 2,
    },
    {
      name: "Web3js",
      icon: "Web3js",
      id: 3,
    },
    {
      name: "Metamask",
      icon: "Metamask",
      id: 4,
    },
    {
      name: "Ganache",
      icon: "Ganache",
      id: 5,
    },
  ]

  return (
    <div id="services" className="my-5">
      <h2 className="headerServices">Our Services</h2>

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
            height={375}
            isStopped={false}
            isPaused={false} />
        </div>
        <div className="rightSkills col-10 col-lg-5">
          <h3>UI/UX Design</h3>
          <div>
            {skills.map(({ name, icon }, index) =>
              <div className="Rskills" key={index}>
                <img src={skillImage(icon)} alt="" />
                <div className="showingName">{name}</div>
              </div>
            )}
          </div>
          <div className="text">
            <p>⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js.</p>
            <p>⚡ Building responsive static websites using Next.js.</p>
            <p>⚡ Building RESTful APIs in Django & Django REST Framework.</p>
          </div>
        </div>
      </div>

      {/* Mobile Development */}
      <div className="service my-3 row">
        <div className="rightSkills col-10 col-lg-5">
          <h3>Mobile Development</h3>
          <div>
            {cloud.map(({ name, icon }, index) => {
              return (
                <div className="Rskills" key={index}>
                  <img src={skillImage(icon)} alt="" />
                  <div className="showingName">{name}</div>
                </div>
              )
            })}
          </div>
          <div className="text">
            <p>⚡ Experience of working on multiple cloud platforms.</p>
            <p>⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases.</p>
            <p>⚡ Building CI/CD pipelines for automated testing & deployment.</p>
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
            height={375}
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
            height={375}
            isStopped={false}
            isPaused={false} />
        </div>
        <div className="rightSkills col-10 col-lg-5">
          <h3>Frontend Development</h3>
          <div>
            {skills.map(({ name, icon }, index) =>
              <div className="Rskills" key={index}>
                <img src={skillImage(icon)} alt="" />
                <div className="showingName">{name}</div>
              </div>
            )}
          </div>
          <div className="text">
            <p>⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js.</p>
            <p>⚡ Building responsive static websites using Next.js.</p>
            <p>⚡ Building RESTful APIs in Django & Django REST Framework.</p>
          </div>
        </div>
      </div>

      {/* Backend Development */}
      <div className="service my-3 row">
        <div className="rightSkills col-10 col-lg-5">
          <h3>Backend Development</h3>
          <div>
            {cloud.map(({ name, icon }, index) => {
              return (
                <div className="Rskills" key={index}>
                  <img src={skillImage(icon)} alt="" />
                  <div className="showingName">{name}</div>
                </div>
              )
            })}
          </div>
          <div className="text">
            <p>⚡ Experience of working on multiple cloud platforms.</p>
            <p>⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases.</p>
            <p>⚡ Building CI/CD pipelines for automated testing & deployment using <br/>Github Actions.</p>
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
            height={375}
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
            height={375}
            isStopped={false}
            isPaused={false} />
        </div>
        <div className="rightSkills col-10 col-lg-5">
          <h3>Artificial Intelligence</h3>
          <div>
            {skills.map(({ name, icon }, index) =>
              <div className="Rskills" key={index}>
                <img src={skillImage(icon)} alt="" />
                <div className="showingName">{name}</div>
              </div>
            )}
          </div>
          <div className="text">
            <p>⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js.</p>
            <p>⚡ Building responsive static websites using Next.js.</p>
            <p>⚡ Building RESTful APIs in Django & Django REST Framework.</p>
          </div>
        </div>
      </div>

      {/* Software Testing */}
      <div className="service my-3 row">
        <div className="rightSkills col-10 col-lg-5">
          <h3>Software Testing</h3>
          <div>
            {cloud.map(({ name, icon }, index) => {
              return (
                <div className="Rskills" key={index}>
                  <img src={skillImage(icon)} alt="" />
                  <div className="showingName">{name}</div>
                </div>
              )
            })}
          </div>
          <div className="text">
            <p>⚡ Experience of working on multiple cloud platforms.</p>
            <p>⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases.</p>
            <p>⚡ Building CI/CD pipelines for automated testing & deployment using <br/> Github Actions.</p>
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
            height={375}
            isStopped={false}
            isPaused={false} />
        </div>
      </div>

    </div>
  )
}

export default Services
