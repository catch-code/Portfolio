import Banner from "./banner/Banner"
import Services from "./services/Services"
import Tools from "./Tools/Tools"
import Contact from "./contact/Contact"
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
