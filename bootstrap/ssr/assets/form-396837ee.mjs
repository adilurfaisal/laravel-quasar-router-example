import { Notify, Dialog } from "quasar";
import { ref, resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app2.mjs";
import "axios";
import "vue-router";
const _sfc_main = {
  setup() {
    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);
    return {
      name,
      age,
      accept,
      onSubmit() {
        if (accept.value !== true) {
          Notify.create({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first"
          });
        } else {
          Notify.create({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted"
          });
        }
        Dialog.create({
          title: "Alert",
          message: "Some message"
        }).onOk(() => {
        }).onCancel(() => {
        }).onDismiss(() => {
        });
      },
      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_q_btn = resolveComponent("q-btn");
  const _component_q_form = resolveComponent("q-form");
  const _component_q_input = resolveComponent("q-input");
  const _component_q_toggle = resolveComponent("q-toggle");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "q-pa-md",
    style: { "max-width": "400px" }
  }, _attrs))}><div class="test-class">Adilur</div>`);
  _push(ssrRenderComponent(_component_q_btn, {
    to: { path: "/table" },
    label: "Table"
  }, null, _parent));
  _push(ssrRenderComponent(_component_q_form, {
    onSubmit: $setup.onSubmit,
    onReset: $setup.onReset,
    class: "q-gutter-md"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_q_input, {
          filled: "",
          modelValue: $setup.name,
          "onUpdate:modelValue": ($event) => $setup.name = $event,
          label: "Your name *",
          hint: "Name and surname",
          "lazy-rules": "",
          rules: [
            (val) => val && val.length > 0 || "Please type something"
          ]
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_input, {
          filled: "",
          type: "number",
          modelValue: $setup.age,
          "onUpdate:modelValue": ($event) => $setup.age = $event,
          label: "Your age *",
          "lazy-rules": "",
          rules: [
            (val) => val !== null && val !== "" || "Please type your age",
            (val) => val > 0 && val < 100 || "Please type a real age"
          ]
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_toggle, {
          modelValue: $setup.accept,
          "onUpdate:modelValue": ($event) => $setup.accept = $event,
          label: "I accept the license and terms"
        }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_q_btn, {
          label: "Submit",
          type: "submit",
          color: "primary"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_q_btn, {
          label: "Reset",
          type: "reset",
          color: "primary",
          flat: "",
          class: "q-ml-sm"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_q_input, {
            filled: "",
            modelValue: $setup.name,
            "onUpdate:modelValue": ($event) => $setup.name = $event,
            label: "Your name *",
            hint: "Name and surname",
            "lazy-rules": "",
            rules: [
              (val) => val && val.length > 0 || "Please type something"
            ]
          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
          createVNode(_component_q_input, {
            filled: "",
            type: "number",
            modelValue: $setup.age,
            "onUpdate:modelValue": ($event) => $setup.age = $event,
            label: "Your age *",
            "lazy-rules": "",
            rules: [
              (val) => val !== null && val !== "" || "Please type your age",
              (val) => val > 0 && val < 100 || "Please type a real age"
            ]
          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
          createVNode(_component_q_toggle, {
            modelValue: $setup.accept,
            "onUpdate:modelValue": ($event) => $setup.accept = $event,
            label: "I accept the license and terms"
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          createVNode("div", null, [
            createVNode(_component_q_btn, {
              label: "Submit",
              type: "submit",
              color: "primary"
            }),
            createVNode(_component_q_btn, {
              label: "Reset",
              type: "reset",
              color: "primary",
              flat: "",
              class: "q-ml-sm"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layout/form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const form = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  form as default
};
