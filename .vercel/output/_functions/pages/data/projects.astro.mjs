import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DZoFJRV9.mjs';
import { I as ItemName, $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_D70TRW56.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { i as Badge, d as Button } from '../../chunks/Panel_CAMdPLdB.mjs';
import { M as MetricCard } from '../../chunks/StatInfoPanel2_C99xK1NV.mjs';
import { C } from '../../chunks/PagePanel_vRXEIxzy.mjs';
import { B as BackButton } from '../../chunks/BackButton_DejlPjMB.mjs';
export { renderers } from '../../renderers.mjs';

const FilterTabs = () => {
  const [activeTab, setActiveTab] = useState("By Issue...");
  const tabs = [
    { id: "all", label: "All" },
    { id: "explore", label: "Explore" },
    { id: "my-projects", label: "My Projects" },
    { id: "following", label: "Following" },
    { id: "recommended", label: "Recommended" },
    { id: "by-issue", label: "By Issue...", hasDropdown: true },
    { id: "by-user", label: "By User...", hasDropdown: true },
    { id: "fork-of", label: "Fork of...", hasDropdown: true }
  ];
  return /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2 border-b border-gray-200 overflow-x-hidden", children: tabs.map((tab) => /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => setActiveTab(tab.label),
      className: `px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === tab.label ? "border-blue-500 text-blue-600 bg-blue-50" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} ${tab.hasDropdown ? "flex items-center space-x-1" : ""}`,
      children: [
        /* @__PURE__ */ jsx("span", { children: tab.label }),
        tab.hasDropdown && /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
      ]
    },
    tab.id
  )) });
};

const CollaborationChart = ({ collaborators }) => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsx("div", { className: "relative w-16 h-16 mx-auto", children: /* @__PURE__ */ jsxs("svg", { className: "w-16 h-16 transform -rotate-90", viewBox: "0 0 36 36", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M18 2.0845\n              a 15.9155 15.9155 0 0 1 0 31.831\n              a 15.9155 15.9155 0 0 1 0 -31.831",
          fill: "none",
          stroke: "#e5e7eb",
          strokeWidth: "2"
        }
      ),
      collaborators.map((collaborator, index) => {
        const offset = collaborators.slice(0, index).reduce((sum, c) => sum + c.percentage, 0);
        const circumference = 100;
        const strokeDasharray = `${collaborator.percentage} ${circumference - collaborator.percentage}`;
        const strokeDashoffset = -offset;
        return /* @__PURE__ */ jsx(
          "path",
          {
            d: "M18 2.0845\n                  a 15.9155 15.9155 0 0 1 0 31.831\n                  a 15.9155 15.9155 0 0 1 0 -31.831",
            fill: "none",
            stroke: collaborator.color === "bg-blue-500" ? "#3b82f6" : collaborator.color === "bg-blue-400" ? "#60a5fa" : "#9ca3af",
            strokeWidth: "2",
            strokeDasharray,
            strokeDashoffset
          },
          index
        );
      })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "space-y-1", children: collaborators.map((collaborator, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center text-xs", children: [
      /* @__PURE__ */ jsx("div", { className: `w-2 h-2 rounded-full mr-2 ${collaborator.color === "bg-blue-500" ? "bg-blue-500" : collaborator.color === "bg-blue-400" ? "bg-blue-400" : "bg-gray-400"}` }),
      /* @__PURE__ */ jsxs("span", { className: "text-gray-600", children: [
        collaborator.name,
        " (",
        collaborator.percentage,
        "%)"
      ] })
    ] }, index)) })
  ] });
};

const ProjectCard = ({
  title,
  isInfluencer,
  rating,
  forks,
  likes,
  isFollowing,
  originalProject,
  issue,
  description,
  license,
  balance,
  cascadeBalance,
  totalAmount,
  duration,
  lastActivity,
  totalCommits,
  commitsPerDay,
  openIssues,
  closedIssues,
  avgResponseTime,
  collaborators,
  activeYears,
  maintainer,
  influencers
}) => {
  return /* @__PURE__ */ jsxs("a", { href: "/data/project", className: "px-6 bg-white rounded-lg shadow-sm border-2 block border-blue-300 hover:bg-gray-200 hover:border-blue-400 p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900", children: title }),
          isInfluencer && /* @__PURE__ */ jsx(Badge, { variant: "info", children: "You are influencer" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 text-sm text-gray-600 mb-2", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Fork of ",
            /* @__PURE__ */ jsx("span", { className: "text-blue-600 underline", children: originalProject })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 mr-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-blue-600 underline", children: issue })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-4", children: description }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-600 underline mb-4", children: license })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-yellow-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: rating })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" }) }),
          /* @__PURE__ */ jsx("span", { children: forks })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-red-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z", clipRule: "evenodd" }) }),
          /* @__PURE__ */ jsx("span", { children: likes })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: isFollowing ? "secondary" : "primary", size: "sm", children: isFollowing ? "Following" : "Follow" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-4 mb-6", children: [
      /* @__PURE__ */ jsx(
        MetricCard,
        {
          title: "Balance / Cascade Balance",
          value: balance,
          subtitle: cascadeBalance,
          footer: `${totalAmount} / ${duration}`
        }
      ),
      /* @__PURE__ */ jsx(
        MetricCard,
        {
          title: "Last Activity / Total Commits",
          value: lastActivity,
          subtitle: totalCommits,
          footer: commitsPerDay
        }
      ),
      /* @__PURE__ */ jsx(
        MetricCard,
        {
          title: "Issues",
          value: `${openIssues} open`,
          subtitle: `${closedIssues} closed`,
          footer: `avg. ${avgResponseTime}`
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-700 mb-3", children: "Collaboration" }),
        /* @__PURE__ */ jsx(CollaborationChart, { collaborators })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600", children: [
          "Active for ",
          activeYears,
          " years. By"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "J" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: maintainer.name }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-yellow-500", children: maintainer.rating })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsxs(Button, { variant: "danger", size: "sm", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 mr-1", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z", clipRule: "evenodd" }) }),
            "Work",
            /* @__PURE__ */ jsx("span", { className: "ml-1 bg-white text-red-600 text-xs px-1 rounded", children: "3" })
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "info", size: "sm", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 mr-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }),
            "Cascade Work",
            /* @__PURE__ */ jsx("span", { className: "ml-1 bg-white text-blue-600 text-xs px-1 rounded", children: "6" })
          ] }),
          /* @__PURE__ */ jsxs(Button, { variant: "secondary", size: "sm", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 mr-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }),
            "Influence"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Influencers" }),
          /* @__PURE__ */ jsxs("div", { className: "flex -space-x-2", children: [
            influencers.map((influencer, index) => /* @__PURE__ */ jsx(
              "img",
              {
                src: influencer.avatar,
                alt: "",
                className: "w-8 h-8 rounded-full border-2 border-white",
                referrerPolicy: "no-referrer"
              },
              index
            )),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600", children: "+4" }) })
          ] })
        ] })
      ] })
    ] })
  ] });
};

const Pagination = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2 py-4", children: [
    /* @__PURE__ */ jsx("button", { className: "px-3 py-2 text-sm text-gray-500 hover:text-gray-700", children: "Previous" }),
    /* @__PURE__ */ jsx("button", { className: "px-3 py-2 text-sm bg-blue-500 text-white rounded", children: "1" }),
    /* @__PURE__ */ jsx("button", { className: "px-3 py-2 text-sm text-gray-500 hover:text-gray-700", children: "2" }),
    /* @__PURE__ */ jsx("button", { className: "px-3 py-2 text-sm text-gray-500 hover:text-gray-700", children: "3" }),
    /* @__PURE__ */ jsx("button", { className: "px-3 py-2 text-sm text-gray-500 hover:text-gray-700", children: "Next" })
  ] });
};

const ProjectsSection = ({ projects }) => {
  return /* @__PURE__ */ jsxs(C, { title: /* @__PURE__ */ jsxs("h1", { className: "text-2xl font-semibold text-gray-900", children: [
    "Projects",
    /* @__PURE__ */ jsx("span", { className: "bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded", children: "1" })
  ] }), children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search projects...",
            className: "px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) })
      ] }),
      /* @__PURE__ */ jsx("select", { className: "px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", children: /* @__PURE__ */ jsx("option", { children: "Sort by: Rating" }) })
    ] }) }),
    /* @__PURE__ */ jsx(FilterTabs, {}),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: projects.map((projectData) => /* @__PURE__ */ jsx(ProjectCard, { ...projectData })) }),
    /* @__PURE__ */ jsx(Pagination, {})
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const projectData = {
    title: "Hyperpayment",
    isInfluencer: true,
    rating: 4.8,
    forks: 1,
    likes: 23,
    isFollowing: true,
    originalProject: "Original project",
    issue: "Issue: Windows support",
    description: "A protocol and it's implementation to transfer a resource between arbitrary amount parties. Used for example in the CascadeFund to distribute donations",
    license: "MIT License",
    balance: "$1,240.00",
    cascadeBalance: "$350.00",
    totalAmount: "$45.00 Total",
    duration: "38 days",
    lastActivity: "1 day ago",
    totalCommits: "2,000",
    commitsPerDay: "8 commits / day",
    openIssues: 12,
    closedIssues: 45,
    avgResponseTime: "1 day for reply",
    collaborators: [
      { name: "Core Maintainers", percentage: 65, color: "bg-blue-500" },
      { name: "Repeat Contributors", percentage: 25, color: "bg-blue-400" },
      { name: "One-time Contributors", percentage: 10, color: "bg-gray-400" }
    ],
    activeYears: 8,
    maintainer: {
      name: "Jhansson",
      rating: "220 rating"
    },
    influencers: [
      { avatar: "https://dummyimage.com/32x32/4A90E2/ffffff?text=A" },
      { avatar: "https://dummyimage.com/32x32/4A90E2/ffffff?text=B" },
      { avatar: "https://dummyimage.com/32x32/4A90E2/ffffff?text=C" },
      { avatar: "https://dummyimage.com/32x32/4A90E2/ffffff?text=D" }
    ]
  };
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "active": ItemName.ProjectList, "hideLinks": [ItemName.ProjectName], "subtitle": "Data Section: Project" }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "ProjectsSection", ProjectsSection, { "slot": "center", "projects": [projectData, projectData] })}`, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "href": "/maintainer/work", "slot": "left" })}` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/data/projects/index.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/data/projects/index.astro";
const $$url = "/data/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
