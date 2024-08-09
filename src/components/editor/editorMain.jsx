import './editorMain.css'
import './Accordion.css'
import './PersonalInfo.css'
import Accordion from './Accordion'
import Input from './Input'
import Personal from './PersonalInfo'
import Work from './WorkInfo'

export default function Editor({data, setData})  {
    console.log("EDITOR")
    console.log(data)
    function changeInfo(e, info, name) {
        setData({
            ...data,
            info: {
                ...info,
                [name]: e.target.value
            }
        })
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
                        <Work
                        data={data}
                        setData ={setData}
                        >

                        </Work>
                    )}
                >
                </Accordion>

            </div>
            <div id="educ-editor" className="editor">
                <Accordion
                    legend="Education Data"
                    content="Test Education"
                >
                </Accordion>

            </div>
            <div id="skills-editor" className="editor">
                <Accordion
                    legend="Skills Data"
                    content="Test Skills"
                >
                </Accordion>

            </div>
        </div>
    )
};