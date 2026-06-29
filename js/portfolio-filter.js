// js/portfolio-filter.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Kinetic Smooth Custom Cursor Engine
    const cursor = document.getElementById('cursor');
    
    if (cursor) {
        window.addEventListener('mousemove', (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        });
    }

    // 2. Hardware Category Filter Engine
    const filterButtons = document.querySelectorAll('.matrix-filter-btn');
    const catalogCards = document.querySelectorAll('.catalog-item-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active styling state
            filterButtons.forEach(btn => btn.classList.remove('active-filter'));
            button.classList.add('active-filter');

            const targetCategory = button.getAttribute('data-target');

            // Animate items matching category
            catalogCards.forEach(card => {
                const cardCategory = card.getAttribute('data-cat');

                if (targetCategory === 'all' || cardCategory === targetCategory) {
                    // Reveal matching machinery
                    gsap.to(card, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out",
                        display: "flex"
                    });
                } else {
                    // Hide non-matching machinery
                    gsap.to(card, {
                        scale: 0.95,
                        opacity: 0,
                        duration: 0.3,
                        ease: "power2.in",
                        display: "none"
                    });
                }
            });
        });
    });
});
