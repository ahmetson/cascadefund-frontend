import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DZoFJRV9.mjs';
import { I as ItemName, $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_D70TRW56.mjs';
import { P as Panel } from '../../chunks/MenuPanel_BOQczZwS.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { C as Component } from '../../chunks/Tooltip_BRIz8GzG.mjs';
import { C as C$1 } from '../../chunks/PagePanel_vRXEIxzy.mjs';
import { G as GridStyle, h as bgClassNames, d as Button, i as Badge, b as Component$1 } from '../../chunks/Panel_CAMdPLdB.mjs';
import { useHotkeys } from 'react-hotkeys-hook';
import { N as NotificationBanner } from '../../chunks/NotificationBanner_5gBaVSgc.mjs';
import { C as CworkTab } from '../../chunks/Tabs_C1ECpvji.mjs';
import { C as ContentArea } from '../../chunks/IssueListPanel2_CfRGRpPX.mjs';
export { renderers } from '../../renderers.mjs';

const ProjectRating = () => {
  return /* @__PURE__ */ jsxs(
    Component,
    {
      content: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between space-x-1 text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Points left to reach next star:" }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-300", children: "650" })
      ] }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-1", children: [
            [1, 2, 3, 4, 5, 6].map((star) => /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-yellow-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, star)),
            [7, 8, 9, 10].map((star) => /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-300", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, star))
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-900", children: "6/10" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2 mt-1", children: /* @__PURE__ */ jsx("div", { className: "bg-teal-500 h-2 rounded-full", style: { width: "30%" } }) })
      ]
    }
  );
};

const TaskItem = ({ ref, onTaskClick, selectedTaskId, completedTaskId, id, title, points, time, isHighlighted = false }) => {
  isHighlighted = isHighlighted || selectedTaskId === id;
  const isCompleted = completedTaskId === id;
  return /* @__PURE__ */ jsxs("div", { ref, onClick: () => onTaskClick(id), className: `flex items-center justify-between p-3 rounded-lg border hover:cursor-pointer shadow-lg ${isHighlighted ? "bg-green-100 border-green-600 hover:bg-green-200" : "bg-white border-gray-300 hover:bg-gray-200 hover:border-green-400"}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ jsx("div", { className: `w-4 h-4 rounded-full border-2 ${isCompleted ? "bg-green-700 border-green-700" : "border-green-300"}`, children: isHighlighted && /* @__PURE__ */ jsx("svg", { className: "w-3 h-3 text-green", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }) }),
      /* @__PURE__ */ jsx("span", { className: `text-sm ${isCompleted ? "line-through text-gray-500" : "text-gray-900"}`, children: title })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-green-600", children: [
        "+",
        points,
        " pts"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: time })
    ] })
  ] });
};

const defaultLabel = "selects a task";
const TasksSection = ({ title = "My Tasks" }) => {
  const [tasks, setTasks] = useState(
    [
      { title: "Complete project proposal", points: 50, time: "10:00 AM" },
      { title: "Review client feedback", points: 50, time: "11:30 AM" },
      { title: "Team meeting", points: 50, time: "1:00 PM" },
      { title: "Update documentation", points: 50, time: "3:00 PM" },
      { title: "Send weekly report", points: 50, time: "5:00 PM" }
    ].map((task, i) => ({ ...task, id: `${i + 1}` }))
  );
  const [selectedTaskId, setSelectedTaskId] = useState();
  const [label, setLabel] = useState(defaultLabel);
  const [completedTaskId, setCompletedTaskId] = useState();
  const [hide, setHided] = useState(false);
  useEffect(() => {
    setLabel(selectedTaskId === void 0 ? defaultLabel : "Clear");
    if (selectedTaskId) {
      scrollToItem(selectedTaskId);
    }
  }, [selectedTaskId]);
  useEffect(() => {
    if (tasks.length === 0) {
      setTimeout(() => {
        setHided(true);
      }, 3e3);
    }
  }, [tasks]);
  const scrollToItem = (id) => {
    if (id === tasks[tasks.length - 1].id) {
      itemRefs[id].scrollIntoView(false);
    } else {
      itemRefs[id].scrollIntoView({ block: "center", behaviour: "smooth", inline: "nearest" });
    }
  };
  const selectFirstTask = () => {
    const firstTaskId = tasks[0].id;
    setSelectedTaskId(firstTaskId);
  };
  const deselectTask = () => {
    setSelectedTaskId(void 0);
  };
  const onTaskClick = (id) => {
    if (selectedTaskId === id) {
      deselectTask();
    } else {
      setSelectedTaskId(id);
    }
  };
  const playTask = () => {
    setCompletedTaskId(selectedTaskId);
    setTimeout(() => {
      const nextTaskId = getNextTaskId();
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === selectedTaskId) {
          delete itemRefs[tasks[i].id];
          delete tasks[i];
        }
      }
      setTasks(tasks.filter((task) => task !== void 0));
      setSelectedTaskId(nextTaskId);
    }, 250);
  };
  const getNextTaskId = () => {
    if (selectedTaskId) {
      const currentIndex = tasks.findIndex((task) => task.id === selectedTaskId);
      const nextIndex = (currentIndex + 1) % tasks.length;
      const nextTaskId = tasks[nextIndex].id;
      return nextTaskId;
    }
  };
  const selectNextTask = () => {
    if (selectedTaskId) {
      const currentIndex = tasks.findIndex((task) => task.id === selectedTaskId);
      const nextIndex = (currentIndex + 1) % tasks.length;
      const nextTaskId = tasks[nextIndex].id;
      setSelectedTaskId(nextTaskId);
    }
  };
  const selectPreviousTask = () => {
    if (selectedTaskId) {
      const currentIndex = tasks.findIndex((task) => task.id === selectedTaskId);
      const previousIndex = (currentIndex - 1 + tasks.length) % tasks.length;
      const previousTaskId = tasks[previousIndex].id;
      setSelectedTaskId(previousTaskId);
    }
  };
  useHotkeys("enter", () => {
    if (selectedTaskId) playTask();
    else selectFirstTask();
  });
  useHotkeys("left", selectPreviousTask);
  useHotkeys("esc", deselectTask);
  useHotkeys("right", selectNextTask);
  const itemRefs = {};
  return tasks.length > 0 ? /* @__PURE__ */ jsxs(C$1, { className: `mb-${GridStyle.panel.gap.y}`, title: /* @__PURE__ */ jsxs("div", { children: [
    title,
    /* @__PURE__ */ jsx(Badge, { variant: "red", children: tasks.length }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 font-normal text-center", children: "Complete the management tasks." })
  ] }), rightHeader: /* @__PURE__ */ jsx(ProjectRating, {}), children: [
    /* @__PURE__ */ jsx("div", { className: `p-4 space-y-3 lg:max-h-[30vh] overflow-y-auto ${bgClassNames.listContent}`, children: tasks.map(
      (task) => /* @__PURE__ */ jsx(TaskItem, { ...task, ref: (el) => itemRefs[task.id] = el, onTaskClick, completedTaskId, selectedTaskId })
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "h-6 flex justify-between", children: [
      /* @__PURE__ */ jsx(
        Component,
        {
          content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: selectedTaskId ? "Press Esc to deselect the task." : "Press Enter to select the first task." }),
          children: /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: selectedTaskId ? deselectTask : selectFirstTask,
              variant: selectedTaskId ? "secondary-outline" : "outline",
              className: "flex flex-start space-x-1 m-0 p-1!",
              children: [
                /* @__PURE__ */ jsx("kbd", { className: "kbd border border-gray-300 rounded-sm border-solid px-1 w-12 block", children: selectedTaskId ? "Esc" : "Enter" }),
                /* @__PURE__ */ jsx("div", { children: label })
              ]
            }
          )
        }
      ),
      selectedTaskId && /* @__PURE__ */ jsx(
        Component,
        {
          content: /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Press Enter to start the quest system. Guides and notifications, and Auto UI will guide you through the process. Minimum effort." }),
          children: /* @__PURE__ */ jsxs(Button, { onClick: playTask, variant: "primary", className: "flex flex-start space-x-1 m-0 p-1!", children: [
            /* @__PURE__ */ jsx("kbd", { className: "kbd border border-gray-300 rounded-sm border-solid px-1 text-gray-600 w-12 block", children: "Enter" }),
            /* @__PURE__ */ jsx("div", { children: "Play" })
          ] })
        }
      ),
      selectedTaskId && /* @__PURE__ */ jsx(
        Component,
        {
          content: /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
            "Press on ◀︎   ▶︎ arrow buttons to select previous or next task.",
            /* @__PURE__ */ jsx("br", {}),
            "Pressing on the button will select the next task."
          ] }),
          children: /* @__PURE__ */ jsxs(Button, { onClick: selectNextTask, variant: "secondary-outline", className: "flex flex-start space-x-1 m-0 p-1!", children: [
            /* @__PURE__ */ jsx("kbd", { className: "kbd border border-gray-300 rounded-sm border-solid px-1 w-12 block", children: "◀︎    ▶︎" }),
            /* @__PURE__ */ jsx("div", { children: "Change Task" })
          ] })
        }
      )
    ] })
  ] }) : hide ? null : /* @__PURE__ */ jsx(C$1, { className: `mb-${GridStyle.panel.gap.y}`, title: /* @__PURE__ */ jsxs("div", { children: [
    "Tasks are completed",
    /* @__PURE__ */ jsx(Badge, { variant: "info", children: tasks.length })
  ] }), rightHeader: /* @__PURE__ */ jsx(ProjectRating, {}), children: /* @__PURE__ */ jsx("div", { className: `p-4 space-y-3 lg:max-h-[30vh] overflow-y-auto`, children: "Come back in a few days later. No tasks to do." }) });
};

const DependencyCard = ({
  name,
  version,
  rating,
  status,
  description,
  links,
  followers
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg border border-gray-200 p-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: version })
      ] }),
      rating && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-yellow-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }),
        /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
          rating,
          "k"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx("span", { className: `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${status === "registered" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: status === "registered" ? "registered" : "Not on platform" }) }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-3 line-clamp-3", children: description }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("a", { href: links.website, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z", clipRule: "evenodd" }) }) }),
        /* @__PURE__ */ jsx("a", { href: links.github, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z", clipRule: "evenodd" }) }) })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: followers })
    ] })
  ] });
};

const C = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const dependencies = [
    {
      name: "TailwindCSS",
      version: "v3.3",
      rating: 71.5,
      status: "registered",
      description: "A utility-first CSS framework for rapidly building custom user interfaces. You Don't Have To Worry About Specificity...",
      links: {
        website: "#",
        github: "#"
      },
      followers: "4.2M"
    },
    {
      name: "React",
      version: "v18.2.0",
      rating: null,
      status: "not-on-platform",
      description: "Description is not available...",
      links: {
        website: "#",
        github: "#"
      },
      followers: "4.2M"
    },
    {
      name: "TailwindCSS",
      version: "v3.3",
      rating: 71.5,
      status: "registered",
      description: "A utility-first CSS framework for rapidly building custom user interfaces. You Don't Have To Worry About Specificity...",
      links: {
        website: "#",
        github: "#"
      },
      followers: "4.2M"
    }
  ];
  return /* @__PURE__ */ jsxs(Component$1, { className: "bg-task-yellow", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 -mt-3 mb-1", children: "Browse projects, then create issue about your needed feature, suggestion. Your issues might affect the rating of the package." }),
    /* @__PURE__ */ jsxs("div", { className: "flex space-x-2 mb-4", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: activeFilter === "all" ? "primary" : "secondary",
          size: "sm",
          onClick: () => setActiveFilter("all"),
          children: "All"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: activeFilter === "not-on-platform" ? "danger" : "secondary",
          size: "sm",
          onClick: () => setActiveFilter("not-on-platform"),
          children: "Not on platform"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: activeFilter === "on-platform" ? "success" : "secondary",
          size: "sm",
          onClick: () => setActiveFilter("on-platform"),
          children: "On platform"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: activeFilter === "following" ? "info" : "secondary",
          size: "sm",
          onClick: () => setActiveFilter("following"),
          children: "Following"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Search Dependencies...",
          className: "w-full px-3 py-1 border border-gray-300 rounded text-sm"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: dependencies.map((dep, index) => /* @__PURE__ */ jsx(DependencyCard, { ...dep }, index)) })
  ] });
};

const FilterBar = ({
  filters,
  sortBy,
  sortOptions,
  onFilterChange,
  onSortChange
}) => {
  const getFilterButtonClasses = (filter) => {
    const baseClasses = "px-4 py-2 text-sm font-medium rounded-lg transition-colors";
    if (filter.active) {
      const colorClasses = {
        gray: "bg-gray-200 text-gray-800",
        green: "bg-green-500 text-white",
        purple: "bg-purple-500 text-white",
        orange: "bg-orange-500 text-white"
      };
      return `${baseClasses} ${colorClasses[filter.color]}`;
    }
    return `${baseClasses} bg-gray-100 text-gray-600 hover:bg-gray-200`;
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2", children: filters.map((filter) => /* @__PURE__ */ jsx(
      "button",
      {
        className: getFilterButtonClasses(filter),
        onClick: () => onFilterChange?.(filter.id),
        children: filter.label
      },
      filter.id
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Sort by:" }),
      /* @__PURE__ */ jsx(
        "select",
        {
          className: "border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
          value: sortBy,
          onChange: (e) => onSortChange?.(e.target.value),
          children: sortOptions.map((option) => /* @__PURE__ */ jsx("option", { value: option, children: option }, option))
        }
      )
    ] })
  ] });
};

const UserCard = ({
  avatar,
  name,
  rating,
  description,
  highlightedInteraction,
  stats,
  isFollowing,
  onFollowToggle
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-yellow-100 rounded-lg p-6 border border-yellow-200", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: avatar,
            alt: name,
            className: "w-10 h-10 rounded-full",
            referrerPolicy: "no-referrer"
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900", children: name }),
          /* @__PURE__ */ jsxs(Badge, { variant: "yellow", children: [
            rating,
            " rating"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: isFollowing ? "secondary" : "primary",
          size: "sm",
          onClick: onFollowToggle,
          children: isFollowing ? "Following" : "Follow"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-700 text-sm mb-4", children: description }),
    /* @__PURE__ */ jsxs("div", { className: "bg-green-100 rounded-lg p-4 mb-4", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-900 mb-2", children: "Highlighted Interaction" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: highlightedInteraction.avatar,
            alt: highlightedInteraction.name,
            className: "w-8 h-8 rounded-full",
            referrerPolicy: "no-referrer"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 mb-1", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-sm text-gray-900", children: highlightedInteraction.name }),
            /* @__PURE__ */ jsx(Badge, { variant: "green", children: highlightedInteraction.rating })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700 mb-1", children: [
            '"',
            highlightedInteraction.comment,
            '"'
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: highlightedInteraction.time })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center mt-3 space-x-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-gray-300 rounded-full" }),
        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-gray-300 rounded-full" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 text-sm text-gray-600", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", clipRule: "evenodd" }) }),
        /* @__PURE__ */ jsx("span", { children: stats.date })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" }) }),
        /* @__PURE__ */ jsxs("span", { children: [
          stats.followers,
          " followers"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z", clipRule: "evenodd" }) }),
        /* @__PURE__ */ jsxs("span", { className: "text-blue-600", children: [
          stats.projects,
          " projects"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z", clipRule: "evenodd" }) }),
        /* @__PURE__ */ jsx(Badge, { variant: "blue", children: "4" })
      ] })
    ] })
  ] });
};

const MainContent = () => {
  const filters = [
    { id: "all", label: "All", active: true, color: "gray" },
    { id: "maintainer", label: "Maintainer", active: false, color: "green" },
    { id: "influencer", label: "Influencer", active: false, color: "purple" },
    { id: "contributor", label: "Contributor", active: false, color: "orange" }
  ];
  return /* @__PURE__ */ jsxs(Component$1, { className: "max-w-4xl", children: [
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      FilterBar,
      {
        filters,
        sortBy: "Rating",
        sortOptions: ["Rating", "Name", "Date"]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-4", children: /* @__PURE__ */ jsx(
      UserCard,
      {
        avatar: "https://dummyimage.com/40x40/f59e0b/ffffff?text=S",
        name: "Serkan Balguliyev",
        rating: 220,
        description: "The dashboard layout breaks on iPad and other tablet devices in landscape orientation. Elements overlap and some controls become inaccessible.",
        highlightedInteraction: {
          avatar: "https://dummyimage.com/32x32/10b981/ffffff?text=S",
          name: "Sarah Johnson",
          rating: 244,
          comment: "David your code is really good.",
          time: "Today at 9:22 AM"
        },
        stats: {
          date: "Oct 5, 2023",
          followers: 5,
          projects: 2
        },
        isFollowing: false
      }
    ) })
  ] });
};

const DependenciesSection = () => {
  const tabs = [
    {
      label: "Dependencies",
      key: "dependencies",
      content: /* @__PURE__ */ jsx(C, {})
    },
    {
      label: "Following Issues",
      key: "following-issues",
      content: /* @__PURE__ */ jsx(ContentArea, {})
    },
    {
      label: "Following Rockstars",
      key: "following-rockstars",
      content: /* @__PURE__ */ jsx(MainContent, {})
    }
  ];
  return /* @__PURE__ */ jsx(CworkTab, { activeTab: "dependencies", tabs });
};

const $$Cwork = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "active": ItemName.ProjectName }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "slot": "center", "type": "warning", "title": "Cascading Work page is a quest based interaction with the library maintainers." }, { "default": ($$result3) => renderTemplate`
Got a bug, need a feature, have a question? Then, help to make the library
    better for you and for the world
` })}${renderComponent($$result2, "TaskSection", TasksSection, { "slot": "center", "title": "My Cascading Tasks", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/quest/QuestPanel", "client:component-export": "default" })}${renderComponent($$result2, "CworkPanel", DependenciesSection, { "slot": "center", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/maintainer/CworkPanel", "client:component-export": "default" })}`, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "Menu", Panel, { "slot": "left", "activeMenuItem": "cwork" })}`, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "Card", C$1, { "slot": "right", "title": "Dependencies Info" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="space-y-3"> <div> <div class="flex justify-between items-center"> <span class="text-sm text-gray-600">Current version:</span> <span class="font-semibold">v2.4.3</span> </div> </div> <div> <div class="flex justify-between items-center"> <span class="text-sm text-gray-600">Recent version:</span> <span class="font-semibold text-cascade-blue">v2.5.0</span> </div> </div> <div> <div class="flex justify-between items-center"> <span class="text-sm text-gray-600">Last commit:</span> <span class="font-semibold">2 hours ago</span> </div> </div> </div> <div class="mt-4 pt-4 border-t border-gray-200"> <p class="text-xs text-gray-500 mb-2">
Dependencies List is generated using project's SBOM. To fetch the SBOM,
        we use GitHub API.
</p> <p class="text-xs text-gray-500">
The management of the packages is done on your IDE, once it's updated,
        deleted or added a new package, then click on "Update Dependencies"
        button above.
</p> </div> ` })}` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/maintainer/cwork.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/maintainer/cwork.astro";
const $$url = "/maintainer/cwork";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cwork,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
