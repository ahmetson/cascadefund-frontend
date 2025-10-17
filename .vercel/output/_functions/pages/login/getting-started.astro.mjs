import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DZoFJRV9.mjs';
import { a as $$LandingLayout } from '../../chunks/BaseSection_BD2MY-_3.mjs';
import { I as ItemName } from '../../chunks/LandingNavbar_Bjmbjtq0.mjs';
import { $ as $$HorizontalPanelsSection } from '../../chunks/HorizontalPanelsSection_Bb6YlnO8.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { B as BgType } from '../../chunks/Panel_CAMdPLdB.mjs';
export { renderers } from '../../renderers.mjs';

const ProjectCard$2 = () => {
  return /* @__PURE__ */ jsxs("svg", { className: "h-8 w-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
    /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
  ] });
};

const ProjectCard$1 = () => {
  return /* @__PURE__ */ jsx("svg", { className: "h-8 w-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) });
};

const ProjectCard = () => {
  return /* @__PURE__ */ jsx("svg", { className: "h-8 w-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }) });
};

const $$GettingStarted = createComponent(async ($$result, $$props, $$slots) => {
  const roles = [
    {
      roleCard: true,
      id: "maintainer",
      title: "Maintainer",
      description: "You maintain a project?\nAdd your project.",
      buttonText: "Add Project",
      buttonVariant: "primary",
      href: "/data/project/post",
      helpLinkLabel: "What are the benefits of adding your project?",
      helpLinkHref: "/",
      iconBgColor: "bg-red-50",
      iconColor: "text-blue-600",
      icon: await ProjectCard$2(),
      avatar: "https://dummyimage.com/120x120/f0f0f0/666666?text=Maintainer"
    },
    {
      roleCard: true,
      id: "contributor",
      title: "Contributor",
      href: "/data/projects",
      description: "Discover projects and earn rating",
      buttonText: "All Projects",
      buttonVariant: "secondary",
      helpLinkLabel: "Why to contribute projects on CascadeFund?",
      helpLinkHref: "/meta/contributor",
      iconBgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      icon: await ProjectCard$1(),
      avatar: "https://dummyimage.com/120x120/f0f0f0/666666?text=Contributor"
    },
    {
      roleCard: true,
      id: "influencer",
      title: "Influencer",
      href: "/data/projects",
      description: "Donate, obtain Voting Power and Connect",
      buttonText: "All Projects",
      buttonVariant: "secondary",
      helpLinkLabel: "Why to donate on projects and be an influencer?",
      helpLinkHref: "/meta/influencer",
      iconBgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      icon: await ProjectCard(),
      avatar: "https://dummyimage.com/120x120/f0f0f0/666666?text=Influencer"
    }
  ];
  return renderTemplate`${renderComponent($$result, "V2Layout", $$LandingLayout, { "hideLinks": Object.values(ItemName), "subtitle": "Choose your role" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HorizontalPanelsSection", $$HorizontalPanelsSection, { "title": "Getting Started", "titleClassName": "md:text-2xl font-normal -mt-6", "cols": roles.length, "panels": roles, "bg": {
    overlay: "rectangles",
    sectionBgType: BgType.purpleToTealViaBlue
  }, "className": "h-[90vh]" }, { "top": async ($$result3) => renderTemplate`${maybeRenderHead()}<p class="text-gray-200 text-center mb-4 -mt-4">
What role fits you the best?
</p>` })} ` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/login/getting-started.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/login/getting-started.astro";
const $$url = "/login/getting-started";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GettingStarted,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
