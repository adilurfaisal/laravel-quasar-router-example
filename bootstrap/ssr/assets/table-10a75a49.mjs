import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app2.mjs";
import "axios";
import "quasar";
import "vue-router";
const columns = [
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true
  },
  { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
  { name: "carbs", label: "Carbs (g)", field: "carbs" },
  { name: "protein", label: "Protein (g)", field: "protein" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  }
];
const rows = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
    sodium: 87,
    calcium: "14%",
    iron: "1%"
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%"
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16,
    carbs: 23,
    protein: 6,
    sodium: 337,
    calcium: "6%",
    iron: "7%"
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%"
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%"
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0,
    carbs: 94,
    protein: 0,
    sodium: 50,
    calcium: "0%",
    iron: "0%"
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: "0%",
    iron: "2%"
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: "0%",
    iron: "45%"
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: "2%",
    iron: "22%"
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: "12%",
    iron: "6%"
  }
];
const _sfc_main = {
  setup() {
    return {
      columns,
      rows
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_q_btn = resolveComponent("q-btn");
  const _component_q_table = resolveComponent("q-table");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "q-pa-md" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_q_btn, {
    to: { path: "/" },
    label: "Home"
  }, null, _parent));
  _push(ssrRenderComponent(_component_q_table, {
    title: "Treats",
    rows: $setup.rows,
    columns: $setup.columns,
    "row-key": "name",
    dark: "",
    color: "amber"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layout/table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const table = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  table as default
};
