import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import editorMain from './components/editor/editorMain.jsx'
import resumeMain from './components/resume/resumeMain.jsx'
import dataInit from './dataInit/dataInit.json'

function App() {
  console.log(dataInit)
  const [data, setData] = useState(dataInit)


  return (
    <main>
      {editorMain()}
      {resumeMain()}
    </main>
  )
}

export default App
