import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import editorMain from './components/editor/editorMain.jsx'
import resumeMain from './components/resume/resumeMain.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      {editorMain()}
      {resumeMain()}
    </main>
  )
}

export default App
