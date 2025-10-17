import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DZoFJRV9.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_D70TRW56.mjs';
import { I as ItemName } from '../../chunks/LandingNavbar_Bjmbjtq0.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { b as Component, a as Component$1 } from '../../chunks/Panel_CAMdPLdB.mjs';
export { renderers } from '../../renderers.mjs';

const LoadingSpinner = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12", children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "0px", left: "18px", animationDelay: "0s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "6px", left: "30px", animationDelay: "0.1s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "18px", left: "36px", animationDelay: "0.2s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "30px", left: "30px", animationDelay: "0.3s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "36px", left: "18px", animationDelay: "0.4s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "30px", left: "6px", animationDelay: "0.5s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "18px", left: "0px", animationDelay: "0.6s" } }),
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-cascade-blue rounded-full absolute animate-ping", style: { top: "6px", left: "6px", animationDelay: "0.7s" } })
  ] }) }) }) });
};

const AuthSuccessCard = ({ gotoLink, gotoLabel, title, children }) => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsx(Component, { className: "w-full max-w-md mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx(LoadingSpinner, {}) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-900 mb-2", children: title }),
    children,
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "You will be redirected to the CascadeFund alpha version shortly" }),
    /* @__PURE__ */ jsx("p", { children: showButton && /* @__PURE__ */ jsx(Component$1, { href: gotoLink, className: "font-medium text-blue-600 dark:text-blue-500 hover:underline", children: gotoLabel }) })
  ] }) });
};

const $$Callback = createComponent(($$result, $$props, $$slots) => {
  const sectionInfo = {
    title: "Successful Authentication",
    children: "Please wait for automatic redirection",
    gotoLink: "/login/getting-started",
    gotoLabel: "Getting Started"
  };
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "hideLinks": Object.values(ItemName), "subtitle": "Wait a bit please..." }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "Loading", AuthSuccessCard, { "slot": "center", "client:load": true, ...sectionInfo, "client:component-hydration": "load", "client:component-path": "@/components/utilitified_decorations/LoadingPanel", "client:component-export": "default" })}` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/login/callback.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/login/callback.astro";
const $$url = "/login/callback";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Callback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
