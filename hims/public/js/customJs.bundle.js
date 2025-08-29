// function removePageTItles(){
//   const  pageTitle = document.querySelector(".page-title");
//     // Start observing changes in the body subtree
//   observer.observe(document.body, {
//     childList: true,
//     subtree: true,
//   });

// }
// document.addEventListener("DOMContentLoaded", movePageHeadContent);

// sliding active bar for ERPNext form tabs (no frappe.ready)



// from-tab sliding effect

document.addEventListener('DOMContentLoaded', function () {
  function initSlidingTabs(ul) {
    if (!ul || ul.dataset.slidingTabsInitialized) return;
    ul.dataset.slidingTabsInitialized = '1';
    ul.style.position = ul.style.position || 'relative';

    // create the highlight bar
    const bar = document.createElement('div');
    bar.className = 'sliding-tab-bar';
    Object.assign(bar.style, {
      position: 'absolute',
      bottom: '0',
      height: '4px',
      background: 'var(--_primary-bg-color)',
      borderRadius: '1em 1em 0em 0em',
      transition: 'transform 200ms ease, width 200ms ease',
      left: '0',
      width: '0',
      zIndex: '1',
      pointerEvents: 'none'
    });
    ul.appendChild(bar);

    const update = () => {
      const active =
        ul.querySelector('.nav-link.active') ||
        ul.querySelector('.nav-link');
      if (!active) return;
      const linkRect = active.getBoundingClientRect();
      const ulRect = ul.getBoundingClientRect();
      const left = linkRect.left - ulRect.left + ul.scrollLeft;
      bar.style.width = linkRect.width + 'px';
      bar.style.transform = `translateX(${left}px)`;
    };

    // update on clicks (wait for bootstrap to toggle .active)
    ul.addEventListener('click', (e) => {
      const link = e.target.closest('.nav-link');
      if (link && ul.contains(link)) {
        setTimeout(update, 150);
      }
    });

    // update on resize
    window.addEventListener('resize', update);

    // observe active class changes & DOM changes inside the tabs
    const mo = new MutationObserver(() => update());
    mo.observe(ul, { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });

    // initial position
    setTimeout(update, 0);
  }

  function scanAndInit() {
    document.querySelectorAll('ul.form-tabs, ul.nav-tabs, #form-tabs').forEach(initSlidingTabs);
  }

  // initial scan
  scanAndInit();

  // ERPNext desk is SPA-like; watch for new forms/tabs injected later
  const bodyObserver = new MutationObserver(() => scanAndInit());
  bodyObserver.observe(document.body, { childList: true, subtree: true });

  // also rescan after Bootstrap tab show (BS4/BS5 attribute variants)
  document.addEventListener('click', (e) => {
    if (e.target.closest('a[data-toggle="tab"], a[data-bs-toggle="tab"]')) {
      setTimeout(scanAndInit, 200);
    }
  });
});







// from-tab sliding effect

document.addEventListener('DOMContentLoaded', function () {
  function initSlidingTabs(ul) {
    if (!ul || ul.dataset.slidingTabsInitialized) return;
    ul.dataset.slidingTabsInitialized = '1';
    ul.style.position = ul.style.position || 'relative';

    // create the highlight bar
    const bar = document.createElement('div');
    bar.className = 'sliding-tab-bar';
    Object.assign(bar.style, {
      position: 'absolute',
      bottom: '0',
      height: '4px',
      background: 'var(--_primary-bg-color)',
      borderRadius: '1em 1em 0em 0em',
      transition: 'transform 200ms ease, width 200ms ease',
      left: '0',
      width: '0',
      zIndex: '1',
      pointerEvents: 'none'
    });
    ul.appendChild(bar);

    const update = () => {
      const active =
        ul.querySelector('.nav-link.active') ||
        ul.querySelector('.nav-link');
      if (!active) return;
      const linkRect = active.getBoundingClientRect();
      const ulRect = ul.getBoundingClientRect();
      const left = linkRect.left - ulRect.left + ul.scrollLeft;
      bar.style.width = linkRect.width + 'px';
      bar.style.transform = `translateX(${left}px)`;
    };

    // update on clicks (wait for bootstrap to toggle .active)
    ul.addEventListener('click', (e) => {
      const link = e.target.closest('.nav-link');
      if (link && ul.contains(link)) {
        setTimeout(update, 150);
      }
    });

    // update on resize
    window.addEventListener('resize', update);

    // observe active class changes & DOM changes inside the tabs
    const mo = new MutationObserver(() => update());
    mo.observe(ul, { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });

    // initial position
    setTimeout(update, 0);
  }

  function scanAndInit() {
    document.querySelectorAll('ul.form-tabs, ul.nav-tabs, #form-tabs').forEach(initSlidingTabs);
  }

  // initial scan
  scanAndInit();

  // ERPNext desk is SPA-like; watch for new forms/tabs injected later
  const bodyObserver = new MutationObserver(() => scanAndInit());
  bodyObserver.observe(document.body, { childList: true, subtree: true });

  // also rescan after Bootstrap tab show (BS4/BS5 attribute variants)
  document.addEventListener('click', (e) => {
    if (e.target.closest('a[data-toggle="tab"], a[data-bs-toggle="tab"]')) {
      setTimeout(scanAndInit, 200);
    }
  });
});


//  login password

// document.addEventListener("DOMContentLoaded", () => {
//     const injectToggle = (input) => {
//         // avoid duplicate injection
//         if (input.parentNode.querySelector(".toggle-password")) return;

//         let toggle = document.createElement("div");
//         toggle.classList.add("toggle-password");
//         toggle.innerHTML = `
//             <svg class="icon icon-sm" aria-hidden="true">
//                 <use href="#icon-unhide"></use>
//             </svg>
//         `;

//         // style position relative so we can absolutely position the icon
//         input.parentNode.style.position = "relative";
//         toggle.style.position = "absolute";
//         toggle.style.right = "10px";
//         toggle.style.top = "50%";
//         toggle.style.transform = "translateY(-50%)";
//         toggle.style.cursor = "pointer";

//         input.parentNode.appendChild(toggle);

//         // toggle logic
//         toggle.addEventListener("click", () => {
//             if (input.type === "password") {
//                 input.type = "text";
//                 toggle.querySelector("use").setAttribute("href", "#icon-hide");
//             } else {
//                 input.type = "password";
//                 toggle.querySelector("use").setAttribute("href", "#icon-unhide");
//             }
//         });
//     };

//     // Initial injection
//     document.querySelectorAll('input[type="password"]').forEach(injectToggle);

//     // Observe for dynamically added inputs
//     const observer = new MutationObserver((mutations) => {
//         mutations.forEach((mutation) => {
//             mutation.addedNodes.forEach((node) => {
//                 if (node.nodeType === 1) {
//                     // direct input
//                     if (node.matches?.('input[type="password"]')) {
//                         injectToggle(node);
//                     }
//                     // nested inputs inside added container
//                     node.querySelectorAll?.('input[type="password"]').forEach(injectToggle);
//                 }
//             });
//         });
//     });

//     observer.observe(document.body, { childList: true, subtree: true });
// });


//     // Initial injection

//     // Observe for dynamically added inputs
//     const observer = new MutationObserver((mutations) => {
//         mutations.forEach((mutation) => {
//             mutation.addedNodes.forEach((node) => {
//                 if (node.nodeType === 1) {
//                     // direct input
//                     if (node.matches?.('input[type="password"]')) {
//                         injectToggle(node);
//                     }
//                     // nested inputs inside added container
//                     node.querySelectorAll?.('input[type="password"]').forEach(injectToggle);
//                 }
//             });
//         });
//     });

//     observer.observe(document.body, { childList: true, subtree: true });



// // sidebar remvoe

document.addEventListener("DOMContentLoaded", () => {


    console.log("✅ Pure JS script started");

    const module_API_ROUTE = "/api/method/hims.api.login_api.login_with_permissions";

    fetch(module_API_ROUTE, {
        method: "GET",
        credentials: "include",
    })
    .then(res => res.json())
    .then(res => {
        const modules = res.message?.modules || [];

        if (!Array.isArray(modules) || modules.length === 0) {
            console.log("⚠️ No modules data from API");
            return;
        }

        // Collect parent module routes like "/accounting"
        const parentRoutes = modules.map(m => m.route?.replace(/^\//, "")); 
        console.log("✅ Parent Module Routes:", parentRoutes);

        function getCurrentRoute() {
              // remove leading slash, return full path after app/
              const pathParts = window.location.pathname.split("/").filter(Boolean);
              if (pathParts[0] === "app") {
                  return "app/" + pathParts.slice(1).join("/");
              }
              return pathParts.join("/");
          }


// function toggleSidebar() {
//   const currentRoute = getCurrentRoute();
//   console.log("👉 Current Route:", currentRoute);
//     console.log("inside fucntion")

//   const side = document.querySelector(".layout-side-section");
//   console.log(side);

//   if (parentRoutes.includes(currentRoute)) {
//     if (side) side.style.display = "none";   // or: side.remove();
//     console.log("🛑 Sidebar hidden for parent route:", currentRoute);
//   } else {
//     if (side) side.style.display = "";       // reset to default
//     console.log("✅ Sidebar visible for child route:", currentRoute);
//   }
//   console.log("after if else")
// }

        // Run once
        
function toggleSidebar(currentRoute, parentRoutes = []) {
    const side = document.querySelector(".layout-side-section");
    console.log("👉 Sidebar element:", side);
    console.log("👉 Current Route:", currentRoute);
    console.log("👉 Parent Routes:", parentRoutes);

    if (!Array.isArray(parentRoutes)) {
        console.warn("⚠️ parentRoutes is not an array, resetting to []");
        parentRoutes = [];
    }

    if (side) {
        if (currentRoute && parentRoutes.includes(currentRoute)) {
            // Hide sidebar
            side.style.display = "none"; // or: side.remove();
            console.log("🛑 Sidebar hidden for parent route:", currentRoute);
        } else {
            // Show sidebar again
            side.style.display = "";
            console.log("✅ Sidebar visible for child route:", currentRoute);
        }
    } else {
        console.log("⚠️ Sidebar element not found in DOM.");
    }

    console.log("✅ after if-else");
}


        // toggleSidebar();
toggleSidebar(currentRoute, parentRoutes);

        // Listen for navigation changes
        window.addEventListener("popstate", toggleSidebar);
        window.addEventListener("pushstate", toggleSidebar);
        window.addEventListener("hashchange", toggleSidebar);
    })
    .catch(err => {
        console.error("❌ API fetch error:", err);
    });
});
