import Banner from "./banner/banner"
import Services from "./services/services"
import Tools from "./tools/tools"
import Contact from "./contact/contact"
import Projects from "./projects/projects"

const Landing = () => {
    return (
        <div className="landing">
            <Banner />
            <Services />
            <Tools />
            <Projects />
            <Contact />
        </div>
    )
}

export default Landing
