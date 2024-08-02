import './resumeMain.css'

export default function resumeMain()  {
    return (
        <div id="resume-main">
            Resume Main
            <div id="personal-resume" className="resume">
                Personal Data Resume

            </div>
            <div id="work-resume" className="resume">
                <h2 className="title">Work Experience</h2>

            </div>
            <div id="educ-resume" className="resume">
                <h2 className="title">Education</h2>

            </div>
            <div id="skills-resume" className="resume">
                <h2 className="title">Skills & Technologies</h2>

            </div>
        </div>
    )
};