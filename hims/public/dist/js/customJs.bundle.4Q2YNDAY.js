(() => {
  // ../hims/hims/public/js/customJs.bundle.js
  document.addEventListener("DOMContentLoaded", function() {
    function initSlidingTabs(ul) {
      if (!ul || ul.dataset.slidingTabsInitialized)
        return;
      ul.dataset.slidingTabsInitialized = "1";
      ul.style.position = ul.style.position || "relative";
      const bar = document.createElement("div");
      bar.className = "sliding-tab-bar";
      Object.assign(bar.style, {
        position: "absolute",
        bottom: "0",
        height: "4px",
        background: "var(--_primary-bg-color)",
        borderRadius: "1em 1em 0em 0em",
        transition: "transform 200ms ease, width 200ms ease",
        left: "0",
        width: "0",
        zIndex: "1",
        pointerEvents: "none"
      });
      ul.appendChild(bar);
      const update = () => {
        const active = ul.querySelector(".nav-link.active") || ul.querySelector(".nav-link");
        if (!active)
          return;
        const linkRect = active.getBoundingClientRect();
        const ulRect = ul.getBoundingClientRect();
        const left = linkRect.left - ulRect.left + ul.scrollLeft;
        bar.style.width = linkRect.width + "px";
        bar.style.transform = `translateX(${left}px)`;
      };
      ul.addEventListener("click", (e) => {
        const link = e.target.closest(".nav-link");
        if (link && ul.contains(link)) {
          setTimeout(update, 150);
        }
      });
      window.addEventListener("resize", update);
      const mo = new MutationObserver(() => update());
      mo.observe(ul, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });
      setTimeout(update, 0);
    }
    function scanAndInit() {
      document.querySelectorAll("ul.form-tabs, ul.nav-tabs, #form-tabs").forEach(initSlidingTabs);
    }
    scanAndInit();
    const bodyObserver = new MutationObserver(() => scanAndInit());
    bodyObserver.observe(document.body, { childList: true, subtree: true });
    document.addEventListener("click", (e) => {
      if (e.target.closest('a[data-toggle="tab"], a[data-bs-toggle="tab"]')) {
        setTimeout(scanAndInit, 200);
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    function initSlidingTabs(ul) {
      if (!ul || ul.dataset.slidingTabsInitialized)
        return;
      ul.dataset.slidingTabsInitialized = "1";
      ul.style.position = ul.style.position || "relative";
      const bar = document.createElement("div");
      bar.className = "sliding-tab-bar";
      Object.assign(bar.style, {
        position: "absolute",
        bottom: "0",
        height: "4px",
        background: "var(--_primary-bg-color)",
        borderRadius: "1em 1em 0em 0em",
        transition: "transform 200ms ease, width 200ms ease",
        left: "0",
        width: "0",
        zIndex: "1",
        pointerEvents: "none"
      });
      ul.appendChild(bar);
      const update = () => {
        const active = ul.querySelector(".nav-link.active") || ul.querySelector(".nav-link");
        if (!active)
          return;
        const linkRect = active.getBoundingClientRect();
        const ulRect = ul.getBoundingClientRect();
        const left = linkRect.left - ulRect.left + ul.scrollLeft;
        bar.style.width = linkRect.width + "px";
        bar.style.transform = `translateX(${left}px)`;
      };
      ul.addEventListener("click", (e) => {
        const link = e.target.closest(".nav-link");
        if (link && ul.contains(link)) {
          setTimeout(update, 150);
        }
      });
      window.addEventListener("resize", update);
      const mo = new MutationObserver(() => update());
      mo.observe(ul, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });
      setTimeout(update, 0);
    }
    function scanAndInit() {
      document.querySelectorAll("ul.form-tabs, ul.nav-tabs, #form-tabs").forEach(initSlidingTabs);
    }
    scanAndInit();
    const bodyObserver = new MutationObserver(() => scanAndInit());
    bodyObserver.observe(document.body, { childList: true, subtree: true });
    document.addEventListener("click", (e) => {
      if (e.target.closest('a[data-toggle="tab"], a[data-bs-toggle="tab"]')) {
        setTimeout(scanAndInit, 200);
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    console.log("\u2705 Pure JS script started");
    const module_API_ROUTE = "/api/method/hims.api.login_api.login_with_permissions";
    fetch(module_API_ROUTE, {
      method: "GET",
      credentials: "include"
    }).then((res) => res.json()).then((res) => {
      var _a;
      const modules = ((_a = res.message) == null ? void 0 : _a.modules) || [];
      if (!Array.isArray(modules) || modules.length === 0) {
        console.log("\u26A0\uFE0F No modules data from API");
        return;
      }
      const parentRoutes = modules.map(
        (m) => {
          var _a2;
          return (_a2 = m.route) == null ? void 0 : _a2.replace(/^\//, "");
        }
      );
      console.log("\u2705 Parent Module Routes:", parentRoutes);
      function getCurrentRoute() {
        const pathParts = window.location.pathname.split("/").filter(Boolean);
        if (pathParts[0] === "app") {
          return "app/" + pathParts.slice(1).join("/");
        }
        return pathParts.join("/") || "/";
      }
      function toggleSidebar() {
        const currentRoute = getCurrentRoute();
        const side = document.querySelector(".layout-side-section");
        console.log("\u{1F449} Current Route:", currentRoute);
        console.log("\u{1F449} Parent Routes:", parentRoutes);
        console.log("\u{1F449} Sidebar element:", side);
        if (!Array.isArray(parentRoutes)) {
          console.warn("\u26A0\uFE0F parentRoutes is invalid");
          return;
        }
        if (side) {
          if (currentRoute && parentRoutes.includes(currentRoute)) {
            side.style.display = "none";
            console.log("\u{1F6D1} Sidebar hidden for parent route:", currentRoute);
          } else {
            side.style.display = "";
            console.log("\u2705 Sidebar visible for:", currentRoute);
          }
        } else {
          console.warn("\u26A0\uFE0F Sidebar element not found");
        }
      }
      toggleSidebar();
      window.addEventListener("popstate", toggleSidebar);
      const originalPushState = history.pushState;
      history.pushState = function(...args) {
        originalPushState.apply(this, args);
        window.dispatchEvent(new Event("pushstate"));
      };
      window.addEventListener("pushstate", toggleSidebar);
      window.addEventListener("hashchange", toggleSidebar);
    }).catch((err) => {
      console.error("\u274C API fetch error:", err);
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".layout-side-section");
    const shouldShowBackButton = !sidebar || getComputedStyle(sidebar).display === "none";
    if (!shouldShowBackButton) {
      return;
    }
    const targetNav = document.querySelector("nav.navbar-nav.d-none.d-sm-flex");
    if (!targetNav) {
      console.warn("\u26A0\uFE0F Could not find target navbar (.navbar-nav.d-none.d-sm-flex)");
      return;
    }
    const backButtonLi = document.createElement("li");
    backButtonLi.className = "nav-item";
    const backButton = document.createElement("a");
    backButton.className = "nav-link pointer";
    backButton.style = "cursor: pointer; font-weight: 500; padding: 0.5rem 1rem;";
    backButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" style="vertical-align: middle; margin-right: 0.3rem;">
            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l4.147 4.146a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
        </svg>
        Back
    `;
    backButton.addEventListener("click", function(e) {
      e.preventDefault();
      const referrer = document.referrer;
      const fallbackUrl = "/app/modules";
      if (referrer && referrer.includes(window.location.origin) && !referrer.includes("login")) {
        window.location.href = referrer;
      } else {
        window.location.href = fallbackUrl;
      }
    });
    backButtonLi.appendChild(backButton);
    targetNav.prepend(backButtonLi);
    console.log("\u2705 Back button injected into navbar");
  });
})();
//# sourceMappingURL=customJs.bundle.4Q2YNDAY.js.map
