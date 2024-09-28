import { createApp } from "vue";
import { routes } from "./router";
import { createRouter, createWebHistory } from "vue-router";
import PDPreview from './pdPreview.vue';

class PrintPreview{
    constructor(wrapper, pageName) {
        this.pageName = pageName;
        this.wrapperId = `#${wrapper.id}`;
        this.setTitle();
        this.show();
       
    }
    setTitle() {
        frappe.utils.set_title(__("PD_Preview"));
    }

    createRouter() {
        const history = createWebHistory("/app/print-format-preview");

        history.listen(to => {
            if (frappe.get_route_str().startsWith(this.pageName)) return;

            frappe.route_flags.replace_route = true;
            console.log(to);
            frappe.router.push_state(to);
            this.router.listening = false;
        });

        return createRouter({
            history: history,
            routes: routes,
        });
    }

    mountVueApp() {
        this.router = this.createRouter();
        this.app = createApp(PDPreview).use(this.router);
        SetVueGlobals(this.app);
        this.router.isReady().then(() => this.app.mount(this.wrapperId));
    }

    show() {
        this.mountVueApp();
        $(frappe.pages[this.pageName]).on("show", () => {
            this.router.listening = true;
            this.setTitle();
            this.router.replace(frappe.router.current_route.slice(1).join("/") || "/");
        });
    }
}

frappe.provide("print_format.pages");
print_format.pages.PrintPreview = PrintPreview;
