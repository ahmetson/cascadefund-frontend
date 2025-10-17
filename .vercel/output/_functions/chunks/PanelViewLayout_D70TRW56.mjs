import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, d as renderSlot, r as renderComponent, b as renderTemplate, f as renderHead } from './astro/server_DZoFJRV9.mjs';
import { a as Component, d as Button, i as Badge, $ as $$Logo, e as C$1, A as ActiveLoginNavItem, c as cn, f as $$ClientRouter, g as $$Footer } from './Panel_CAMdPLdB.mjs';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                         */
import { $ as $$ThreeColumnGrid } from './ThreeColumnGrid_CuPIviPi.mjs';

const C = ({ active, children, href = "#" }) => {
  return !active ? /* @__PURE__ */ jsx(Component, { href, children }) : /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children });
};

const $$Astro$2 = createAstro();
var ItemName = /* @__PURE__ */ ((ItemName2) => {
  ItemName2["ProjectList"] = "ProjectList";
  ItemName2["ProjectName"] = "ProjectName";
  return ItemName2;
})(ItemName || {});
const $$WorkNavbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WorkNavbar;
  const { tabIndex, vertical, active, hideLinks, className } = Astro2.props;
  const isItemShown = (item) => {
    return active !== item && (hideLinks === void 0 || hideLinks.findIndex((el) => el === item) == -1);
  };
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`w-full ${className || ""}`, "class")}${addAttribute(tabIndex, "tabindex")}> ${renderSlot($$result, $$slots["default"])} <div${addAttribute(vertical ? "text-sm" : "breadcrumbs text-sm", "class")}> <ul${addAttribute(vertical ? "flex flex-col" : "w-full justify-center", "class")}> ${isItemShown("ProjectList" /* ProjectList */) && renderTemplate`<li> ${renderComponent($$result, "C", C, { "href": "/data/projects", "active": active === "ProjectList" /* ProjectList */ }, { "default": ($$result2) => renderTemplate`
Projects
${renderComponent($$result2, "Badge", Badge, { "variant": "blue" }, { "default": ($$result3) => renderTemplate`2` })} ${renderComponent($$result2, "Badge", Badge, { "variant": "red" }, { "default": ($$result3) => renderTemplate`2` })} ` })} </li>`} ${isItemShown("ProjectName" /* ProjectName */) && renderTemplate`<li> ${renderComponent($$result, "C", C, { "href": "/data/project", "active": active === "ProjectName" /* ProjectName */ }, { "default": ($$result2) => renderTemplate`
Reflect
` })} </li>`} </ul> </div> </nav>`;
}, "/home/milay/cascadefund-frontend/src/components/utilitified_decorations/WorkNavbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const { subtitle, active, hideLinks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`shadow-sm border-b border-gray-200 fixed top-0 right-0 left-0 z-10`, "class")}> <div class="navbar bg-base-100 shadow-sm items-start min-h-6"> <div class="navbar-start h-6"> <div class="dropdown"> <div${addAttribute(0, "tabindex")} role="button" class="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path> </svg> </div> ${renderComponent($$result, "WorkNavbar", $$WorkNavbar, { "tabIndex": "-1", "className": "menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow", "active": active ? active : void 0, "hideLinks": hideLinks ? hideLinks : void 0, "vertical": true }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])} ` })} </div> ${renderComponent($$result, "CascadeFundLogo", $$Logo, {}, { "default": ($$result2) => renderTemplate`${subtitle}` })} </div> <div class="navbar-center h-6 hidden lg:flex lg:min-w-[50vw]"> ${renderComponent($$result, "WorkNavbar", $$WorkNavbar, { "className": "space-x-6", "active": active ? active : void 0, "hideLinks": hideLinks ? hideLinks : void 0 }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])} ` })} </div> <div class="navbar-end flex h-6"> ${renderComponent($$result, "LoginNavItem", C$1, { "className": "py-1! px-2!", "active": active === ActiveLoginNavItem })} </div> </div> </header> `;
}, "/home/milay/cascadefund-frontend/src/components/utilitified_decorations/Header.astro", void 0);

function GridSmallBackground() {
  return /* @__PURE__ */ jsxs("div", { className: "fixed h-screen w-screen z-0 bg-gray-black", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "absolute inset-0 bg-fixed",
          "[background-size:20px_20px]",
          // "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          // "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          "[background-image:linear-gradient(to_right,#969696_1px,transparent_1px),linear-gradient(to_bottom,#969696_1px,transparent_1px)]"
        )
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "bg-fixed pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] " })
  ] });
}

const $$Astro = createAstro();
const $$PanelViewLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PanelViewLayout;
  const { subtitle, hideLinks } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/cascadefund_logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>CascadeFund</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="min-h-screen bg-gray-200"> ${renderComponent($$result, "GridBackgrounded", GridSmallBackground, {})} <div class="z-1 relative"> ${renderComponent($$result, "Header", $$Header, { "subtitle": subtitle, "hideLinks": hideLinks }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["header-navbar"])} ` })} <section class="mt-6"> ${renderSlot($$result, $$slots["hero"])} </section> ${renderComponent($$result, "ThreeColumnGrid", $$ThreeColumnGrid, { "className": "mx-auto py-8 space-x-4 px-4 mt-6" }, { "center": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["center"])}`, "left": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["left"])}`, "right": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["right"])}` })} ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "/home/milay/cascadefund-frontend/src/layouts/PanelViewLayout.astro", void 0);

export { $$PanelViewLayout as $, C, ItemName as I };
