import PropTypes from 'prop-types'
import './resumeMain.css'
import Header from './Header'
import ShowWorkEduc from './ShowWorkEduc'
import Skills from './Skills'

export default function Resume({ data })  {
    console.log("Resume")
    console.log(data)
    return (
        <div id="resume-main">
            Resume Main
            <div id="personal-resume" className="resume">
                Personal Data Resume
                <Header
                info={data.info}
                >

                </Header>
            </div>
            <div id="work-resume" className="resume">
                <h2 className="title">Work Experience</h2>
                <ShowWorkEduc
                    arrData = {data.work}
                >

                </ShowWorkEduc>
            </div>
            <div id="educ-resume" className="resume">
                <h2 className="title">Education</h2>
                <ShowWorkEduc
                    arrData = {data.education}
                >

                </ShowWorkEduc>
            </div>
            <div id="skills-resume" className="resume">
                <h2 className="title">Skills & Technologies</h2>
                <Skills
                    info={data.skills}
                >

                </Skills>
            </div>
        </div>
    )
};

Resume.PropTypes = {
    data: PropTypes.object
};