import { jsxs, jsx, Fragment } from 'react/jsx-runtime';

const MetricCard = ({ icon, title, value, color, subtitle, footer }) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-gray-200", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-2", children: [
      icon && color && /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center ${color}`, children: /* @__PURE__ */ jsx("span", { className: "text-white text-sm", children: icon }) }),
      /* @__PURE__ */ jsx("span", { className: "text-md text-gray-600", children: title }),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-800", children: value }),
    footer && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("hr", { className: "w-full h-2 separator" }),
      /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: footer })
    ] })
  ] });
};

export { MetricCard as M };
