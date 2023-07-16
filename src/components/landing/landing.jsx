import Tools from "./tools/tools"
import Contact from "./contact/contact"
import Services from "./services/services"
import Banner from "./banner/banner"

import Projects from "./projects/Projects"

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
