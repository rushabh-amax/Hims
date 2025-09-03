app_name = "hims"
app_title = "Hims"
app_publisher = "rushabh@gmail.com"
app_description = "hims local"
app_email = "rushabh.amax@gmail.com"
app_license = "mit"

# Apps
# ------------------

# required_apps = []

# Each item in the list will be shown as an app in the apps page
# add_to_apps_screen = [
# 	{
# 		"name": "hims",
# 		"logo": "/assets/hims/logo.png",
# 		"title": "Hims",
# 		"route": "/hims",
# 		"has_permission": "hims.api.permission.has_app_permission"
# 	}
# ]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
app_include_css = ["theme.bundle.css" , "assets/hims/css/css-rtl/translatons.ar_eg.css"]
app_include_js = ["theme.bundle.js" , "assets/hims/js/login.bundle.js" ]


# hooks.py
# app_include_js = [
#     "/assets/hims/js/login.bundle.js"
# ]
web_include_js = [
    "theme.bundle.js",
    "assets/hims/js/login.bundle.js"
]

home_page = "/modules"

# include js, css files in header of web template
# web_include_css = "/assets/hims/css/hims.css"
# web_include_js = "/assets/hims/js/hims.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "hims/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Svg Icons
# ------------------
# include app icons in desk

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "hims.utils.jinja_methods",
# 	"filters": "hims.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "hims.install.before_install"
# after_install = "hims.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "hims.uninstall.before_uninstall"
# after_uninstall = "hims.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "hims.utils.before_app_install"
# after_app_install = "hims.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "hims.utils.before_app_uninstall"
# after_app_uninstall = "hims.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "hims.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"hims.tasks.all"
# 	],
# 	"daily": [
# 		"hims.tasks.daily"
# 	],
# 	"hourly": [
# 		"hims.tasks.hourly"
# 	],
# 	"weekly": [
# 		"hims.tasks.weekly"
# 	],
# 	"monthly": [
# 		"hims.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "hims.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.core.doctype.user.user.switch_theme": "theme.override.switch_theme"
# }


# path to theme-switch overide via custom app
override_whitelisted_methods = {
    "frappe.core.doctype.user.user.switch_theme": "hims.override.switch_theme"
}

# path to icons.svg override custom app
# override_icon = {
#     "timeless": "/assets/hims/icons/icons.svg"
# }
# app_include_icons = "hims/public/icons.svg"

# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "hims.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["hims.utils.before_request"]
# after_request = ["hims.utils.after_request"]

# Job Events
# ----------
# before_job = ["hims.utils.before_job"]
# after_job = ["hims.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"hims.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }



# fixtures=[
#     {"dt": {"Property Setter"},
#      "filters": [
#          ["doc_type","in",("User")],
#          ["field_name" , "in" , ("desk_theme")]
#      ]}
# ]


fixtures = [
    {
        "dt": "Property Setter",
        "filters": [
            ["doc_type", "=", "User"],
            ["field_name", "=", "desk_theme"]
        ]
    }
]

