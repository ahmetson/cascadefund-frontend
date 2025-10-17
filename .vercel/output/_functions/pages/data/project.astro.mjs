import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DZoFJRV9.mjs';
import { I as ItemName, $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_D70TRW56.mjs';
import { N as NotificationBanner } from '../../chunks/NotificationBanner_5gBaVSgc.mjs';
import { b as Component, d as Button, i as Badge, a as Component$1 } from '../../chunks/Panel_CAMdPLdB.mjs';
import { I as Importer } from '../../chunks/RowGrid_Dl5riSnU.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { g as getIcon, C } from '../../chunks/PagePanel_vRXEIxzy.mjs';
import { I as Importer$1 } from '../../chunks/ReactComponentImporter_CKrAs9OZ.mjs';
export { renderers } from '../../renderers.mjs';

const ProjectCard$2 = () => {
  return /* @__PURE__ */ jsx("svg", { className: "h-6 w-6 text-yellow", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
};

const ProjectCard$1 = () => {
  return /* @__PURE__ */ jsx("svg", { className: "h-6 w-6 text-blue-500 mr-1 text-red-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
};

const ProjectCard = () => {
  return /* @__PURE__ */ jsx("svg", { className: "h-6 w-6 text-blue-500 mr-1 text-red-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
};

const $$ProjectInfoPanel = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Component", Component, { "className": "bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 mb-6" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Horizontally", Importer, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold text-gray-900 mb-2">Project Title</h1> <div class="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4"> <div class="flex items-center space-x-2"> <span class="text-sm text-gray-600">Rating:</span> ${renderComponent($$result3, "ReactComponentImporter", Importer$1, { "element": getIcon("star") })} <span class="text-sm font-medium">1.0</span> ${renderComponent($$result3, "ReactComponentImporter", Importer$1, { "element": getIcon("fork") })} <span class="text-sm">1</span> </div> <div class="flex items-center space-x-2"> ${renderComponent($$result3, "ReactComponentImporter", Importer$1, { "element": getIcon("heart") })} <span class="text-sm">23</span> ${renderComponent($$result3, "Button", Button, { "variant": "primary", "size": "sm" }, { "default": async ($$result4) => renderTemplate`Follow` })} </div> </div> ` })} <div class="flex items-center space-x-2 text-sm text-gray-600 mb-2"> <span>Fork of</span> <a href="#" class="text-blue-600 hover:underline">Original Project</a> <span>•</span> <a href="#" class="text-blue-600 hover:underline">Issue "Windows support"</a> </div> ${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "type": "warning", "title": "Not registered on CascadeFund", "icon": await ProjectCard$2(), "className": "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4" }, { "default": async ($$result3) => renderTemplate` <p class="text-sm text-gray-600 mb-2">
This project doesn't receive link unrelated tokens and can't engage in the
      rating system.
</p> <p class="text-sm text-gray-600">
Cascade should reach them out!
${renderComponent($$result3, "Badge", Badge, { "variant": "info" }, { "default": async ($$result4) => renderTemplate`Info` })} ${renderComponent($$result3, "Badge", Badge, { "variant": "green" }, { "default": async ($$result4) => renderTemplate`Tip` })} </p> ` })} <div class="bg-gray-50 rounded-lg p-3"> <div class="text-sm text-gray-600 mb-1">License: MIT</div> <div class="flex items-center space-x-4 text-sm"> <div class="flex items-center"> ${renderComponent($$result2, "DescriptionIcon", ProjectCard$1, {})} <span>Enterprise Task Management System, and other small description of the
          project</span> </div> </div> <div class="flex items-center space-x-4 text-sm mt-2"> <div class="flex items-center"> ${renderComponent($$result2, "AdvantageIcon", ProjectCard, {})} <span>What are the advantages compared to other projects?</span> </div> </div> </div> ` })}`;
}, "/home/milay/cascadefund-frontend/src/components/project/ProjectInfoPanel.astro", void 0);

const StatsCard = ({ title, value, subtitle }) => {
  return /* @__PURE__ */ jsxs(Component, { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-gray-700 mb-2", children: title }),
    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900 mb-1", children: value }),
    subtitle && /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: subtitle })
  ] });
};

const ProjectStats = () => {
  return /* @__PURE__ */ jsx(C, { title: "Project Stats", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6", children: [
    /* @__PURE__ */ jsx(
      StatsCard,
      {
        title: "Balance / Cascade Balance",
        value: "$0.00 / $0.00",
        subtitle: "$23.00 Total / 23 days"
      }
    ),
    /* @__PURE__ */ jsx(
      StatsCard,
      {
        title: "Last commit / Total commits",
        value: "2 days ago / 23",
        subtitle: "5 commits / day"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-gray-700 mb-4", children: "Collaboration" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-blue-500 rounded-full mr-2" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Core Maintainers (2): 35%" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-blue-400 rounded-full mr-2" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Recent Contributors (5): 25%" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-blue-300 rounded-full mr-2" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "One-time Contributors (12): 40%" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 text-xs text-gray-500", children: "A high percentage of contributors from core maintainers (80%) indicates potential risk. Better risk. Consider mentoring recent contributors to take on more responsibility." })
    ] })
  ] }) });
};

const IssueCard = ({
  title,
  author,
  description,
  date,
  followers,
  tags,
  type,
  priority
}) => {
  const typeColors = {
    bug: "danger",
    wish: "success",
    feature: "info"
  };
  const priorityIcons = {
    low: "▼",
    medium: "■",
    high: "▲"
  };
  return /* @__PURE__ */ jsxs("a", { className: "bg-white border border-blue-200 hover:blue-400 hover:bg-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow", href: "/issue", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-lg", children: priorityIcons[priority] }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "H" })
      ] }),
      /* @__PURE__ */ jsx(Badge, { variant: typeColors[type], children: type === "bug" ? "Bug" : type === "wish" ? "Wish" : "Feature" })
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900 mb-2", children: title }),
    author && /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 mb-2", children: author }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: description }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between text-xs text-gray-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ jsx("span", { children: date }),
      /* @__PURE__ */ jsxs("span", { children: [
        followers,
        " followers"
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        tags,
        " tags"
      ] })
    ] }) })
  ] });
};

const IssuesSection = () => {
  return /* @__PURE__ */ jsxs(C, { title: "Issues", rightHeader: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Last version / Total releases" }),
    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "v1.0 / 23 tags" }),
    /* @__PURE__ */ jsx(Badge, { variant: "success", children: "avg: 5 day for release" })
  ] }), children: [
    /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-gray-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
          /* @__PURE__ */ jsx("span", { className: "text-red-600 font-medium", children: "8 open" }),
          " / 23 closed"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "avg: 1 day for reply" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-4 w-full", children: [
        /* @__PURE__ */ jsxs(Component$1, { href: "/maintainer/work", className: "text-blue-600 hover:underline", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-blue-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z", clipRule: "evenodd" }) }),
          "Issues and roadmap"
        ] }),
        /* @__PURE__ */ jsxs(Component$1, { href: "/influencer/project", className: "text-blue-600 hover:underline", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-blue-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z", clipRule: "evenodd" }) }),
          "Become an Influencer"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between mb-6 space-y-4 lg:space-y-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-gray-900", children: "All Issues" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1", children: [
            /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "All" }),
            /* @__PURE__ */ jsx(Button, { variant: "danger", size: "sm", children: "Bug" }),
            /* @__PURE__ */ jsx(Button, { variant: "info", size: "sm", children: "Fix" }),
            /* @__PURE__ */ jsx(Button, { variant: "warning", size: "sm", children: "Urgent" }),
            /* @__PURE__ */ jsx(Button, { variant: "success", size: "sm", children: "Wish" }),
            /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Suggested" }),
            /* @__PURE__ */ jsx(Button, { variant: "primary", size: "sm", children: "Released" }),
            /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "On Roadmap" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Sort by:" }),
              /* @__PURE__ */ jsx("select", { className: "text-sm border border-gray-300 rounded px-2 py-1", children: /* @__PURE__ */ jsx("option", { children: "Priority" }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search Dependencies...",
                  className: "text-sm border border-gray-300 rounded px-3 py-1 pr-8 w-full sm:w-auto"
                }
              ),
              /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", clipRule: "evenodd" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsx(
          IssueCard,
          {
            title: "Fix responsive layout on tablet devices",
            author: "Serkan Balgaliyev",
            description: "The dashboard layout breaks on iPad and other tablet devices in landscape orientation. Elements overlap and some controls become inaccessible.",
            date: "Oct 5, 2023",
            followers: 3,
            tags: 3,
            type: "bug",
            priority: "high"
          }
        ),
        /* @__PURE__ */ jsx(
          IssueCard,
          {
            title: "Data export feature crashes with large datasets",
            author: "",
            description: "When attempting to export data sets larger than 10,000 records, the application crashes. We need to implement pagination or streaming.",
            date: "Oct 3, 2023",
            followers: 5,
            tags: 1,
            type: "wish",
            priority: "medium"
          }
        )
      ] })
    ] })
  ] });
};

const Sidebar$2 = () => {
  return /* @__PURE__ */ jsx(
    C,
    {
      title: "Interaction",
      rightHeader: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-yellow-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "60 Voting Points" })
      ] }),
      actions: [{ variant: "blue", children: "Add Issue", href: "/data/issue/post" }],
      children: /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mb-4", children: "How does this affect the rating of the project" })
    }
  );
};

const Avatar = ({ src, alt, size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };
  return /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt,
      referrerPolicy: "no-referrer",
      className: `${sizeClasses[size]} rounded-full object-cover ${className}`
    }
  );
};

const Sidebar$1 = () => {
  const people = [
    { name: "Sarah Johnson", role: "Maintainer", avatar: "https://dummyimage.com/32x32/4FC3F7/ffffff?text=SJ" },
    { name: "David Rodriguez", role: "Influencer", avatar: "https://dummyimage.com/32x32/4FC3F7/ffffff?text=DR" },
    { name: "Echo Ma", role: "Contributor", avatar: "https://dummyimage.com/32x32/4FC3F7/ffffff?text=EM" },
    { name: "Michael Thompson", role: "Influencer", avatar: "https://dummyimage.com/32x32/4FC3F7/ffffff?text=MT" },
    { name: "Jessica Miller", role: "Influencer", avatar: "https://dummyimage.com/32x32/4FC3F7/ffffff?text=JM" }
  ];
  return /* @__PURE__ */ jsx(C, { title: "People", children: people.map((person, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ jsx(Avatar, { src: person.avatar, alt: person.name, size: "sm" }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-900", children: person.name }) })
    ] }),
    /* @__PURE__ */ jsx("span", { className: `text-xs px-2 py-1 rounded-full ${person.role === "Maintainer" ? "bg-green-100 text-green-800" : person.role === "Influencer" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}`, children: person.role })
  ] }, index)) });
};

const Sidebar = () => {
  return /* @__PURE__ */ jsx(C, { title: "Highlighted Interaction", rightHeader: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-blue-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) }), children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
    /* @__PURE__ */ jsx(Avatar, { src: "https://dummyimage.com/32x32/4FC3F7/ffffff?text=SJ", alt: "Sarah Johnson", size: "sm" }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 mb-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-900", children: "Sarah Johnson" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-600 font-medium", children: "+341" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-gray-50 rounded-lg p-3 mb-2", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: '"@David your code is really good..."' }) }),
      /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "today at 9:22 PM" })
    ] })
  ] }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "active": ItemName.ProjectName, "subtitle": "Data Section: Project" }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "type": "success", "title": "Quest System Updated!", "slot": "center" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<span class="text-sm text-gray-700">A quick task was added on CascadeFund page. You are automatically
      following the issue.</span> ` })}${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "type": "success", "title": "Quest System Updated!", "slot": "center" }, { "default": ($$result3) => renderTemplate` <span class="text-sm text-gray-700">You are now following the project. Whenever it appears on the
      CascadeFund, you will be notified.</span> ` })}${renderComponent($$result2, "ProjectInfo", $$ProjectInfoPanel, { "slot": "center" })}${renderComponent($$result2, "ProjectStats", ProjectStats, { "slot": "center" })}${renderComponent($$result2, "IssuesSection", IssuesSection, { "slot": "center" })}`, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "ProjectPeople", Sidebar$1, { "slot": "right" })}${renderComponent($$result2, "HighlightedInteraction", Sidebar, { "slot": "right" })}${renderComponent($$result2, "CallToInteract", Sidebar$2, { "slot": "right" })}` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/data/project/index.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/data/project/index.astro";
const $$url = "/data/project";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
