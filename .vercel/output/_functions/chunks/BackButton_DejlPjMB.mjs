import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { C as CollaborationSection, a as Component } from './Panel_CAMdPLdB.mjs';

const BackButton = ({ href = "/issue/post" }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(CollaborationSection, { href, label: "<", variant: "blue", className: "p-0 mr-2" }),
    /* @__PURE__ */ jsx(Component, { href, children: "Back" })
  ] });
};

export { BackButton as B };
