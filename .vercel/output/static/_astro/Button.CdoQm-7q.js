import{j as c}from"./Card.BLrwn_rG.js";import"./index.6otl1p8d.js";const b=({children:t,variant:r="primary",size:s="md",onClick:a,disabled:e=!1,className:o=""})=>{const n=()=>{switch(r){case"primary":return"bg-cascade-blue text-white hover:bg-blue-600";case"secondary":return"bg-gray-500 text-white hover:bg-gray-600";case"danger":return"bg-red-500 text-white hover:bg-red-600";case"success":return"bg-orange-500 text-white hover:bg-orange-600";case"outline":return"border border-gray-300 text-gray-700 hover:bg-gray-50";default:return"bg-cascade-blue text-white hover:bg-blue-600"}},u=()=>{switch(s){case"sm":return"px-3 py-1 text-sm";case"md":return"px-4 py-2 text-sm";case"lg":return"px-6 py-3 text-base";default:return"px-4 py-2 text-sm"}};return c.jsx("button",{onClick:a,disabled:e,className:`
        ${n()} 
        ${u()} 
        rounded font-medium transition-colors duration-200
        ${e?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${o}
      `,children:t})};export{b as B};
