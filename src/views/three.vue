<template>
  <div style="height: 100%; width: 100%">
    <div id="three" style="height: 100%; width: 100%"></div>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { PCDLoader } from "three/addons/loaders/PCDLoader.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { TransformControls } from "three/examples/jsm/controls/TransformControls.js";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";
// const renderer = new THREE.WebGLRenderer();
// onMounted(() => {
//   const container = document.getElementById("three");
//   const scene = new THREE.Scene();

//   const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.01, 8000);
//   camera.position.set(0, 0, 100);
//   //   camera.up.set(100, 1, 100);
//   scene.add(camera);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   console.log(container);
//   container.appendChild(renderer.domElement);
//   // 添加光源
//   // const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
//   // scene.add(ambientLight);
//   // const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//   // directionalLight.position.set(1, 1, 1).normalize();
//   // scene.add(directionalLight);

//   // camera.position.z = 5;
//   // onresize 事件会在窗口被调整大小时发生
//   window.onresize = function () {
//     // 重置渲染器输出画布，相机
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//   };

//   //   同理，为其他相机定义矩阵并应用
//   //   transformMatrix1, transformMatrix2, transformMatrix3

//   // 创建点云加载器
//   const loader = new PCDLoader();
//   // 加载点云模型
//   loader.load("1000000.pcd", function (points) {
//     // 创建点云对象
//     // const material = new THREE.PointsMaterial({ size: 0.01, color: 0xff0000 });
//     // const pointCloud = new THREE.Points(points, material);
//     // scene.add(pointCloud);
//     // const pointCloud = new THREE.Points(points.geometry, material);
//     scene.add(points);
//     // 将点云几何居中并绕X轴旋转180度
//     // 可以访问其geometry获取原始XYZ坐标数组
//     let geometry = points.geometry;

//     // 获取顶点位置数组
//     let positions = geometry.attributes.position.array;

//     // positions现在包含了每个点的XYZ坐标值
//     // 每三个连续数值代表一个点的X、Y、Z坐标
//     console.log(positions);
//     camera.lookAt(scene.position);
//     camera.updateProjectionMatrix();
//     points.geometry.center();
//     // points.geometry.rotateX(Math.PI);
//     // points.geometry.rotateY(Math.PI / 2);
//     // points.geometry.rotateZ(Math.PI / 2);
//     const gui = new GUI();
//     gui.add(points.material, "size", 0.001, 0.01).onChange(() => render(scene, camera));
//     gui.addColor(points.material, "color").onChange(() => render(scene, camera));
//     gui.open();

//     // 增加控制器
//     const controls = new OrbitControls(camera, renderer.domElement);
//     // controls.update();
//     // const controls = new TransformControls(camera, renderer.domElement);
//     controls.addEventListener("change", () => render(scene, camera));
//     controls.minDistance = 0.1; // 调整最小距离
//     controls.maxDistance = 500; // 调整最大距离
//     controls.minPolarAngle = 0;
//     controls.maxPolarAngle = Math.PI;
//     controls.minAzimutalAngle = -Math.PI;
//     controls.maxAzimutalAngle = Math.PI;
//     // // controlsRef.current = controls;

//     // 添加放大缩小功能
//     window.addEventListener("wheel", (event) => {
//       const deltaY = event.deltaY;
//       const zoomSpeed = 0.1;

//       //   if (deltaY < 0) {
//       //     controlsRef.current.dollyIn(zoomSpeed);
//       //   } else {
//       //     controlsRef.current.dollyOut(zoomSpeed);
//       //   }
//       // render(scene, camera)
//     });
//     // 添加X、Y、Z轴辅助
//     // const transformControls = new TransformControls(camera, renderer.domElement);
//     // transformControls.attach(points);
//     // scene.add(transformControls);

//     // const axesHelper = new THREE.AxesHelper(5);
//     // transformControls.add(axesHelper);

//     // // 创建点云材质
//     // const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, vertexColors: true });

//     // // 在 GUI 中添加点云相关设置
//     // const folder = attributesFolder.addFolder(`点云 0`);
//     // const text = { pointsNum: points.geometry.attributes.position.count, file: "初始pcd" };
//     // folder.add(text, "file").name("文件");
//     // folder.add(text, "pointsNum").name("点数");
//     // folder.add(material, "size", 0, 2).name("点大小");
//     // folder.addColor(material, "color").name("点颜色");
//     // folder
//     //   .add(material, "vertexColors")
//     //   .name("显示顶点颜色")
//     //   .onChange(function () {
//     //     material.needsUpdate = true; // 需要手动更新材质，否则没作用
//     //   });

//     // 为每个相机创建CameraHelper对象并显示出来
//     //   const helpers = [];
//     //   for (let i = 0; i < 4; i++) {
//     //     helpers[i] = new THREE.CameraHelper(helpCamera[i]);
//     //     scene.add(helpers[i]);
//     //   }
//   });
//   setTimeout(() => {
//     render(scene, camera);
//   }, 500);
// });
// const render = (scene, camera) => {
//   console.log("change", scene, camera);
//   renderer.render(scene, camera);
// };
onMounted(() => {
  initPoint();
});
const initPoint = () => {
  const container = document.getElementById("three");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 8000);
  camera.position.set(100, 100, 100);
  camera.up.set(0, 0, 1); //设置z轴向上
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // 添加光源
  // const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
  // scene.add(ambientLight);
  // const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  // directionalLight.position.set(1, 1, 1).normalize();
  // scene.add(directionalLight);

  // camera.position.z = 5;
  scene.add(camera);
  const loader = new PCDLoader();
  console.log(213);

  loader.load(
    "1000000.pcd",
    function (Points) {
      let geometry = Points.geometry;
      const material = new THREE.PointsMaterial({ size: 0.001, color: 0xffffff });
      const pointCloud = new THREE.Points(geometry, material);
      pointCloud.rotation.order = "XYZ";
      scene.add(pointCloud);
      // const transformControls = new TransformControls(camera, renderer.domElement);
      // transformControls.attach(Points);
      // scene.add(transformControls);
      // 创建变换控制并设置 Z 轴向上
      // const transformControls = new TransformControls(camera, renderer.domElement);
      // transformControls.up.set(0, 0, 1);
      // scene.add(transformControls);
      // transformControls.attach(pointCloud);
    },
    undefined,
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
  );
  const controls = new OrbitControls(camera, renderer.domElement);
  // controls.enablePan = false; // 禁止平移
  // controls.enableZoom = false; // 禁止缩放
  controls.autoRotate = true; // 开启自动旋转
  controls.autoRotateSpeed = 1; // 设置旋转速度
  controls.minDistance = 0.1; // 调整最小距离
  controls.maxDistance = 500; // 调整最大距离
  // controls.minAzimuthAngle = -Infinity; // 最小方位角
  // controls.maxAzimuthAngle = Infinity; // 最大方位角

  controls.update();
  // 创建坐标轴箭头
  // const arrowX = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, 0), 10, 0xff0000); // X 轴为红色
  // const arrowY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 10, 0x00ff00); // Y 轴为绿色
  // const arrowZ = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 0), 10, 0x0000ff); // Z 轴为蓝色
  // scene.add(arrowX, arrowY, arrowZ);
  // 创建指示器

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update();
  }

  setTimeout(() => {
    // animate();
  }, 500);
};
</script>
