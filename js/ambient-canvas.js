// js/ambient-canvas.js

document.addEventListener('DOMContentLoaded', () => {
    const canvasContainer = document.getElementById('catalog-canvas-ambient');
    if (!canvasContainer) return;

    // Initialize 3D Core Scene
    const scene = new THREE.Scene();
    
    // Camera Vector Config
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / (window.innerHeight * 0.45), 0.1, 1000);
    camera.position.z = 5;

    // Renderer Config
    const renderer = new THREE.WebGLRenderer({ canvas: canvasContainer, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.45);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Structural Geometry (Industrial Moving Particle Matrix)
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 250;
    const positionArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
        positionArray[i] = (Math.random() - 0.5) * 12;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));

    // Metallic Electric Blue Glow Material
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.035,
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.35
    });

    const particleMesh = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleMesh);

    // Responsive Canvas Resizing Matrix
    window.addEventListener('resize', () => {
        const currentHeight = window.innerHeight * 0.45;
        camera.aspect = window.innerWidth / currentHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, currentHeight);
    });

    // Execution Loop Animation Engine
    const renderClock = new THREE.Clock();

    const tick = () => {
        const elapsedTime = renderClock.getElapsedTime();
        
        // Slow mechanical rotations
        particleMesh.rotation.y = elapsedTime * 0.02;
        particleMesh.rotation.x = elapsedTime * 0.01;

        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    };

    tick();
});
