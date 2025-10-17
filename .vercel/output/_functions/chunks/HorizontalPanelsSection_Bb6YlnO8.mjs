import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, d as renderSlot } from './astro/server_DZoFJRV9.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { C as C$1 } from './PagePanel_vRXEIxzy.mjs';
import { I as Importer } from './RowGrid_Dl5riSnU.mjs';
import { b as Component, a as Component$1, C as CollaborationSection, d as Button } from './Panel_CAMdPLdB.mjs';
import { $ as $$BaseSection } from './BaseSection_BD2MY-_3.mjs';

const WorkflowCard = ({ key, icon, title, description, iconBgColor, className }) => {
  return /* @__PURE__ */ jsx(
    C$1,
    {
      className: "border-none shadow-none " + className,
      title: /* @__PURE__ */ jsxs("div", { className: `inline-flex items-center justify-center w-full h-8 ${iconBgColor} rounded-lg`, children: [
        icon,
        title
      ] }),
      children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: description })
    },
    key
  );
};

const FeatureCard = ({ icon, title, iconBgColor: iconColor }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm", children: [
    /* @__PURE__ */ jsx("div", { className: `flex-shrink-0 ${iconColor}`, children: icon }),
    /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-medium", children: title })
  ] });
};

const C = ({
  id,
  title,
  description,
  buttonText,
  buttonVariant,
  helpLinkLabel,
  helpLinkHref,
  icon,
  avatar,
  iconBgColor,
  href
}) => {
  return /* @__PURE__ */ jsxs(Component, { className: `${iconBgColor} card bg-base-100 image-full w-96 h-48 shadow-sm p-0!`, children: [
    /* @__PURE__ */ jsx("figure", { className: "w-full h-full", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: avatar,
        alt: `${title} avatar`,
        referrerPolicy: "no-referrer",
        className: "w-96 h-48"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "card-body h-38", children: [
      /* @__PURE__ */ jsxs("h2", { className: "card-title justify-center", children: [
        icon && /* @__PURE__ */ jsx("div", { children: icon }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-300", children: title })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "h-38 text-gray-400", children: [
        description,
        helpLinkHref && /* @__PURE__ */ jsxs(Component$1, { href: helpLinkHref, className: " flex items-center justify-center text-teal-200 underline hover:text-teal-100!", children: [
          /* @__PURE__ */ jsxs("svg", { className: "w-4 h-4 mr-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
            /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
          ] }),
          helpLinkLabel
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "card-actions justify-center", children: buttonVariant === "primary" ? /* @__PURE__ */ jsx(CollaborationSection, { href: href || "#", variant: "green", children: buttonText }) : buttonVariant === "secondary" ? /* @__PURE__ */ jsx(Button, { variant: "gray", children: buttonText }) : /* @__PURE__ */ jsx(Button, { className: buttonVariant, children: buttonText }) })
    ] })
  ] }, id);
};

const $$Astro = createAstro();
const $$HorizontalPanelsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HorizontalPanelsSection;
  let {
    panels,
    bottomPanel,
    title,
    prefix,
    cols,
    className,
    bg,
    titleClassName
  } = Astro2.props;
  if (!cols) {
    cols = panels && panels.length > 4 ? 3 : panels.length || 0;
  }
  return renderTemplate`${renderComponent($$result, "Section", $$BaseSection, { "bg": bg, "title": title, "className": className, "titleClassName": titleClassName }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["top"])} ${renderComponent($$result2, "Horizontally", Importer, { "cols": cols, "className": "mb-6" }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["grid"], renderTemplate` ${panels && panels.map(
    (step, index) => step.roleCard ? renderTemplate`${renderComponent($$result3, "C", C, { ...step })}` : step.description === void 0 ? renderTemplate`${renderComponent($$result3, "TitledInfoPanel", FeatureCard, { "title": step.title, "icon": step.icon, "iconBgColor": step.iconBgColor || "blue" })}` : renderTemplate`${renderComponent($$result3, "WorkflowCard", WorkflowCard, { "key": prefix + index, ...step })}`
  )} `)} ${bottomPanel === void 0 ? null : renderTemplate`${renderComponent($$result3, "WorkflowCard", WorkflowCard, { "key": "bottom-panel", ...bottomPanel })}`}` })} ` })}`;
}, "/home/milay/cascadefund-frontend/src/layouts/sections/HorizontalPanelsSection.astro", void 0);

export { $$HorizontalPanelsSection as $, WorkflowCard as W };
