import Marquee from "react-fast-marquee"

import "./tools.scss"
import data from "./tools.json"
import { toolImage } from "./toolImages"

const Tools = () => {
    return (
        <div id="tools" className="tools my-5">
            <div className="toolsHeader">
                <h2>Technologies and Tools we use</h2>
            </div>
            <div className="toolsContainer">
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
                                <img src={toolImage(skill.image)} alt={skill.name} />
                                <h3>{skill.name}</h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Tools
