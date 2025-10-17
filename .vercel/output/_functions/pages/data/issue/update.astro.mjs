import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_DZoFJRV9.mjs';
import { $ as $$PanelViewLayout } from '../../../chunks/PanelViewLayout_D70TRW56.mjs';
import { P as Panel, I as IssueContent } from '../../../chunks/UpdatableIssueDetailsPanel_BKwVlFS6.mjs';
import { B as BackButton } from '../../../chunks/BackButton_DejlPjMB.mjs';
import { N as NotificationBanner } from '../../../chunks/NotificationBanner_5gBaVSgc.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Update = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "subtitle": "Update Data Section: Issue", "additional": [] }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "slot": "center", "type": "info", "title": "Updating the issue" }, { "default": ($$result3) => renderTemplate`
You are adding new changes to the issue data.
` })}${renderComponent($$result2, "IssueCard", IssueContent, { "slot": "center" })}`, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "href": "/data/issue", "slot": "left" })}`, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "IssueDetails", Panel, { "slot": "right" })}` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/data/issue/update.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/data/issue/update.astro";
const $$url = "/data/issue/update";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Update,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
