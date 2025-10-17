import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, d as renderSlot } from './astro/server_DZoFJRV9.mjs';
import { B as BgType } from './Panel_CAMdPLdB.mjs';
import { $ as $$BaseSection } from './BaseSection_BD2MY-_3.mjs';

const $$Astro = createAstro();
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroSection;
  let { title, actions, bg, subtitle } = Astro2.props;
  if (bg === void 0) {
    bg = {
      sectionBgType: BgType.heroSection
    };
  }
  return renderTemplate`${renderComponent($$result, "Section", $$BaseSection, { "className": "h-[80vh]", "title": title, "actions": actions, "bg": bg, "subtitle": subtitle }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/milay/cascadefund-frontend/src/layouts/sections/HeroSection.astro", void 0);

export { $$HeroSection as $ };
