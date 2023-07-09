import { Link } from "react-router-dom"

import "./projects.scss"

function Projects() {
  return (
    <div className="container projects" id="projects">
      <div>
        <h2>Projects we did</h2>
      </div>
      <div className="row align-content-center justify-content-between flex-wrap my-5 ">
        <div className="col-3 X-shape">
          <div className="image">
            <Link to="/projects">
              <img
                className=""
                src="https://img.freepik.com/free-vector/application-development-life-cycle-banner_107791-2143.jpg?w=740&t=st=1688785853~exp=1688786453~hmac=1054ad7d8555a282b0546a29b29a5d90843863e665e7bc49e7633a9555627a1b"
                alt=""
              />
            </Link>
          </div>
          <div className="rotate1"></div>
          <div className="rotate2"></div>

        </div>
        <div className="col-3 X-shape">
          <div className="rotate1"></div>
          <div className="rotate2"></div>
          <div className="image">
            <Link to="/projects">
              <img
                className=""
                src="https://img.freepik.com/free-vector/application-development-life-cycle-banner_107791-2143.jpg?w=740&t=st=1688785853~exp=1688786453~hmac=1054ad7d8555a282b0546a29b29a5d90843863e665e7bc49e7633a9555627a1b"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="col-3 X-shape">
          <div className="rotate1"></div>
          <div className="rotate2"></div>
          <div className="image">
            <Link to="/projects">
              <img
                className=""
                src="https://img.freepik.com/free-vector/application-development-life-cycle-banner_107791-2143.jpg?w=740&t=st=1688785853~exp=1688786453~hmac=1054ad7d8555a282b0546a29b29a5d90843863e665e7bc49e7633a9555627a1b"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
