import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DZoFJRV9.mjs';
import { a as $$LandingLayout, $ as $$BaseSection } from '../../chunks/BaseSection_BD2MY-_3.mjs';
import { $ as $$HeroSection } from '../../chunks/HeroSection_VuHuNcqQ.mjs';
import { $ as $$LeftImageRightPanelsSection } from '../../chunks/LeftImageRightPanelsSection_TfbHwcdE.mjs';
import { I as ItemName } from '../../chunks/LandingNavbar_Bjmbjtq0.mjs';
import { B as BgType, b as Component } from '../../chunks/Panel_CAMdPLdB.mjs';
import { $ as $$HorizontalPanelsSection } from '../../chunks/HorizontalPanelsSection_Bb6YlnO8.mjs';
import { P as ProjectCard, a as ProjectCard$1 } from '../../chunks/DevIcon_K2Q8JCIm.mjs';
import { g as getIcon } from '../../chunks/PagePanel_vRXEIxzy.mjs';
export { renderers } from '../../renderers.mjs';

const $$Influencer = createComponent(async ($$result, $$props, $$slots) => {
  const heroSection = {
    title: "Help Open Source Thrive \u2014 become an influencer, and connect with people",
    children: "Your support goes beyond donations. With CascadeFund, you can help maintainers, influence priorities, and network with the projects you may want to work with.<br />CascadeFund has maintainer's workflow features only. Subscribe when the app profile and project pages are ready. You can still browse projects, see what maintainers want to be spread out, and tell us your favorite project maintainers to join once launched. If they joined, you can see their public posts in Discord.",
    actions: [
      { variant: "primary", children: "Subscribe for Updates" },
      { variant: "secondary", children: "Browse on GitHub" }
    ]
  };
  const challenges = [
    {
      title: "\u{1F30D}",
      description: "You know open source is helping the world, almost for free."
    },
    {
      title: "\u{1F4B0}",
      description: "You want to help, but finding funds like donating thru the wallet."
    },
    {
      title: "\u{1F5E3}\uFE0F",
      description: "It doesn't feel right to donate \u2014 why not, if others aren't donating and not say anything."
    },
    {
      title: "\u{1F3AF}",
      description: "And if you really want to donate, you don't know which project to support among many."
    },
    {
      title: "\u{1F465}",
      description: "When you do donate, it's usually for the person behind the project, not because it helps you do better."
    },
    {
      title: "\u{1F4B8}",
      description: "But most maintainers can't even show they need money."
    },
    {
      title: "\u23F0",
      description: "Your donation ends up being one-time, since it doesn't guarantee you'll be heard."
    }
  ];
  const solutionSection = {
    title: "The CascadeFund Solution",
    bg: {
      overlay: "circles",
      sectionBgType: BgType.normalSection
    }
  };
  const steps = [
    {
      icon: "1",
      title: "Donate \u2192 Voting Power",
      description: "Your donations turn into voting power for project decisions."
    },
    {
      icon: "2",
      title: "Voting Power \u2192 Guide project",
      description: "Use your voting power to influence project direction."
    },
    {
      icon: "3",
      title: "Reputation Builds Networking",
      description: "Over time, by building your reputation and building trust with maintainers, you gain a reputation that network that helps you connect with other developers and may even help you should you ever own app ideas."
    },
    {
      icon: "4",
      title: "Rating Multiplies Influence",
      description: "Your past donations carry more weight. Donations your rating strengthens them."
    }
  ];
  const bottomStep = {
    icon: "5",
    title: "Issues Resolved \u2192 Rating",
    description: "Once the issues is resolved, you get back rating."
  };
  const uniqueFeature = {
    title: "It's a public network",
    bg: {
      overlay: "rectangles",
      sectionBgType: BgType.heroSection
    }
  };
  const benefits = [
    {
      icon: "\u{1F331}",
      title: "Sustainable open source",
      description: "Support maintainers and small business."
    },
    {
      icon: "\u{1F3AF}",
      title: "Influence priorities",
      description: "Developers aren't clients they shape what gets built."
    },
    {
      icon: "\u{1F3C6}",
      title: "Build reputation",
      description: "Grow your influence by helping others."
    },
    {
      icon: "\u{1F465}",
      title: "Connect with people",
      description: "Network with that future collaborators and like-minded."
    },
    {
      icon: "\u{1F680}",
      title: "From lurker to leader",
      description: "Move from a passive user to an influencer with real impact."
    },
    {
      icon: "\u{1F91D}",
      title: "Long-term collaboration",
      description: "Use your reputation to grow projects and help contributors for your future app ideas."
    }
  ];
  const projectStats = [
    {
      number: "12",
      label: "signups",
      period: "In the last week",
      description: "Since the CascadeFund launch, there are 12 signups from people who want to be notified."
    },
    {
      number: "3",
      label: "projects",
      period: "In the last week",
      description: "There are three projects added on CascadeFund since it launch, check them out."
    },
    {
      number: "28,465",
      label: "votes",
      period: "In the last week",
      description: "It's the number's close to releases, but we are confident it keeps the momentum going and more people will join."
    }
  ];
  return renderTemplate`${renderComponent($$result, "V2Layout", $$LandingLayout, { "active": ItemName.InfluencerLanding, "subtitle": "For open source users (a.k.a influencers)" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, { ...heroSection })} ${renderComponent($$result2, "LeftImageRightPanels", $$LeftImageRightPanelsSection, { "cols": 3, "prefix": "influencerChallanges", "title": "Challenges Users Face", "img": {
    src: "https://dummyimage.com/400x400/f5f5f5/000000?text=Statue+of+Liberty+with+Chains",
    alt: "Challenges illustration"
  }, "panels": challenges }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-xl text-gray-600">
Open source is powerful, but being a contributor isn't always easy.
</p> ` })} ${renderComponent($$result2, "Section", $$BaseSection, { "title": solutionSection.title, "bg": solutionSection.bg }, { "default": async ($$result3) => renderTemplate` <p class="text-lg text-gray-200 mb-8">
We want to change how you think about the "Donate" button.
</p> <p class="text-gray-300 mb-8 max-w-3xl mx-auto">
"It's not just about one-time donations — it's a long-term journey toward
      networking with the people who build impactful projects, and discovering
      they want you can become impactful as well."
</p> <p class="text-gray-400 max-w-3xl mx-auto">
We want to change how you think about the "Donate" button. We want to
      change in contributing what it could be: the project and long make it
      better. By supporting maintainers and getting connected, you earn
      reputation and influence the project's financial target process.
</p> <p class="text-gray-500 mt-6 max-w-3xl mx-auto">
This way, you can build your reputation and influence within the open
      source application to use your influence elsewhere — even to help people
      around your own app ideas in the future.
</p> ` })} ${renderComponent($$result2, "HorizontalPanels", $$HorizontalPanelsSection, { "cols": 2, "bottomPanel": bottomStep, "panels": steps, "bg": { sectionBgType: BgType.infoSection }, "title": "How CascadeFund Works?" })} ${renderComponent($$result2, "Section", $$BaseSection, { "title": uniqueFeature.title, "bg": uniqueFeature.bg, "icon": getIcon("energy") }, { "default": async ($$result3) => renderTemplate` <p class="text-lg text-gray-200 mb-8">
CascadeFund's open-source, transparent management system makes it easy to
      track progress. And if a maintainer doesn't want to continue on a project,
      your voting power will even help make a fork that builds your vision.
</p> ` })} ${renderComponent($$result2, "HorizontalPanels", $$HorizontalPanelsSection, { "cols": 3, "panels": benefits, "bg": { sectionBgType: BgType.infoSection }, "title": "Why Talk to Devs Through CascadeFund?" })} ${renderComponent($$result2, "Section", $$BaseSection, { "actions": [
    {
      variant: "blue",
      children: "Sign In as Influencer",
      href: "/login?role=influencer"
    },
    {
      variant: "gray",
      children: "Browse Projects",
      href: "/data/projects?role=influencer"
    }
  ], "icon": await ProjectCard(), "title": "Start using CascadeFund", "bg": { sectionBgType: BgType.normalSection, overlay: "rectangles" } }, { "default": async ($$result3) => renderTemplate`  <div class="flex items-start space-x-4 text-left max-w-2xl mx-auto"> <div class="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1"> ${renderComponent($$result3, "PersonIcon", ProjectCard$1, {})} </div> <div> <h3 class="font-semibold mb-1">
Follow CascadeFund project to see what feature is added
</h3> <p class="text-yellow-100 mb-4">
By getting upvote votes, you could request your own features. Upon
          successful issue resolution, both you and developer will earn rating
          points. But, first you need to be a registered user of CascadeFund.
          And then obtain voting power for each project!
</p> </div> </div> ` })} ${renderComponent($$result2, "HorizontalSection", $$HorizontalPanelsSection, { "cols": projectStats.length, "title": "", "className": "py-16 bg-blue-gradient" }, { "default": async ($$result3) => renderTemplate` <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${projectStats.map((stat, index) => renderTemplate`${renderComponent($$result3, "Component", Component, { "key": index, "className": "text-center" }, { "default": async ($$result4) => renderTemplate` <div class="mb-4 round-lg border-round-lg bg-green-50"> <div class="text-3xl font-bold text-cascade-blue mb-1"> ${stat.number} </div> <div class="text-lg text-gray-700">${stat.label}</div> <div class="text-sm font-medium text-gray-900 mb-2"> ${stat.period} </div> </div> <p class="text-sm text-gray-600 leading-relaxed"> ${stat.description} </p> ` })}`)} </div> </div> ` })} ` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/meta/influencer.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/meta/influencer.astro";
const $$url = "/meta/influencer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Influencer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
