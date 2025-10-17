import { c as createComponent, a as createAstro, e as addAttribute, h as renderScript, b as renderTemplate, r as renderComponent, m as maybeRenderHead, d as renderSlot } from './astro/server_DZoFJRV9.mjs';
import { clsx } from 'clsx';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/milay/cascadefund-frontend/node_modules/.pnpm/astro@5.11.0_@types+node@24.0.13_jiti@2.4.2_lightningcss@1.30.1_rollup@4.44.2_typescript@5.8.3/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/milay/cascadefund-frontend/node_modules/.pnpm/astro@5.11.0_@types+node@24.0.13_jiti@2.4.2_lightningcss@1.30.1_rollup@4.44.2_typescript@5.8.3/node_modules/astro/components/ClientRouter.astro", void 0);

const Component$1 = ({ ref, asNewTab = false, className, href, children }) => {
  return /* @__PURE__ */ jsx("a", { ref, target: asNewTab ? "_blank" : "_self", href, className: `hyperlink text-blue-500 hover:text-teal-900 py-2 transition-colors ${className}`, children });
};

const $$Astro = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logo;
  const { className, imgClassName, titleClassName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Link", Component$1, { "id": "logo", "href": "/", "className": " flex flex-start h-14 items-center " + (className || ""), "data-astro-cid-nlmvrfkw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`w-8 h-8 bg-transparent rounded flex items-center justify-center ${imgClassName}`, "class")} data-astro-cid-nlmvrfkw> <img src="/cascadefund_logo.png" id="logoImg" alt="CascadeFund Logo" class="w-full h-full" data-astro-cid-nlmvrfkw> <img src="/cascadefund_logo_hover.png" id="hoveredLogoImg" alt="CascadeFund Logo" class="w-full h-full" data-astro-cid-nlmvrfkw> </div> <div class="flex-col hidden md:flex" data-astro-cid-nlmvrfkw> <h1${addAttribute(`text-xl mt-0 ${titleClassName}`, "class")} data-astro-cid-nlmvrfkw>CascadeFund</h1> <div class="flex flex-start text-sm text-gray-500 w-full -mt-1" id="logoSubtitle" data-astro-cid-nlmvrfkw> <div class="hidden lg:flex" data-astro-cid-nlmvrfkw>${renderSlot($$result2, $$slots["default"])}</div> </div> </div> ` })} `;
}, "/home/milay/cascadefund-frontend/src/components/utilitified_decorations/Logo.astro", void 0);

const Badge = ({ children, variant = "gray", active = false }) => {
  const baseClasses = "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium";
  const variantClasses = {
    gray: active ? "bg-gray-600 text-white" : "bg-gray-200 text-gray-800",
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800",
    purple: "bg-purple-100 text-purple-800",
    orange: "bg-orange-100 text-orange-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
    default: "bg-gray-100 text-gray-800"
  };
  return /* @__PURE__ */ jsx("span", { className: `${baseClasses} ${variantClasses[variant]}`, children });
};

const MenuAvatar = ({ active = false }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-orange-400 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white text-xs font-medium", children: "A" }) }),
    /* @__PURE__ */ jsxs("div", { className: "text-center h-5 flex flex-col -mt-2.5", children: [
      /* @__PURE__ */ jsx(Badge, { variant: "yellow", children: "220 rating" }),
      !active ? /* @__PURE__ */ jsx(Component$1, { href: "/data/profile", className: "hover:bg-gray-200 text-sm m-0! p-1! -mt-2.5!", children: "Ahmetson" }) : /* @__PURE__ */ jsx("strong", { className: "text-gray-900 text-sm underline", children: "Ahmetson" })
    ] })
  ] });
};

const CollaborationSection = ({ className: additionalNames, href, children, variant = "gray", textVariant = "white", active = false }) => {
  const className = `items-center bg-${variant}-400 hover:bg-${variant}-600 text-${textVariant} font-bold py-2 px-4 rounded transition-colors ` + additionalNames;
  return /* @__PURE__ */ jsx("a", { href, className, children });
};

const ActiveLoginNavItem = "loginItem";
const C = ({ className, active }) => {
  if (Math.random() < 0.5) {
    return /* @__PURE__ */ jsx(MenuAvatar, { active });
  }
  return /* @__PURE__ */ jsx(CollaborationSection, { className: className || "", href: "/login", variant: "purple", children: "Log In" });
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className = ""
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-red-500 text-white hover:bg-blue-600";
      case "secondary":
        return "bg-gray-500 text-white hover:bg-gray-600";
      case "danger":
        return "bg-red-500 text-white hover:bg-red-600";
      case "success":
        return "bg-orange-500 text-white hover:bg-orange-600";
      case "outline":
        return "border border-gray-300 text-gray-700 hover:bg-teal-50";
      case "secondary-outline":
        return "border bg-teal-100 border-gray-300 text-gray-700 hover:bg-gray-100";
      default:
        return "bg-cascade-blue text-white hover:bg-blue-600";
    }
  };
  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "px-3 py-1 text-sm";
      case "md":
        return "px-4 py-2 text-sm";
      case "lg":
        return "px-6 py-3 text-base";
      default:
        return "px-4 py-2 text-sm";
    }
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick,
      disabled,
      className: `
        ${getVariantStyles()} 
        ${getSizeStyles()} 
        rounded font-medium transition-colors duration-200
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `,
      children
    }
  );
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerContentClass = ` peer-checked:backdrop-blur-sm bg-gradient-to-b from-blue-800 to-teal-900/85 peer-checked:text-gray-200`;
  const footerTitleClass = ` text-white  backdrop-blur-sm bg-blue-800 hover:text-gray-200 text-black h-6! p-0 flex`;
  return renderTemplate`${maybeRenderHead()}<footer class="fixed bottom-0 right-0 left-0 z-10 backdrop-blur-lg opacity-30 bg-blue-800 hover:opacity-100"> <div class="collapse collapse-arrow rounded-none"> <input type="checkbox" class="peer"> <div${addAttribute(`collapse-title ${footerTitleClass}`, "class")}> ${renderComponent($$result, "CascadeFundLogo", $$Logo, { "titleClassName": "text-sm!", "imgClassName": "h-5! w-5!", "className": footerTitleClass })} </div> <div${addAttribute(`collapse-content ${footerContentClass}`, "class")}> <div class="grid md:grid-cols-2 gap-8"> <div> <h3 class="font-semibold mb-4">Resources</h3> <ul class="space-y-2 text-sm text-gray-400"> <li> ${renderComponent($$result, "Link", Component$1, { "href": "/meta/work", "className": "text-gray-400 transition-colors" }, { "default": ($$result2) => renderTemplate`How it Works?` })} </li> <li> ${renderComponent($$result, "Link", Component$1, { "href": "/meta/quest", "className": "text-gray-400 transition-colors" }, { "default": ($$result2) => renderTemplate`Quest Task List` })} </li> <li> ${renderComponent($$result, "Link", Component$1, { "href": "#", "className": "text-gray-400 transition-colors" }, { "default": ($$result2) => renderTemplate` <svg class="h-4 w-4 text-blue-400 inline mr-2" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> </svg>
See CascadeFund issues
` })} </li> <li> ${renderComponent($$result, "Link", Component$1, { "href": "#", "className": "text-gray-400 transition-colors" }, { "default": ($$result2) => renderTemplate` <svg class="h-4 w-4 text-blue-400 inline mr-2" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> </svg>
Be the CascadeFund Influencer
` })} </li> </ul> </div> <div> <h3 class="font-semibold mb-4">Organization</h3> <ul class="space-y-2 text-sm text-gray-400"> <li> ${renderComponent($$result, "Link", Component$1, { "href": "/meta/team", "className": "text-gray-400 transition-colors" }, { "default": ($$result2) => renderTemplate`Team` })} </li> <li> ${renderComponent($$result, "Link", Component$1, { "href": "/meta/policy", "className": "text-gray-400 transition-colors" }, { "default": ($$result2) => renderTemplate`Privacy Policy (no-boring-lawyer-edition)` })} </li> <li>
Contact/Follow:
<div class="flex space-x-4 mt-1"> ${renderComponent($$result, "Link", Component$1, { "href": "#", "className": "text-gray-400 text-gray-400 transition-colors" }, { "default": ($$result2) => renderTemplate` <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path> </svg> ` })} ${renderComponent($$result, "Link", Component$1, { "href": "#", "className": "text-gray-400 text-gray-400 transition-colors" }, { "default": ($$result2) => renderTemplate` <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"></path> </svg> ` })} ${renderComponent($$result, "Link", Component$1, { "href": "#", "className": "text-gray-400 text-gray-400 transition-colors" }, { "default": ($$result2) => renderTemplate` <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12.007 0C5.373 0 0 5.373 0 12.007s5.373 12.007 12.007 12.007 12.007-5.373 12.007-12.007S18.641.001 12.007.001zM8.901 18.569L6.27 15.95l9.106-9.106 2.631 2.618-9.106 9.107z"></path> </svg> ` })} </div> </li> </ul> </div> </div> <div class="flex items-center justify-center">© 2025 Ara Foundation</div> </div> </div> </footer>`;
}, "/home/milay/cascadefund-frontend/src/components/utilitified_decorations/Footer.astro", void 0);

const GridStyle = {
  section: {
    padding: {
      x: 4}},
  panel: {
    gap: {
      y: 4
    }
  },
  content: {
    gap: {
      x: 6}
  }
};
var BgType = /* @__PURE__ */ ((BgType2) => {
  BgType2["heroSection"] = "hero";
  BgType2["heroToInfoViaBlue"] = "heroToInfo";
  BgType2["infoToInfoViaBlue"] = "infoToInfo";
  BgType2["normalSection"] = "normal";
  BgType2["infoSection"] = "info";
  BgType2["purpleToTealViaBlue"] = "fun1";
  BgType2["blueToPurple"] = "fun2";
  BgType2["tealToRedViaLime"] = "fun3";
  BgType2["redToPurpleViaLime"] = "fun4";
  BgType2["footerToTransparent"] = "footer";
  BgType2["listContent"] = "listContent";
  return BgType2;
})(BgType || {});
const bgClassNames = {
  ["hero" /* heroSection */]: "bg-gradient-to-br from-blue-500 via-blue-800 to-purple-500 text-white ",
  ["heroToInfo" /* heroToInfoViaBlue */]: "bg-gradient-to-bl from-purple-500 via-blue-800 to-gray-100 ",
  ["infoToInfo" /* infoToInfoViaBlue */]: "bg-gradient-to-br from-gray-50 via-blue-200 to-gray-50 ",
  ["normal" /* normalSection */]: "network-bg text-white ",
  ["info" /* infoSection */]: "bg-gray-100 ",
  ["fun1" /* purpleToTealViaBlue */]: "bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white ",
  ["fun2" /* blueToPurple */]: "bg-gradient-to-r from-blue-600 to-purple-600 text-white ",
  ["fun3" /* tealToRedViaLime */]: "bg-gradient-to-br from-teal-500 via-lime-600 to-red-500 text-white ",
  ["fun4" /* redToPurpleViaLime */]: "bg-gradient-to-bl from-red-500 via-lime-600 to-purple-600 text-white ",
  ["footer" /* footerToTransparent */]: "bg-gradient-to-b from-gray-900 to-transparent text-gray-600 ",
  ["listContent" /* listContent */]: "bg-gradient-to-b from-gray-200 via-transparent to-gray-300 "
};

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Component = ({ key, children, className = "", padding = "md", bg = "white" }) => {
  const getPaddingStyles = () => {
    switch (padding) {
      case "none":
        return "";
      case "sm":
        return "p-3";
      case "md":
        return "p-4";
      case "lg":
        return "p-6";
      default:
        return "p-4";
    }
  };
  return /* @__PURE__ */ jsx("div", { className: `bg-${bg} rounded-lg border border-gray-200 shadow-sm ${getPaddingStyles()} ${className}`, children }, key);
};

export { $$Logo as $, ActiveLoginNavItem as A, BgType as B, CollaborationSection as C, GridStyle as G, Component$1 as a, Component as b, cn as c, Button as d, C as e, $$ClientRouter as f, $$Footer as g, bgClassNames as h, Badge as i };
