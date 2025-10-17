import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DZoFJRV9.mjs';
import { I as ItemName, $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_D70TRW56.mjs';
import { P as Panel } from '../../chunks/MenuPanel_BOQczZwS.mjs';
import { C } from '../../chunks/PagePanel_vRXEIxzy.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { C as CworkTab } from '../../chunks/Tabs_C1ECpvji.mjs';
import { M as MetricCard } from '../../chunks/StatInfoPanel2_C99xK1NV.mjs';
import { I as Importer } from '../../chunks/RowGrid_Dl5riSnU.mjs';
import { b as Component } from '../../chunks/Panel_CAMdPLdB.mjs';
export { renderers } from '../../renderers.mjs';

const ShareToolCard = ({
  icon,
  title,
  description,
  link,
  buttonText
}) => {
  return /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border border-gray-200 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-blue-600 text-sm", children: icon }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-800 mb-1", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mb-2", children: description }),
      link && /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-600 bg-blue-50 p-2 rounded mb-2 font-mono", children: link }),
      buttonText && /* @__PURE__ */ jsx("button", { className: "w-full bg-blue-500 text-white text-xs py-2 px-3 rounded hover:bg-blue-600", children: buttonText })
    ] })
  ] }) });
};
const ShareTools$1 = () => {
  return /* @__PURE__ */ jsxs(C, { title: "Share Tools", className: "w-80 bg-gray-50 p-4 border-l border-gray-200", children: [
    /* @__PURE__ */ jsx(
      ShareToolCard,
      {
        icon: "🎯",
        title: "Goal: Onboard Users & Contributors",
        description: "This marketing tool is not only about when people know about it. The link to your page reviews, tell to people about your project, and configuration goes on the CascadeFund."
      }
    ),
    /* @__PURE__ */ jsx(
      ShareToolCard,
      {
        icon: "📋",
        title: "GitHub Issue for Users",
        description: "The 'Issues and support moved to CascadeFund' Description: Hey, my time is scarce, for providing the best support, I moved to CascadeFund where I will help them. Sign up.",
        buttonText: "📋"
      }
    ),
    /* @__PURE__ */ jsx(
      ShareToolCard,
      {
        icon: "📄",
        title: "Share Button for README",
        description: "",
        link: "[CascadeFund](https://badge.cascad efund.io/project/)",
        buttonText: "📋"
      }
    ),
    /* @__PURE__ */ jsx(
      ShareToolCard,
      {
        icon: "👥",
        title: "Contributors Outreach Issue",
        description: "Title: 'Contributors' On CascadeFund to help with this code base. Description: I need help with this code base. CascadeFund: I will help if code when you have questions or issues.",
        buttonText: "📋"
      }
    ),
    /* @__PURE__ */ jsx(
      ShareToolCard,
      {
        icon: "💰",
        title: "Donation Link",
        description: "Support us and influence the project on CascadeFund.",
        link: "https://cascadefund.org/donate/reflect",
        buttonText: "📋"
      }
    )
  ] });
};

const MainContent = () => {
  return /* @__PURE__ */ jsx(Component, { children: /* @__PURE__ */ jsxs(Importer, { cols: 3, children: [
    /* @__PURE__ */ jsx(
      MetricCard,
      {
        icon: "👆",
        title: "Total Clicks",
        value: "3,240",
        color: "bg-blue-500"
      }
    ),
    /* @__PURE__ */ jsx(
      MetricCard,
      {
        icon: "👥",
        title: "New Users",
        value: "1,120",
        color: "bg-blue-500"
      }
    ),
    /* @__PURE__ */ jsx(
      MetricCard,
      {
        icon: "💰",
        title: "Donors from Clicks",
        value: "340",
        color: "bg-blue-500"
      }
    ),
    /* @__PURE__ */ jsx(
      MetricCard,
      {
        icon: "👁️",
        title: "Contributors View",
        value: "210",
        color: "bg-blue-500"
      }
    ),
    /* @__PURE__ */ jsx(
      MetricCard,
      {
        icon: "📈",
        title: "Influencers Created",
        value: "45",
        color: "bg-blue-500"
      }
    )
  ] }) });
};

const TrafficSources = () => {
  return /* @__PURE__ */ jsxs(C, { title: "Traffic Sources", className: "bg-white p-6 rounded-lg border border-gray-200", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-6", children: "Where clicks came from" }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "w-48 h-48 relative", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 200", className: "w-full h-full", children: [
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", r: "80", fill: "#6B7280" }),
      /* @__PURE__ */ jsx("path", { d: "M 100 20 A 80 80 0 0 1 180 100 L 100 100 Z", fill: "#4B5563" }),
      /* @__PURE__ */ jsx("path", { d: "M 180 100 A 80 80 0 0 1 100 180 L 100 100 Z", fill: "#9CA3AF" }),
      /* @__PURE__ */ jsx("path", { d: "M 100 180 A 80 80 0 0 1 20 100 L 100 100 Z", fill: "#D1D5DB" })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-blue-500 rounded-full" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: "GitHub README (48%)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-blue-400 rounded-full" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: "YouTube (27%)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-blue-300 rounded-full" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: "Blog (15%)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-gray-400 rounded-full" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: "Other (10%)" })
      ] })
    ] })
  ] });
};

const ConversionFunnel = () => {
  return /* @__PURE__ */ jsxs(C, { title: "Conversion Funnel", children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-xs", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 300 200", className: "w-full h-full", children: [
      /* @__PURE__ */ jsx("rect", { x: "50", y: "20", width: "200", height: "20", fill: "#6B7280" }),
      /* @__PURE__ */ jsx("rect", { x: "60", y: "50", width: "180", height: "20", fill: "#6B7280" }),
      /* @__PURE__ */ jsx("rect", { x: "70", y: "80", width: "160", height: "20", fill: "#6B7280" }),
      /* @__PURE__ */ jsx("rect", { x: "80", y: "110", width: "140", height: "20", fill: "#6B7280" }),
      /* @__PURE__ */ jsx("rect", { x: "90", y: "140", width: "120", height: "20", fill: "#6B7280" }),
      /* @__PURE__ */ jsx("rect", { x: "100", y: "170", width: "100", height: "20", fill: "#6B7280" })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 text-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mb-1", children: "Clicks" }),
        /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold text-gray-800", children: "3,240" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mb-1", children: "Users" }),
        /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold text-gray-800", children: "1,120" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mb-1", children: "Contributors" }),
        /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold text-gray-800", children: "210" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mb-1", children: "Influencers" }),
        /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold text-gray-800", children: "45" })
      ] })
    ] })
  ] });
};

const ContributorRow = ({
  type,
  percentage,
  languages,
  interests,
  retention
}) => {
  return /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-100", children: [
    /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-700", children: type }),
    /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-700", children: percentage }),
    /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-700", children: languages }),
    /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-700", children: interests }),
    /* @__PURE__ */ jsx("td", { className: "py-3 px-4 text-sm text-gray-700", children: retention })
  ] });
};
const ContributorAnalytics = () => {
  return /* @__PURE__ */ jsx(Component, { children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-200", children: [
      /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 text-sm font-medium text-gray-600", children: "Contributor Type" }),
      /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 text-sm font-medium text-gray-600", children: "%" }),
      /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 text-sm font-medium text-gray-600", children: "Favorite Languages" }),
      /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 text-sm font-medium text-gray-600", children: "Interest Areas" }),
      /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4 text-sm font-medium text-gray-600", children: "Retention" })
    ] }) }),
    /* @__PURE__ */ jsxs("tbody", { children: [
      /* @__PURE__ */ jsx(
        ContributorRow,
        {
          type: "Developers",
          percentage: "65%",
          languages: "Rust, Python",
          interests: "Bug fixes, Features",
          retention: "72%"
        }
      ),
      /* @__PURE__ */ jsx(
        ContributorRow,
        {
          type: "Designers",
          percentage: "15%",
          languages: "Figma, CSS",
          interests: "UI/UX, Branding",
          retention: "58%"
        }
      ),
      /* @__PURE__ */ jsx(
        ContributorRow,
        {
          type: "Writers",
          percentage: "10%",
          languages: "Markdown",
          interests: "Documentation",
          retention: "64%"
        }
      ),
      /* @__PURE__ */ jsx(
        ContributorRow,
        {
          type: "Testers",
          percentage: "10%",
          languages: "JS/PyTest",
          interests: "QA, Automation",
          retention: "51%"
        }
      )
    ] })
  ] }) }) });
};

const DependenciesSection = () => {
  const tabs = [
    {
      label: "Analytics Overview",
      key: "analytics",
      content: /* @__PURE__ */ jsx(MainContent, {})
    },
    {
      label: "Traffic Conversion",
      key: "traffic-conversion",
      content: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6", children: [
        /* @__PURE__ */ jsx(TrafficSources, {}),
        /* @__PURE__ */ jsx(ConversionFunnel, {})
      ] })
    },
    {
      label: "Contribution Analytics",
      key: "contribution-analytics",
      content: /* @__PURE__ */ jsx(ContributorAnalytics, {})
    }
  ];
  return /* @__PURE__ */ jsx(CworkTab, { activeTab: "analytics", tabs });
};

const KeywordTag = ({ text }) => {
  return /* @__PURE__ */ jsx("span", { className: "inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md mr-2 mb-2", children: text });
};
const SuggestionItem = ({ number, text }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3 mb-3", children: [
    /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium", children: number }),
    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: text })
  ] });
};
const CommentFeedback = () => {
  return /* @__PURE__ */ jsxs(C, { title: "Comment & Feedback Summary", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2 mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "✏️ Common Keywords How people find your project" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(KeywordTag, { text: "onboarding" }),
        /* @__PURE__ */ jsx(KeywordTag, { text: "docs" }),
        /* @__PURE__ */ jsx(KeywordTag, { text: "UI" }),
        /* @__PURE__ */ jsx(KeywordTag, { text: "community" }),
        /* @__PURE__ */ jsx(KeywordTag, { text: "tutorials" }),
        /* @__PURE__ */ jsx(KeywordTag, { text: "setup" }),
        /* @__PURE__ */ jsx(KeywordTag, { text: "videos" }),
        /* @__PURE__ */ jsx(KeywordTag, { text: "roadmap" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-700 mb-3", children: "Top 3 suggestions:" }),
      /* @__PURE__ */ jsx(SuggestionItem, { number: 1, text: "Better documentation for setup." }),
      /* @__PURE__ */ jsx(SuggestionItem, { number: 2, text: "Roadmap clarity." }),
      /* @__PURE__ */ jsx(SuggestionItem, { number: 3, text: "Video tutorials for contributors." })
    ] })
  ] });
};

const ActionButton = ({ text, variant }) => {
  const baseClasses = "px-4 py-2 rounded-md text-sm font-medium transition-colors";
  const variantClasses = variant === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-blue-100 text-blue-700 hover:bg-blue-200";
  return /* @__PURE__ */ jsx("button", { className: `${baseClasses} ${variantClasses} w-full mb-2`, children: text });
};
const CallToAction = () => {
  return /* @__PURE__ */ jsxs(C, { title: "🚀 What to do next", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-6", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-6", children: "Use these insights to optimize your outreach strategy and grow your project community." }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      "Todo List (todo: (create a quest, to automate) button):",
      /* @__PURE__ */ jsx(ActionButton, { text: "Copy Share Button", variant: "primary" }),
      /* @__PURE__ */ jsx(ActionButton, { text: "Copy Contribution Link", variant: "secondary" }),
      /* @__PURE__ */ jsx(ActionButton, { text: "Copy Donation Link", variant: "secondary" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-4 text-center", children: "Guests to help marketing will be prepared in the upcoming versions. If you want to help, become the CascadeFund influencer for the best." })
  ] });
};

const InsightCard = ({
  icon,
  title,
  description,
  recommendation
}) => {
  return /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border border-gray-200 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-blue-600 text-sm", children: icon }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-800 mb-1", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mb-2", children: description }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-600", children: recommendation })
    ] })
  ] }) });
};
const ShareTools = () => {
  return /* @__PURE__ */ jsxs(C, { className: "mt-6", title: "User Behavior Insights", children: [
    /* @__PURE__ */ jsx(
      InsightCard,
      {
        icon: "📖",
        title: "README Impact",
        description: "Most sign-ups come from README links",
        recommendation: "Recommendation: Keep your README badges prominent and updated"
      }
    ),
    /* @__PURE__ */ jsx(
      InsightCard,
      {
        icon: "📺",
        title: "Video Engagement",
        description: "YouTube clicks turn into donors more often",
        recommendation: "Recommendation: Create more video content explaining your project's impact"
      }
    ),
    /* @__PURE__ */ jsx(
      InsightCard,
      {
        icon: "💬",
        title: "User Feedback",
        description: "Top comments: requests for better docs, more tutorials",
        recommendation: "Recommendation: Prioritize documentation improvements"
      }
    )
  ] });
};

const $$Marketing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "activeLink": ItemName.ProjectName }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "Card", C, { "slot": "center", "title": "CascadeFund Marketing Tools", "actions": [
    { variant: "green", children: "Help me where to start", href: "#" }
  ] }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-gray-600">
This page is all about helping your project grow. Whether you want more
      users, donations, or contributors, CascadeFund gives you simple share
      tools to spread the word and onboard people.
</p> ` })}${renderComponent($$result2, "MarketingAnalyticsPanel", DependenciesSection, { "slot": "center", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/maintainer/MarketingTabs", "client:component-export": "default" })}${renderComponent($$result2, "RowGrid", Importer, { "slot": "center", "cols": 2 }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CommentFeedback", CommentFeedback, {})} ${renderComponent($$result3, "CallToAction", CallToAction, {})} ` })}`, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "Menu", Panel, { "slot": "left", "activeMenuItem": "marketing" })}`, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "ShareTools", ShareTools$1, { "slot": "right" })}${renderComponent($$result2, "InsightPanel", ShareTools, { "slot": "right" })}` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/maintainer/marketing.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/maintainer/marketing.astro";
const $$url = "/maintainer/marketing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Marketing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
