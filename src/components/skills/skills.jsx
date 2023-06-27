import Marquee from "react-fast-marquee"

import "./skills.scss"

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
                        {[1, 2, 3, 4, 5].map((skill, id) => (
                            <div className="skill--box" key={id} >
                                {/* <img src={skillsImage(skill)} alt={skill} /> */}
                                <h3 style={{ color: "#1e1e1e" }}>
                                    {skill}
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
