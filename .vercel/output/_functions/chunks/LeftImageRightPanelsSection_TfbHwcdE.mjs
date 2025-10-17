import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute, d as renderSlot } from './astro/server_DZoFJRV9.mjs';
import { W as WorkflowCard } from './HorizontalPanelsSection_Bb6YlnO8.mjs';
import { I as Importer } from './RowGrid_Dl5riSnU.mjs';
import { $ as $$BaseSection } from './BaseSection_BD2MY-_3.mjs';

const $$Astro = createAstro();
const $$LeftImageRightPanelsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LeftImageRightPanelsSection;
  let { title, img, panels, prefix, cols, subtitle, bg } = Astro2.props;
  if (cols === void 0) {
    cols = 1;
  }
  return renderTemplate`${renderComponent($$result, "Section", $$BaseSection, { "bg": bg, "title": title, "subtitle": subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-8 items-center"> <div class="order-2 md:order-1"> <img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} class="w-full h-auto rounded-lg" referrerpolicy="no-referrer"> </div> ${renderComponent($$result2, "HorizontalRow", Importer, { "cols": cols, "className": "order-1 md:order-2 space-y-6" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ${panels && panels.map((struggle, index) => renderTemplate`${renderComponent($$result3, "StruggleCard", WorkflowCard, { "key": prefix + index, "icon": struggle.icon, "title": struggle.title, "description": struggle.description, "iconBgColor": struggle.iconBgColor })}`)}` })} </div> ` })}`;
}, "/home/milay/cascadefund-frontend/src/layouts/sections/LeftImageRightPanelsSection.astro", void 0);

export { $$LeftImageRightPanelsSection as $ };
