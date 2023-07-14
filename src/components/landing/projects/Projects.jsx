import { useContext } from "react"
import { Link } from "react-router-dom"

import "./projects.scss"
import { AppContext } from '../../../context/context/app_context'

function Projects() {

  const { appState, appDispatch } = useContext(AppContext)

  const navigateToProject = (category) => {
    appDispatch({
      type: "NAVIGATE_TO_PROJECT",
      payload: category
    })
  }

  return (
    <div className="container projects" id="projects">
      <div>
        <h2>Projects we did</h2>
      </div>
      <div className="row align-items-center justify-content-between my-5 ">
        <div className="col-3 m-5">
          <h3 className="text-white d-block">UI/UX Design</h3>
          <div className="X-shape">
            <div className="rotate1"></div>
            <div className="rotate2"></div>
            <div className="image">
              <Link to="/projects" onClick={navigateToProject("uiux")}>
                <img
                  className=""
                  src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=1380&t=st=1689309378~exp=1689309978~hmac=ff8f5f2910e1bf8cbf7d13837c86fdc14bb1dcdf615245c34074b92208c09042"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-3 mx-5">
          <h3 className="text-white d-block">Mobile Development</h3>
          <div className="X-shape">
            <div className="rotate1"></div>
            <div className="rotate2"></div>
            <div className="image">
              <Link to="/projects" onClick={navigateToProject("mobile")}>
                <img
                  className=""
                  src="https://img.freepik.com/free-vector/charity-app-concept_23-2148608518.jpg?w=1380&t=st=1689309416~exp=1689310016~hmac=87f15fdce3a9be37a80915eab3e0778668812cb1f08c4a921af41a41d3ec8205"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-3 mx-5">
          <h3 className="text-white d-block">Frontend Development</h3>
          <div className="X-shape">
            <div className="rotate1"></div>
            <div className="rotate2"></div>
            <div className="image">
              <Link to="/projects" onClick={navigateToProject("frontend")}>
                <img
                  className=""
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_52683-84601.jpg?w=1060&t=st=1689309493~exp=1689310093~hmac=fbadafb93c2022d4a1aa3a9024e02e3929fed6c848ec407e35dd0f4ba89c9e5e"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-3 mx-5">
          <h3 className="text-white d-block">Backend Development</h3>
          <div className="X-shape">
            <div className="rotate1"></div>
            <div className="rotate2"></div>
            <div className="image">
              <Link to="/projects" onClick={navigateToProject("backend")}>
                <img
                  className=""
                  src="https://img.freepik.com/free-vector/api-concept-illustration_114360-9822.jpg?w=826&t=st=1689309524~exp=1689310124~hmac=706ea5ed25981969fa0f8e9b093d0ee08ed943e6f7b9de910be951164924fd86"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-3 mx-5">
          <h3 className="text-white d-block">Quality Testing</h3>
          <div className="X-shape">
            <div className="rotate1"></div>
            <div className="rotate2"></div>
            <div className="image">
              <Link to="/projects" onClick={navigateToProject("testing")}>
                <img
                  className=""
                  src="https://img.freepik.com/free-vector/tiny-business-people-with-digital-devices-testing-demo-software-beta-testing-new-product-testing-presale-user-experience-concept-bright-vibrant-violet-isolated-illustration_335657-1024.jpg?w=1380&t=st=1689309559~exp=1689310159~hmac=2ada45be2f638258b682b6afb8964abf42157807f8599410a34d343b6aee0c59"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-3 mx-5">
          <h3 className="text-white d-block">Artificial Intelligence</h3>
          <div className="X-shape">
            <div className="rotate1"></div>
            <div className="rotate2"></div>
            <div className="image">
              <Link to="/projects" onClick={navigateToProject("ai")}>
                <img
                  className=""
                  src="https://img.freepik.com/premium-photo/futuristic-robot-artificial-intelligence-concept_31965-4087.jpg?w=1380"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
