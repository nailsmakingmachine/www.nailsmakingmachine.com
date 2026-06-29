<script>
        // PREMIUM KINETIC POINTER COORDINATION
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // THREE.JS: HELICAL INDUSTRIAL ROTOR SYSTEM REPRESENTATION
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / (window.innerHeight * 0.45), 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('catalog-canvas-ambient'), antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight * 0.45);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const torusGroup = new THREE.Group();
        
        // Emulating cold forging precision wire reels via structural nesting rings
        for (let i = 0; i < 4; i++) {
            const geo = new THREE.TorusGeometry(2.5 + (i * 0.4), 0.04, 8, 64);
            const mat = new THREE.MeshBasicMaterial({
                color: 0x00e5ff,
                wireframe: true,
                transparent: true,
                opacity: 0.4 - (i * 0.08)
            });
            const ring = new THREE.Mesh(geo, mat);
            ring.rotation.x = Math.PI / 3;
            ring.rotation.y = (i * Math.PI) / 8;
            torusGroup.add(ring);
        }
        scene.add(torusGroup);

        const lightSource = new THREE.PointLight(0x00e5ff, 1, 100);
        lightSource.position.set(5, 5, 5);
        scene.add(lightSource);

        camera.position.z = 6;

        function runVisualizationEngine() {
            requestAnimationFrame(runVisualizationEngine);
            torusGroup.rotation.z += 0.002;
            renderer.render(scene, camera);
        }
        runVisualizationEngine();

        // Responsive Adaptations Hooks
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / (window.innerHeight * 0.45);
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight * 0.45);
        });

        // CLIENT SIDE DATA FILTER ENGINE DEPLOYMENT 
        const filterControls = document.querySelectorAll('.matrix-filter-btn');
        const machineItems = document.querySelectorAll('.catalog-item-card');

        filterControls.forEach(control => {
            control.addEventListener('click', () => {
                // Toggle focus states layout matrices
                filterControls.forEach(btn => btn.classList.remove('active-filter'));
                control.classList.add('active-filter');

                const targetCategory = control.getAttribute('data-target');

                machineItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-cat');
                    
                    if (targetCategory === 'all' || itemCategory === targetCategory) {
                        gsap.to(item, { scale: 1, opacity: 1, duration: 0.4, display: 'flex', ease: 'power2.out' });
                    } else {
                        gsap.to(item, { scale: 0.9, opacity: 0, duration: 0.4, display: 'none', ease: 'power2.in' });
                    }
                });
                
                // Refresh trigger boundaries to recalculate viewport status
                ScrollTrigger.refresh();
            });
        });

        // GSAP MOUNT ANIMATION LIFECYCLE 
        gsap.from('.main-headline', { opacity: 0, y: 30, duration: 1, ease: 'power4.out', delay: 0.2 });
        gsap.from('.catalog-item-card', {
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#machinery-grid',
                start: 'top 85%'
            }
        });
    </script>
