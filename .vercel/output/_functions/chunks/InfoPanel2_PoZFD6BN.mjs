import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, d as renderSlot } from './astro/server_DZoFJRV9.mjs';
import { C } from './PagePanel_vRXEIxzy.mjs';

const $$Astro = createAstro();
const $$InfoPanel2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfoPanel2;
  const { title, actions, icon } = Astro2.props;
  if (actions !== void 0) {
    actions.forEach((el, i) => {
      el.variant = "gray";
      actions[i] = el;
    });
  }
  return renderTemplate`${renderComponent($$result, "Panel", C, { "icon": icon, "title": title, "className": "bg-cyan-50 border-cyan-100", "actions": actions }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/milay/cascadefund-frontend/src/components/InfoPanel2.astro", void 0);

export { $$InfoPanel2 as $ };
