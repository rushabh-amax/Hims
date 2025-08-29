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
  document.addEventListener("DOMContentLoaded", () => {
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
      const parentRoutes = modules.map((m) => {
        var _a2;
        return (_a2 = m.route) == null ? void 0 : _a2.replace(/^\//, "");
      });
      console.log("\u2705 Parent Module Routes:", parentRoutes);
      function getCurrentRoute() {
        const pathParts = window.location.pathname.split("/").filter(Boolean);
        if (pathParts[0] === "app") {
          return "app/" + pathParts.slice(1).join("/");
        }
        return pathParts.join("/");
      }
      function toggleSidebar(currentRoute2, parentRoutes2 = []) {
        const side = document.querySelector(".layout-side-section");
        console.log("\u{1F449} Sidebar element:", side);
        console.log("\u{1F449} Current Route:", currentRoute2);
        console.log("\u{1F449} Parent Routes:", parentRoutes2);
        if (!Array.isArray(parentRoutes2)) {
          console.warn("\u26A0\uFE0F parentRoutes is not an array, resetting to []");
          parentRoutes2 = [];
        }
        if (side) {
          if (currentRoute2 && parentRoutes2.includes(currentRoute2)) {
            side.style.display = "none";
            console.log("\u{1F6D1} Sidebar hidden for parent route:", currentRoute2);
          } else {
            side.style.display = "";
            console.log("\u2705 Sidebar visible for child route:", currentRoute2);
          }
        } else {
          console.log("\u26A0\uFE0F Sidebar element not found in DOM.");
        }
        console.log("\u2705 after if-else");
      }
      toggleSidebar(currentRoute, parentRoutes);
      window.addEventListener("popstate", toggleSidebar);
      window.addEventListener("pushstate", toggleSidebar);
      window.addEventListener("hashchange", toggleSidebar);
    }).catch((err) => {
      console.error("\u274C API fetch error:", err);
    });
  });
})();
//# sourceMappingURL=customJs.bundle.APEKWRGR.js.map
