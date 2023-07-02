import Marquee from "react-fast-marquee"

import "./skills.scss"
import data from "./skills.json"
import { skillImage } from "./skillImages"

const Skills = () => {
    return (
        <div className="skills">
            <div className="skillsHeader">
                <h2>Technologies we use</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        className="marquee"
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
                                <img src={skillImage(skill.image)} alt={skill.name} />
                                <h3>{skill.name}</h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Skills
