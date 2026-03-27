import { useState } from 'react'
import ARScene from './components/ARScene'
import './App.css'

export default function App() {
  const [clr, setClr] = useState('#4CC3D9')

  const toggle = () => {
    const newColor = clr === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9'
    setClr(newColor)

    const box = document.querySelector('#box')
    if (box) {
      box.setAttribute('color', newColor)
    }
  }

  return (
    <div className="app-container">
      <h1>XR Classroom Viewer</h1>

      <button onClick={toggle} className="btn">
        Toggle Box Color
      </button>

      <div className="scene-container">
        <ARScene />
      </div>
    </div>
  )
}