import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate } from '../../../chunks/astro/server_DZoFJRV9.mjs';
import { C, $ as $$PanelViewLayout } from '../../../chunks/PanelViewLayout_D70TRW56.mjs';
import { N as NavLabelElement, P as Panel$1, $ as $$IssuePrioritificationPanel } from '../../../chunks/index_CMHNElvj.mjs';
import { B as BackButton } from '../../../chunks/BackButton_DejlPjMB.mjs';
import { P as Panel, I as IssueContent } from '../../../chunks/UpdatableIssueDetailsPanel_BKwVlFS6.mjs';
import { N as NotificationBanner } from '../../../chunks/NotificationBanner_5gBaVSgc.mjs';
/* empty css                                      */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  [
    await C({
      href: "/maintainer/work",
      children: "Cascading Work"
    }),
    await NavLabelElement({
      subtitle: "Issues List/Roadmap",
      active: true,
      children: "Version"
    }),
    await C({ active: true, children: "Adding Issue" })
  ].reverse();
  const projectId = Astro2.url.searchParams.get("projectId") || void 0;
  const notYetCreated = Astro2.url.searchParams.get("notYetCreated") || false;
  const forkProject = Astro2.url.searchParams.get("forkProject") || void 0;
  const isForOriginal = projectId && notYetCreated && forkProject;
  const backHref = isForOriginal ? "/data/project/post?projectId=1&forkProjectId=1&createdIssueId=1" : "/data/issue";
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, {}, { "center": async ($$result2) => renderTemplate`${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "slot": "center", "type": "warning", "title": "Adding a new issue" }, { "default": async ($$result3) => renderTemplate`${isForOriginal ? `Create an issue for '${forkProject}' that describes your fork` : "You are adding a new issue"}` })}${renderComponent($$result2, "IssueCard", IssueContent, { "slot": "center", "panelTitle": "Add a new Issue", "actions": [
    {
      variant: "blue",
      children: "Next",
      href: "/data/issue"
    }
  ] })}${renderComponent($$result2, "VotingSection", $$IssuePrioritificationPanel, { "slot": "center" })}`, "left": async ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "slot": "left", "href": backHref })}`, "right": async ($$result2) => renderTemplate`${renderComponent($$result2, "IssueDetails", Panel, { "slot": "right" })}${renderComponent($$result2, "ChatPanel", Panel$1, { "slot": "right", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/chat", "client:component-export": "default" })}` })} `;
}, "/home/milay/cascadefund-frontend/src/pages/data/issue/post.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/data/issue/post.astro";
const $$url = "/data/issue/post";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Post,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
