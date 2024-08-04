import { useState } from 'react'
import './App.css'
import Editor from './components/editor/editorMain.jsx'
import Resume from './components/resume/resumeMain.jsx'
import dataInit from './dataInit/dataInit.json'

function App() {
  
  const [data, setData] = useState(dataInit)


  return (
    <main>
      <Editor
        data={data}
        setData={setData}
      >

      </Editor>
      <Resume
      data={data}
      >

      </Resume>
    </main>
  )
}

export default App
