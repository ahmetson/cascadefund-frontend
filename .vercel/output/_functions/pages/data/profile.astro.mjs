import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_DZoFJRV9.mjs';
import { I as ItemName, $ as $$PanelViewLayout } from '../../chunks/PanelViewLayout_D70TRW56.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { d as Button, C as CollaborationSection, a as Component, b as Component$1, i as Badge, A as ActiveLoginNavItem } from '../../chunks/Panel_CAMdPLdB.mjs';
import { AnimatePresence, motion } from 'motion/react';
import { B as BackButton } from '../../chunks/BackButton_DejlPjMB.mjs';
import { C as C$1 } from '../../chunks/PagePanel_vRXEIxzy.mjs';
import { C as CworkTab } from '../../chunks/Tabs_C1ECpvji.mjs';
export { renderers } from '../../renderers.mjs';

const ProfileSection = ({ onActionClick }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
    /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://dummyimage.com/64x64/4A90E2/ffffff?text=AH",
        alt: "Ahmetson Profile",
        className: "w-full h-full object-cover",
        referrerPolicy: "no-referrer"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Ahmetson" }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-yellow-300", children: "★" }),
          /* @__PURE__ */ jsx("span", { children: "1.0" }),
          /* @__PURE__ */ jsx("span", { className: "text-green-300", children: "✓" }),
          /* @__PURE__ */ jsx("span", { children: "2/23" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-1", children: "Full Stack Developer & Open Source Enthusiast" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 text-sm text-gray-600 mb-3", children: [
        /* @__PURE__ */ jsx("span", { children: "♥ 23" }),
        /* @__PURE__ */ jsx(Button, { variant: "pink-950", size: "sm", className: "border-white bg-red-400 hover:bg-red-600", children: "Follow" }),
        /* @__PURE__ */ jsx("span", { children: "220 Voting Power" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-2", children: "GitHub since 2018, CascadeFund member since January 2022" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: "📍 San Francisco, CA" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm mb-4", children: "Passionate about building scalable web applications and contributing to open source projects. Specialized in JavaScript ecosystems and distributed systems. Always looking for challenging problems to solve and new technologies to explore." }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z", clipRule: "evenodd" }) }) }),
          /* @__PURE__ */ jsx("div", { className: "space-x-2", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: " space-x-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-1", children: /* @__PURE__ */ jsx(Button, { variant: "blue", onClick: onActionClick, children: "Edit" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4" })
  ] });
};

const ProfileCard = ({ onActionClick }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://dummyimage.com/80x80/4A5568/ffffff?text=User",
            alt: "Ahmetson",
            className: "w-20 h-20 rounded-full",
            referrerPolicy: "no-referrer"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs", children: "✓" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-gray-200 rounded px-3 py-2 mb-2", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-800", children: "Ahmetson" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-2", children: "Full Stack Developer & Open Source Enthusiast" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-xs mb-4", children: "San Francisco, CA" }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4 text-xs text-gray-500 mb-4", children: /* @__PURE__ */ jsx("span", { children: "Github since 2018, CascadeFund member since January 2022" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 mb-4", children: "Passionate about building scalable web applications and contributing to open source projects. Specialized in JavaScript ecosystems and distributed systems. Always looking for challenging problems to solve and new technologies to explore." }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4 text-sm text-gray-500 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z", clipRule: "evenodd" }) }),
          /* @__PURE__ */ jsx("span", { children: "linkedin.com/in/ahmetson" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 mb-4", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", id: "financial-status", className: "rounded" }),
          /* @__PURE__ */ jsx("label", { htmlFor: "financial-status", className: "text-sm text-gray-600", children: "Public Financial Status" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: "Rating:" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-yellow-500 font-semibold", children: "220" }),
            /* @__PURE__ */ jsx("span", { className: "text-green-500 text-xs", children: "+24" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "Voting Power" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "♥" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "23" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "blue", onClick: onActionClick, children: "Save Changes" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t", children: [
      /* @__PURE__ */ jsx(CollaborationSection, { variant: "orange", label: "Log out", href: "/" }),
      /* @__PURE__ */ jsx(Component, { className: "ml-4 text-sm text-blue-600 cursor-pointer", href: "/data/projects", children: "View All Projects" }),
      /* @__PURE__ */ jsxs("div", { className: "inline-flex ml-2 space-x-1", children: [
        /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-red-500 text-center text-white rounded-full", children: "2" }),
        /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-blue-500 text-center text-white rounded-full", children: "0" })
      ] })
    ] })
  ] });
};

const C = () => {
  const [updateable, setUpdateable] = useState(false);
  return /* @__PURE__ */ jsx(Component$1, { className: "bg-gradient-to-r from-yellow-50 to-green-50 mb-8", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { y: 10, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -10, opacity: 0 },
      transition: { duration: 0.2, when: "beforeChildren", delayChildren: 0.2 },
      children: !updateable ? /* @__PURE__ */ jsx(ProfileSection, { onActionClick: () => {
        setUpdateable(true);
      } }) : /* @__PURE__ */ jsx(ProfileCard, { onActionClick: () => {
        setUpdateable(false);
      } })
    },
    updateable ? "updateable" : "view"
  ) }) });
};

const Sidebar$1 = () => {
  return /* @__PURE__ */ jsxs(Component$1, { children: [
    /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-4", children: "Recent Activity" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: 'Completed task "Fix responsive layout" in UI Framework' }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-500 text-xs mt-1", children: "Average visit: Once in a week" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsxs("h4", { className: "font-medium mb-3 flex items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-yellow-500 mr-2", children: "★" }),
        "Highlighted Interaction"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full overflow-hidden flex-shrink-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://dummyimage.com/32x32/4A90E2/ffffff?text=SJ",
            alt: "Sarah Johnson",
            className: "w-full h-full object-cover",
            referrerpolicy: "no-referrer"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Sarah Johnson" }),
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", size: "sm", children: "220 rating" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: "@David your code is really good!" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Today at 8:22 AM" })
        ] })
      ] })
    ] })
  ] });
};

const FinancialStatus = () => {
  return /* @__PURE__ */ jsx(C$1, { title: "Financial Status", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "All time Balance / All time Cascade Balance" }),
        /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold", children: [
          "$1,250.00 ",
          /* @__PURE__ */ jsx("span", { className: "text-lg text-gray-500", children: "/ $3,450.00" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Total Donations" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-blue-500", children: "$4,780.00" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t pt-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-2", children: "Your Role in CascadeFund" }),
      /* @__PURE__ */ jsx("span", { className: "bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm", children: "Influencer" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Your project donations ($4,780) exceed your balance ($1,250), making you an influential supporter of open source development." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-2", children: "Monthly Activity" }),
        /* @__PURE__ */ jsx("div", { className: "h-20 bg-gray-100 rounded flex items-end justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-full h-full", viewBox: "0 0 100 50", children: /* @__PURE__ */ jsx(
          "polyline",
          {
            fill: "none",
            stroke: "#6B7280",
            strokeWidth: "2",
            points: "10,40 20,35 30,30 40,25 50,20 60,25 70,30 80,35 90,40"
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-2", children: "Spending Distribution" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-600", children: "Bug Bounties" }),
            /* @__PURE__ */ jsx("span", { children: "$2,340.00 (49%)" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-1", children: /* @__PURE__ */ jsx("div", { className: "bg-green-500 h-1 rounded-full", style: { width: "49%" } }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "Feature Development" }),
            /* @__PURE__ */ jsx("span", { children: "$1,450.00 (30%)" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-1", children: /* @__PURE__ */ jsx("div", { className: "bg-blue-500 h-1 rounded-full", style: { width: "30%" } }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs", children: [
            /* @__PURE__ */ jsx("span", { className: "text-purple-600", children: "Documentation" }),
            /* @__PURE__ */ jsx("span", { children: "$650.00 (14%)" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-1", children: /* @__PURE__ */ jsx("div", { className: "bg-purple-500 h-1 rounded-full", style: { width: "14%" } }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs", children: [
            /* @__PURE__ */ jsx("span", { className: "text-yellow-600", children: "Code Reviews" }),
            /* @__PURE__ */ jsx("span", { children: "$340.00 (7%)" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-1", children: /* @__PURE__ */ jsx("div", { className: "bg-yellow-500 h-1 rounded-full", style: { width: "7%" } }) })
        ] })
      ] })
    ] })
  ] }) });
};

const Slider = ({
  label,
  leftLabel,
  rightLabel,
  value,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs("div", { className: `space-y-1 ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-gray-600", children: [
      /* @__PURE__ */ jsx("span", { children: leftLabel }),
      /* @__PURE__ */ jsx("span", { children: rightLabel })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-blue-500 h-2 rounded-full relative",
        style: { width: `${value}%` },
        children: /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow" })
      }
    ) }) })
  ] });
};

const WorkStyleSection = () => {
  return /* @__PURE__ */ jsxs(C$1, { title: "Availability & Work Style", actions: [], bg: "green-50", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-medium mb-4", children: "Availability Status" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-yellow-400 rounded-full" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Partially Available" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Estimated by CascadeFund, not guaranteed" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx("h5", { className: "font-medium mb-4", children: "Communication Style" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx(Slider, { label: "Direct", leftLabel: "Direct", rightLabel: "Thinking style", value: 25 }),
            /* @__PURE__ */ jsx(Slider, { label: "Verbal", leftLabel: "Verbal", rightLabel: "Gently discussing", value: 40 }),
            /* @__PURE__ */ jsx(Slider, { label: "Approach", leftLabel: "Approach", rightLabel: "Cautious", value: 60 }),
            /* @__PURE__ */ jsx(Slider, { label: "Ideas", leftLabel: "Ideas", rightLabel: "Encouraging", value: 30 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-medium mb-4", children: "Work Methodology" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx(Slider, { label: "Less face-to-face", leftLabel: "Less face-to-face", rightLabel: "Technology Preference", value: 70 }),
          /* @__PURE__ */ jsx(Slider, { label: "Big Picture", leftLabel: "Big Picture", rightLabel: "Task Performance", value: 45 }),
          /* @__PURE__ */ jsx(Slider, { label: "Don't rush me", leftLabel: "Don't rush me", rightLabel: "Work ethics", value: 35 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx("h5", { className: "font-medium mb-4", children: "Collaboration Style" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx(Slider, { label: "Research first", leftLabel: "Research first", rightLabel: "Proactive", value: 40 }),
            /* @__PURE__ */ jsx(Slider, { label: "Prefer alone", leftLabel: "Prefer alone", rightLabel: "Brainstorming with people", value: 65 }),
            /* @__PURE__ */ jsx(Slider, { label: "Creative", leftLabel: "Creative", rightLabel: "Structured", value: 55 })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-6", children: "Estimated by CascadeFund based on communication analysis" })
  ] });
};

const Sidebar = () => {
  return /* @__PURE__ */ jsxs(C$1, { title: "Project Time Allocation", bg: "green-50", rightHeader: [/* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" }) }) })], children: [
    /* @__PURE__ */ jsx("div", { className: "relative w-48 h-48 mx-auto mb-4", children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full transform -rotate-90", viewBox: "0 0 100 100", children: [
      /* @__PURE__ */ jsx("circle", { cx: "50", cy: "50", r: "40", fill: "none", stroke: "#e5e7eb", strokeWidth: "8" }),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "50",
          cy: "50",
          r: "40",
          fill: "none",
          stroke: "#10b981",
          strokeWidth: "8",
          strokeDasharray: "125.6",
          strokeDashoffset: "62.8"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "50",
          cy: "50",
          r: "40",
          fill: "none",
          stroke: "#3b82f6",
          strokeWidth: "8",
          strokeDasharray: "125.6",
          strokeDashoffset: "31.4"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "50",
          cy: "50",
          r: "40",
          fill: "none",
          stroke: "#6b7280",
          strokeWidth: "8",
          strokeDasharray: "125.6",
          strokeDashoffset: "94.2"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-teal-500 rounded-full" }),
        /* @__PURE__ */ jsx("span", { children: "UI Framework (45%)" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-blue-500 rounded-full" }),
        /* @__PURE__ */ jsx("span", { children: "Data Processing API (30%)" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-gray-500 rounded-full" }),
        /* @__PURE__ */ jsx("span", { children: "Documentation Portal (15%)" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-purple-500 rounded-full" }),
        /* @__PURE__ */ jsx("span", { children: "Other projects (10%)" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Top 3 projects of the user:" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [
        /* @__PURE__ */ jsx(Badge, { variant: "blue", children: "Maintaining" }),
        /* @__PURE__ */ jsx(Badge, { variant: "yellow", children: "Contributor" }),
        /* @__PURE__ */ jsx(Badge, { variant: "purple", children: "Influencer" })
      ] })
    ] })
  ] });
};

const Panel = () => {
  const activeTabeKey = "workStyle";
  const tabs = [
    {
      label: "Availability & Work Style",
      key: "workStyle",
      content: /* @__PURE__ */ jsx(WorkStyleSection, {})
    },
    {
      label: "Project Time Allocation",
      key: "projectTimeAllocation",
      content: /* @__PURE__ */ jsx(Sidebar, {})
    }
  ];
  return /* @__PURE__ */ jsx(Component$1, { children: /* @__PURE__ */ jsx(CworkTab, { tabs, activeTab: activeTabeKey }) });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "active": ActiveLoginNavItem, "hideLinks": [ItemName.ProjectName], "subtitle": "Data Section: Profile" }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "ProfileInfo", C, { "slot": "center", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/profile/ProfileInfoPanel", "client:component-export": "default" })}${renderComponent($$result2, "ProfileMetric", Panel, { "slot": "center", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/profile/ProfileMetricPanel", "client:component-export": "default" })}`, "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "FinanceInfo", FinancialStatus, {})}    `, "left": ($$result2) => renderTemplate`${renderComponent($$result2, "BackButton", BackButton, { "href": "/maintainer/work", "slot": "left" })}`, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "RecentActivity", Sidebar$1, { "slot": "right" })}` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/data/profile/index.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/data/profile/index.astro";
const $$url = "/data/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
