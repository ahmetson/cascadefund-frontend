import { jsx, jsxs } from 'react/jsx-runtime';
import { b as Component } from './Panel_CAMdPLdB.mjs';

const FilterButton = ({ text, active = false, color }) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `px-3 py-1 rounded-lg text-sm font-medium transition-colors ${active ? "bg-blue-500 text-white" : color ? `${color} text-white hover:opacity-80` : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
      children: text
    }
  );
};

const FilterBar = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx(FilterButton, { text: "All", active: true }),
      /* @__PURE__ */ jsx(FilterButton, { text: "Bug", color: "bg-red-500" }),
      /* @__PURE__ */ jsx(FilterButton, { text: "Fix", color: "bg-blue-500" }),
      /* @__PURE__ */ jsx(FilterButton, { text: "Urgent", color: "bg-orange-500" }),
      /* @__PURE__ */ jsx(FilterButton, { text: "Wish", color: "bg-green-500" }),
      /* @__PURE__ */ jsx(FilterButton, { text: "Suggested", color: "bg-yellow-600" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Sort by:" }),
      /* @__PURE__ */ jsxs("select", { className: "border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white", children: [
        /* @__PURE__ */ jsx("option", { children: "Priority" }),
        /* @__PURE__ */ jsx("option", { children: "Date" }),
        /* @__PURE__ */ jsx("option", { children: "Rating" })
      ] })
    ] })
  ] });
};

const StatusBadge = ({ status }) => {
  const getStatusColor = (status2) => {
    switch (status2.toLowerCase()) {
      case "bug":
        return "bg-red-500 text-white";
      case "wish":
        return "bg-green-500 text-white";
      case "fix":
        return "bg-blue-500 text-white";
      case "urgent":
        return "bg-orange-500 text-white";
      case "suggested":
        return "bg-yellow-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };
  return /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-lg text-sm font-medium ${getStatusColor(status)}`, children: status });
};

const PriorityBadge = ({ priority, votes }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium", children: priority }),
    /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500 uppercase", children: votes })
  ] });
};

const UserAvatar = ({ src, alt, size = "md" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };
  return /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt,
      className: `${sizeClasses[size]} rounded-full`,
      referrerpolicy: "no-referrer"
    }
  );
};

const IssueCard = ({ issue }) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-gray-200 p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: issue.title }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 text-sm text-gray-600 mb-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(UserAvatar, { src: issue.authorAvatar, alt: issue.author, size: "sm" }),
            /* @__PURE__ */ jsx("span", { children: issue.author })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "text-yellow-600", children: [
            issue.rating,
            " rating"
          ] }),
          /* @__PURE__ */ jsx("span", { children: "Reflect" }),
          /* @__PURE__ */ jsxs("span", { children: [
            issue.roadmapVersion,
            " roadmap"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm leading-relaxed", children: issue.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-3 ml-6", children: /* @__PURE__ */ jsx(PriorityBadge, { priority: issue.priority, votes: issue.votes }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 text-sm text-gray-500", children: [
        /* @__PURE__ */ jsx("span", { children: issue.date }),
        /* @__PURE__ */ jsxs("span", { children: [
          issue.followers,
          " followers"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          issue.messages,
          " msg"
        ] })
      ] }),
      /* @__PURE__ */ jsx(StatusBadge, { status: issue.status })
    ] })
  ] });
};

const ContentArea = () => {
  const issues = [
    {
      id: 1,
      title: "Fix responsive layout on tablet devices",
      author: "Serkan Bulgurcu",
      authorAvatar: "https://dummyimage.com/32x32/4FC3F7/ffffff?text=S",
      rating: 270,
      roadmapVersion: "v23.0",
      description: "The dashboard layout breaks on iPad and other tablet devices in landscape orientation. Elements overlap and some controls become inaccessible.",
      date: "Oct 5, 2023",
      followers: 5,
      messages: 5,
      status: "Bug",
      priority: 18,
      votes: "VP"
    },
    {
      id: 2,
      title: "Data export feature crashes with large datasets",
      author: "Serkan Bulgurcu",
      authorAvatar: "https://dummyimage.com/32x32/4FC3F7/ffffff?text=S",
      rating: 290,
      roadmapVersion: "v23.0",
      description: "When attempting to export data sets larger than 10,000 records, the application crashes. We need to implement pagination or streaming.",
      date: "Oct 5, 2023",
      followers: 5,
      messages: 5,
      status: "Wish",
      priority: 23,
      votes: "VP"
    }
  ];
  return /* @__PURE__ */ jsxs(Component, { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx(FilterBar, {}),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 mt-6", children: issues.map((issue) => /* @__PURE__ */ jsx(IssueCard, { issue }, issue.id)) })
  ] });
};

export { ContentArea as C };
