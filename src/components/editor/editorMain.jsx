import { useState } from 'react'
import './editorMain.css'
import './Accordion.css'
import './PersonalInfo.css'
import './ShowData.css'
import Accordion from './Accordion'
import Personal from './PersonalInfo'
import ShowData from './ShowData'

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
            Editor Main
            <div id="title-editor" className="editor">
                <Accordion
                    legend="Title Resume"
                    content="Test title"
                >
                </Accordion>
            </div>
            <div id="personal-editor" className="editor">
                <Accordion
                    legend="Personal Data"
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
                    legend="Work Data"
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
                    legend="Education Data"
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
                    legend="Skills Data"
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