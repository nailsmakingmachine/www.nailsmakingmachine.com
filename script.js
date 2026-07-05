document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. CLEAN URL & SMOOTH SCROLLING LOGIC
    // ==========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Stop default jump and hash addition
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignore empty hashes
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Smooth scroll to the section
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update the URL to remove the '#' (e.g., changes #about to /about)
                // Note: We use replaceState so we don't clutter the user's back button history
                const cleanPath = targetId.replace('#', '/'); 
                history.replaceState(null, null, cleanPath);
            }
        });
    });

    // ==========================================
    // 2. STANDARD WEBSITE FUNCTIONALITY
    // ==========================================
    
    // Set Current Year in Footer
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Navbar Scroll Effect
    const nav = document.getElementById("navbar");
    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                nav.classList.add("bg-black/90");
                nav.classList.remove("bg-transparent");
            } else {
                nav.classList.remove("bg-black/90");
                nav.classList.add("bg-transparent");
            }
        });
    }

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        });
    }

    // Product Slider Controls
    const slider = document.getElementById("product-slider");
    const btnLeft = document.getElementById("slide-left");
    const btnRight = document.getElementById("slide-right");

    if (slider && btnLeft && btnRight) {
        btnLeft.addEventListener("click", () => {
            slider.scrollBy({ left: -400, behavior: "smooth" });
        });

        btnRight.addEventListener("click", () => {
            slider.scrollBy({ left: 400, behavior: "smooth" });
        });
    }
});

// ==========================================
// 3. SEO-FRIENDLY POPUP MODAL LOGIC
// ==========================================
window.openModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    const panel = modal.querySelector("article");
    document.body.style.overflow = "hidden";
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    setTimeout(() => {
        modal.classList.remove("opacity-0");
        panel.classList.remove("scale-95");
        panel.classList.add("scale-100");
    }, 10);
};

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    const panel = modal.querySelector("article");
    modal.classList.add("opacity-0");
    panel.classList.remove("scale-100");
    panel.classList.add("scale-95");
    document.body.style.overflow = "auto";
    setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }, 300);
};

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const openModals = document.querySelectorAll('[role="dialog"]:not(.hidden)');
        openModals.forEach((modal) => window.closeModal(modal.id));
    }
});

// ==========================================
// 4. THREE.JS AURA 3D ANIMATION ENGINE
// ==========================================
function initThreeJS() {
    const container = document.getElementById("canvas-container");
    if (!container) return;

    // Scene Setup
    const scene = new THREE.Scene();

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 25;
    camera.position.y = 5;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xd4af37, 2, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Main Animation Group
    const auraGroup = new THREE.Group();
    scene.add(auraGroup);

    // Materials - Luxury Metallic
    const metalMaterial = new THREE.MeshStandardMaterial({
        color: 0xd4af37, // Gold
        metalness: 0.9,
        roughness: 0.2,
        wireframe: false,
    });

    const wireframeMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
    });

    // 1. Central Abstract Gear (TorusKnot)
    const geometryKnot = new THREE.TorusKnotGeometry(6, 1.5, 200, 32, 3, 4);
    const centralKnot = new THREE.Mesh(geometryKnot, metalMaterial);
    auraGroup.add(centralKnot);

    // 2. Orbiting Rings (Mechanical aesthetic)
    for (let i = 0; i < 3; i++) {
        const ringGeo = new THREE.TorusGeometry(12 + i * 3, 0.2, 16, 100);
        const ring = new THREE.Mesh(ringGeo, metalMaterial);
        ring.rotation.x = Math.random() * Math.PI;
        ring.rotation.y = Math.random() * Math.PI;

        // Add specific rotation speeds as custom data
        ring.userData = {
            rx: (Math.random() - 0.5) * 0.005,
            ry: (Math.random() - 0.5) * 0.005,
        };
        auraGroup.add(ring);
    }

    // 3. Particle Aura (Dust/Sparks)
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 60; // Spread across scene
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xd4af37,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
    });

    // Handle Scroll for Parallax effect
    let scrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        scrollY = window.scrollY;
    });

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Rotate central knot
        centralKnot.rotation.y += 0.002;
        centralKnot.rotation.x += 0.001;

        // Rotate orbiting rings
        auraGroup.children.forEach((child, index) => {
            if (index > 0) {
                // Skip the first element which is the central knot
                child.rotation.x += child.userData.rx;
                child.rotation.y += child.userData.ry;
            }
        });

        // Rotate particle system slowly
        particlesMesh.rotation.y = elapsedTime * 0.02;

        // Mouse interactivity (smooth movement)
        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        auraGroup.rotation.y += 0.05 * (targetX - auraGroup.rotation.y);
        auraGroup.rotation.x += 0.05 * (targetY - auraGroup.rotation.x);

        // Parallax on scroll
        camera.position.y = 5 - scrollY * 0.01;

        renderer.render(scene, camera);
    }

    // Handle Window Resize
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Start animation
    animate();
}

// Initialize Three.js on load
window.onload = function () {
    initThreeJS();
};