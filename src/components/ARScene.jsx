import 'aframe'

const ARScene = () => {
  return (
    <a-scene embedded vr-mode-ui="enabled: true" style={{ width: '100%', height: '100%' }}>
      
      <a-assets>
        <img id="classroom" src="/classroom.jpg" alt="classroom" />
      </a-assets>

      <a-sky src="#classroom"></a-sky>

      <a-box
        id="box"
        position="0 1.5 -3"
        color="#4CC3D9"
        scale="0.5 0.5 0.5"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 3000"
      ></a-box>

      <a-entity camera position="0 1.6 0" look-controls></a-entity>

    </a-scene>
  )
}

export default ARScene