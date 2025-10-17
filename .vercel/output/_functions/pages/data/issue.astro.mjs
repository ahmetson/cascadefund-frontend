import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DZoFJRV9.mjs';
import { C as C$1, $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_D70TRW56.mjs';
import { N as NavLabelElement, P as Panel$1, $ as $$IssuePrioritificationPanel } from '../../chunks/index_CMHNElvj.mjs';
import { B as BackButton } from '../../chunks/BackButton_DejlPjMB.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { C } from '../../chunks/PagePanel_vRXEIxzy.mjs';
import { i as Badge, d as Button } from '../../chunks/Panel_CAMdPLdB.mjs';
import { N as NotificationBanner } from '../../chunks/NotificationBanner_5gBaVSgc.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const IssueContent = () => {
  return /* @__PURE__ */ jsxs(C, { title: "OAuth Integration with Third-party Services", actions: [], rightHeader: /* @__PURE__ */ jsx(Badge, { variant: "gray", children: "Don't affect rating" }), children: [
    /* @__PURE__ */ jsx(NotificationBanner, { type: "warning", title: "Not on Roadmap", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-yellow-700 mt-1", children: [
      'This issue is on the "Funded Issues" list.',
      /* @__PURE__ */ jsx("br", {}),
      "How to move out? Go to the working directory, and drag and drop the issue to another list."
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "prose max-w-none", children: [
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-4", children: "We need to implement OAuth 2.0 integration with major third-party services (Google, Facebook, Twitter, GitHub) to streamline the user authentication process. Current implementation requires separate authentication flows for each service, creating inconsistent user experiences." }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-6", children: "The integration should handle token refresh, permission scopes, and user profile data synchronization across all platforms." }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Technical Requirements:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside space-y-2 text-gray-700 mb-6", children: [
        /* @__PURE__ */ jsx("li", { children: "Implement unified OAuth client library" }),
        /* @__PURE__ */ jsx("li", { children: "Create consistent token storage mechanism" }),
        /* @__PURE__ */ jsx("li", { children: "Design user permission management interface" }),
        /* @__PURE__ */ jsx("li", { children: "Develop automated token refresh process" }),
        /* @__PURE__ */ jsx("li", { children: "Ensure GDPR compliance for all data transfers" })
      ] })
    ] })
  ] });
};

const Panel = () => {
  return /* @__PURE__ */ jsx(C, { title: "Issue Details", className: "mb-8", actions: [{
    variant: "blue",
    href: "/data/issue/update",
    children: "Edit"
  }], children: /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Status:" }),
      /* @__PURE__ */ jsx(Badge, { variant: "success", children: "Open" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Created:" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-900", children: "3 days ago" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Updated:" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-900", children: "Today" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Assignee:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://dummyimage.com/20x20/4A90E2/ffffff?text=E",
            alt: "Emily W.",
            className: "w-5 h-5 rounded-full",
            referrerPolicy: "no-referrer"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-gray-900", children: "Emily W." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Likes" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "23" }),
        /* @__PURE__ */ jsx(Button, { variant: "danger", size: "sm", children: "Follow" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Tags:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-1", children: [
        /* @__PURE__ */ jsx(Badge, { variant: "warning", children: "Suggested" }),
        /* @__PURE__ */ jsx(Badge, { variant: "danger", children: "Bug" })
      ] })
    ] })
  ] }) });
};

const Sidebar$1 = () => {
  return /* @__PURE__ */ jsx(C, { title: "Recent Activity", actions: [], children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-400 mt-0.5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z", clipRule: "evenodd" }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: "Sarah Johnson commented on this issue" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Today at 9:22 AM" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-400 mt-0.5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z", clipRule: "evenodd" }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: "Michael Chen added David Rodriguez to this issue" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Yesterday at 1:15 PM" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-400 mt-0.5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-900", children: "Emily Wong added tags to this issue" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "3 days ago" })
      ] })
    ] })
  ] }) });
};

const Sidebar = () => {
  return /* @__PURE__ */ jsx(C, { title: "Related Issues", actions: [], children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm text-cascade-blue hover:underline", children: '"Blog Site"' }),
      /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-900", children: "User Session Management" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Feature • Authentication Module" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm text-cascade-blue hover:underline", children: '"Blog Site"' }),
      /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-900", children: "Password Reset Flow" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Bug • Authentication Module" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm text-cascade-blue hover:underline", children: '"Blog Site"' }),
      /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-900", children: "2FA Implementation" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Feature • Authentication Module" })
    ] })
  ] }) });
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const additional = [
    await C$1({
      href: "/maintainer/work",
      children: "Cascading Work"
    }),
    await NavLabelElement({
      subtitle: "Issues List/Roadmap",
      active: true,
      children: "Version"
    }),
    await C$1({ active: true, children: "Issue" })
  ].reverse();
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "subtitle": "Data Section: Issue", "additional": additional }, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "type": "warning", "title": "Complete a quest...", "slot": "center" }, { "default": async ($$result3) => renderTemplate`
Please reply to the "Project Timeline" chat.'
` })}${renderComponent($$result2, "IssueContent", IssueContent, { "slot": "center" })}${renderComponent($$result2, "PriorityPanel", $$IssuePrioritificationPanel, { "slot": "center" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "href": "/data/project" })}`, "right": async ($$result2) => renderTemplate`${renderComponent($$result2, "IssueDetails", Panel, { "slot": "right", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/issue/IssueDetailsPanel", "client:component-export": "default" })}${renderComponent($$result2, "ChatPanel", Panel$1, { "slot": "right", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/chat", "client:component-export": "default" })}${renderComponent($$result2, "RecentActivity", Sidebar$1, { "slot": "right" })}${renderComponent($$result2, "RelatedIssues", Sidebar, { "slot": "right" })}` })} `;
}, "/home/milay/cascadefund-frontend/src/pages/data/issue/index.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/data/issue/index.astro";
const $$url = "/data/issue";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
