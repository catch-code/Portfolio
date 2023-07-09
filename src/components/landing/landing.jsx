import Skills from "./skills/skills"
import Contact from "./contact/contact"
import Services from "./services/services"
import Banner from "./banner/banner"

import Projects from "./projects/Projects"

const Landing = () => {
    return (
        <div className="landing">
            <Banner />
            <Services />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Landing
