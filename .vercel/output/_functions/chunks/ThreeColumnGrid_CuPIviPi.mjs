import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, d as renderSlot, b as renderTemplate } from './astro/server_DZoFJRV9.mjs';
import 'clsx';
import { G as GridStyle } from './Panel_CAMdPLdB.mjs';

const $$Astro = createAstro();
const $$ThreeColumnGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ThreeColumnGrid;
  let {
    className,
    centerPercents,
    centerClassName,
    leftClassName,
    rightClassName
  } = Astro2.props;
  if (className === void 0) {
    className = "mx-auto ";
  }
  if (centerPercents === void 0) {
    centerPercents = 50;
  }
  const cols = centerPercents === "1/3" ? 3 : centerPercents === 50 ? 4 : centerPercents === "3/4" ? 8 : 10;
  const centerSpan = centerPercents === "1/3" ? 1 : centerPercents === 50 ? 2 : centerPercents === "3/4" ? 6 : 8;
  return renderTemplate`${maybeRenderHead()}<main${addAttribute(` grid grid-cols-1 lg:grid-cols-${cols} ${className}`, "class")}> <div${addAttribute(`lg:col-span-1 space-y-${GridStyle.panel.gap.y} mr-${GridStyle.section.padding.x} ${leftClassName || ""}`, "class")}> ${renderSlot($$result, $$slots["left"])} </div> <div${addAttribute(`lg:col-span-${centerSpan} space-y-${GridStyle.panel.gap.y} mx-${GridStyle.section.padding.x} ${centerClassName || ""}`, "class")}> ${renderSlot($$result, $$slots["center"])} </div> <div${addAttribute(`lg:col-span-1 space-y-${GridStyle.panel.gap.y} ml-${GridStyle.section.padding.x} ${rightClassName || ""}`, "class")}> ${renderSlot($$result, $$slots["right"])} </div> </main>`;
}, "/home/milay/cascadefund-frontend/src/components/grid/ThreeColumnGrid.astro", void 0);

export { $$ThreeColumnGrid as $ };
