import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DZoFJRV9.mjs';
import { I as ItemName, $ as $$PanelViewLayout } from '../../../chunks/PanelViewLayout_D70TRW56.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { C as C$2, g as getIcon } from '../../../chunks/PagePanel_vRXEIxzy.mjs';
import { P as ProgressBar } from '../../../chunks/ProgressBar_YxJUfyFB.mjs';
import { b as Component, a as Component$1, C as CollaborationSection, G as GridStyle } from '../../../chunks/Panel_CAMdPLdB.mjs';
import { N as NotificationBanner } from '../../../chunks/NotificationBanner_5gBaVSgc.mjs';
import { $ as $$InfoPanel2 } from '../../../chunks/InfoPanel2_PoZFD6BN.mjs';
export { renderers } from '../../../renderers.mjs';

const Input = ({
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  disabled = false
}) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      id,
      type,
      value,
      onChange,
      placeholder,
      disabled,
      className: `px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-purple-50 ${disabled ? "bg-gray-100 cursor-not-allowed" : ""} ${className}`
    }
  );
};

const C$1 = ({ onActionClick }) => {
  const [repositoryUrl, setRepositoryUrl] = useState();
  return /* @__PURE__ */ jsx(
    C$2,
    {
      icon: "new-file",
      titleCenter: true,
      title: "Add GitHub Repository",
      actions: [{ variant: "blue", onClick: () => {
        onActionClick && onActionClick(repositoryUrl);
      }, children: "Next" }],
      children: /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
        /* @__PURE__ */ jsxs("label", { htmlFor: "repository-url", className: "block text-sm text-gray-700", children: [
          "Repository URL",
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "repository-url",
              type: "url",
              value: repositoryUrl || "",
              onChange: (e) => setRepositoryUrl(e.target.value),
              placeholder: "https://github.com/username/repository",
              className: "w-full mt-1"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center", children: [
          getIcon("info"),
          " ",
          /* @__PURE__ */ jsx("span", { children: "You can add only your projects." })
        ] })
      ] })
    }
  );
};

const ProgressStep = ({ title, description, status, progress }) => {
  const getStatusIcon = () => {
    switch (status) {
      case "completed":
        return /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-green-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M20 6L9 17L4 12", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) });
      case "in-progress":
        return /* @__PURE__ */ jsxs("div", { className: "w-6 h-6 bg-green-500 rounded-full flex items-center justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-white rounded-full" }),
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-white rounded-full ml-0.5" })
        ] });
      default:
        return /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-gray-300 rounded-full" });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mt-1", children: getStatusIcon() }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-base font-medium text-gray-800 mb-1", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-3", children: description }),
      /* @__PURE__ */ jsx(ProgressBar, { percentage: progress })
    ] })
  ] });
};

const ConnectionCard$2 = ({ onActionClick }) => {
  const steps = [
    {
      id: 1,
      title: "Initiating a session",
      description: "Successfully established a secure connection to GitHub's API",
      status: "completed",
      progress: 100
    },
    {
      id: 2,
      title: "Downloading project information from GitHub",
      description: "Retrieved repository metadata, commit history, and contributor information",
      status: "completed",
      progress: 85
    },
    {
      id: 3,
      title: "Fetching the SBOM",
      description: "Software Bill of Materials successfully generated and analyzed",
      status: "in-progress",
      progress: 60
    },
    {
      id: 4,
      title: "Analyzing dependencies",
      description: "Identified and categorized all project dependencies",
      status: "in-progress",
      progress: 75
    },
    {
      id: 5,
      title: "Preparing project summary",
      description: "Compilation of repository data complete and ready for review",
      status: "in-progress",
      progress: 40
    }
  ];
  return /* @__PURE__ */ jsxs(
    C$2,
    {
      title: /* @__PURE__ */ jsxs("div", { className: "flex justify-left", children: [
        /* @__PURE__ */ jsx("svg", { className: "mr-2", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", stroke: "#10B981", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }),
        "Connecting to Repo Host"
      ] }),
      actions: [{
        variant: "blue",
        children: "Next",
        onClick: () => {
          onActionClick && onActionClick({});
        }
      }],
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "We're establishing a connection to GitHub and retrieving information about your repository. This process may take a few moments." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6 mb-8", children: steps.map((step) => /* @__PURE__ */ jsx(
          ProgressStep,
          {
            title: step.title,
            description: step.description,
            status: step.status,
            progress: step.progress
          },
          step.id
        )) })
      ]
    }
  );
};

const SearchBar = ({ value, onChange, placeholder }) => {
  return /* @__PURE__ */ jsxs("div", { className: "relative mb-4", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value,
        onChange: (e) => onChange(e.target.value),
        placeholder,
        className: "w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-400", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", clipRule: "evenodd" }) }) })
  ] });
};

const IssueCard = ({ issue, isSelected, onSelect }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case "improvement":
        return "bg-blue-100 text-blue-800";
      case "feature":
        return "bg-green-100 text-green-800";
      case "bug":
        return "bg-red-100 text-red-800";
      case "enhancement":
        return "bg-purple-100 text-purple-800";
      case "custom":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: `border rounded-lg p-4 cursor-pointer transition-colors ${isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`,
      onClick: onSelect,
      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mt-1", children: /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            checked: isSelected,
            onChange: onSelect,
            className: "w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "ml-3 flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-900 mr-2", children: issue.number }),
            /* @__PURE__ */ jsx("span", { className: `px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(issue.type)}`, children: issue.type })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-gray-900 mb-1", children: issue.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: issue.description })
        ] })
      ] })
    }
  );
};

const IssueSelector = ({ className, onActionClick, selectedIssues, onIssueSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const issues = [
    {
      id: "142",
      number: "#142",
      title: "Improve blockchain verification performance",
      description: "Transaction verification takes too long on large repositories",
      type: "improvement"
    },
    {
      id: "156",
      number: "#156",
      title: "Add support for Solana blockchain",
      description: "Currently only supports Ethereum and Polygon networks",
      type: "feature"
    },
    {
      id: "189",
      number: "#189",
      title: "Fix dependency vulnerability in crypto module",
      description: "Security issue identified in v2.3.1 of the crypto verification module",
      type: "bug"
    },
    {
      id: "201",
      number: "#201",
      title: "Implement batch processing for large SBOMs",
      description: "Current implementation fails with memory errors on repositories with 1000+ dependencies",
      type: "enhancement"
    },
    {
      id: "custom",
      number: "Other",
      title: "Custom issue or enhancement",
      description: "Describe your own contribution",
      type: "custom"
    }
  ];
  const filteredIssues = issues.filter(
    (issue) => issue.title.toLowerCase().includes(searchQuery.toLowerCase()) || issue.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return /* @__PURE__ */ jsxs(
    C$2,
    {
      className,
      title: "Issues",
      rightHeader: /* @__PURE__ */ jsx(CollaborationSection, { href: "/data/issue/post?projectId=1&notYetCreated=true&forkProject=git:ahmetson%2Fblockchain-verifier", children: "Create New Issue" }),
      actions: [{
        variant: "blue",
        onClick: () => {
          onActionClick && onActionClick({});
        },
        children: "Next"
      }],
      children: [
        /* @__PURE__ */ jsxs("div", { children: [
          "Your project is forked from",
          /* @__PURE__ */ jsx(Component$1, { className: "ml-1", href: "https://github.com/ara-foundation/blockchain-verification-tool", children: "ara-foundation/blockchain-verification-tool" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: /* @__PURE__ */ jsx("span", { children: "Showing the `blockchain-verification-tool` issues. You can select multiple issues." }) }),
        /* @__PURE__ */ jsx(
          SearchBar,
          {
            value: searchQuery,
            onChange: setSearchQuery,
            placeholder: "Search for issues in the original repository..."
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-6", children: filteredIssues.map((issue) => /* @__PURE__ */ jsx(
          IssueCard,
          {
            issue,
            isSelected: selectedIssues.includes(issue.id),
            onSelect: () => onIssueSelect(issue.id)
          },
          issue.id
        )) }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-red-500 mt-2", children: "Select Issues first or create a new one" })
      ]
    }
  );
};

const FormField = ({
  label,
  value,
  type,
  placeholder,
  onChange
}) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type,
        value,
        placeholder,
        onChange: (e) => onChange?.(e.target.value),
        className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cascade-blue focus:border-cascade-blue bg-purple-100"
      }
    )
  ] });
};

const TextArea = ({
  label,
  value,
  placeholder,
  rows = 4,
  className = "",
  onChange
}) => {
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: label }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        value,
        placeholder,
        rows,
        onChange: (e) => onChange?.(e.target.value),
        className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cascade-blue focus:border-cascade-blue bg-gray-100 resize-none"
      }
    )
  ] });
};

const ProjectForm = ({ onActionClick }) => {
  return /* @__PURE__ */ jsxs(C$2, { title: "Update Project Information", actions: [{
    onClick: () => {
      onActionClick && onActionClick({});
    },
    children: "Confirm",
    variant: "blue"
  }], children: [
    /* @__PURE__ */ jsx(
      FormField,
      {
        label: "Project Title",
        value: "blockchain-verification-tool",
        type: "text"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-200 px-3 py-2 rounded text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "License:" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "MIT" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-200 px-3 py-2 rounded text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Created At:" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "12/05/2023" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-200 px-3 py-2 rounded text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Primary Language:" }),
        " ",
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Javascript" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      TextArea,
      {
        label: "Repository Description",
        value: "An open-source tool for verifying software components on the blockchain, ensuring transparency and security in the software supply chain."
      }
    ),
    /* @__PURE__ */ jsx(
      TextArea,
      {
        label: "What are the advantages compared to other projects?",
        placeholder: "Describe what makes your app different."
      }
    )
  ] });
};

const ConnectionCard$1 = ({ onActionClick }) => {
  const steps = [
    {
      id: 1,
      title: "Preparing SBOM data for blockchain registration",
      description: "Successfully prepared the data to submit",
      status: "completed",
      progress: 100
    },
    {
      id: 2,
      title: "Submitting transaction to blockchain network",
      description: "Sending the data on your behalf to the network",
      status: "completed",
      progress: 85
    },
    {
      id: 3,
      title: "Waiting for blockchain confirmation",
      description: "Blockchain takes few seconds to complete. Tx to check: 0x01..231",
      status: "in-progress",
      progress: 60
    },
    {
      id: 4,
      title: "Preparing the project in the task system",
      description: "Identified and categorized all project dependencies",
      status: "in-progress",
      progress: 3
    },
    {
      id: 5,
      title: "Removing the session log",
      description: "Compilation of repository data complete and ready for review",
      status: "pending",
      progress: 0
    }
  ];
  return /* @__PURE__ */ jsxs(
    C$2,
    {
      title: /* @__PURE__ */ jsxs("div", { className: "flex justify-left", children: [
        /* @__PURE__ */ jsx("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", stroke: "#10B981", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }),
        "Registering the Blockchain Record"
      ] }),
      actions: [{
        variant: "blue",
        children: "Complete",
        onClick: () => {
          onActionClick && onActionClick({});
        }
      }],
      children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-md mx-auto", children: "Creating an immutable record of your SBOM data on the blockchain" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6 mb-8", children: steps.map((step) => /* @__PURE__ */ jsx(
          ProgressStep,
          {
            title: step.title,
            description: step.description,
            status: step.status,
            progress: step.progress
          },
          step.id
        )) })
      ]
    }
  );
};

const ConnectionCard = () => {
  const steps = [
    {
      id: 1,
      title: "Quest System Added",
      description: "We've added a new quest system to help you track your open source contributions. Your first task is ready to be completed.",
      status: "completed",
      progress: 100
    }
  ];
  return /* @__PURE__ */ jsx(C$2, { title: /* @__PURE__ */ jsxs("div", { className: "flex justify-center", children: [
    /* @__PURE__ */ jsx("svg", { width: "48", height: "48", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "m265.69 544.94c0.02 11.27 2.9 22.23 5.29 33.17 8.17 34.88 20.68 68.41 34.09 101.56 12.73 30.26 25.52 60.58 46.5 85.84 31.23-44.4-199.26 147.06-144.56 68.28 11.93-20.73 25.1-40.69 37.88-60.89 38.51-62.08 78.47-123.23 117.94-184.7 61.13-93.89 121.79-188.23 170.95-289.05 4.56-10.66 9.13-21.31 13.69-31.97l141.9-64.11c-6.82 11.82-13.64 23.65-20.46 35.48-57.62 97.4-117.91 193.2-174.39 291.28-31.32 56.62-62.01 113.61-90.06 171.94-9.87 19.45-20.6 38.36-31.07 57.47-27.23 62.99-141.39 169.08-179.22 97.63-10.72-32.02-21.55-64.09-36.06-94.65-14.74-32.38-30.38-64.33-45.42-96.57-5.01-10.73-8.52-21.88-11.98-33.19l164.98-87.52z",
        id: "layer1",
        transform: "translate(-100.71 -203.07)",
        stroke: "#10B981",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) }),
    "Project Added Successfully"
  ] }), actions: [{
    variant: "blue",
    href: "/maintainer/work",
    children: "Go to Work"
  }], children: steps.map((step) => /* @__PURE__ */ jsx(
    ProgressStep,
    {
      title: step.title,
      description: step.description,
      status: step.status,
      progress: step.progress
    },
    step.id
  )) });
};

const isForkStep = (projectId, forkProjectId, createdIssueId) => {
  return projectId !== void 0 && forkProjectId !== void 0 && createdIssueId !== void 0;
};
const C = ({ projectId, forkProjectId, createdIssueId }) => {
  const [step, setStep] = useState(
    isForkStep(projectId, forkProjectId, createdIssueId) ? 2 /* Fork */ : 0 /* Post */
  );
  return /* @__PURE__ */ jsx("div", { className: "bg-transparent", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { y: 10, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -10, opacity: 0 },
      transition: { duration: 0.2, when: "beforeChildren", delayChildren: 0.2 },
      children: [
        step === 0 /* Post */ && /* @__PURE__ */ jsx(C$1, { onActionClick: (a) => {
          console.log(a);
          setStep(1 /* Repository */);
        } }),
        step === 1 /* Repository */ && /* @__PURE__ */ jsx(ConnectionCard$2, { onActionClick: (a) => a === void 0 ? setStep(3 /* Update */) : setStep(2 /* Fork */) }),
        step === 2 /* Fork */ && /* @__PURE__ */ jsx(NotificationBanner, { type: "warning", title: "Issue why you fork", children: "Select or create a new issue. In CascadeFund, we link the projects between each other via issues in order to make them discoverable and self structurized." }),
        step === 2 /* Fork */ && /* @__PURE__ */ jsx(
          IssueSelector,
          {
            className: `mt-${GridStyle.panel.gap.y}`,
            selectedIssues: [],
            onIssueSelect: console.log,
            onActionClick: (a) => setStep(3 /* Update */)
          }
        ),
        step === 3 /* Update */ && /* @__PURE__ */ jsx(ProjectForm, { onActionClick: (a) => setStep(4 /* Blockchain */) }),
        step === 4 /* Blockchain */ && /* @__PURE__ */ jsx(ConnectionCard$1, { onActionClick: (a) => setStep(5 /* Completed */) }),
        step === 5 /* Completed */ && /* @__PURE__ */ jsx(ConnectionCard, {})
      ]
    },
    step ? "updateable" : "view"
  ) }) });
};

const $$Astro = createAstro();
const $$Post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const projectId = Astro2.url.searchParams.get("projectId") || void 0;
  const forkProjectId = Astro2.url.searchParams.get("forkProjectId") || void 0;
  const createdIssueId = Astro2.url.searchParams.get("createdIssueId") || void 0;
  return renderTemplate`${renderComponent($$result, "V2Layout", $$PanelViewLayout, { "hideLinks": [ItemName.ProjectName] }, { "center": ($$result2) => renderTemplate`${renderComponent($$result2, "NotificationBanner", NotificationBanner, { "slot": "center", "icon": getIcon("project"), "type": "info", "title": "Your first project" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-gray-600">
You just signed up, and choose to be a maintainer.
                        Adding the project is the first step in the CascadeFund.
</p> ` })}${renderComponent($$result2, "ProjectPostFlow", C, { "projectId": projectId, "forkProjectId": forkProjectId, "createdIssueId": createdIssueId, "slot": "center", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/project/ProjectPostFlow", "client:component-export": "default" })}`, "right": ($$result2) => renderTemplate`${renderComponent($$result2, "InfoPanel2", $$InfoPanel2, { "slot": "right", "title": "Different Git Hosting Server?", "icon": "info", "actions": [
    {
      children: '"CascadeFund" Influencer',
      href: "/inlfuencer/project"
    }
  ] }, { "default": ($$result3) => renderTemplate` <p>Other git hosting servers are on the roadmap.</p> <p>
Obtain Voting Power, upvote the
${renderComponent($$result3, "Link", Component$1, { "href": "/data/issue", "className": "text-blue-600 hover:text-blue-800 underline" }, { "default": ($$result4) => renderTemplate`"Multiple Git Hostings" issue` })} and get rating.
</p> ` })}${renderComponent($$result2, "InfoPanel2", $$InfoPanel2, { "slot": "right", "title": "Uses blockchain", "icon": "question" }, { "default": ($$result3) => renderTemplate` <p>
The 20% of all donations to your project will be
                        distributed to the Libraries, packages in your projects
                        via ${renderComponent($$result3, "Link", Component$1, { "asNewTab": true, "href": "https://www.hyperpayment.org/specification/opensource-hyperpayment-specification", "className": "text-blue-600 hover:text-blue-800 underline" }, { "default": ($$result4) => renderTemplate`"Opensource Hyperpayment"` })}technology. Hyperpayment implemented on the blockchain,
                        which ensures ripple effect of the money.
</p> ` })}` })}`;
}, "/home/milay/cascadefund-frontend/src/pages/data/project/post.astro", void 0);

const $$file = "/home/milay/cascadefund-frontend/src/pages/data/project/post.astro";
const $$url = "/data/project/post";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Post,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
