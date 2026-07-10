/* Main interaction and 3D background engine for Nails Making Machine */
(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initialiseInterface() {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    const navbar = document.getElementById('navbar');
    if (navbar) {
      const updateNavbar = () => navbar.classList.toggle('is-scrolled', window.scrollY > 36);
      updateNavbar();
      window.addEventListener('scroll', updateNavbar, { passive: true });
    }

    const menuButton = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden', isOpen);
        menuButton.setAttribute('aria-expanded', String(!isOpen));
      });

      mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          menuButton.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  function setModalState(modal, isOpen) {
    const panel = modal.querySelector('article');
    if (!panel) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      window.setTimeout(() => {
        modal.classList.remove('opacity-0');
        panel.classList.remove('scale-95');
        panel.classList.add('scale-100');
      }, 10);
      return;
    }

    modal.classList.add('opacity-0');
    panel.classList.remove('scale-100');
    panel.classList.add('scale-95');
    document.body.style.overflow = '';
    window.setTimeout(() => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }, 300);
  }

  window.openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) setModalState(modal, true);
  };

  window.closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) setModalState(modal, false);
  };

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('[role="dialog"]:not(.hidden)').forEach((modal) => {
      window.closeModal(modal.id);
    });
  });

  function initialiseThreeBackground() {
    const container = document.getElementById('canvas-container');
    if (!container || !window.THREE || prefersReducedMotion || container.querySelector('canvas')) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07111f, 0.075);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.setAttribute('aria-hidden', 'true');
    container.appendChild(renderer.domElement);

    const machinery = new THREE.Group();
    machinery.position.set(2.9, 0.4, -1.8);
    scene.add(machinery);

    const frame = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.45, 1)),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.52 })
    );
    machinery.add(frame);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
    });
    const ringOne = new THREE.Mesh(new THREE.TorusGeometry(2.25, 0.028, 8, 80), ringMaterial);
    ringOne.rotation.set(1.08, 0.25, -0.36);
    machinery.add(ringOne);

    const ringTwo = new THREE.Mesh(new THREE.TorusGeometry(1.8, 0.022, 8, 72), ringMaterial.clone());
    ringTwo.rotation.set(-0.7, 0.85, 0.45);
    machinery.add(ringTwo);

    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      const offset = index * 3;
      positions[offset] = (Math.random() - 0.5) * 18;
      positions[offset + 1] = (Math.random() - 0.5) * 12;
      positions[offset + 2] = (Math.random() - 0.5) * 12;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0x7dd3fc,
        size: 0.055,
        transparent: true,
        opacity: 0.58,
        sizeAttenuation: true,
      })
    );
    scene.add(particles);

    const clock = new THREE.Clock();
    function animate() {
      const elapsed = clock.getElapsedTime();
      machinery.rotation.x = elapsed * 0.11;
      machinery.rotation.y = elapsed * 0.16;
      ringOne.rotation.z = -0.36 + elapsed * 0.08;
      ringTwo.rotation.z = 0.45 - elapsed * 0.06;
      particles.rotation.y = elapsed * 0.012;
      particles.position.y = Math.sin(elapsed * 0.22) * 0.18;

      if (!document.hidden) renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
    animate();
  }

  document.addEventListener('DOMContentLoaded', initialiseInterface);
  window.addEventListener('load', initialiseThreeBackground, { once: true });
})();
