import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DZoFJRV9.mjs';
import { I as ItemName, $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_D70TRW56.mjs';
import { P as Panel } from '../../chunks/MenuPanel_BOQczZwS.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { C } from '../../chunks/PagePanel_vRXEIxzy.mjs';
import { d as Button } from '../../chunks/Panel_CAMdPLdB.mjs';
import { T as TransactionsCard } from '../../chunks/RecentTransactionPanel_CT_dtdCg.mjs';
export { renderers } from '../../renderers.mjs';

const CascadingBalance = () => {
  return /* @__PURE__ */ jsxs(C, { className: "mb-6", title: "Cascading Balance", rightHeader: /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Updated 2 min ago" }),
    /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Refresh Data" })
  ] }), children: [
    /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 mb-4", children: [
      "Indirectly received funds from other projects. Withdraw, and transfer or use for yourself. Check out",
      " ",
      /* @__PURE__ */ jsx("a", { href: "#", className: "text-cascade-blue hover:underline", children: "Work page" }),
      " ",
      "to improve the rating to have more funds."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Withdrawing Wallet Address" }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: "0x8F5a2b0707D9aC64b8F5dFC3A27737B06C1d24A8",
            className: "flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm",
            readOnly: true
          }
        ),
        /* @__PURE__ */ jsx(Button, { variant: "primary", size: "sm", children: "Save" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Learn more about wallet addresses" }),
      /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-600 space-y-1", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          "• A wallet address must be ",
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-cascade-blue hover:underline", children: "on Polygon blockchain. Guide" })
        ] }),
        /* @__PURE__ */ jsx("li", { children: "• Learn how to turn into fiat currency" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Balance (USDC)" }),
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-800", children: "3.45928 USDC" })
      ] }),
      /* @__PURE__ */ jsx(Button, { variant: "primary", children: "Withdraw" })
    ] })
  ] });
};

const $$Cbalance = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "activeLink": ItemName.ProjectName }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "CascadingBalance", CascadingBalance, { "slot": "center" })}${renderComponent($$result2, "TransactionHistory", TransactionsCard, { "slot": "center" })}`, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "Menu", Panel, { "activeMenuItem": "cbalance", "slot": "left" })}` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/maintainer/cbalance.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/maintainer/cbalance.astro";
const $$url = "/maintainer/cbalance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cbalance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
