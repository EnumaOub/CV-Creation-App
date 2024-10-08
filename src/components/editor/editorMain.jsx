import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import './editorMain.css'
import './Accordion.css'
import './Input.css'
import './Form.css'
import './ShowData.css'
import Accordion from './Accordion'
import Personal from './PersonalInfo'
import ShowData from './ShowData'
import Icon from '@mdi/react';
import { mdiInformation, mdiBookEducation, mdiBriefcase, mdiLanguageJavascript, mdiDownload } from '@mdi/js';


const emptyData = {
    work: {
        "title": "",
        "name": "",
        "date": "",
        "tasks": [
            ""
        ]
    },
    education: {
        "title": "",
        "name": "",
        "date": "",
    },
    skills: {
        "language": [
            ""
        ],
        "technologies": [
            ""
        ]
    }
}

export default function Editor({data, setData})  {
    

    function downloadResume() {
        const doc = new jsPDF('p', 'pt', 'a4',true);
        const resume = document.getElementById("resume-main");
        const resumeName = document.getElementById("title-resume-pdf").value;
        html2canvas(resume, {
            scale: 1,
          }).then(canvas => {
            const img = canvas.toDataURL("image/jpeg", 1);
            doc.addImage(img, 'JPEG', 50, 0);
            doc.save(resumeName)
          });
    }


    function changeInfo(dataModif, loc, namel, deleteB=false) {
        if (deleteB) {
            data[namel].splice(loc, 1);
    
            setData({
                    ...data,
                    [namel]: [
                        ...data[namel]
                    ]
                })
        }
        else {
            if (Array.isArray(data[namel])) {
                const newData = [...data[namel]]
                newData[loc] = dataModif;
                setData({
                    ...data,
                    [namel]: [
                        ...newData
                    ]
                })
            }
            else {
                setData({
                    ...data,
                    [namel]: {
                        ...dataModif
                    }
                })
            }
        }
    }

    return (
        <div id="editor-main">
            <div id="title-editor" className="editor">
                <input id="title-resume-pdf" type="text" defaultValue="Resume Title" />
                <button type="button" onClick={downloadResume}><div className="icon-text">Download<Icon path={mdiDownload} size={1} /></div></button>
            </div>
            <div id="personal-editor" className="editor">
                <Accordion
                    legend={<div className="icon-text"><Icon path={mdiInformation} size={1} />Personal</div>}
                    content={(
                        <Personal
                        data={data}
                        setData ={setData}
                        >

                        </Personal>
                    )}
                >
                </Accordion>
                
                

            </div>
            <div id="work-editor" className="editor">
            <Accordion
                    legend={<div className="icon-text"><Icon path={mdiBriefcase} size={1} />Work</div>}
                    content={(
                        <ShowData
                            key="work"
                            label="work"
                            data={data.work}
                            callback={changeInfo}
                            emptyData={emptyData.work}
                        >

                        </ShowData>
                    )}
                >
                </Accordion>

            </div>
            <div id="educ-editor" className="editor">
                <Accordion
                    legend={<div className="icon-text"><Icon path={mdiBookEducation} size={1} />Education</div>}
                    content={(
                        <ShowData
                            key="education"
                            label="education"
                            data={data.education}
                            callback={changeInfo}
                            emptyData={emptyData.education}
                        >

                        </ShowData>
                    )}
                >
                </Accordion>

            </div>
            <div id="skills-editor" className="editor">
                <Accordion
                    legend={<div className="icon-text"><Icon path={mdiLanguageJavascript} size={1} />Skills</div>}
                    content={(
                        <ShowData
                            key="skills"
                            label="skills"
                            data={data.skills}
                            callback={changeInfo}
                            emptyData={emptyData.skills}
                        >

                        </ShowData>
                    )}
                >
                </Accordion>

            </div>
        </div>
    )
};