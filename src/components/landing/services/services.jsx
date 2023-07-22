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

const Services = () => {
  const servicesData = [
    {
      title: "Graphic Design",
      description: [
        "- Experience of working on multiple cloud platforms",
        "- Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "- Building CI/CD pipelines for automated testing & deployment using Github Actions",
      ],
      tools: [
        {
          name: "Adobe InDesign",
          icon: "indesign",
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
      animation: {
        data: GraphicsAnimation,
        width: 350,
        height: 200,
      },
    },
    {
      title: "UI/UX Design",
      description: [
        "- Experience of working on multiple cloud platforms",
        "- Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "- Building CI/CD pipelines for automated testing & deployment using Github Actions",
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
      animation: {
        data: UIUXAnimation,
        width: 350,
        height: 220,
      },
    },
    {
      title: "Mobile Development",
      description: [
        "- Experience of working on multiple cloud platforms",
        "- Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "- Building CI/CD pipelines for automated testing & deployment using Github Actions",
      ],
      tools: [
        // {
        //   name: "Dart",
        //   icon: "dart",
        // },
        {
          name: "Flutter",
          icon: "flutter",
        },
        {
          name: "React Native",
          icon: "react_native",
        },
        // {
        //   name: "Firebase",
        //   icon: "firebase",
        // },
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
        // {
        //   name: "Objective-C",
        //   icon: "objective_c",
        // },
        // {
        //   name: "SQLite",
        //   icon: "sqlite",
        // },
        {
          name: "Swift",
          icon: "swift",
        },
        {
          name: "Xamarin",
          icon: "xamarin",
        },
      ],
      animation: {
        data: MobileAnimation,
        width: 350,
        height: 275,
      },
    },
    {
      title: "Frontend Development",
      description: [
        "- Experience of working on multiple cloud platforms",
        "- Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "- Building CI/CD pipelines for automated testing & deployment using Github Actions",
      ],
      tools: [
        {
          name: "HTML",
          icon: "html",
        },
        {
          name: "CSS",
          icon: "css",
        },
        {
          name: "JaveScript",
          icon: "javascript",
        },
        {
          name: "Bootstrap",
          icon: "bootstrap",
        },
        {
          name: "JQuery",
          icon: "jquery",
        },
        {
          name: "Angular",
          icon: "angular",
        },
        {
          name: "Next JS",
          icon: "next",
        },
        {
          name: "React JS",
          icon: "react",
        },
        // {
        //   name: "Material UI",
        //   icon: "materialui",
        // },
        // {
        //   name: "Redux",
        //   icon: "redux",
        // },
        // {
        //   name: "TypeScript",
        //   icon: "typescript",
        // },
        {
          name: "Vite JS",
          icon: "vite",
        },
        {
          name: "Vue JS",
          icon: "vue",
        },
        // {
        //   name: "WordPress",
        //   icon: "wordpress",
        // },
        {
          name: "Tailwind",
          icon: "tailwind",
        },
        {
          name: "SCSS",
          icon: "scss",
        },
      ],
      animation: {
        data: FrontendAnimation,
        width: 350,
        height: 300,
      },
    },
    {
      title: "Backend Development",
      description: [
        "- Experience of working on multiple cloud platforms",
        "- Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "- Building CI/CD pipelines for automated testing & deployment using Github Actions",
      ],
      tools: [
        {
          name: "Java Spring",
          icon: "spring",
        },
        {
          name: "ASP.NET",
          icon: "dot_net",
        },
        {
          name: "DJango",
          icon: "django",
        },
        {
          name: "Node JS",
          icon: "node",
        },
        // {
        //   name: "Express JS",
        //   icon: "express",
        // },
        {
          name: "Nest JS",
          icon: "nest",
        },
        {
          name: "Laravel",
          icon: "laravel",
        },
        {
          name: "GO",
          icon: "go",
        },
        // {
        //   name: "SQL Server",
        //   icon: "mssql",
        // },
        // {
        //   name: "TypeScript",
        //   icon: "typescript",
        // },
        // {
        //   name: "Ruby",
        //   icon: "ruby",
        // },
        {
          name: "PostgreSQL",
          icon: "postgresql",
        },
        {
          name: "MySQL",
          icon: "mysql",
        },
        {
          name: "Mongo DB",
          icon: "mongodb",
        },
      ],
      animation: {
        data: BackendAnimation,
        width: 350,
        height: 300,
      },
    },
    {
      title: "Artificial Intelligence",
      description: [
        "- Experience of working on multiple cloud platforms",
        "- Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "- Building CI/CD pipelines for automated testing & deployment using Github Actions",
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
      animation: {
        data: AIAnimation,
        width: 300,
        height: 300,
      },
    },
    {
      title: "Software Testing",
      description: [
        "- Experience of working on multiple cloud platforms",
        "- Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "- Building CI/CD pipelines for automated testing & deployment using Github Actions",
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
      animation: {
        data: TestingAnimation,
        width: 330,
        height: 240,
      },
    },
  ]

  return (
    <div id="services" className="container my-5">
      <h2 className="headerServices">Our Services</h2>
      {servicesData.map((service, index) => (
        <div className="service w-100 my-5 row" key={index}>
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
              {/* {service.description.map((d, index) => (
                <p key={index}>{d}</p>
              ))} */}
            </div>
          </div>
          <div className="leftImage col-lg-6 col-sm-10">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: service.animation.data,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              width={service.animation.width}
              height={service.animation.height}
              isStopped={false}
              isPaused={false}
            />
          </div>
        </div >
      ))
      }
    </div >
  )
}

export default Services
