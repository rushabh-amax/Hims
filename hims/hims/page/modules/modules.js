frappe.pages['modules'].on_page_load = function (wrapper) {
    var page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'All Workspaces',
        single_column: true
    });

    const module_API_ROUTE = `/api/method/hims.api.login_api.login_with_permissions`;

    // Container for modules grid
    let container = $(`
        <div class="container mt-4">
            <div class="row g-4" id="modules-container"></div>
        </div>
    `).appendTo(page.body);

    console.log("Fetching modules from API...");

    fetch(module_API_ROUTE, {
        method: "GET",
        credentials: "include"
    })
        .then(r => r.json())
        .then(data => {
            console.log("Modules API Response:", data);

            let modules = data.message ? data.message.modules : data.modules;

            if (modules && modules.length) {
                let moduleContainer = $("#modules-container");

                modules.forEach(mod => {
                    let modName = mod.label || mod.name;
                    let modIcon = mod.icon ;  // matches #icon-cube in Frappe
                    let modRoute = mod.route || `workspace/${mod.name}`;
					// add this new cmt

                    // Create module card (like app selector)
                    let card = $(`
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="card app-card shadow-sm text-center h-100 border-0" style="cursor:pointer;">
                                <div class="card-body d-flex flex-column align-items-center justify-content-center p-3">
                                    <span class="sidebar-item-icon mb-2" item-icon="${modIcon}">
                                        <svg class="icon icon-lg" aria-hidden="true">
                                            <use href="#icon-${modIcon}"></use>
                                        </svg>
                                    </span>
                                    <div class="app-title fw-medium">${modName}</div>
                                </div>
                            </div>
                        </div>
                    `);

                    // click → navigate
                    card.on("click", function () {
                        if (modRoute) {
                            frappe.set_route(modRoute);
                        }
                    });

                    moduleContainer.append(card);
                });
            } else {
                $("#modules-container").html("<p class='text-muted'>No modules available</p>");
            }
        })
        .catch(err => {
            console.error("Error fetching modules:", err);
            $("#modules-container").html("<p class='text-danger'>Failed to load modules</p>");
        });
};

