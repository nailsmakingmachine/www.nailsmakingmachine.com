/**
 * NAILS MAKING MACHINE - ENTERPRISE SPA ROUTER & METADATA SYNCHRONIZER
 * Engineered for zero Interaction to Next Paint (INP) latency and 100/100 SEO indexability.
 */
(function() {
  'use strict';

  // 26 Unique URL Slug Metadata Matrix
  const routeMetadata = {
    'home': {
      title: 'Nails Making Machine | Automatic Wire Nail and Drawing Machinery Manufacturer Rajkot',
      desc: 'Leading manufacturer and global exporter of high-speed automatic wire nail making machines, continuous wire drawing plants, and binding wire machinery in Rajkot, Gujarat, India.',
      canonical: 'https://www.nailsmakingmachine.com/'
    },
    'nail-making-machine': {
      title: 'Automatic Wire Nail Making Machine Manufacturer | Nails Making Machine',
      desc: 'High-performance automatic wire nail making machines from Rajkot, India. Forging speeds up to 700 pcs/min for 0.5 to 6 inch nails.',
      canonical: 'https://www.nailsmakingmachine.com/nail-making-machine'
    },
    'wire-nail-making-machine': {
      title: 'Wire Nail Making Machine Technology and Complete Plants',
      desc: 'Explore complete wire nail production plants including wire drawing, forging machines, and deburring polishing barrels.',
      canonical: 'https://www.nailsmakingmachine.com/wire-nail-making-machine'
    },
    'nail-making-machine-price': {
      title: 'Automatic Nail Making Machine Price and Factory Quotations',
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
      title: 'Nail Making Machine Near Me | Fast Delivery and Local Support',
      desc: 'Find local supply, immediate tooling dispatch, and expert technician assistance for wire nail making machinery.',
      canonical: 'https://www.nailsmakingmachine.com/nail-making-machine-nearme'
    },
    'about': {
      title: 'About Our Industrial Enterprise | Nails Making Machine Rajkot',
      desc: 'Learn about Nails Making Machine, an MSME-certified machinery manufacturer in Rajkot, Gujarat with over 30+ export countries.',
      canonical: 'https://www.nailsmakingmachine.com/about'
    },
    'aboutus': {
      title: 'About Our Industrial Enterprise | Nails Making Machine Rajkot',
      desc: 'Learn about Nails Making Machine, an MSME-certified machinery manufacturer in Rajkot, Gujarat.',
      canonical: 'https://www.nailsmakingmachine.com/about'
    },
    'products': {
      title: 'Industrial Machinery Showroom Directory | Nails Making Machine',
      desc: 'Complete machinery catalog: high-speed wire nail machines, wire drawing lines, and vibratory polishing drums.',
      canonical: 'https://www.nailsmakingmachine.com/products-hub'
    },
    'products-hub': {
      title: 'Industrial Machinery Showroom Directory | Nails Making Machine',
      desc: 'Complete machinery catalog: high-speed wire nail machines, wire drawing lines, and vibratory polishing drums.',
      canonical: 'https://www.nailsmakingmachine.com/products-hub'
    },
    'spare-parts': {
      title: 'Genuine Tooling Spares and Replacement Dies | Nails Making Machine',
      desc: 'Tungsten carbide gripper dies, heading punches, and tempered cutting blades sourced directly from factory.',
      canonical: 'https://www.nailsmakingmachine.com/spare-parts'
    },
    'export': {
      title: 'International Export Logistics and Seaworthy Packaging',
      desc: 'Worldwide container ocean shipping and seaworthy packaging standards for industrial plants globally.',
      canonical: 'https://www.nailsmakingmachine.com/export'
    },
    'gallery': {
      title: 'Industrial Video Showcase and Media Gallery | Live Demos',
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
      title: 'IN1+ Automatic Wire Nail Making Machine | Specs and Price',
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

  function normalizeViewId(viewId) {
    if (!viewId || viewId === 'home' || viewId === 'index.html') return 'home';
    if (viewId === 'aboutus') return 'about';
    if (viewId === 'products') return 'products-hub';
    return viewId;
  }

  function updateMetadata(viewId) {
    const meta = routeMetadata[viewId] || routeMetadata['home'];
    document.title = meta.title;

    const descEl = document.getElementById('meta-description');
    if (descEl) descEl.setAttribute('content', meta.desc);

    const canEl = document.getElementById('meta-canonical');
    if (canEl) canEl.setAttribute('href', meta.canonical);

    const ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.getElementById('og-description');
    if (ogDesc) ogDesc.setAttribute('content', meta.desc);

    const ogUrl = document.getElementById('og-url');
    if (ogUrl) ogUrl.setAttribute('href', meta.canonical);

    const twTitle = document.getElementById('twitter-title');
    if (twTitle) twTitle.setAttribute('content', meta.title);

    const twDesc = document.getElementById('twitter-description');
    if (twDesc) twDesc.setAttribute('content', meta.desc);
  }

  function navigateToView(viewId, pushHistory) {
    if (pushHistory === undefined) pushHistory = true;
    const normalizedId = normalizeViewId(viewId);

    const navMenu = document.getElementById('nav-menu-container');
    const hamburger = document.getElementById('hamburger-menu-toggle');
    if (navMenu) navMenu.classList.remove('mobile-expanded');
    if (hamburger) {
      hamburger.classList.remove('mobile-expanded');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    const views = document.querySelectorAll('.app-view');
    views.forEach(function(v) { v.classList.remove('active-view'); });

    const targetView = document.getElementById('view-' + normalizedId);
    if (targetView) {
      targetView.classList.add('active-view');
      const firstHeading = targetView.querySelector('h1, h2');
      if (firstHeading) {
        firstHeading.setAttribute('tabindex', '-1');
        firstHeading.focus();
      }
    }

    const cleanPath = normalizedId === 'home' ? '/' : '/' + viewId;
    if (pushHistory && window.location.pathname !== cleanPath) {
      window.history.pushState({ viewId: viewId }, '', cleanPath);
    }

    updateMetadata(viewId);

    const links = document.querySelectorAll('a[data-view]');
    links.forEach(function(link) {
      if (link.getAttribute('data-view') === normalizedId || link.getAttribute('data-view') === viewId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Intercept all internal routing clicks
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[data-view], [data-view]');
    if (link) {
      const viewId = link.getAttribute('data-view');
      if (viewId) {
        e.preventDefault();
        navigateToView(viewId, true);
      }
    }
  });

  // Native Browser History Back/Forward Navigation
  window.addEventListener('popstate', function(e) {
    if (e.state && e.state.viewId) {
      navigateToView(e.state.viewId, false);
    } else {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '') || 'home';
      navigateToView(path, false);
    }
  });

  // Mobile Navigation Drawer Toggle
  const hamburgerBtn = document.getElementById('hamburger-menu-toggle');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function() {
      const isExpanded = this.classList.toggle('mobile-expanded');
      this.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      const navMenu = document.getElementById('nav-menu-container');
      if (navMenu) navMenu.classList.toggle('mobile-expanded');
    });
  }

  // Accessible FAQ Accordion Engine
  const accordionRows = document.querySelectorAll('.faq-element-row');
  accordionRows.forEach(function(row) {
    const trigger = row.querySelector('.faq-element-trigger');
    const body = row.querySelector('.faq-element-body');
    if (trigger && body) {
      trigger.addEventListener('click', function() {
        const isCurrentlyExpanded = row.classList.contains('expanded-row');

        accordionRows.forEach(function(sibling) {
          sibling.classList.remove('expanded-row');
          const siblingTrigger = sibling.querySelector('.faq-element-trigger');
          const siblingBody = sibling.querySelector('.faq-element-body');
          if (siblingTrigger) siblingTrigger.setAttribute('aria-expanded', 'false');
          if (siblingBody) siblingBody.style.maxHeight = null;
        });

        if (!isCurrentlyExpanded) {
          row.classList.add('expanded-row');
          trigger.setAttribute('aria-expanded', 'true');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    }
  });

  // Initial Route Initialization on DOM Ready
  window.addEventListener('DOMContentLoaded', function() {
    const queryParams = new URLSearchParams(window.location.search);
    const queryView = queryParams.get('p');

    if (queryView && (document.getElementById('view-' + queryView) || routeMetadata[queryView])) {
      window.history.replaceState({ viewId: queryView }, '', '/' + queryView);
      navigateToView(queryView, false);
    } else {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '') || 'home';
      if (document.getElementById('view-' + normalizeViewId(path))) {
        navigateToView(path, false);
      } else {
        navigateToView('home', false);
      }
    }
  });
})();
