import frappe


def format_route(name: str) -> str:
    """Format workspace name into clean route: lowercase, spaces → dashes"""
    return name.strip().lower().replace(" ", "-")


@frappe.whitelist()
def login_with_permissions():
    """Return current session user's roles and active workspaces (modules) with icons & routes"""

    usr = frappe.session.user
    if usr in ("Guest", None):
        return {"status": "error", "message": "Not logged in"}

    user = frappe.get_doc("User", usr)

    default_roles_to_exclude = {"All", "Guest", "Desk User"}
    roles = frappe.get_roles(usr)
    filtered_roles = [role for role in roles if role not in default_roles_to_exclude]

    if not filtered_roles:
        return {
            "status": "success",
            "user": {
                "id": user.name,
                "full_name": user.full_name,
                "email": user.email,
                "roles": []
            },
            "modules": []
        }

    # 🔑 Fetch public workspaces (visible in sidebar)
    workspaces = frappe.get_all(
        "Workspace",
        fields=["name", "label", "icon", "parent_page", "public"],
          filters={
        "public": 1,
        "parent_page": ["is", "not set"]   # only fetch parents
    },
        order_by="label asc"
    )

    active_modules = []
    for ws in workspaces:
        active_modules.append({
            "name": ws.name,
            "label": ws.label,
            "icon": ws.icon or "cube",   # return just icon key
            "route": f"/{format_route(ws.name)}"
        })

    return {
        "status": "success",
        "user": {
            "id": user.name,
            "full_name": user.full_name,
            "email": user.email,
            "roles": filtered_roles
        },
        "modules": active_modules
    }