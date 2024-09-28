const PAGE_NAME = "print-format-preview"
let icAccountPage;
frappe.pages[PAGE_NAME].on_page_load = async function(wrapper) {
	await frappe.require(
        "pd_preview.bundle.js",
        "pd_preview.bundle.css"
    );
    icAccountPage = new print_format.pages.PrintPreview(wrapper, PAGE_NAME);
}