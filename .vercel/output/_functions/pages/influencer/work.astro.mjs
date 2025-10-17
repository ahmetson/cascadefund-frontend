import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DZoFJRV9.mjs';
import { $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_D70TRW56.mjs';
import { P as Panel } from '../../chunks/MenuPanel_BOQczZwS.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { C } from '../../chunks/PagePanel_vRXEIxzy.mjs';
import { i as Badge, d as Button, C as CollaborationSection } from '../../chunks/Panel_CAMdPLdB.mjs';
export { renderers } from '../../renderers.mjs';

const Sidebar = () => {
  return /* @__PURE__ */ jsx(C, { title: "How to work with the issues?", className: "space-y-8", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-600 space-y-2", children: [
    /* @__PURE__ */ jsx("li", { children: "• It's recommended first to look for the issue, and work on common idea" }),
    /* @__PURE__ */ jsx("li", { children: "• If there is nothing similar, then add a new issue" })
  ] }) });
};

const ProgressBar = ({ progress, total, label }) => {
  const percentage = progress / total * 100;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm text-gray-600 mb-2", children: [
      /* @__PURE__ */ jsx("span", { children: label }),
      /* @__PURE__ */ jsx("span", { children: total })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-blue-600 h-2 rounded-full transition-all duration-300",
        style: { width: `${percentage}%` }
      }
    ) })
  ] });
};

const TasksSection = () => {
  return /* @__PURE__ */ jsxs(
    C,
    {
      title: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "My Tasks" }),
        /* @__PURE__ */ jsx(Badge, { variant: "purple", children: "1" })
      ] }),
      rightHeader: /* @__PURE__ */ jsx(ProgressBar, { progress: 65, total: 650, label: "Points left to reach next star:" }),
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Complete the tasks below, to improve the rating, here are the quests for today:" }),
        /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: "Spend your voting powers for the issues" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "10:00 AM" })
        ] }) })
      ]
    }
  );
};

const IssueCard = ({ issue }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Rating Issue":
        return "bg-blue-100 text-blue-800";
      case "Not rating":
        return "bg-orange-100 text-orange-800";
      case "Not enough VP":
        return "bg-red-100 text-red-800";
      case "Already Solved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Urgent":
        return "text-orange-600";
      case "Prioritize":
        return "text-purple-600";
      default:
        return "text-gray-600";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900 text-sm leading-tight", children: issue.title }),
      /* @__PURE__ */ jsx("span", { className: `px-2 py-1 rounded text-xs font-medium ${getStatusColor(issue.status)}`, children: issue.status })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 mb-3", children: [
      /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://dummyimage.com/24x24/4FC3F7/ffffff?text=B",
          alt: "Author avatar",
          className: "w-full h-full object-cover",
          referrerPolicy: "no-referrer"
        }
      ) }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-600", children: issue.author }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "Category:" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-700", children: issue.category })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mb-4 line-clamp-3", children: issue.description }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs text-gray-500 mb-3", children: [
      /* @__PURE__ */ jsx("span", { children: issue.date }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ jsx("span", { children: issue.comments }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: issue.upvotes }),
          /* @__PURE__ */ jsx("span", { children: "/" }),
          /* @__PURE__ */ jsx("span", { className: "text-red-600", children: issue.downvotes })
        ] }),
        /* @__PURE__ */ jsx("span", { className: getPriorityColor(issue.priority), children: issue.priority })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      !issue.solved ? /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "sm", children: "Turn to Rating Issue" }) : /* @__PURE__ */ jsx(Badge, { variant: "green", children: "Already Solved" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600", children: "24" })
      ] })
    ] })
  ] });
};

const IssuesSection = () => {
  const issues = [
    {
      id: 1,
      title: "Authentication fails on slow connections",
      description: "Users are experiencing authentication failures when their connection speed drops below 1Mbps. The system needs to handle timeouts more gracefully.",
      category: "Postponed Issues",
      date: "Oct 5, 2023",
      comments: 5,
      upvotes: 24,
      downvotes: 2,
      status: "Not rating",
      priority: "Urgent",
      author: "Brian Barajas",
      solved: false
    },
    {
      id: 2,
      title: "Fix responsive layout on tablet devices",
      description: "The dashboard layout breaks on iPad and other tablet devices. Landscape orientation: Elements overlap and some controls become inaccessible.",
      category: "Postponed Issues",
      date: "Oct 4, 2023",
      comments: 0,
      upvotes: 19,
      downvotes: 0,
      status: "Rating Issue",
      priority: "Prioritize",
      author: "Brian Barajas",
      solved: false
    },
    {
      id: 3,
      title: "Implement dark mode across all pages",
      description: "Many users have requested a dark mode option to reduce eye strain during night-time usage. This would require implementing a theme toggle.",
      category: "Postponed Issues",
      date: "Oct 5, 2023",
      comments: 5,
      upvotes: 24,
      downvotes: 2,
      status: "Not enough VP",
      priority: "Urgent",
      author: "Brian Barajas",
      solved: false
    },
    {
      id: 4,
      title: "Data export feature crashes with large datasets",
      description: "When attempting to export data sets larger than 50,000 records, the application crashes. We need to implement pagination or streaming.",
      category: "Postponed Issues",
      date: "Oct 4, 2023",
      comments: 5,
      upvotes: 23,
      downvotes: 0,
      status: "Already Solved",
      priority: "Urgent",
      author: "Brian Barajas",
      solved: true
    }
  ];
  return /* @__PURE__ */ jsx(C, { title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "Issues ",
    /* @__PURE__ */ jsx(Badge, { variant: "gray", children: "4" })
  ] }), rightHeader: /* @__PURE__ */ jsx(CollaborationSection, { variant: "blue", href: "/data/issue/post", children: "Add Issue" }), children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2 mb-4", children: /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("svg", { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", clipRule: "evenodd" }) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search and upvote similar issue",
            className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsx(Badge, { variant: "gray", active: true, children: "All" }),
          /* @__PURE__ */ jsx(Badge, { variant: "red", children: "Bug" }),
          /* @__PURE__ */ jsx(Badge, { variant: "blue", children: "Fix" }),
          /* @__PURE__ */ jsx(Badge, { variant: "orange", children: "Urgent" }),
          /* @__PURE__ */ jsx(Badge, { variant: "green", children: "Wish" }),
          /* @__PURE__ */ jsx(Badge, { variant: "gray", children: "Suggested" }),
          /* @__PURE__ */ jsx(Badge, { variant: "gray", children: "Following" }),
          /* @__PURE__ */ jsx(Badge, { variant: "purple", children: "My" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Sort by:" }),
          /* @__PURE__ */ jsx("select", { className: "border border-gray-300 rounded-md px-3 py-1 text-sm", children: /* @__PURE__ */ jsx("option", { children: "Priority" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: issues.map((issue) => /* @__PURE__ */ jsx(IssueCard, { issue }, issue.id)) })
  ] }) });
};

const VotingPowerSection$1 = () => {
  return /* @__PURE__ */ jsxs(C, { className: "space-y-6", title: "How to work with tasks?", children: [
    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-600 space-y-2", children: [
      /* @__PURE__ */ jsx("li", { children: "• A task describes the quest mission. Quest missions are intended to reduce overwhelming information, and do the work in the quickest feedback way, which reduces the burnout." }),
      /* @__PURE__ */ jsx("li", { children: "• Upon completing the task, you receive the rating points. The points increase the rating of the project. Rating is the measurement of the satisfaction and attraction you get from customers." })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Learn how CascadeFund works:" }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "text-xs text-blue-600 hover:underline", children: "How does progress system work?" })
    ] })
  ] });
};

const VotingPowerSection = () => {
  const allocations = [
    { name: "NodeDB Toolkit", points: 25, color: "bg-blue-500" },
    { name: "React Component Library", points: 25, color: "bg-green-500" },
    { name: "SecureAuth Framework", points: 25, color: "bg-purple-500" },
    { name: "CloudScale API", points: 25, color: "bg-yellow-500" },
    { name: "MobileUI Framework", points: 25, color: "bg-red-500" }
  ];
  return /* @__PURE__ */ jsxs(C, { className: "space-y-6", title: "Your Voting Power", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-blue-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-blue-600", children: "100" }),
      /* @__PURE__ */ jsx(
        CollaborationSection,
        {
          variant: "gray",
          className: "w-sm h-sm",
          href: "/influencer/project",
          children: "Add"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: "Total available" }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mb-6", children: "+50% bonus points by rating" }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-medium text-gray-900 mb-3", children: "Current Allocation" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2 flex justify-center text-center", children: allocations.map((allocation, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("div", { className: `w-3 h-3 rounded-full ${allocation.color}` }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-blue-600 hover:underline", children: allocation.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "+ ",
            allocation.points,
            " VP"
          ] }),
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" }) })
        ] })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t pt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Remaining" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-green-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" }) }),
        /* @__PURE__ */ jsx("span", { className: "font-medium text-green-600", children: "10" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      CollaborationSection,
      {
        variant: "blue",
        className: "w-full mt-4",
        href: "/influencer/confirmed",
        children: "Confirm Votes"
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-2 text-center", children: "It will create tasks for maintainers to work on the issues. You will be notified on this page." })
  ] });
};

const $$Work = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, {}, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "QuestPanel", TasksSection, { "slot": "center" })}${renderComponent($$result2, "IssueBoard", IssuesSection, { "slot": "center" })}`, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "MainMenu", Panel, { "slot": "left", "activeMenuItem": "iwork", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/utilitified_decorations/MenuPanel", "client:component-export": "default" })}${renderComponent($$result2, "IssuesHowToInfo", Sidebar, { "slot": "left" })}`, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "QuestHowToInfo", VotingPowerSection$1, { "slot": "right" })}${renderComponent($$result2, "VotingPower", VotingPowerSection, { "slot": "right" })}` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/influencer/work.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/influencer/work.astro";
const $$url = "/influencer/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
