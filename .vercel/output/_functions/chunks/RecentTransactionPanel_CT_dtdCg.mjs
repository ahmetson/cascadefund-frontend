import { jsxs, jsx } from 'react/jsx-runtime';
import { C } from './PagePanel_vRXEIxzy.mjs';

const TransactionItem = ({
  date,
  name,
  type,
  amount,
  txHash,
  isPositive
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500 w-20", children: date }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-cascade-blue", children: name }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z", clipRule: "evenodd" }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: type })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
      /* @__PURE__ */ jsx("div", { className: `text-sm font-semibold ${isPositive ? "text-green-600" : "text-red-600"}`, children: amount }),
      /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500", children: [
        "Tx: ",
        txHash
      ] })
    ] }) })
  ] });
};

const TransactionsCard = () => {
  const transactions = [
    {
      date: "Jan 21, 2023",
      name: "Alex Johnson",
      type: "Monthly dividend payment",
      amount: "+$1,250.00",
      txHash: "0x3f8e2094...601c",
      isPositive: true
    },
    {
      date: "Jan 18, 2023",
      name: "Sarah Williams",
      type: "Project milestone payment",
      amount: "+$3,750.00",
      txHash: "0x3f8e2094...601c",
      isPositive: true
    },
    {
      date: "Jan 15, 2023",
      name: "Michael Chen",
      type: "Consulting fee",
      amount: "+$850.00",
      txHash: "0x3f8e2094...601c",
      isPositive: true
    }
  ];
  return /* @__PURE__ */ jsx(C, { title: "Recent Transactions (todo add pagination)", children: transactions.map((transaction, index) => /* @__PURE__ */ jsx(TransactionItem, { ...transaction }, index)) });
};

export { TransactionsCard as T };
