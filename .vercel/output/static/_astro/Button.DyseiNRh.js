import{j as g}from"./jsx-runtime.D_zvdyIk.js";const b=({children:r,variant:t="primary",size:a="md",onClick:o,disabled:e=!1,className:s=""})=>{const n=()=>{switch(t){case"primary":return"bg-red-500 text-white hover:bg-blue-600";case"secondary":return"bg-gray-500 text-white hover:bg-gray-600";case"danger":return"bg-red-500 text-white hover:bg-red-600";case"success":return"bg-orange-500 text-white hover:bg-orange-600";case"outline":return"border border-gray-300 text-gray-700 hover:bg-teal-50";case"secondary-outline":return"border bg-teal-100 border-gray-300 text-gray-700 hover:bg-gray-100";default:return"bg-cascade-blue text-white hover:bg-blue-600"}},u=()=>{switch(a){case"sm":return"px-3 py-1 text-sm";case"md":return"px-4 py-2 text-sm";case"lg":return"px-6 py-3 text-base";default:return"px-4 py-2 text-sm"}};return g.jsx("button",{onClick:o,disabled:e,className:`
        ${n()} 
        ${u()} 
        rounded font-medium transition-colors duration-200
        ${e?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${s}
      `,children:r})};export{b as B};
