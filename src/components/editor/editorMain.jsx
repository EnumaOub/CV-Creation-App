import './editorMain.css'

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
                Title Editor

            </div>
            <div id="personal-editor" className="editor">
                Personal Data Editor
                <label id="firstName-editor">
                    firstName
                    <input 
                        value={data.info.firstName}
                        onChange={changeName}
                        type="text" 
                        />

                </label>
                

            </div>
            <div id="work-editor" className="editor">
                Work Data Editor

            </div>
            <div id="educ-editor" className="editor">
                Education Data Editor

            </div>
            <div id="skills-editor" className="editor">
                Skills Data Editor

            </div>
        </div>
    )
};