import { useContext } from "react"
import { Link } from "react-router-dom"

import "./projects.scss"
import { AppContext } from '../../../context/context/app_context'
import * as ActionType from '../../../context/actions/app_action'

function Projects() {

  const { appState, appDispatch } = useContext(AppContext)
  
  const projectsData = [
    {
      title: "UI/UX Design",
      image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=1380&t=st=1689309378~exp=1689309978~hmac=ff8f5f2910e1bf8cbf7d13837c86fdc14bb1dcdf615245c34074b92208c09042",
      navigation: "uiux",
    },
    {
      title: "Mobile Development",
      image: "https://img.freepik.com/free-vector/charity-app-concept_23-2148608518.jpg?w=1380&t=st=1689309416~exp=1689310016~hmac=87f15fdce3a9be37a80915eab3e0778668812cb1f08c4a921af41a41d3ec8205",
      navigation: "mobile",
    },
    {
      title: "Web Development",
      image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?w=1060&t=st=1689309493~exp=1689310093~hmac=fbadafb93c2022d4a1aa3a9024e02e3929fed6c848ec407e35dd0f4ba89c9e5e",
      navigation: "web",
    }
  ]

  const navigateToProject = (category) => appDispatch({
    type: ActionType.SET_CATEGORY,
    payload: category
  })

  return (
    <div className="container projects my-5 py-3" id="projects">
      <div>
        <h2>Projects we did</h2>
      </div>
      <div className="row align-items-center justify-content-between my-5 ">
        {projectsData.map((project, index) =>
          <div className="col-lg-5 col-sm-12 my-3" key={index}>
            <h3 className="text-white d-block">{project.title}</h3>
            <div className="X-shape">
              <div className="rotate1"></div>
              <div className="rotate2"></div>
              <div className="image">
                <Link to="/projects" onClick={() => navigateToProject(project.navigation)}>
                  <img
                    className=""
                    src={project.image}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
