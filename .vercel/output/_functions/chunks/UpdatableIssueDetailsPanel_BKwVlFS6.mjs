import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { C } from './PagePanel_vRXEIxzy.mjs';
import { c as cn, i as Badge, d as Button } from './Panel_CAMdPLdB.mjs';

function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

const IssueContent = (props) => {
  const [title, setTitle] = useState(props.title || "");
  const [description, setDescription] = useState(props.description || "");
  return /* @__PURE__ */ jsxs(C, { title: props.panelTitle || "Update The Issue", actions: props.actions || [], rightHeader: /* @__PURE__ */ jsx(Badge, { variant: "gray", children: "Don't affect rating" }), children: [
    /* @__PURE__ */ jsx(
      Input,
      {
        type: "text",
        placeholder: "Title...",
        value: title,
        onChange: (e) => setTitle(e.target.value),
        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      }
    ),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        placeholder: "Description",
        value: description,
        onChange: (e) => setDescription(e.target.value),
        rows: 12,
        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      }
    )
  ] });
};

const Tag = ({ score, label, variant = "gray", removable = false, onRemove }) => {
  let variantClasses = variant;
  if (variant === "orange") {
    variantClasses = "bg-orange-100 text-orange-800";
  }
  if (variant === "red") {
    variantClasses = "bg-red-100 text-red-800";
  }
  if (variant === "blue") {
    variantClasses = "bg-blue-100 text-blue-800";
  }
  if (variant === "gray") {
    variantClasses = "bg-gray-100 text-gray-800";
  }
  return /* @__PURE__ */ jsxs("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses}`, children: [
    label,
    score && /* @__PURE__ */ jsx("span", { className: "ml-1 px-1.5 py-0.5 bg-white rounded-full text-xs font-bold", children: score }),
    removable && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onRemove,
        className: "flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center hover:bg-black hover:bg-opacity-20 focus:outline-none",
        children: /* @__PURE__ */ jsx("svg", { className: "h-2 w-2", stroke: "currentColor", fill: "none", viewBox: "0 0 8 8", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeWidth: "1.5", d: "m1 1 6 6m0-6-6 6" }) })
      }
    )
  ] });
};

const Panel = () => {
  return /* @__PURE__ */ jsx(C, { title: "Updateable Issue Details", actions: [{
    variant: "blue",
    href: "/data/issue",
    children: "Save"
  }], children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Status:" }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-600", children: "Open" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Created:" }),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-900", children: "3 days ago" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Updated:" }),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-900", children: "Today" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Assignee:" }),
      /* @__PURE__ */ jsx("button", { className: "text-sm text-gray-500 border border-gray-300 rounded px-2 py-1 hover:bg-gray-50", children: "Search teammates, people" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Likes" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-red-500", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z", clipRule: "evenodd" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-900", children: "23" }),
        /* @__PURE__ */ jsx(Button, { variant: "primary", size: "sm", children: "Follow" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600 block mb-2", children: "Tags" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-3", children: [
        /* @__PURE__ */ jsx(Tag, { label: "Suggested", variant: "orange", removable: true }),
        /* @__PURE__ */ jsx(Tag, { label: "Bug", variant: "red", removable: true })
      ] }),
      /* @__PURE__ */ jsx("select", { className: "w-full text-sm border border-gray-300 rounded px-3 py-2 bg-white", children: /* @__PURE__ */ jsx("option", { children: "Add a tag" }) })
    ] })
  ] }) });
};

export { IssueContent as I, Panel as P };
