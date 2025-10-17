import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DZoFJRV9.mjs';
import { I as ItemName, $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_D70TRW56.mjs';
import { P as Panel } from '../../chunks/MenuPanel_BOQczZwS.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { C } from '../../chunks/PagePanel_vRXEIxzy.mjs';
import { d as Button } from '../../chunks/Panel_CAMdPLdB.mjs';
import { T as TransactionsCard } from '../../chunks/RecentTransactionPanel_CT_dtdCg.mjs';
export { renderers } from '../../renderers.mjs';

const BalanceCard = () => {
  return /* @__PURE__ */ jsxs(C, { title: "Balance", rightHeader: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "Updated 2 min ago" }),
    /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Refresh Data" })
  ] }), children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-gray-700 mb-2", children: "Withdrawing Wallet Address" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-gray-50 px-3 py-2 rounded-lg flex-1 mr-3", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600 font-mono", children: "0x8F5a2bD707D9a654bbF5dFC3A27737BDc1d24A8" }) }),
        /* @__PURE__ */ jsx(Button, { size: "sm", children: "Save" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Learn more about wallet addresses" }),
      /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-600 space-y-1", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "A wallet address must be on ",
            /* @__PURE__ */ jsx("a", { href: "#", className: "text-cascade-blue hover:underline", children: "Polygon blockchain. Guide" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-cascade-blue hover:underline", children: "Learn how to turn into fiat currency" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-gray-200 pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-gray-700 mb-1", children: "Balance (USDC)" }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-400 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 16l-4-4m0 0l4-4m-4 4h18" }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900", children: "3.45928 USDC" }),
        /* @__PURE__ */ jsx(Button, { className: "mt-2", children: "Withdraw" })
      ] })
    ] }) })
  ] });
};

const $$Balance = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "activeLink": ItemName.ProjectName }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "BalanceCard", BalanceCard, { "slot": "center" })}${renderComponent($$result2, "TransactionsCard", TransactionsCard, { "slot": "center" })}`, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "Panel", Panel, { "activeMenuItem": "balance", "slot": "left" })}` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/maintainer/balance.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/maintainer/balance.astro";
const $$url = "/maintainer/balance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Balance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
