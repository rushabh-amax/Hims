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
  function initSidebarToggleButton() {
    const currentPath = window.location.pathname;
    const appRootRouteRegex = /^\/app\/[^/]+$/;
    if (!appRootRouteRegex.test(currentPath)) {
      return;
    }
    const sidebar = document.querySelector(".layout-side-section");
    const pageHead = document.querySelector(".page-head-content");
    if (!sidebar || !pageHead) {
      setTimeout(initSidebarToggleButton, 200);
      return;
    }
    if (pageHead.querySelector(".custom-sidebar-toggle"))
      return;
    const toggleButton = document.createElement("button");
    toggleButton.innerHTML = "\u2630";
    toggleButton.className = "custom-sidebar-toggle";
    toggleButton.title = "Toggle Sidebar";
    pageHead.prepend(toggleButton);
    let isExpanded = true;
    toggleButton.addEventListener("click", function() {
      isExpanded = !isExpanded;
      if (isExpanded) {
        expandSidebar(sidebar);
      } else {
        collapseSidebar(sidebar);
      }
    });
  }
  frappe.after_ajax(() => {
    initSidebarToggleButton();
  });
  function collapseSidebar(sidebar) {
    sidebar.classList.add("w-60px", "px-2");
    sidebar.classList.remove("col-lg-2", "col-md-3");
    document.querySelectorAll(".standard-sidebar-item .sidebar-item-label").forEach((el) => {
      el.classList.add("d-none");
    });
    document.querySelectorAll(".sidebar-item-icon .icon").forEach((el) => {
      el.style.transform = "scale(1.15)";
      el.classList.remove("icon-md");
      el.classList.add("icon-lg");
      el.style.transition = "transform 0.2s ease";
    });
    document.querySelectorAll('[data-page-route="Workspaces"] .standard-sidebar-item .item-anchor').forEach((el) => {
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
    });
    document.querySelectorAll(".standard-sidebar-item").forEach((el) => {
      el.classList.add("justify-content-center");
      el.classList.remove("justify-content-start");
    });
    console.log("Sidebar collapsed");
  }
  function expandSidebar(sidebar) {
    sidebar.classList.remove("col-auto");
    sidebar.classList.add("col-lg-2", "col-md-3");
    document.querySelectorAll(".standard-sidebar-item .sidebar-item-label").forEach((el) => {
      el.classList.remove("d-none");
    });
    document.querySelectorAll(".standard-sidebar-item").forEach((el) => {
      el.classList.remove("justify-content-center");
      el.classList.add("justify-content-start");
    });
    document.querySelectorAll(".sidebar-item-icon .icon").forEach((el) => {
      el.style.transform = "scale(1)";
      el.style.marginLeft = "unset";
      el.classList.remove("ml-3");
      el.classList.remove("icon-lg");
      el.classList.add("icon-md");
      el.style.transition = "transform 0.2s ease";
    });
    console.log("Sidebar expanded");
  }
  document.addEventListener("DOMContentLoaded", initSidebarToggleButton);
  function movePageHeadContent() {
    const observer = new MutationObserver(() => {
      const source = document.querySelector(".page-head-content");
      const target = document.querySelector(".layout-main-section-wrapper");
      if (source && target) {
        target.insertBefore(source, target.firstChild);
        console.log("\u2705 Moved .page-head-content into .layout-main-section-wrapper");
        observer.disconnect();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  document.addEventListener("DOMContentLoaded", movePageHeadContent);
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
})();
//# sourceMappingURL=theme.bundle.WWZGB3PI.js.map
