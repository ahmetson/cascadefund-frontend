import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DZoFJRV9.mjs';
import { I as ItemName, $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_D70TRW56.mjs';
import { P as Panel } from '../../chunks/MenuPanel_BOQczZwS.mjs';
import { $ as $$InfoPanel2 } from '../../chunks/InfoPanel2_PoZFD6BN.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { i as Badge, b as Component, C as CollaborationSection, d as Button, a as Component$1 } from '../../chunks/Panel_CAMdPLdB.mjs';
import { C as C$3, g as getIcon } from '../../chunks/PagePanel_vRXEIxzy.mjs';
import { C as CworkTab } from '../../chunks/Tabs_C1ECpvji.mjs';
import { memo } from 'react';
import { useDrop, DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { C as ContentArea } from '../../chunks/IssueListPanel2_CfRGRpPX.mjs';
export { renderers } from '../../renderers.mjs';

const C$2 = memo(function C2({
  id,
  accept,
  onDrop,
  children
}) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });
  const isActive = isOver && canDrop;
  return /* @__PURE__ */ jsx("div", { ref: drop, className: "flex items-center justify-center h-full " + (isActive ? "border-2 border-gray-green-600 rounded-sm" : canDrop ? "border-2 border-blue-400 rounded-sm" : ""), "data-testid": id, children });
});

const ContributorAvatars = () => {
  const contributors = [
    { id: 1, name: "User 1", avatar: "https://dummyimage.com/32x32/4FC3F7/ffffff?text=U1" },
    { id: 2, name: "User 2", avatar: "https://dummyimage.com/32x32/2C3E50/ffffff?text=U2" },
    { id: 3, name: "User 3", avatar: "https://dummyimage.com/32x32/E74C3C/ffffff?text=U3" },
    { id: 4, name: "User 4", avatar: "https://dummyimage.com/32x32/27AE60/ffffff?text=U4" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "w-full h-6 rounded-full flex items-center", children: [
    contributors.map((contributor) => /* @__PURE__ */ jsx(
      "img",
      {
        src: contributor.avatar,
        alt: contributor.name,
        className: "w-6 h-6 rounded-full border-2 border-white shadow-sm",
        referrerPolicy: "no-referrer"
      },
      contributor.id
    )),
    /* @__PURE__ */ jsx("div", { className: " text-gray-700 bg-gray-200 border-1 border-gray-400 text-xs p-1/2 rounded-full text-center", children: "+3" })
  ] });
};

const VersionPanel = ({
  version,
  date,
  status,
  features,
  completedIssues,
  totalIssues,
  authors
}) => {
  const getStatusColor = (status2) => {
    switch (status2) {
      case "completed":
        return "bg-green-100 border-green-300";
      case "active":
        return "bg-blue-100 border-blue-300";
      case "planned":
        return "bg-purple-100 border-purple-300";
      default:
        return "bg-gray-100 border-gray-300";
    }
  };
  const getStatusButton = (status2) => {
    switch (status2) {
      case "completed":
        return "bg-green-500 text-white";
      case "active":
        return "bg-blue-500 text-white";
      case "planned":
        return "bg-purple-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };
  const getStatusText = (status2) => {
    switch (status2) {
      case "completed":
        return "Archived";
      case "active":
        return "Mark as released";
      case "planned":
        return "Check";
      default:
        return "Check";
    }
  };
  return /* @__PURE__ */ jsxs(
    C$3,
    {
      title: version,
      rightHeader: status !== "completed" && /* @__PURE__ */ jsx(Button, { className: `py-1 px-2 text-sm rounded-sm ${getStatusButton(status)}`, variant: "gray", children: getStatusText(status) }),
      className: `p-2! w-full! rounded-lg border-2 ${getStatusColor(status)} mb-4`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-2", children: status === "active" ? /* @__PURE__ */ jsx(ContributorAvatars, {}) : /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-gray-300 rounded-full" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600", children: authors[0] })
        ] }) }),
        completedIssues !== void 0 && totalIssues !== void 0 && /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm mb-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Completed Issues:" }),
            /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
              completedIssues,
              "/",
              totalIssues
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-blue-500 h-2 rounded-full",
              style: { width: `${completedIssues / totalIssues * 100}%` }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-900 mb-2", children: status === "completed" ? "Completed Issues:" : "Planned Features:" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: features.map((feature, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-gray-300 rounded-sm flex items-center justify-center", children: status === "completed" && /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-white", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }) }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: feature })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between space-x-4 text-xs text-gray-500", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex space-x-1", children: [
            getIcon("clock"),
            " ",
            date
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex space-x-1", children: [
            getIcon({ iconType: "heart", fill: "currentColor" }),
            " 15"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex space-x-1 text-blue-500", children: [
            getIcon("energy"),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "12" })
          ] }),
          status === "completed" ? /* @__PURE__ */ jsxs("span", { className: "flex space-x-1", children: [
            getIcon({ iconType: "star", fill: "currentColor" }),
            " + 1.2"
          ] }) : /* @__PURE__ */ jsxs("span", { className: "flex space-x-1", children: [
            getIcon("project"),
            " ",
            status
          ] })
        ] })
      ]
    }
  );
};
const RoadmapPanel = ({ actions, versions }) => {
  return /* @__PURE__ */ jsxs(Component, { className: "space-y-6 p-0! border-none!", children: [
    /* @__PURE__ */ jsx("div", { children: versions.map((version) => version.status === "completed" ? /* @__PURE__ */ jsx(VersionPanel, { ...version }) : /* @__PURE__ */ jsx(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ jsx(C$2, { id: version.version, accept: ["issue"], onDrop: (e) => console.log(e), children: /* @__PURE__ */ jsx(
      VersionPanel,
      {
        ...version
      }
    ) }) })) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: actions && actions.map((action) => action.href ? /* @__PURE__ */ jsx(CollaborationSection, { variant: action.variant, href: action.href, className: action.className || "", children: action.children }) : /* @__PURE__ */ jsx(Button, { variant: action.variant, onClick: action.onClick, className: action.className || "", children: action.children })) })
  ] });
};
const C$1 = () => {
  const archive = [
    {
      version: "v2.4.0",
      authors: ["ahmetson"],
      date: "Oct 13, 2023",
      status: "completed",
      features: [
        "Discovered authentication system",
        "New dashboard experience",
        "Performance optimizations"
      ],
      completedIssues: 3,
      totalIssues: 3
    }
  ];
  const versions = [{
    version: "v2.5.0",
    authors: ["ahmetson"],
    date: "Oct 12, 2023",
    status: "active",
    features: [
      "Dark mode implementation",
      "Tablet responsive layout fixes",
      "Google Calendar integration"
    ],
    completedIssues: 1,
    totalIssues: 3
  }, {
    version: "v2.6.0",
    date: "Oct 12, 2023",
    authors: ["ahmetson"],
    status: "planned",
    features: [
      "Advanced filtering options",
      "API rate limit improvements"
    ],
    completedIssues: 0,
    totalIssues: 2
  }];
  const actions = [{ className: "border-2 border-dashed border-gray-300", children: "Add another version", href: "#" }];
  const tabs = [
    {
      label: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-left", children: [
        "Roadmap ",
        /* @__PURE__ */ jsx(Badge, { variant: "gray", children: versions.length })
      ] }),
      key: "roadmap",
      content: /* @__PURE__ */ jsx(RoadmapPanel, { actions, versions })
    },
    {
      label: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-left", children: [
        "Archive ",
        /* @__PURE__ */ jsx(Badge, { variant: "gray", children: archive.length })
      ] }),
      key: "archive",
      content: /* @__PURE__ */ jsx(RoadmapPanel, { versions: archive })
    }
  ];
  return /* @__PURE__ */ jsx(CworkTab, { activeTab: "roadmap", tabs });
};

const IssueCard = memo(({
  id,
  title,
  author,
  likes,
  date,
  replies,
  priority,
  type,
  isDropped
}) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: "issue",
      item: { id, title },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1
      })
    }),
    [id, title]
  );
  const getPriorityColor = (priority2) => {
    switch (priority2) {
      case "Urgent":
        return "border border-orange-500";
      case "Bug":
        return "border border-red-500";
      case "Wish":
        return "border border-green-500";
      default:
        return "border border-gray-500";
    }
  };
  return /* @__PURE__ */ jsx(
    Component$1,
    {
      ref: drag,
      "data-testid": id,
      className: `cursor-move! opacity-${opacity}`,
      href: `/data/issue?id=${id}&questId=1`,
      children: /* @__PURE__ */ jsxs(
        C$3,
        {
          title,
          rightHeader: type === "funded" && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1 text-blue-600 py-0! px-1! flex", children: [
            getIcon("energy"),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: likes })
          ] }),
          className: `p-1! text-gray-800 rounded-lg border ${type === "funded" ? "bg-green-50 border-green-200 hover:bg-green-100 border-green-300" : "bg-white border-gray-200 hover:bg-gray-200 hover:border-gray-300"}`,
          children: [
            type === "funded" ? /* @__PURE__ */ jsx(ContributorAvatars, {}) : /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-gray-300 rounded-full" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600", children: author })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 text-xs text-gray-500", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex space-x-1", children: [
                  getIcon("clock"),
                  " ",
                  date
                ] }),
                type === "funded" && /* @__PURE__ */ jsxs("span", { className: "flex space-x-1", children: [
                  getIcon("heart"),
                  " ",
                  replies
                ] }),
                type === "funded" && /* @__PURE__ */ jsxs("span", { className: "flex space-x-1 text-blue-500", children: [
                  getIcon("likes"),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: likes })
                ] })
              ] }),
              /* @__PURE__ */ jsx("span", { className: `px-2 py-1 text-xs font-medium rounded ${getPriorityColor(priority)}`, children: priority })
            ] })
          ]
        }
      )
    }
  );
});
const IssuesSection = () => {
  return /* @__PURE__ */ jsxs(
    Component,
    {
      className: "bg-white rounded-lg shadow-sm border border-gray-200",
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs mb-2 -mt-2.5", children: "To clean the board, drag and drop the issues onto the tabs or onto roadmap." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
            /* @__PURE__ */ jsx("button", { className: "px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded", children: "All" }),
            /* @__PURE__ */ jsx("button", { className: "px-3 py-1 text-xs font-medium bg-red-500 text-white rounded", children: "Bug" }),
            /* @__PURE__ */ jsx("button", { className: "px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded", children: "Fix" }),
            /* @__PURE__ */ jsx("button", { className: "px-3 py-1 text-xs font-medium bg-orange-500 text-white rounded", children: "Urgent" }),
            /* @__PURE__ */ jsx("button", { className: "px-3 py-1 text-xs font-medium bg-green-500 text-white rounded", children: "Wish" }),
            /* @__PURE__ */ jsx("button", { className: "px-3 py-1 text-xs font-medium bg-gray-500 text-white rounded", children: "Suggested" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            "Sort:",
            /* @__PURE__ */ jsxs("select", { className: "text-xs ml-1 border border-gray-300 rounded px-2 py-1", children: [
              /* @__PURE__ */ jsx("option", { children: "All" }),
              /* @__PURE__ */ jsx("option", { children: "Priority" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2 h-5", children: /* @__PURE__ */ jsxs("h4", { className: "text-sm text-gray-600", children: [
              "Public issues ",
              /* @__PURE__ */ jsx(Badge, { variant: "gray", children: "20000" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsxs(DndProvider, { backend: HTML5Backend, children: [
              /* @__PURE__ */ jsx(
                IssueCard,
                {
                  id: "1",
                  title: "Authentication fails on slow connections",
                  author: "Serkan Balguliyev",
                  description: "Users are experiencing authentication failures when their connection speed drops below 100ms. The system needs to handle timeouts more gracefully.",
                  likes: 24,
                  date: "Oct 5, 2023",
                  replies: 5,
                  readTime: "5 min",
                  priority: "Urgent",
                  type: "public"
                }
              ),
              /* @__PURE__ */ jsx(
                IssueCard,
                {
                  id: "2",
                  title: "Implement dark mode across all pages",
                  author: "Serkan Balguliyev",
                  description: "Many users have requested a dark mode option to reduce eye strain during night time usage. This would require implementing a theme toggle.",
                  likes: 42,
                  date: "Oct 3, 2023",
                  replies: 5,
                  readTime: "5 min",
                  priority: "Urgent",
                  type: "public"
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex space-x-2 h-5", children: [
              /* @__PURE__ */ jsxs("h4", { className: "text-sm text-gray-600", children: [
                "Funded issues ",
                /* @__PURE__ */ jsx(Badge, { variant: "blue", children: "20000" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "(+12 stars to rating)" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsxs(DndProvider, { backend: HTML5Backend, children: [
              /* @__PURE__ */ jsx(
                IssueCard,
                {
                  id: "3",
                  title: "Fix responsive layout on tablet devices",
                  author: "Serkan Balguliyev",
                  description: "The dashboard layout breaks on iPad and other tablet devices in landscape orientation. Need to implement proper responsive breakpoints.",
                  likes: 15,
                  date: "Oct 6, 2023",
                  replies: 6,
                  readTime: "5 min",
                  priority: "Bug",
                  type: "funded"
                }
              ),
              /* @__PURE__ */ jsx(
                IssueCard,
                {
                  id: "4",
                  title: "Data export feature crashes with large datasets",
                  author: "Serkan Balguliyev",
                  description: "When attempting to export data sets larger than 10,000 records, the application crashes. We need to implement pagination or streaming.",
                  likes: 37,
                  date: "Oct 5, 2023",
                  replies: 6,
                  readTime: "5 min",
                  priority: "Wish",
                  type: "funded"
                }
              ),
              "            "
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ jsx(CollaborationSection, { variant: "gray", href: "/data/issue/post", children: "Add Issue" }) })
      ]
    }
  );
};

const C = () => {
  const tabs = [
    {
      label: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Issues ",
        /* @__PURE__ */ jsx(Badge, { variant: "blue", children: "20k" })
      ] }),
      key: "issues",
      content: /* @__PURE__ */ jsx(IssuesSection, {})
    },
    {
      label: /* @__PURE__ */ jsx(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ jsx(C$2, { id: "hard-list", accept: ["issue"], onDrop: (e) => console.log(e), children: "Hard" }) }),
      key: "hard",
      content: /* @__PURE__ */ jsx(ContentArea, {})
    },
    {
      label: /* @__PURE__ */ jsx(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ jsx(C$2, { id: "closed-list", accept: ["issue"], onDrop: (e) => console.log(e), children: "Closed" }) }),
      key: "closed",
      content: /* @__PURE__ */ jsx(IssuesSection, {})
    },
    {
      label: /* @__PURE__ */ jsx(DndProvider, { backend: HTML5Backend, children: /* @__PURE__ */ jsx(C$2, { id: "detailize-list", accept: ["issue"], onDrop: (e) => console.log(e), children: "Detailize" }) }),
      key: "detailize",
      content: /* @__PURE__ */ jsx(IssuesSection, {})
    }
  ];
  return /* @__PURE__ */ jsx(CworkTab, { activeTab: "issues", tabs });
};

const $$Work = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "active": ItemName.ProjectName }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "WorkPanel", C, { "slot": "center", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/maintainer/WorkPanel", "client:component-export": "default" })}`, "default": ($$result2) => renderTemplate`      
)
`, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "Menu", Panel, { "activeMenuItem": "work", "slot": "left" })}${renderComponent($$result2, "InfoPanel", $$InfoPanel2, { "slot": "left", "title": "About issues", "icon": "info" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mb-4"> <ul class="text-xs text-gray-600 space-y-1"> <li>
• Public issues are the app feedback, equiavalent to GitHub issues.
</li> <li>• Funded issues are by your donators or by quest system.</li> <li>
• Completing funded issues will result in the rating for all
          participants.
</li> </ul> </div> ` })}`, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "RoadmapPanel", C$1, { "slot": "right", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/maintainer/RoadmapPanel", "client:component-export": "default" })}` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/maintainer/work.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/maintainer/work.astro";
const $$url = "/maintainer/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Work,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
