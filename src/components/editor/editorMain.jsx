import './editorMain.css'
import Accordion from './Accordion'
import Input from './Input'

export default function Editor({data, setData})  {
    console.log("EDITOR")
    console.log(data)
    function changeName(e) {
        setData({
            ...data,
            info: {
                ...data.info,
                firstName: e.target.value
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
                        <Input
                        name="firstName"
                        data={data.info}
                        callback={changeName}
                        type="text"
                        >
                        
                        </Input>
                    )}
                >
                </Accordion>
                
                

            </div>
            <div id="work-editor" className="editor">
                <Accordion
                    legend="Work Data"
                    content="Test Work"
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