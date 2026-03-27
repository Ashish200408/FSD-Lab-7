import { useState } from 'react'
import 'aframe'
import ARSceneVR from './components/ARScene'

function ARSceneAR({ clr }) {
  return (
    <a-scene
      xr-mode="ar"
      embedded
      style={{ width: '100%', height: '80vh' }}
    >
      <a-box
        position="0 0 -0.8"
        color={clr}
        scale="0.3 0.3 0.3"
      ></a-box>

      <a-entity camera look-controls></a-entity>
    </a-scene>
  )
}

export default function App() {
  const [mode, setMode] = useState('AR')
  const [clr, setClr] = useState('#4CC3D9')

  return (
    <>
      <button onClick={() => setMode(m => (m === 'AR' ? 'VR' : 'AR'))}>
        Switch to {mode === 'AR' ? 'VR' : 'AR'}
      </button>

      {mode === 'AR' ? (
        <>
          <button onClick={() =>
            setClr(c => (c === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9'))
          }>
            Toggle Color
          </button>
          <ARSceneAR clr={clr} />
        </>
      ) : (
        <ARSceneVR />
      )}
    </>
  )
}