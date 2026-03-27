import 'aframe'
import classroomImg from '../assets/classroom.jpg'

const ARScene = () => {
  return (
    <a-scene vr-mode-ui="enabled: true">
      <a-assets>
        <img id="classroom" src={classroomImg} alt="classroom" />
      </a-assets>

      <a-sky src="#classroom"></a-sky>

      <a-entity camera position="0 1.6 0" look-controls></a-entity>
    </a-scene>
  )
}

export default ARScene