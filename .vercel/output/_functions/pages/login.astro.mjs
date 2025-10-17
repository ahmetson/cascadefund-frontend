import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DZoFJRV9.mjs';
import { $ as $$PanelViewLayout } from '../chunks/PanelViewLayout_D70TRW56.mjs';
import { I as ItemName } from '../chunks/LandingNavbar_Bjmbjtq0.mjs';
import { C } from '../chunks/PagePanel_vRXEIxzy.mjs';
import { a as Component, C as CollaborationSection } from '../chunks/Panel_CAMdPLdB.mjs';
import { $ as $$InfoPanel2 } from '../chunks/InfoPanel2_PoZFD6BN.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "hideLinks": Object.values(ItemName) }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "Panel", C, { "slot": "center", "title": "Login", "titleCenter": true, "className": "bg-cyan-50 border-cyan-100" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-center space-y-6 mt-14"> ${renderComponent($$result3, "LinkBtn", CollaborationSection, { "href": "/login/callback", "variant": "blue" }, { "default": ($$result4) => renderTemplate`Sign in with GitHub` })} <p class="text-sm text-gray-500 mt-4 -mb-4">
By signing in, you agree to our${" "} ${renderComponent($$result3, "Link", Component, { "href": "/meta/policy", "className": "text-blue-600 hover:text-blue-800", "asNewTab": true }, { "default": ($$result4) => renderTemplate`
Privacy Policy
` })} </p> </div> ` })}`, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "InfoPanel2", $$InfoPanel2, { "slot": "right", "title": "Don't want GitHub?", "icon": "info", "actions": [
    {
      children: '"CascadeFund" Influencer',
      href: "/inlfuencer/project"
    }
  ] }, { "default": ($$result3) => renderTemplate` <p>Other authentication providers are on the roadmap.</p> <p>
Obtain Voting Power, upvote the
${renderComponent($$result3, "Link", Component, { "href": "/data/issue", "className": "text-blue-600 hover:text-blue-800 underline" }, { "default": ($$result4) => renderTemplate`"multi-auth" issue` })} and get rating.
</p> ` })}` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/login/index.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/login/index.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
