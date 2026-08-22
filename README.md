Markdown
# Nails Making Machine — High-Performance Enterprise Architecture

Production digital infrastructure and search engine optimization codebase for [https://www.nailsmakingmachine.com](https://www.nailsmakingmachine.com).

## 1. System Specifications & Technology Stack

* **Platform Architecture:** Vanilla Single Page Application (SPA) with Clean URL routing.
* **Routing Paradigm:** HTML5 History API (`pushState` / `replaceState`) + GitHub Pages `404.html` redirection engine.
* **Zero Layout Shift Standard:** Fixed media aspect ratio frames across all image boundaries (`600/400`, `300/160`, `500/330`, `1200/380`).
* **Search Engine Optimization:** Synchronized JSON-LD Schema.org `@graph` containing `ManufacturingBusiness`, `WebSite`, `ItemList` (11 models), and `FAQPage`.
* **Accessibility Level:** WCAG 2.1 Level AA compliant with full keyboard navigation and ARIA landmarks.

---

## 2. Directory Structure

.
├── .well-known/
│   └── security.txt             # RFC 9116 security disclosure policy
├── 404.html                     # GitHub Pages SPA clean route bridge
├── CNAME                        # GitHub Pages custom domain pointer
├── LICENSE.txt                  # MIT open commercial license
├── README.md                    # System architecture documentation
├── apache_configuration.apache  # Apache 2.4 VirtualHost deployment profile
├── browserconfig.xml            # Microsoft Windows Tile configuration
├── index.html                   # Core semantic DOM & view definitions
├── locations.kml                # Geo-location KML for Rajkot manufacturing plant
├── nginx.conf                   # Production Nginx reverse-proxy server block
├── robots.txt                   # Crawler directives and sitemap declaration
├── script.js                    # SPA router & dynamic metadata engine
├── site.webmanifest             # Progressive Web Application manifest
├── sitemap.xml                  # 30 Canonical route indexing matrix
└── style.css                    # Zero-CLS layout and design system
