import Marquee from "react-fast-marquee"

import "./skills.scss"
import data from "./skills.json"
import { skillsImage } from "./skillsImage"

const Skills = () => {
    return (
        <div className="skills" style={{ backgroundColor: "#123456" }}>
            <div className="skillsHeader">
                <h2 style={{ color: "#1e1e1e" }}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {data.map((skill, index) => (
                            <div className="skill--box" key={index} >
                                <img src={skillsImage(skill.image)} alt={skill.name} />
                                <h3 style={{ color: "#1e1e1e" }}>
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
