/**
 * NAILS MAKING MACHINE — ASYNC INTERACTIVE CONTROLLER MATRIX
 * ----------------------------------------------------------------------
 * Core architectural fallback scripts handling mobile viewport metrics,
 * cross-device interaction routing, and smooth anchor scrolling synchronization.
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // --- 1. GLOBAL VIEWPORT INTERACTIVE DATA NODES ---
    const hamburgerToggle = document.getElementById('hamburger-menu-toggle');
    const navigationMenu = document.getElementById('nav-menu-container');
    const applicationViews = document.querySelectorAll('.app-view');
    const navigationalLinks = document.querySelectorAll('.nav-link');
    const accordionElements = document.querySelectorAll('.faq-element-row');

    // --- 2. MULTI-DEVICE RESPONSIVE MENU ROUTING ENGINE (iOS / ANDROID / DESKTOP) ---
    if (hamburgerToggle && navigationMenu) {
        hamburgerToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            hamburgerToggle.classList.toggle('mobile-expanded');
            navigationMenu.classList.toggle('mobile-expanded');
        });

        // Dismiss mobile drawer overlay upon external backdrop space interactions
        document.addEventListener('click', (event) => {
            if (!navigationMenu.contains(event.target) && !hamburgerToggle.contains(event.target)) {
                hamburgerToggle.classList.remove('mobile-expanded');
                navigationMenu.classList.remove('mobile-expanded');
            }
        });
    }

    // --- 3. ZERO-LATENCY HIGH-PERFORMANCE ROUTING UTILITY ---
    window.navigateToView = function(viewTargetId) {
        // Immediately collapse active mobile panel triggers for clean layout transitions
        if (navigationMenu && hamburgerToggle) {
            navigationMenu.classList.remove('mobile-expanded');
            hamburgerToggle.classList.remove('mobile-expanded');
        }

        // Toggle visibility attributes smoothly across core document layout nodes
        applicationViews.forEach(viewNode => {
            viewNode.classList.remove('active-view');
        });

        const targetedViewportNode = document.getElementById('view-' + viewTargetId);
        if (targetedViewportNode) {
            targetedViewportNode.classList.add('active-view');
        }

        // Sync and refresh structural link highlight markers matching index states
        navigationalLinks.forEach(linkElement => {
            linkElement.classList.remove('active');
            const linkHref = linkElement.getAttribute('href');
            if (linkHref === '#' + viewTargetId || 
               (viewTargetId.startsWith('product-') && linkHref === '#products-hub')) {
                linkElement.classList.add('active');
            }
        });

        // Enforce smooth coordinate scroll reset straight to top boundaries
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- 4. ACCORDION MECHANICS CONTROLLER ---
    accordionElements.forEach(rowNode => {
        const rowTrigger = rowNode.querySelector('.faq-element-trigger');
        const rowBody = rowNode.querySelector('.faq-element-body');
        
        if (rowTrigger && rowBody) {
            rowTrigger.addEventListener('click', () => {
                const isCurrentlyActive = rowNode.classList.contains('expanded-row');
                
                // Collapse sibling accordion panel lines to keep layout clean
                accordionElements.forEach(siblingNode => {
                    siblingNode.classList.remove('expanded-row');
                    const siblingBody = siblingNode.querySelector('.faq-element-body');
                    if (siblingBody) siblingBody.style.maxHeight = null;
                });
                
                // Toggle state parameters smoothly
                if (!isCurrentlyActive) {
                    rowNode.classList.add('expanded-row');
                    rowBody.style.maxHeight = rowBody.scrollHeight + "px";
                }
            });
        }
    });

    // --- 5. INITIALIZE DYNAMIC ROUTER REFLECTION ---
    const explicitUrlHash = window.location.hash.replace('#', '');
    if (explicitUrlHash && document.getElementById('view-' + explicitUrlHash)) {
        window.navigateToView(explicitUrlHash);
    }
});
