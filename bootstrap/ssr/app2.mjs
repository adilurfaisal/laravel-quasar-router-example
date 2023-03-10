import axios from "axios";
import { resolveComponent, useSSRContext, createApp } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { Quasar, Notify, Dialog } from "quasar";
import { createRouter, createWebHistory } from "vue-router";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layout/app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const app = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const routes = [
  { path: "/", component: () => import("./assets/form-396837ee.mjs") },
  { path: "/table", component: () => import("./assets/table-10a75a49.mjs") }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
createApp(app).use(router).use(Quasar, {
  plugins: {
    Notify,
    Dialog
  },
  config: {
    notify: {
      /* look at QuasarConfOptions from the API card */
    }
  }
}).mount("#app");
export {
  _export_sfc as _
};
