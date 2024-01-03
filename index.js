/****************************************************************************
** MIT License
**
** Author   : xiaofeng.zhu
** Support  : zxffffffff@outlook.com, 1337328542@qq.com
**
****************************************************************************/

// Get the canvas element
const canvas = document.getElementById("renderCanvas");

// Generate the BABYLON 3D engine
const engine = new BABYLON.Engine(canvas, true);

const createScene = function () {
  // Creates a basic Babylon Scene object
  const scene = new BABYLON.Scene(engine);

  // Creates and positions a free camera
  const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

  // Targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // Creates a light, aiming 0,1,0 - to the sky
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

  // Dim the light a small amount - 0 to 1
  light.intensity = 0.7;

  // Built-in 'sphere' shape.
  const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);

  // Move the sphere upward 1/2 its height
  sphere.position.y = 1;

  // Built-in 'ground' shape.
  const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

  return scene;
};

//Call the createScene function
const scene = createScene();

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
  scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
  engine.resize();
});
