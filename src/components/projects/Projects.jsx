import "./projects.scss";
function Projects() {
  return (
    <div className="container projects" id="projects">
      <div>
        <h2>Projects we did</h2>
      </div>
      <div className="row align-content-center justify-content-between my-5 ">
        <div className="col-3 X-shape">
            front
          <div className="rotate1"></div>
          <div className="rotate2"></div>
        </div>
        <div className="col-3 X-shape">
          <div className="rotate1"></div>
          <div className="rotate2"></div>
        </div>
        <div className="col-3 X-shape">
          <div className="rotate1"></div>
          <div className="rotate2"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
