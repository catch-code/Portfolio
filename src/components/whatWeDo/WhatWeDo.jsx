import "./whatwedo.scss";
import banner from "../../assets/imgs/aaa.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import { skillImage } from "../skills/skillImages";
function WhatWeDo() {
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
  ];
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
  ];
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
  ];
  return (
    <div className="whatwedo">
      <h2>What WE do</h2>
      <h4>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</h4>
      {/* fulltack */}
      <div className="fullstack row">
        <div className="leftImage col-lg-4 col-12">
          <img src={banner} alt="manworking" />
        </div>
        <div className="rightSkills col-12 col-lg-5">
          <h3>Full Stack Development</h3>

          <div>
            {skills.map(({ name, icon, id }) => {
              return (
                <div className="Rskills" key={id}>
                  <img src={skillImage(icon)} alt="" />
                  <div className="showingName">{name}</div>
                </div>
              );
            })}
          </div>
          <div className="text">
            <p>
              ⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js
            </p>
            <p>⚡ Building responsive static websites using Next.js</p>
            <p>⚡ Building RESTful APIs in Django & Django REST Framework</p>
          </div>
        </div>
      </div>
      {/* cloud */}
      <div className="fullstack row">
        <div className="rightSkills col-12 col-lg-5">
          <h3>Cloud Infra-Architecture</h3>

          <div>
            {cloud.map(({ name, icon, id }) => {
              return (
                <div className="Rskills" key={id}>
                  <img src={skillImage(icon)} alt="" />
                  <div className="showingName">{name}</div>
                </div>
              );
            })}
          </div>
          <div className="text">
            <p>⚡ Experience of working on multiple cloud platforms</p>
            <p>
              ⚡ Hosting and maintaining websites on virtual machine instances
              along with integration of databases
            </p>
            <p>
              ⚡ Building CI/CD pipelines for automated testing & deployment
              using Github Actions
            </p>
          </div>
        </div>
        <div className="leftImage col-lg-4 col-12">
          <img src={banner} alt="manworking" />
        </div>
      </div>
      {/* blockchain */}
      <div className="fullstack row">
        <div className="leftImage col-lg-4 col-12">
          <img src={banner} alt="manworking" />
        </div>
        <div className="rightSkills col-12 col-lg-5">
          <h3>Blockchain</h3>

          <div>
            {Blockchain.map(({ name, icon, id }) => {
              return (
                <div className="Rskills" key={id}>
                  <img src={skillImage(icon)} alt="" />
                  <div className="showingName">{name}</div>
                </div>
              );
            })}
          </div>
          <div className="text">
            <p>
              ⚡ Experience in developing Smart Contract using Solidity &
              Ethereum
            </p>
            <p>
              ⚡ Building Scripts for automated testing & deployment of Smart
              Contracts using Brownie & Infura
            </p>
            <p>
              ⚡ Experience of using Openzeppelin Smart Contract Standards &
              Chainlink Oracles
            </p>
            <p>
              ⚡ Developing NFT Smart Contracts using ERC-721 Token Standard
            </p>
            <p>
              ⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis
              & IPFS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
