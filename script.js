/**
 * =======================================================================
 * PREMIUM VIRTUAL MULTI-PAGE REDIRECTION CONTROLLER ENGINE
 * =======================================================================
 */
(function () {
  'use strict';

  document.addEventListener("DOMContentLoaded", function () {
    
    // 1. CHRONOLOGY SYNCHRONIZATION
    const yearNode = document.getElementById("year");
    if (yearNode) {
      yearNode.textContent = new Date().getFullYear();
    }

    // 2. SECTIONS VIEWPORT TRACKING MATRIX & URL STRATEGY
    const structuralSections = document.querySelectorAll("section");
    const navigationLinks = document.querySelectorAll("nav a");

    const configurationOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Strict center focus box trigger
      threshold: 0
    };

    const viewportObserver = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger crisp fade-in appearance animation
          entry.target.classList.add("section-visible");
          
          const targetIdentifier = entry.target.getAttribute("id");
          const virtualRoutePath = targetIdentifier === "home" ? "/" : "/" + targetIdentifier;

          // Dynamically change browser address bar without structural reloads
          if (window.location.pathname !== virtualRoutePath) {
            window.history.pushState({ section: targetIdentifier }, "", virtualRoutePath);
          }

          // Active state styling class updates across link arrays
          navigationLinks.forEach(link => {
            if (link.getAttribute("href") === "#" + targetIdentifier) {
              link.classList.add("text-[#38BDF8]");
              link.classList.remove("text-white");
            } else {
              link.classList.remove("text-[#38BDF8]");
              link.classList.add("text-white");
            }
          });
        }
      });
    }, configurationOptions);

    structuralSections.forEach(section => {
      viewportObserver.observe(section);
    });

    // 3. INTERNAL ROUTING REDIRECTIONS CONTROLLER CLICK EVENT
    navigationLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        
        const destinationHash = this.getAttribute("href");
        const targetedDOMNode = document.querySelector(destinationHash);

        if (targetedDOMNode) {
          // Calculate navbar fixed dimension offset dynamically
          const navbarHeightOffset = document.getElementById("navbar")?.offsetHeight || 80;
          const destinationElementPosition = targetedDOMNode.getBoundingClientRect().top + window.scrollY;
          const adjustedScrollPosition = destinationElementPosition - navbarHeightOffset;

          window.scrollTo({
            top: adjustedScrollPosition,
            behavior: "smooth"
          });

          // Instantly broadcast structural path update to history timeline
          const targetPathName = destinationHash === "#home" ? "/" : "/" + destinationHash.substring(1);
          window.history.pushState({ section: destinationHash.substring(1) }, "", targetPathName);
        }
      });
    });

    // 4. BROWSER BACK/FORWARD CLICK DETECTOR CONTROL
    window.addEventListener("popstate", function (event) {
      const recordedSection = event.state?.section || "home";
      const targetedNode = document.getElementById(recordedSection);
      if (targetedNode) {
        const navbarHeightOffset = document.getElementById("navbar")?.offsetHeight || 80;
        const targetTopPosition = targetedNode.getBoundingClientRect().top + window.scrollY - navbarHeightOffset;
        window.scrollTo({
          top: targetTopPosition,
          behavior: "smooth"
        });
      }
    });

    // 5. SECURE INQUIRY FORM INTERCEPT PATHWAY
    const inquiryFormEngine = document.getElementById("inquiryForm");
    if (inquiryFormEngine) {
      inquiryFormEngine.addEventListener("submit", function () {
        const submissionButton = this.querySelector("button[type='submit']");
        if (submissionButton) {
          submissionButton.disabled = true;
          submissionButton.innerHTML = 'Processing Request Matrix... <i class="fas fa-spinner animate-spin ml-2"></i>';
        }
      });
    }

  });
})();
