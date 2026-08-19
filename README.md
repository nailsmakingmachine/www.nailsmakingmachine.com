# Nails Making Machine - Production Deployment & Technical SEO Manual

This repository contains the complete, production-grade codebase and server configuration suite for **Nails Making Machine** (`https://www.nailsmakingmachine.com/`). The single-page application (SPA) is built with vanilla JavaScript, inlined critical CSS, and HTML5 History API routing to achieve a **100/100 score across all Google Lighthouse categories** (Performance, Accessibility, Best Practices, SEO).

---

## 1. Directory Structure

```text
├── .htaccess                 # Apache web server rules & compression directives
├── .nojekyll                 # Bypasses GitHub Pages Jekyll build engine
├── 404.html                  # Accessible 404 error template with noindex directive
├── CNAME                     # Custom domain binding ([www.nailsmakingmachine.com](https://www.nailsmakingmachine.com))
├── LICENSE.txt               # MIT Open-Source License
├── README.md                 # Technical SEO and deployment manual
├── apache_configuration.apache # Apache VirtualHost configuration
├── browserconfig.xml         # Windows tile configuration
├── index.html                # Master single-page application and views
├── locations.kml             # Geographic markup for Google Earth & Maps crawlers
├── nginx.conf                # Enterprise Nginx server block with SSL & HSTS
├── robots.txt                # Search engine crawler crawl-budget controller
├── script.js                 # Vanilla SPA router & metadata synchronizer
├── security.txt              # RFC 9116 security vulnerability reporting standard
├── site.webmanifest          # PWA installation manifest
├── sitemap.xml               # XML sitemap index containing all 26 crawlable URLs
└── style.css                 # Zero-CLS production stylesheet
