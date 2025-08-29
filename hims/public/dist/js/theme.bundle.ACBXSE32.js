(() => {
  // ../hims/hims/public/js/theme_switcher.js
  frappe.provide("frappe.ui");
  frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    fetch_themes() {
      return new Promise((resolve) => {
        this.themes = [
          {
            name: "light",
            label: "Frappe Light",
            info: "Light Theme"
          },
          {
            name: "dark",
            label: "Timeless Night",
            info: "Dark Theme"
          },
          {
            name: "automatic",
            label: "Automatic",
            info: "Uses system's theme to switch between light and dark mode"
          },
          {
            name: "hims",
            label: "hims",
            info: "hims Theme"
          }
        ];
        resolve(this.themes);
      });
    }
  };

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

  // ../hims/hims/public/js/login.bundle.js
  var eyeSVG = `
<svg class="icon-eye" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="gray" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="gray" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  var eyeSlashSVG = `
<svg class="icon-eye-slash" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" stroke="gray" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  function addCustomPasswordToggle(input) {
    if (input.parentNode.querySelector(".custom-toggle-password"))
      return;
    const wrapper = input.parentNode;
    const button = document.createElement("span");
    button.classList.add("custom-toggle-password");
    button.style.cursor = "pointer";
    button.style.marginLeft = "8px";
    button.innerHTML = eyeSlashSVG;
    wrapper.appendChild(button);
    button.addEventListener("click", () => {
      if (input.type === "password") {
        input.type = "text";
        button.innerHTML = eyeSVG;
      } else {
        input.type = "password";
        button.innerHTML = eyeSlashSVG;
      }
    });
  }
  document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement("style");
    style.innerHTML = `
    .toggle-password { display: none !important; }
    .custom-toggle-password svg {
      vertical-align: middle;
    }
  `;
    document.head.appendChild(style);
    document.querySelectorAll('input[type="password"]').forEach(addCustomPasswordToggle);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          var _a;
          if (node.nodeType === 1) {
            if (node.matches('input[type="password"]')) {
              addCustomPasswordToggle(node);
            } else {
              const inputs = ((_a = node.querySelectorAll) == null ? void 0 : _a.call(node, 'input[type="password"]')) || [];
              inputs.forEach(addCustomPasswordToggle);
            }
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
//# sourceMappingURL=theme.bundle.ACBXSE32.js.map
