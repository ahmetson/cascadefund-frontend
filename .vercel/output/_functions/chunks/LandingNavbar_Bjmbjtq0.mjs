import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_DZoFJRV9.mjs';
import { G as GridStyle, a as Component$1 } from './Panel_CAMdPLdB.mjs';
import { C as Component } from './Tooltip_BRIz8GzG.mjs';

const $$Astro = createAstro();
var ItemName = /* @__PURE__ */ ((ItemName2) => {
  ItemName2["ContributorLanding"] = "ContributorLanding";
  ItemName2["InfluencerLanding"] = "InfluencerLanding";
  ItemName2["MaintainerLanding"] = "MaintainerLanding";
  ItemName2["HowItWork"] = "HowItWork";
  ItemName2["Check"] = "Check";
  return ItemName2;
})(ItemName || {});
const $$LandingNavbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LandingNavbar;
  const { tabIndex, className, active, hideLinks, vertical } = Astro2.props;
  const isItemShown = (itemName) => {
    const hidden = active === itemName || hideLinks?.findIndex((hiddenItemName) => hiddenItemName === itemName);
    return hidden === -1 || hidden === void 0;
  };
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(tabIndex, "tabindex")}${addAttribute(`flex ${vertical ? " flex-col " : ` items-center justify-between w-full text-sm center h-14 px-${GridStyle.content.gap.x}`} ${className || ""}`, "class")}> ${isItemShown("ContributorLanding" /* ContributorLanding */) && renderTemplate`${renderComponent($$result, "Tooltip", Component, { "content": "Contributing to Open Source? We made a special landing page for you", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/utilitified_decorations/Tooltip", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", Component$1, { "href": "/meta/contributor" }, { "default": ($$result3) => renderTemplate`Contributors` })} ` })}`} ${isItemShown("InfluencerLanding" /* InfluencerLanding */) && renderTemplate`${renderComponent($$result, "Tooltip", Component, { "content": "You want to help open-source, but something makes it not motivating? We made a special landing page for you", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/utilitified_decorations/Tooltip", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <div class="flex items-center w-full"> ${renderComponent($$result2, "Link", Component$1, { "href": "/meta/influencer" }, { "default": ($$result3) => renderTemplate`"Maybe" a donator?` })} </div> ` })}`} ${isItemShown("HowItWork" /* HowItWork */) && renderTemplate`${renderComponent($$result, "Link", Component$1, { "href": "/meta/work" }, { "default": ($$result2) => renderTemplate`How it works?` })}`} ${isItemShown("Check" /* Check */) && renderTemplate`${renderComponent($$result, "Tooltip", Component, { "content": "According to hyperpayment protocol, part of all project donations goes to the libraries/assets used in the project. Check if your 'asset' recieved an indirect donation", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/utilitified_decorations/Tooltip", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <div class="flex items-center w-full"> ${renderComponent($$result2, "Link", Component$1, { "href": "/maintainer/check" }, { "default": ($$result3) => renderTemplate`Check Balance` })} </div> ` })}`} </nav>`;
}, "/home/milay/cascadefund-frontend/src/components/utilitified_decorations/LandingNavbar.astro", void 0);

export { $$LandingNavbar as $, ItemName as I };
