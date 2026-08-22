/**
 * NAILSMAKINGMACHINE.COM — PRODUCTION ROUTING & UI APPLICATION CONTROLLER
 * Architecture: Vanilla JavaScript / Zero-Dependency / Zero-INP Latency
 * Compliance: WCAG 2.1 Level AA / Google Searchbot Dynamic Rendering Specification
 * Authoritative Canonical Root: https://www.nailsmakingmachine.com
 */

(function () {
  'use strict';

  // Master Route Metadata Matrix (30 Canonical SEO Entities)
  var routeMetadata = {
    'home': {
      title: 'Nails Making Machine | Automatic Wire Nail & Drawing Machinery Manufacturer Rajkot',
      desc: 'Leading manufacturer and global exporter of high-speed automatic wire nail making machines, continuous wire drawing plants, and binding wire machinery in Rajkot, Gujarat, India.',
      canonical: 'https://www.nailsmakingmachine.com/'
    },
    'nail-making-machine': {
      title: 'Automatic Wire Nail Making Machine Manufacturer | Nails Making Machine',
      desc: 'High-performance automatic wire nail making machines from Rajkot, India. Forging speeds up to 700 pcs/min for 0.5 to 6 inch nails.',
      canonical: 'https://www.nailsmakingmachine.com/nail-making-machine'
    },
    'wire-nail-making-machine': {
      title: 'Wire Nail Making Machine Technology & Complete Plants',
      desc: 'Explore complete wire nail production plants including wire drawing, forging machines, and deburring polishing barrels.',
      canonical: 'https://www.nailsmakingmachine.com/wire-nail-making-machine'
    },
    'binding-wire-machine': {
      title: 'Binding Wire Machine & Continuous Drawing Plants | Rajkot India',
      desc: 'High-efficiency binding wire making machines and continuous wire drawing plants engineered for high tensile wire outputs.',
      canonical: 'https://www.nailsmakingmachine.com/binding-wire-machine'
    },
    'binding-wire-making-machine': {
      title: 'Binding Wire Making Machine Manufacturer | Turnkey Plant Setup',
      desc: 'Commercial binding wire manufacturing machines. Precision drawing from 2.5mm down to fine 0.9mm GI and black wire.',
      canonical: 'https://www.nailsmakingmachine.com/binding-wire-making-machine'
    },
    'nails-making-machine': {
      title: 'Nails Making Machine Systems | Industrial Wire Fastener Equipment',
      desc: 'Explore heavy industrial nail making machinery setups, rotary high-speed models, and complete fastener manufacturing plants.',
      canonical: 'https://www.nailsmakingmachine.com/nails-making-machine'
    },
    'steel-nail-making-machine': {
      title: 'Steel Nail Making Machine & Heavy Duty Fastener Equipment',
      desc: 'Forging equipment built for high-tensile steel nails, construction fasteners, and continuous 24/7 manufacturing.',
      canonical: 'https://www.nailsmakingmachine.com/steel-nail-making-machine'
    },
    'automatic-nail-machine': {
      title: 'Automatic Nail Machine Systems | Automated Wire Fastener Line',
      desc: 'Fully automatic wire nail manufacturing machines with integrated straightening, high-speed cutting, and heading dies.',
      canonical: 'https://www.nailsmakingmachine.com/automatic-nail-machine'
    },
    'nail-making-machine-price': {
      title: 'Automatic Nail Making Machine Price & Factory Quotations',
      desc: 'Check current price lists for automatic wire nail making machines, wire drawing lines, and polishing drums direct from factory.',
      canonical: 'https://www.nailsmakingmachine.com/nail-making-machine-price'
    },
    'nail-making-machine-india': {
      title: 'Nail Making Machine Manufacturer in India | Pan-India Supply',
      desc: 'Supplying automatic wire nail machines and turnkey manufacturing plants across all states in India with installation support.',
      canonical: 'https://www.nailsmakingmachine.com/nail-making-machine-india'
    },
    'nail-making-machine-rajkot': {
      title: 'Nail Making Machine Manufacturer in Rajkot | Aji GIDC Factory',
      desc: 'Direct factory manufacturer in Aji GIDC, Rajkot, Gujarat. Visit our plant for live demonstration and machine inspection.',
      canonical: 'https://www.nailsmakingmachine.com/nail-making-machine-rajkot'
    },
    'nail-making-machine-gujarat': {
      title: 'Nail Making Machine in Gujarat | Heavy Industrial Equipment',
      desc: 'Trusted manufacturer of industrial wire fastener and nail forging machinery across Gujarat, India.',
      canonical: 'https://www.nailsmakingmachine.com/nail-making-machine-gujarat'
    },
    'nail-making-machine-nearme': {
      title: 'Nail Making Machine Near Me | Fast Delivery & Local Support',
      desc: 'Find local supply, immediate tooling dispatch, and expert technician assistance for wire nail making machinery.',
      canonical: 'https://www.nailsmakingmachine.com/nail-making-machine-nearme'
    },
    'about': {
      title: 'About Our Industrial Enterprise | Nails Making Machine Rajkot',
      desc: 'Learn about Nails Making Machine, an MSME-certified machinery manufacturer in Rajkot, Gujarat with over 30+ export countries.',
      canonical: 'https://www.nailsmakingmachine.com/about'
    },
    'products-hub': {
      title: 'Industrial Machinery Showroom Directory | Nails Making Machine',
      desc: 'Complete machinery catalog: high-speed wire nail machines, wire drawing lines, and vibratory polishing drums.',
      canonical: 'https://www.nailsmakingmachine.com/products-hub'
    },
    'spare-parts': {
      title: 'Genuine Tooling Spares & Replacement Dies | Nails Making Machine',
      desc: 'Tungsten carbide gripper dies, heading punches, and tempered cutting blades sourced directly from factory.',
      canonical: 'https://www.nailsmakingmachine.com/spare-parts'
    },
    'export': {
      title: 'International Export Logistics & Seaworthy Packaging',
      desc: 'Worldwide container ocean shipping and seaworthy packaging standards for industrial plants globally.',
      canonical: 'https://www.nailsmakingmachine.com/export'
    },
    'gallery': {
      title: 'Industrial Video Showcase & Media Gallery | Live Demos',
      desc: 'Watch high-speed automatic wire nail making machines and continuous wire drawing equipment in factory operation.',
      canonical: 'https://www.nailsmakingmachine.com/gallery'
    },
    'faq': {
      title: 'Frequently Asked Questions (FAQ) | Automatic Wire Nail Machinery',
      desc: 'Answers to key technical questions on machine capacities, power requirements, tooling life, and export logistics.',
      canonical: 'https://www.nailsmakingmachine.com/faq'
    },
    'contact': {
      title: 'Connect With Our Industrial Plant Office | Rajkot, Gujarat',
      desc: 'Contact Nails Making Machine in Aji GIDC, Rajkot. Direct Phone: +91 98984 67862, Email: nailsmakingmachine@gmail.com.',
      canonical: 'https://www.nailsmakingmachine.com/contact'
    },
    'product-in1': {
      title: 'IN1+ Automatic Wire Nail Making Machine | Specs & Price',
      desc: 'Technical specifications for the IN1+ wire nail maker: 600 pieces/minute, 0.5 to 2 inch length coverage.',
      canonical: 'https://www.nailsmakingmachine.com/product-in1'
    },
    'product-in3': {
      title: 'IN3 Automatic Wire Nail Making Machine (Best Seller) | Specs',
      desc: 'IN3 best-seller wire nail machine: 600 KG / 8 Hours capacity, 1 to 4 inch nail lengths, 3 HP motor.',
      canonical: 'https://www.nailsmakingmachine.com/product-in3'
    },
    'product-in4': {
      title: 'IN4 Automatic Wire Nail Making Machine | Heavy Duty System',
      desc: 'IN4 medium-gauge nail maker: 1 to 5 inch lengths, 700 KG / 8 Hours capacity, 5 HP motor.',
      canonical: 'https://www.nailsmakingmachine.com/product-in4'
    },
    'product-in6': {
      title: 'IN6 Heavy Duty Automatic Wire Nail Machine (6 Inch Specs)',
      desc: 'IN6 heavy-duty nail making machine: 2 to 6 inch nail lengths, 1000 KG / 8 Hours capacity, 7.5 HP motor.',
      canonical: 'https://www.nailsmakingmachine.com/product-in6'
    },
    'product-hs90': {
      title: 'IHS90 Rotary High-Speed Automatic Nail Machine (700 pcs/min)',
      desc: 'IHS90 concentric rotary high-speed nail maker delivering up to 700 pieces per minute with 7.5 HP induction power.',
      canonical: 'https://www.nailsmakingmachine.com/product-hs90'
    },
    'product-drawing-600': {
      title: '600mm Continuous Wire Drawing Plant | 4000 KG Output',
      desc: 'Heavy linear multi-die continuous wire drawing line with Siemens control panel for 4000 KG daily output.',
      canonical: 'https://www.nailsmakingmachine.com/product-drawing-600'
    },
    'product-drawing-300': {
      title: '300mm Precision Binding Wire Making Machine | Specifications',
      desc: 'Fine gauge binding wire drawing plant with Mitsubishi VFD AC drive system: 1000 KG/day output.',
      canonical: 'https://www.nailsmakingmachine.com/product-drawing-300'
    },
    'product-polishing-500': {
      title: 'Nail Polishing Drum 500 KG Specs | Commercial Deburring',
      desc: '500 KG batch capacity vibratory deburring and mirror polishing drum for industrial nail plants.',
      canonical: 'https://www.nailsmakingmachine.com/product-polishing-500'
    },
    'product-polishing-250': {
      title: 'Nail Polishing Drum 250 KG Specs | Flash Polishing Barrel',
      desc: '250 KG batch loading nail polishing drum for fast deburring and commercial finish.',
      canonical: 'https://www.nailsmakingmachine.com/product-polishing-250'
    },
    'product-stand': {
      title: 'Passive Coil De-Coiling Wire Stand | Wire Payoff Stand',
      desc: 'Heavy anti-friction passive feeding de-coiler stand for continuous wire draw and nail machine operation.',
      canonical: 'https://www.nailsmakingmachine.com/product-stand'
    },
    'product-grinder': {
      title: 'Cutter Grinder Tooling Platform | Carbide Tool Sharpening',
      desc: 'Precision maintenance tooling platform for sharpening carbide cutting dies and gripper tools.',
      canonical: 'https://www.nailsmakingmachine.com/product-grinder'
    }
  };

  /**
   * Slug & Alias Canonicalization Normalizer
   * @param {string} viewId 
   * @returns {string} Normalized identifier
   */
  function normalizeViewId(viewId) {
    if (!viewId || viewId === 'home' || viewId === 'index.html' || viewId === '/') {
      return 'home';
    }
    if (viewId === 'aboutus') return 'about';
    if (viewId === 'products') return 'products-hub';
    if (viewId === 'binding-wire-making-machine') return 'binding-wire-machine';
    return viewId.replace(/^\/+|\/+$/g, '');
  }

  /**
   * Dynamic DOM Head Metadata & Open Graph Updater
   * @param {string} viewId 
   */
  function updateMetadata(viewId) {
    var meta = routeMetadata[viewId] || routeMetadata['home'];
    
    // Core Document Title
    document.title = meta.title;

    // Search Engine Description
    var descEl = document.getElementById('meta-description');
    if (descEl) {
      descEl.setAttribute('content', meta.desc);
    }

    // Canonical Link Tag
    var canEl = document.getElementById('meta-canonical');
    if (canEl) {
      canEl.setAttribute('href', meta.canonical);
    }

    // Open Graph Social Suite
    var ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    var ogDesc = document.getElementById('og-description');
    if (ogDesc) ogDesc.setAttribute('content', meta.desc);

    var ogUrl = document.getElementById('og-url');
    if (ogUrl) ogUrl.setAttribute('href', meta.canonical);

    // Twitter Card Suite
    var twTitle = document.getElementById('twitter-title');
    if (twTitle) twTitle.setAttribute('content', meta.title);

    var twDesc = document.getElementById('twitter-description');
    if (twDesc) twDesc.setAttribute('content', meta.desc);
  }

  /**
   * Core Single Page Application View Router
   * @param {string} viewId Target slug
   * @param {boolean} pushHistory State history flag
   */
  function navigateToView(viewId, pushHistory) {
    if (typeof pushHistory === 'undefined') {
      pushHistory = true;
    }
    var normalizedId = normalizeViewId(viewId);

    // Collapse mobile navigation drawer if active
    var navMenu = document.getElementById('nav-menu-container');
    var hamburger = document.getElementById('hamburger-menu-toggle');
    if (navMenu && navMenu.classList.contains('mobile-expanded')) {
      navMenu.classList.remove('mobile-expanded');
    }
    if (hamburger && hamburger.classList.contains('mobile-expanded')) {
      hamburger.classList.remove('mobile-expanded');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    // Toggle viewport visibility across active nodes
    var views = document.querySelectorAll('.app-view');
    for (var i = 0; i < views.length; i++) {
      views[i].classList.remove('active-view');
    }

    var targetView = document.getElementById('view-' + normalizedId);
    if (targetView) {
      targetView.classList.add('active-view');
      // Pass programmatic focus to the primary heading for screen-reader awareness
      var firstHeading = targetView.querySelector('h1, h2');
      if (firstHeading) {
        firstHeading.setAttribute('tabindex', '-1');
        firstHeading.focus();
      }
    }

    // Push clean history state without hash "#"
    var cleanPath = normalizedId === 'home' ? '/' : '/' + viewId;
    if (pushHistory && window.location.pathname !== cleanPath) {
      window.history.pushState({ viewId: viewId }, '', cleanPath);
    }

    // Synchronize Head SEO Tags
    updateMetadata(viewId);

    // Synchronize Navigation UI Active State
    var links = document.querySelectorAll('a[data-view], [data-view]');
    for (var j = 0; j < links.length; j++) {
      var link = links[j];
      var dv = link.getAttribute('data-view');
      if (dv === normalizedId || dv === viewId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }

    // Reset scroll position smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Global Pointer Event Delegation for Links & Action Nodes
  document.addEventListener('click', function (e) {
    var targetNode = e.target.closest('a[data-view], [data-view]');
    if (targetNode) {
      var viewId = targetNode.getAttribute('data-view');
      if (viewId) {
        e.preventDefault();
        navigateToView(viewId, true);
      }
    }
  });

  // Global Keyboard Accessibility Event Delegation (WCAG 2.1 AA)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      var targetNode = e.target.closest('[data-view][role="link"]');
      if (targetNode) {
        e.preventDefault();
        var viewId = targetNode.getAttribute('data-view');
        if (viewId) {
          navigateToView(viewId, true);
        }
      }
    }
  });

  // History Popstate Navigation (Browser Forward / Back Triggers)
  window.addEventListener('popstate', function (e) {
    if (e.state && e.state.viewId) {
      navigateToView(e.state.viewId, false);
    } else {
      var path = window.location.pathname.replace(/^\/+|\/+$/g, '') || 'home';
      navigateToView(path, false);
    }
  });

  // Responsive Mobile Navigation Drawer Controller
  var hamburgerBtn = document.getElementById('hamburger-menu-toggle');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function () {
      var isExpanded = this.classList.toggle('mobile-expanded');
      this.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      var navMenu = document.getElementById('nav-menu-container');
      if (navMenu) {
        navMenu.classList.toggle('mobile-expanded');
      }
    });
  }

  // Accessible FAQ Accordion Engine
  var accordionRows = document.querySelectorAll('.faq-element-row');
  for (var k = 0; k < accordionRows.length; k++) {
    (function (row) {
      var trigger = row.querySelector('.faq-element-trigger');
      var body = row.querySelector('.faq-element-body');
      if (trigger && body) {
        trigger.addEventListener('click', function () {
          var isCurrentlyExpanded = row.classList.contains('expanded-row');

          // Close active sibling rows
          for (var l = 0; l < accordionRows.length; l++) {
            var sibling = accordionRows[l];
            sibling.classList.remove('expanded-row');
            var siblingTrigger = sibling.querySelector('.faq-element-trigger');
            var siblingBody = sibling.querySelector('.faq-element-body');
            if (siblingTrigger) siblingTrigger.setAttribute('aria-expanded', 'false');
            if (siblingBody) siblingBody.style.maxHeight = null;
          }

          // Expand active row
          if (!isCurrentlyExpanded) {
            row.classList.add('expanded-row');
            trigger.setAttribute('aria-expanded', 'true');
            body.style.maxHeight = body.scrollHeight + 'px';
          }
        });
      }
    })(accordionRows[k]);
  }

  // Application Lifecycle Bootstrap
  window.addEventListener('DOMContentLoaded', function () {
    var queryParams = new URLSearchParams(window.location.search);
    var queryView = queryParams.get('p');

    if (queryView) {
      var cleanView = decodeURIComponent(queryView).replace(/^\/+|\/+$/g, '');
      queryParams.delete('p');
      var remainingQuery = queryParams.toString() ? '?' + queryParams.toString() : '';

      if (document.getElementById('view-' + normalizeViewId(cleanView)) || routeMetadata[cleanView]) {
        var targetPath = (cleanView === 'home' ? '/' : '/' + cleanView) + remainingQuery;
        window.history.replaceState({ viewId: cleanView }, '', targetPath);
        navigateToView(cleanView, false);
        return;
      }
    }

    var path = window.location.pathname.replace(/^\/+|\/+$/g, '') || 'home';
    if (document.getElementById('view-' + normalizeViewId(path))) {
      navigateToView(path, false);
    } else {
      navigateToView('home', false);
    }
  });
})();
