<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NAILS MAKING MACHINE | Ultra-Premium Industrial Manufacturer & Exporter</title>
    <meta name="description" content="India's leading manufacturer of high-speed, heavy-duty industrial nail making machines. Trusted worldwide for precision engineering and luxury industrial performance.">
    <meta name="keywords" content="Nail Making Machine, High Speed Nail Machine, Wire Draw Machine, Industrial Machinery Exporter, Rajkot Industrial Manufacturer">
    
    <meta property="og:type" content="website">
    <meta property="og:title" content="NAILS MAKING MACHINE | Ultra-Premium Industrial Manufacturer">
    <meta property="og:description" content="Experience precision engineering with our high-speed, heavy-duty nail making machinery. Elite performance trusted globally.">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syncopate:wght@400;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "NAILS MAKING MACHINE",
      "image": "",
      "telephony": "+91 98984 67862",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Aji GIDC",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "postalCode": "360003",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.2746",
        "longitude": "70.8224"
      },
      "url": "https://nailsmakingmachine.com"
    }
    </script>

    <style>
        :root {
            --bg-deep: #050811;
            --bg-charcoal: #0d111a;
            --steel-blue: #1e293b;
            --metallic-silver: #e2e8f0;
            --electric-blue: #00e5ff;
            --electric-glow: rgba(0, 229, 255, 0.4);
            --glass-trans: rgba(13, 17, 26, 0.7);
            --font-sans: 'Plus Jakarta Sans', sans-serif;
            --font-display: 'Syncopate', sans-serif;
            --transition-premium: cubic-bezier(0.16, 1, 0.3, 1);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            user-select: none;
        }

        body {
            background-color: var(--bg-deep);
            color: var(--metallic-silver);
            font-family: var(--font-sans);
            overflow-x: hidden;
            scrollbar-width: thin;
            scrollbar-color: var(--electric-blue) var(--bg-deep);
        }

        body::-webkit-scrollbar {
            width: 6px;
        }
        body::-webkit-scrollbar-track {
            background: var(--bg-deep);
        }
        body::-webkit-scrollbar-thumb {
            background: var(--electric-blue);
            border-radius: 3px;
        }

        /* --- GLOBAL PREMIUM EFFECTS --- */
        .custom-cursor {
            width: 20px;
            height: 20px;
            border: 2px solid var(--electric-blue);
            border-radius: 50%;
            position: fixed;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: width 0.2s, height 0.2s;
        }

        /* --- STICKY GLASSMORPHISM HEADER --- */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 25px 5%;
            background: var(--glass-trans);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
        }

        .logo {
            font-family: var(--font-display);
            font-weight: 700;
            font-size: 1.4rem;
            letter-spacing: 4px;
            color: #fff;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo span {
            color: var(--electric-blue);
            text-shadow: 0 0 10px var(--electric-glow);
        }

        nav {
            display: flex;
            gap: 40px;
        }

        nav a {
            font-family: var(--font-sans);
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            transition: all 0.4s var(--transition-premium);
            position: relative;
        }

        nav a:hover, nav a.active {
            color: var(--electric-blue);
        }

        nav a::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--electric-blue);
            transition: width 0.4s var(--transition-premium);
        }

        nav a:hover::after, nav a.active::after {
            width: 100%;
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        /* --- LUXURY BUTTONS --- */
        .btn-premium {
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 14px 28px;
            font-family: var(--font-sans);
            font-size: 0.85rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #fff;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: all 0.4s var(--transition-premium);
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }

        .btn-premium::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: left 0.6s var(--transition-premium);
        }

        .btn-premium:hover::before {
            left: 100%;
        }

        .btn-premium:hover {
            border-color: var(--electric-blue);
            box-shadow: 0 0 15px var(--electric-glow);
            color: var(--electric-blue);
        }

        .btn-glow {
            background: linear-gradient(135deg, #0052d4, #4364f7, #6fb1fc);
            border: none;
            box-shadow: 0 4px 20px rgba(67, 100, 247, 0.4);
        }
        .btn-glow:hover {
            box-shadow: 0 4px 30px var(--electric-glow);
            color: #fff;
            transform: translateY(-2px);
        }

        /* --- HERO SECTION WITH 3D CANVAS --- */
        .hero-container {
            position: relative;
            width: 100%;
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 0 5%;
            z-index: 1;
            overflow: hidden;
        }

        #webgl-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        .hero-content {
            max-width: 650px;
            z-index: 2;
            margin-top: 60px;
        }

        .hero-tagline {
            font-family: var(--font-sans);
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 6px;
            color: var(--electric-blue);
            margin-bottom: 20px;
            font-weight: 700;
        }

        .hero-title {
            font-family: var(--font-display);
            font-size: 3.2rem;
            line-height: 1.1;
            font-weight: 700;
            color: #fff;
            margin-bottom: 25px;
            text-transform: uppercase;
            letter-spacing: -1px;
        }

        .hero-subtitle {
            font-size: 1.1rem;
            line-height: 1.6;
            color: rgba(255,255,255,0.6);
            margin-bottom: 40px;
            font-weight: 300;
        }

        .hero-btns {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        /* --- STATS ACCENTS --- */
        .stats-strip {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: rgba(5, 8, 17, 0.85);
            border-top: 1px solid rgba(255,255,255,0.05);
            padding: 30px 5%;
            display: grid;
            grid-template-columns: repeat(4, 1br);
            display: flex;
            justify-content: space-between;
            backdrop-filter: blur(10px);
            z-index: 3;
        }

        .stat-box {
            text-align: center;
        }

        .stat-num {
            font-family: var(--font-display);
            font-size: 2.2rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 5px;
        }

        .stat-num span {
            color: var(--electric-blue);
        }

        .stat-lbl {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: rgba(255,255,255,0.4);
        }

        /* --- PRODUCTS PAGE SECTION --- */
        .section-layout {
            padding: 120px 5%;
            position: relative;
            background-color: var(--bg-charcoal);
            border-bottom: 1px solid rgba(255,255,255,0.03);
        }

        .sec-header {
            text-align: center;
            margin-bottom: 80px;
        }

        .sec-title {
            font-family: var(--font-display);
            font-size: 2.5rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #fff;
            margin-bottom: 15px;
        }

        .sec-line {
            width: 60px;
            height: 3px;
            background: var(--electric-blue);
            margin: 0 auto;
            box-shadow: 0 0 10px var(--electric-glow);
        }

        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 40px;
        }

        /* --- LUXURY PRODUCT CARDS --- */
        .product-card {
            background: linear-gradient(145deg, #111622, #070a12);
            border: 1px solid rgba(255,255,255,0.05);
            padding: 35px;
            border-radius: 4px;
            position: relative;
            transition: all 0.5s var(--transition-premium);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .product-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at top right, rgba(0,229,255,0.08), transparent 70%);
            opacity: 0;
            transition: opacity 0.5s var(--transition-premium);
        }

        .product-card:hover {
            transform: translateY(-10px);
            border-color: rgba(0, 229, 255, 0.3);
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .product-card:hover::before {
            opacity: 1;
        }

        .badge-premium {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(0, 229, 255, 0.1);
            border: 1px solid var(--electric-blue);
            color: var(--electric-blue);
            font-size: 0.65rem;
            font-weight: 700;
            padding: 4px 10px;
            letter-spacing: 1px;
            text-transform: uppercase;
            border-radius: 2px;
        }

        .prod-title {
            font-family: var(--font-display);
            font-size: 1.4rem;
            color: #fff;
            margin-bottom: 25px;
            text-transform: uppercase;
        }

        .spec-table {
            width: 100%;
            margin-bottom: 30px;
            border-collapse: collapse;
        }

        .spec-table tr {
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .spec-table tr:last-child {
            border-bottom: none;
        }

        .spec-table td {
            padding: 10px 0;
            font-size: 0.85rem;
        }

        .spec-lbl {
            color: rgba(255,255,255,0.4);
        }

        .spec-val {
            text-align: right;
            font-weight: 600;
            color: var(--metallic-silver);
        }

        .price-tag {
            font-family: var(--font-display);
            font-size: 1.5rem;
            color: var(--electric-blue);
            margin-bottom: 25px;
            font-weight: 700;
        }

        .prod-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }

        /* --- FLOATING ACCENTS --- */
        .floating-whatsapp {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: #25d366;
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            z-index: 999;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        .floating-whatsapp:hover {
            transform: scale(1.1);
        }

        /* --- CONTACT LAYOUT --- */
        .contact-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
        }

        .contact-info-card {
            background: #0d111a;
            padding: 40px;
            border: 1px solid rgba(255,255,255,0.05);
        }

        .info-row {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
        }

        .info-icon {
            width: 50px;
            height: 50px;
            background: rgba(0,229,255,0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--electric-blue);
            font-size: 1.2rem;
        }

        .premium-form .form-group {
            margin-bottom: 25px;
        }

        .premium-form input, .premium-form textarea {
            width: 100%;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 15px;
            color: #fff;
            font-family: var(--font-sans);
            outline: none;
            transition: border-color 0.3s;
        }

        .premium-form input:focus, .premium-form textarea:focus {
            border-color: var(--electric-blue);
        }

        /* --- RESPONSIVE OPTIMIZATION --- */
        @media (max-width: 968px) {
            nav { display: none; }
            .contact-wrapper { grid-template-columns: 1fr; }
            .hero-title { font-size: 2.4rem; }
            .stats-strip { flex-wrap: wrap; gap: 20px; justify-content: center; }
        }
    </style>
</head>
<body>

    <div class="custom-cursor" id="cursor"></div>

    <header>
        <a href="#" class="logo">NAILS<span>MAKING</span></a>
        <nav id="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About Us</a>
            <a href="#videos">Exhibitions</a>
            <a href="#contact">Contact</a>
        </nav>
        <div class="header-actions">
            <a href="tel:+919898467862" class="btn-premium"><i class="fa-solid fa-phone" style="margin-right: 8px;"></i> Call Experts</a>
        </div>
    </header>

    <section id="home" class="hero-container">
        <canvas id="webgl-canvas"></canvas>
        <div class="hero-content">
            <div class="hero-tagline">Elite Machinery Architecture</div>
            <h1 class="hero-title">Premium Industrial Nail Making Systems</h1>
            <p class="hero-subtitle">Engineering ultra-precise, heavy-duty machinery for high-output manufacturing setups globally. Experience production speeds reaching 700 pieces per minute with unmatched reliability.</p>
            <div class="hero-btns">
                <a href="#products" class="btn-premium btn-glow">Explore Products</a>
                <a href="#contact" class="btn-premium">Instant Quote</a>
            </div>
        </div>

        <div class="stats-strip">
            <div class="stat-box">
                <div class="stat-num" data-val="25">0</div>
                <div class="stat-lbl">Years Industry Layout</div>
            </div>
            <div class="stat-box">
                <div class="stat-num" data-val="1500">0</div>
                <div class="stat-lbl">Global Operational Units</div>
            </div>
            <div class="stat-box">
                <div class="stat-num" data-val="45">0</div>
                <div class="stat-lbl">Exporting Destination Hubs</div>
            </div>
            <div class="stat-box">
                <div class="stat-num" data-val="100">0</div>
                <div class="stat-lbl">Precision Check Metric</div>
            </div>
        </div>
    </section>

    <section id="products" class="section-layout">
        <div class="sec-header">
            <h2 class="sec-title">Flagship Implementations</h2>
            <div class="sec-line"></div>
        </div>

        <div class="grid-container">
            <div class="product-card">
                <div>
                    <h3 class="prod-title">IN1+ Machine</h3>
                    <table class="spec-table">
                        <tr><td class="spec-lbl">Length Span</td><td class="spec-val">0.5 to 2 Inch</td></tr>
                        <tr><td class="spec-lbl">Thickness Scope</td><td class="spec-val">0.9 to 2.0 mm</td></tr>
                        <tr><td class="spec-lbl">Output Speed</td><td class="spec-val">600 Pcs/Min</td></tr>
                        <tr><td class="spec-lbl">Power Metrics</td><td class="spec-val">1.5 HP Motor</td></tr>
                    </table>
                </div>
                <div>
                    <div class="price-tag">₹2,60,000</div>
                    <div class="prod-actions">
                        <a href="#contact" class="btn-premium" style="padding:10px;">Enquire</a>
                        <a href="https://wa.me/919898467862" target="_blank" class="btn-premium" style="padding:10px; border-color:#25d366; color:#25d366;"><i class="fa-brands fa-whatsapp"></i> Chat</a>
                    </div>
                </div>
            </div>

            <div class="product-card">
                <div>
                    <h3 class="prod-title">IN3 Production Unit</h3>
                    <table class="spec-table">
                        <tr><td class="spec-lbl">Length Span</td><td class="spec-val">1 to 4 Inch</td></tr>
                        <tr><td class="spec-lbl">Thickness Scope</td><td class="spec-val">2.0 to 4.0 mm</td></tr>
                        <tr><td class="spec-lbl">Output Speed</td><td class="spec-val">350 Pcs/Min</td></tr>
                        <tr><td class="spec-lbl">Shift Production</td><td class="spec-val">600 KG / 8 Hrs</td></tr>
                    </table>
                </div>
                <div>
                    <div class="price-tag">₹4,20,000</div>
                    <div class="prod-actions">
                        <a href="#contact" class="btn-premium" style="padding:10px;">Enquire</a>
                        <a href="https://wa.me/919898467862" target="_blank" class="btn-premium" style="padding:10px; border-color:#25d366; color:#25d366;"><i class="fa-brands fa-whatsapp"></i> Chat</a>
                    </div>
                </div>
            </div>

            <div class="product-card" style="border-color: rgba(0, 229, 255, 0.4);">
                <span class="badge-premium">BEST SELLER</span>
                <div>
                    <h3 class="prod-title">IHS90 High Speed</h3>
                    <table class="spec-table">
                        <tr><td class="spec-lbl">Length Span</td><td class="spec-val">0.5 to 3.5 Inch</td></tr>
                        <tr><td class="spec-lbl">Thickness Scope</td><td class="spec-val">2.5 to 2.8 mm</td></tr>
                        <tr><td class="spec-lbl">Output Speed</td><td class="spec-val">700 Pcs/Min</td></tr>
                        <tr><td class="spec-lbl">Shift Production</td><td class="spec-val">1000 KG / 8 Hrs</td></tr>
                    </table>
                </div>
                <div>
                    <div class="price-tag">₹20,00,000</div>
                    <div class="prod-actions">
                        <a href="#contact" class="btn-premium btn-glow" style="padding:10px;">Enquire</a>
                        <a href="https://wa.me/919898467862" target="_blank" class="btn-premium" style="padding:10px; border-color:#25d366; color:#25d366;"><i class="fa-brands fa-whatsapp"></i> Chat</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="section-layout">
        <div class="sec-header">
            <h2 class="sec-title">Global Procurement Division</h2>
            <div class="sec-line"></div>
        </div>

        <div class="contact-wrapper">
            <div class="contact-info-card">
                <h3 style="font-family:var(--font-display); margin-bottom:30px;">HEADQUARTERS</h3>
                <div class="info-row">
                    <div class="info-icon"><i class="fa-solid fa-location-dot"></i></div>
                    <div>
                        <p style="font-weight:600;">Aji GIDC, Rajkot</p>
                        <p style="color:rgba(255,255,255,0.5);">Gujarat - 360003, India</p>
                    </div>
                </div>
                <div class="info-row">
                    <div class="info-icon"><i class="fa-solid fa-phone"></i></div>
                    <div>
                        <p style="font-weight:600;">Direct Procurement Support</p>
                        <p style="color:var(--electric-blue);">+91 98984 67862</p>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3692.0003294372993!2d70.8224!3d22.2746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca266ffffff9%3A0x123456789abcdef!2sAji%20GIDC%2C%20Rajkot%2C%20Gujarat%20360003!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" width="100%" height="220" style="border:0; filter: grayscale(1) invert(1) contrast(1.2); margin-top:20px;" allowfullscreen="" loading="lazy"></iframe>
            </div>

            <form class="rfq-architectural-form" action="process-rfq.php" method="POST" id="lead-capture-form">
                <div class="form-group"><input type="text" placeholder="YOUR NAME" required></div>
                <div class="form-group"><input type="email" placeholder="EMAIL ADDRESS" required></div>
                <div class="form-group"><input type="text" placeholder="ORGANIZATION / COUNTRY" required></div>
                <div class="form-group"><textarea rows="5" placeholder="SPECIFIC MACHINERY REQUIREMENT DETAILED ANALYSIS" required></textarea></div>
                <button type="submit" class="btn-premium btn-glow" style="width:100%;">Transmit RFQ System</button>
            </form>
        </div>
    </section>

    <a href="https://wa.me/919898467862" class="floating-whatsapp" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>

    <script>
        // PREMIUM CUSTOM CURSOR INTERACTION
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // THREE.JS INDUSTRIAL LUXURY 3D METALLIC CANVAS SCENE
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('webgl-canvas'), antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Geometric Procedural Heavy Machinery Simulation Representation
        const group = new THREE.Group();
        
        // Central Core Gear Segment
        const coreGeo = new THREE.CylinderGeometry(2, 2, 0.8, 32);
        const metalMaterial = new THREE.MeshStandardMaterial({
            color: 0x1e293b,
            metalness: 0.9,
            roughness: 0.1,
            wireframe: false
        });
        const coreMesh = new THREE.Mesh(coreGeo, metalMaterial);
        coreMesh.rotation.x = Math.PI / 2;
        group.add(coreMesh);

        // Secondary Extrusion Rings
        const outerRingGeo = new THREE.TorusGeometry(3.5, 0.15, 16, 100);
        const blueGlowMaterial = new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true });
        const ringMesh = new THREE.Mesh(outerRingGeo, blueGlowMaterial);
        group.add(ringMesh);

        // Metallic Shaft Components mimicking industrial flywheels
        const shaftGeo = new THREE.CylinderGeometry(0.3, 0.3, 6, 16);
        const shaft = new THREE.Mesh(shaftGeo, metalMaterial);
        shaft.rotation.z = Math.PI / 4;
        group.add(shaft);

        scene.add(group);

        // Industrial High-Velocity Sparks Emulating Nail Cutting Precision Injection
        const particleCount = 250;
        const particleGeo = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for(let i=0; i<particleCount*3; i+=3) {
            positions[i] = (Math.random() - 0.5) * 10;
            positions[i+1] = (Math.random() - 0.5) * 10;
            positions[i+2] = (Math.random() - 0.5) * 10;
        }

        particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particleMat = new THREE.PointsMaterial({
            color: 0x00e5ff,
            size: 0.04,
            transparent: true,
            opacity: 0.7
        });
        const sparkParticles = new THREE.Points(particleGeo, particleMat);
        scene.add(sparkParticles);

        // Advanced Dynamic Studio Lighting Configuration
        const dirLight = new THREE.DirectionalLight(0xffffff, 2);
        dirLight.position.set(5, 10, 7);
        scene.add(dirLight);

        const blueLight = new THREE.PointLight(0x00e5ff, 3, 15);
        blueLight.position.set(-4, 3, 2);
        scene.add(blueLight);

        const ambientLight = new THREE.AmbientLight(0x0d111a, 1.5);
        scene.add(ambientLight);

        camera.position.z = 8;

        // Mouse Motion Interactivity Vectors
        let mouseX = 0, mouseY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) * 0.0005;
            mouseY = (e.clientY - window.innerHeight / 2) * 0.0005;
        });

        // 90+ FPS Animation Performance Pipeline
        function animate() {
            requestAnimationFrame(animate);

            // Rotate core machinery elements smoothly
            group.rotation.y += 0.005;
            group.rotation.x += 0.002;

            // Animate dynamic spark positions simulating operational friction
            sparkParticles.rotation.y += 0.001;
            
            // Mouse tracking dampening effect
            group.rotation.y += (mouseX - group.rotation.y) * 0.1;
            group.rotation.x += (mouseY - group.rotation.x) * 0.1;

            renderer.render(scene, camera);
        }
        animate();

        // Responsive Resizing Adaptation Engine
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // GSAP ARCHITECTURAL SCROLLTRIGGER METRIC COUNTERS
        const statNums = document.querySelectorAll('.stat-num');
        statNums.forEach(num => {
            const endValue = parseInt(num.getAttribute('data-val'));
            gsap.to(num, {
                scrollTrigger: {
                    trigger: num,
                    start: "top 90%"
                },
                innerText: endValue,
                duration: 2.5,
                snap: { innerText: 1 },
                onUpdate: function() {
                    num.innerHTML = Math.ceil(this.targets()[0].innerText) + "<span>+</span>";
                }
            });
        });
    </script>
</body>
</html>
