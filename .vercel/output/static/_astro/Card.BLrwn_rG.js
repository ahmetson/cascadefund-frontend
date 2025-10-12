import"./index.6otl1p8d.js";var d={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function p(){if(x)return t;x=1;var n=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function s(o,r,e){var a=null;if(e!==void 0&&(a=""+e),r.key!==void 0&&(a=""+r.key),"key"in r){e={};for(var i in r)i!=="key"&&(e[i]=r[i])}else e=r;return r=e.ref,{$$typeof:n,type:o,key:a,ref:r!==void 0?r:null,props:e}}return t.Fragment=u,t.jsx=s,t.jsxs=s,t}var l;function R(){return l||(l=1,d.exports=p()),d.exports}var v=R();const m=({key:n,children:u,className:s="",padding:o="md",bg:r="white"})=>{const e=()=>{switch(o){case"none":return"";case"sm":return"p-3";case"md":return"p-4";case"lg":return"p-6";default:return"p-4"}};return v.jsx("div",{className:`bg-${r} rounded-lg border border-gray-200 shadow-sm ${e()} ${s}`,children:u},n)};export{m as C,v as j};
