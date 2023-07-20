import Lottie from "react-lottie"

import "bootstrap/dist/css/bootstrap.min.css"
import "./services.scss"

import { toolImage } from "../tools/toolImages"

import GraphicsAnimation from "../../../assets/lottie/Graphics.json";
import UIUXAnimation from "../../../assets/lottie/UI-UX Design.json";
import MobileAnimation from "../../../assets/lottie/Mobile Development.json";
import FrontendAnimation from "../../../assets/lottie/Frontend Development.json";
import BackendAnimation from "../../../assets/lottie/Backend Development.json";
import AIAnimation from "../../../assets/lottie/AI.json";
import TestingAnimation from "../../../assets/lottie/Testing.json";

function Services() {
  const servicesData = [
    {
      title: "Graphic Design",
      description: [
        "⚡ Experience of working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions",
      ],
      tools: [
        {
          name: "Adobe Audition",
          icon: "audition",
        },
        {
          name: "Adobe Illustrator",
          icon: "illustrator",
        },
        {
          name: "Adobe Lightroom",
          icon: "lightroom",
        },
        {
          name: "Adobe Photoshop",
          icon: "photoshop",
        },
        // {
        //   name: "Adobe Premier",
        //   icon: "premier"
        // },
        {
          name: "Picsart",
          icon: "picsart",
        },
        {
          name: "Gimp",
          icon: "gimp",
        },
      ],
      animation: GraphicsAnimation,
    },
    {
      title: "UI/UX Design",
      description: [
        "⚡ Experience of working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions",
      ],
      tools: [
        {
          name: "Figma",
          icon: "figma",
        },
        {
          name: "Marvel",
          icon: "marvel",
        },
        {
          name: "Sketch",
          icon: "sketch",
        },
        {
          name: "Adobe XD",
          icon: "xd",
        },
      ],
      animation: UIUXAnimation,
    },
    {
      title: "Mobile Development",
      description: [
        "⚡ Experience of working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions",
      ],
      tools: [
        {
          name: "Dart",
          icon: "dart",
        },
        {
          name: "Flutter",
          icon: "flutter",
        },
        {
          name: "Firebase",
          icon: "firebase",
        },
        {
          name: "Iconic",
          icon: "iconic",
        },
        {
          name: "Jave",
          icon: "java",
        },
        {
          name: "Kotlin",
          icon: "kotlin",
        },
        {
          name: "Objective-C",
          icon: "objective_c",
        },
        {
          name: "React Native",
          icon: "react_native",
        },
        {
          name: "SQLite",
          icon: "sqlite",
        },
        {
          name: "Swift",
          icon: "swift",
        },
        {
          name: "Xamarin",
          icon: "xamarin",
        },
      ],
      animation: MobileAnimation,
    },
    {
      title: "Frontend Development",
      description: [
        "⚡ Experience of working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions",
      ],
      tools: [
        {
          name: "Angular",
          icon: "angular",
        },
        {
          name: "Bootstrap",
          icon: "bootstrap",
        },
        {
          name: "CSS",
          icon: "css",
        },
        {
          name: "HTML",
          icon: "html",
        },
        {
          name: "JaveScript",
          icon: "javascript",
        },
        {
          name: "JQuery",
          icon: "jquery",
        },
        {
          name: "Material UI",
          icon: "materialui",
        },
        {
          name: "Next JS",
          icon: "next",
        },
        {
          name: "React JS",
          icon: "react",
        },
        {
          name: "Redux",
          icon: "redux",
        },
        {
          name: "TypeScript",
          icon: "typescript",
        },
        {
          name: "Vite JS",
          icon: "vite",
        },
        {
          name: "Vue JS",
          icon: "vue",
        },
        {
          name: "WordPress",
          icon: "wordpress",
        },
        {
          name: "Tailwind",
          icon: "tailwind",
        },
        {
          name: "SCSS",
          icon: "scss",
        },
      ],
      animation: FrontendAnimation,
    },
    {
      title: "Backend Development",
      description: [
        "⚡ Experience of working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions",
      ],
      tools: [
        {
          name: "DJango",
          icon: "django",
        },
        {
          name: "ASP.NET",
          icon: "dot_net",
        },
        {
          name: "Express JS",
          icon: "express",
        },
        {
          name: "GO",
          icon: "go",
        },
        {
          name: "Laravel",
          icon: "laravel",
        },
        {
          name: "Mongo DB",
          icon: "mongodb",
        },
        {
          name: "SQL Server",
          icon: "mssql",
        },
        {
          name: "MySQL",
          icon: "mysql",
        },
        {
          name: "Nest JS",
          icon: "nest",
        },
        {
          name: "Node JS",
          icon: "node",
        },
        {
          name: "TypeScript",
          icon: "typescript",
        },
        {
          name: "PostgreSQL",
          icon: "postgresql",
        },
        {
          name: "Ruby",
          icon: "ruby",
        },
        {
          name: "Java Spring",
          icon: "spring",
        },
      ],
      animation: BackendAnimation,
    },
    {
      title: "Artificial Intelligence",
      description: [
        "⚡ Experience of working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions",
      ],
      tools: [
        {
          name: "Apache Spark",
          icon: "apache_spark"
        },
        {
          name: "Hadoop",
          icon: "hadoop"
        },
        {
          name: "SAS",
          icon: "sas"
        },
        {
          name: "Numpy",
          icon: "numpy",
        },
        {
          name: "Open CV",
          icon: "opencv",
        },
        {
          name: "Pytorch",
          icon: "pytorch",
        },
        {
          name: "Tensorflow",
          icon: "tensorflow",
        },
      ],
      animation: AIAnimation,
    },
    {
      title: "Software Testing",
      description: [
        "⚡ Experience of working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions",
      ],
      tools: [
        {
          name: "Selenium",
          icon: "selenium",
        },
        {
          name: "Postman",
          icon: "postman"
        },
        {
          name: "Excel Sheet",
          icon: "excel"
        },
      ],
      animation: TestingAnimation,
    },
  ];

  return (
    <div id="services" className="container my-5">
      <h2 className="headerServices">Our Services</h2>
      {servicesData.map((service, index) => (
        <div className="service my-3 row" key={index}>
          <div className="rightSkills col-lg-6 col-sm-10 ">
            <h3>{service.title}</h3>
            <div>
              {service.tools.map(({ name, icon }, index) => (
                <div className="Rskills" key={index}>
                  <img src={toolImage(icon)} alt="" />
                  <div className="showingName">{name}</div>
                </div>
              ))}
            </div>
            <div className="text">
              {service.description.map((d, index) => (
                <p key={index}>{d}</p>
              ))}
            </div>
          </div>
          <div className="leftImage col-lg-6 col-sm-10">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: service.animation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              // not needed hight and width
              isStopped={false}
              isPaused={false}
            />
          </div>
        </div >
      ))
      }
    </div >
  );
}

export default Services;
