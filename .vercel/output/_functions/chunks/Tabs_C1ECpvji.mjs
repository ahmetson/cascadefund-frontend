import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { c as cn } from './Panel_CAMdPLdB.mjs';
import { g as getStrictContext, S as Slot } from './slot_Dx21unNk.mjs';

const HighlightContext = React.createContext(void 0);
function useHighlight() {
  const context = React.useContext(HighlightContext);
  if (!context) {
    throw new Error("useHighlight must be used within a HighlightProvider");
  }
  return context;
}
function Highlight({
  ref,
  ...props
}) {
  const {
    as: Component = "div",
    children,
    value,
    defaultValue,
    onValueChange,
    className,
    style,
    transition = { type: "spring", stiffness: 350, damping: 35 },
    hover = false,
    click = true,
    enabled = true,
    controlledItems,
    disabled = false,
    exitDelay = 200,
    mode = "children"
  } = props;
  const localRef = React.useRef(null);
  React.useImperativeHandle(ref, () => localRef.current);
  const [activeValue, setActiveValue] = React.useState(
    value ?? defaultValue ?? null
  );
  const [boundsState, setBoundsState] = React.useState(null);
  const [activeClassNameState, setActiveClassNameState] = React.useState("");
  const safeSetActiveValue = React.useCallback(
    (id2) => {
      setActiveValue((prev) => prev === id2 ? prev : id2);
      if (id2 !== activeValue) onValueChange?.(id2);
    },
    [activeValue, onValueChange]
  );
  const safeSetBounds = React.useCallback(
    (bounds) => {
      if (!localRef.current) return;
      const boundsOffset = props?.boundsOffset ?? {
        top: 0,
        left: 0,
        width: 0,
        height: 0
      };
      const containerRect = localRef.current.getBoundingClientRect();
      const newBounds = {
        top: bounds.top - containerRect.top + (boundsOffset.top ?? 0),
        left: bounds.left - containerRect.left + (boundsOffset.left ?? 0),
        width: bounds.width + (boundsOffset.width ?? 0),
        height: bounds.height + (boundsOffset.height ?? 0)
      };
      setBoundsState((prev) => {
        if (prev && prev.top === newBounds.top && prev.left === newBounds.left && prev.width === newBounds.width && prev.height === newBounds.height) {
          return prev;
        }
        return newBounds;
      });
    },
    [props]
  );
  const clearBounds = React.useCallback(() => {
    setBoundsState((prev) => prev === null ? prev : null);
  }, []);
  React.useEffect(() => {
    if (value !== void 0) setActiveValue(value);
    else if (defaultValue !== void 0) setActiveValue(defaultValue);
  }, [value, defaultValue]);
  const id = React.useId();
  React.useEffect(() => {
    if (mode !== "parent") return;
    const container = localRef.current;
    if (!container) return;
    const onScroll = () => {
      if (!activeValue) return;
      const activeEl = container.querySelector(
        `[data-value="${activeValue}"][data-highlight="true"]`
      );
      if (activeEl) safeSetBounds(activeEl.getBoundingClientRect());
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [mode, activeValue, safeSetBounds]);
  const render = React.useCallback(
    (children2) => {
      if (mode === "parent") {
        return /* @__PURE__ */ jsxs(
          Component,
          {
            ref: localRef,
            "data-slot": "motion-highlight-container",
            style: { position: "relative", zIndex: 1 },
            className: props?.containerClassName,
            children: [
              /* @__PURE__ */ jsx(AnimatePresence, { initial: false, mode: "wait", children: boundsState && /* @__PURE__ */ jsx(
                motion.div,
                {
                  "data-slot": "motion-highlight",
                  animate: {
                    top: boundsState.top,
                    left: boundsState.left,
                    width: boundsState.width,
                    height: boundsState.height,
                    opacity: 1
                  },
                  initial: {
                    top: boundsState.top,
                    left: boundsState.left,
                    width: boundsState.width,
                    height: boundsState.height,
                    opacity: 0
                  },
                  exit: {
                    opacity: 0,
                    transition: {
                      ...transition,
                      delay: (transition?.delay ?? 0) + (exitDelay ?? 0) / 1e3
                    }
                  },
                  transition,
                  style: { position: "absolute", zIndex: 0, ...style },
                  className: cn(className, activeClassNameState)
                }
              ) }),
              children2
            ]
          }
        );
      }
      return children2;
    },
    [
      mode,
      Component,
      props,
      boundsState,
      transition,
      exitDelay,
      style,
      className,
      activeClassNameState
    ]
  );
  return /* @__PURE__ */ jsx(
    HighlightContext.Provider,
    {
      value: {
        mode,
        activeValue,
        setActiveValue: safeSetActiveValue,
        id,
        hover,
        click,
        className,
        style,
        transition,
        disabled,
        enabled,
        exitDelay,
        setBounds: safeSetBounds,
        clearBounds,
        activeClassName: activeClassNameState,
        setActiveClassName: setActiveClassNameState,
        forceUpdateBounds: props?.forceUpdateBounds
      },
      children: enabled ? controlledItems ? render(children) : render(
        React.Children.map(children, (child, index) => /* @__PURE__ */ jsx(HighlightItem, { className: props?.itemsClassName, children: child }, index))
      ) : children
    }
  );
}
function getNonOverridingDataAttributes(element, dataAttributes) {
  return Object.keys(dataAttributes).reduce(
    (acc, key) => {
      if (element.props[key] === void 0) {
        acc[key] = dataAttributes[key];
      }
      return acc;
    },
    {}
  );
}
function HighlightItem({
  ref,
  as,
  children,
  id,
  value,
  className,
  style,
  transition,
  disabled = false,
  activeClassName,
  exitDelay,
  asChild = false,
  forceUpdateBounds,
  ...props
}) {
  const itemId = React.useId();
  const {
    activeValue,
    setActiveValue,
    mode,
    setBounds,
    clearBounds,
    hover,
    click,
    enabled,
    className: contextClassName,
    style: contextStyle,
    transition: contextTransition,
    id: contextId,
    disabled: contextDisabled,
    exitDelay: contextExitDelay,
    forceUpdateBounds: contextForceUpdateBounds,
    setActiveClassName
  } = useHighlight();
  const Component = as ?? "div";
  const element = children;
  const childValue = id ?? value ?? element.props?.["data-value"] ?? element.props?.id ?? itemId;
  const isActive = activeValue === childValue;
  const isDisabled = disabled === void 0 ? contextDisabled : disabled;
  const itemTransition = transition ?? contextTransition;
  const localRef = React.useRef(null);
  React.useImperativeHandle(ref, () => localRef.current);
  React.useEffect(() => {
    if (mode !== "parent") return;
    let rafId;
    let previousBounds = null;
    const shouldUpdateBounds = forceUpdateBounds === true || contextForceUpdateBounds && forceUpdateBounds !== false;
    const updateBounds = () => {
      if (!localRef.current) return;
      const bounds = localRef.current.getBoundingClientRect();
      if (shouldUpdateBounds) {
        if (previousBounds && previousBounds.top === bounds.top && previousBounds.left === bounds.left && previousBounds.width === bounds.width && previousBounds.height === bounds.height) {
          rafId = requestAnimationFrame(updateBounds);
          return;
        }
        previousBounds = bounds;
        rafId = requestAnimationFrame(updateBounds);
      }
      setBounds(bounds);
    };
    if (isActive) {
      updateBounds();
      setActiveClassName(activeClassName ?? "");
    } else if (!activeValue) clearBounds();
    if (shouldUpdateBounds) return () => cancelAnimationFrame(rafId);
  }, [
    mode,
    isActive,
    activeValue,
    setBounds,
    clearBounds,
    activeClassName,
    setActiveClassName,
    forceUpdateBounds,
    contextForceUpdateBounds
  ]);
  if (!React.isValidElement(children)) return children;
  const dataAttributes = {
    "data-active": isActive ? "true" : "false",
    "aria-selected": isActive,
    "data-disabled": isDisabled,
    "data-value": childValue,
    "data-highlight": true
  };
  const commonHandlers = hover ? {
    onMouseEnter: (e) => {
      setActiveValue(childValue);
      element.props.onMouseEnter?.(e);
    },
    onMouseLeave: (e) => {
      setActiveValue(null);
      element.props.onMouseLeave?.(e);
    }
  } : click ? {
    onClick: (e) => {
      setActiveValue(childValue);
      element.props.onClick?.(e);
    }
  } : {};
  if (asChild) {
    if (mode === "children") {
      return React.cloneElement(
        element,
        {
          key: childValue,
          ref: localRef,
          className: cn("relative", element.props.className),
          ...getNonOverridingDataAttributes(element, {
            ...dataAttributes,
            "data-slot": "motion-highlight-item-container"
          }),
          ...commonHandlers,
          ...props
        },
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(AnimatePresence, { initial: false, mode: "wait", children: isActive && !isDisabled && /* @__PURE__ */ jsx(
            motion.div,
            {
              layoutId: `transition-background-${contextId}`,
              "data-slot": "motion-highlight",
              style: {
                position: "absolute",
                zIndex: 0,
                ...contextStyle,
                ...style
              },
              className: cn(contextClassName, activeClassName),
              transition: itemTransition,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: {
                opacity: 0,
                transition: {
                  ...itemTransition,
                  delay: (itemTransition?.delay ?? 0) + (exitDelay ?? contextExitDelay ?? 0) / 1e3
                }
              },
              ...dataAttributes
            }
          ) }),
          /* @__PURE__ */ jsx(
            Component,
            {
              "data-slot": "motion-highlight-item",
              style: { position: "relative", zIndex: 1 },
              className,
              ...dataAttributes,
              children
            }
          )
        ] })
      );
    }
    return React.cloneElement(element, {
      ref: localRef,
      ...getNonOverridingDataAttributes(element, {
        ...dataAttributes,
        "data-slot": "motion-highlight-item"
      }),
      ...commonHandlers
    });
  }
  return enabled ? /* @__PURE__ */ jsxs(
    Component,
    {
      ref: localRef,
      "data-slot": "motion-highlight-item-container",
      className: cn(mode === "children" && "relative", className),
      ...dataAttributes,
      ...props,
      ...commonHandlers,
      children: [
        mode === "children" && /* @__PURE__ */ jsx(AnimatePresence, { initial: false, mode: "wait", children: isActive && !isDisabled && /* @__PURE__ */ jsx(
          motion.div,
          {
            layoutId: `transition-background-${contextId}`,
            "data-slot": "motion-highlight",
            style: {
              position: "absolute",
              zIndex: 0,
              ...contextStyle,
              ...style
            },
            className: cn(contextClassName, activeClassName),
            transition: itemTransition,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: {
              opacity: 0,
              transition: {
                ...itemTransition,
                delay: (itemTransition?.delay ?? 0) + (exitDelay ?? contextExitDelay ?? 0) / 1e3
              }
            },
            ...dataAttributes
          }
        ) }),
        React.cloneElement(element, {
          style: { position: "relative", zIndex: 1 },
          className: element.props.className,
          ...getNonOverridingDataAttributes(element, {
            ...dataAttributes,
            "data-slot": "motion-highlight-item"
          })
        })
      ]
    },
    childValue
  ) : children;
}

const [TabsProvider, useTabs] = getStrictContext("TabsContext");
function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  ...props
}) {
  const [activeValue, setActiveValue] = React.useState(
    defaultValue
  );
  const triggersRef = React.useRef(/* @__PURE__ */ new Map());
  const initialSet = React.useRef(false);
  const isControlled = value !== void 0;
  React.useEffect(() => {
    if (!isControlled && activeValue === void 0 && triggersRef.current.size > 0 && !initialSet.current) {
      const firstTab = triggersRef.current.keys().next().value;
      if (firstTab !== void 0) {
        setActiveValue(firstTab);
        initialSet.current = true;
      }
    }
  }, [activeValue, isControlled]);
  const registerTrigger = React.useCallback(
    (val, node) => {
      if (node) {
        triggersRef.current.set(val, node);
        if (!isControlled && activeValue === void 0 && !initialSet.current) {
          setActiveValue(val);
          initialSet.current = true;
        }
      } else {
        triggersRef.current.delete(val);
      }
    },
    [activeValue, isControlled]
  );
  const handleValueChange = React.useCallback(
    (val) => {
      if (!isControlled) setActiveValue(val);
      else onValueChange?.(val);
    },
    [isControlled, onValueChange]
  );
  return /* @__PURE__ */ jsx(
    TabsProvider,
    {
      value: {
        activeValue: value ?? activeValue,
        handleValueChange,
        registerTrigger
      },
      children: /* @__PURE__ */ jsx("div", { "data-slot": "tabs", ...props, children })
    }
  );
}
function TabsHighlight({
  transition = { type: "spring", stiffness: 200, damping: 25 },
  ...props
}) {
  const { activeValue } = useTabs();
  return /* @__PURE__ */ jsx(
    Highlight,
    {
      "data-slot": "tabs-highlight",
      controlledItems: true,
      value: activeValue,
      transition,
      click: false,
      ...props
    }
  );
}
function TabsList(props) {
  return /* @__PURE__ */ jsx("div", { role: "tablist", "data-slot": "tabs-list", ...props });
}
function TabsHighlightItem(props) {
  return /* @__PURE__ */ jsx(HighlightItem, { "data-slot": "tabs-highlight-item", ...props });
}
function TabsTrigger({
  ref,
  value,
  asChild = false,
  ...props
}) {
  const { activeValue, handleValueChange, registerTrigger } = useTabs();
  const localRef = React.useRef(null);
  React.useImperativeHandle(ref, () => localRef.current);
  React.useEffect(() => {
    registerTrigger(value, localRef.current);
    return () => registerTrigger(value, null);
  }, [value, registerTrigger]);
  const Component = asChild ? Slot : motion.button;
  return /* @__PURE__ */ jsx(
    Component,
    {
      ref: localRef,
      "data-slot": "tabs-trigger",
      role: "tab",
      onClick: () => handleValueChange(value),
      "data-state": activeValue === value ? "active" : "inactive",
      ...props
    }
  );
}
function TabsContents({
  children,
  transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    bounce: 0,
    restDelta: 0.01
  },
  ...props
}) {
  const { activeValue } = useTabs();
  const childrenArray = React.Children.toArray(children);
  const activeIndex = childrenArray.findIndex(
    (child) => React.isValidElement(child) && typeof child.props === "object" && child.props !== null && "value" in child.props && child.props.value === activeValue
  );
  const containerRef = React.useRef(null);
  const itemRefs = React.useRef([]);
  const [height, setHeight] = React.useState(0);
  const roRef = React.useRef(null);
  const measure = React.useCallback(() => {
    const pane = itemRefs.current[activeIndex];
    const container = containerRef.current;
    if (!pane || !container) return 0;
    const base = pane.getBoundingClientRect().height || 0;
    const cs = getComputedStyle(container);
    const isBorderBox = cs.boxSizing === "border-box";
    const paddingY = (parseFloat(cs.paddingTop || "0") || 0) + (parseFloat(cs.paddingBottom || "0") || 0);
    const borderY = (parseFloat(cs.borderTopWidth || "0") || 0) + (parseFloat(cs.borderBottomWidth || "0") || 0);
    let total = base + (isBorderBox ? paddingY + borderY : 0);
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    total = Math.ceil(total * dpr) / dpr;
    return total;
  }, [activeIndex]);
  React.useEffect(() => {
    if (roRef.current) {
      roRef.current.disconnect();
      roRef.current = null;
    }
    const pane = itemRefs.current[activeIndex];
    const container = containerRef.current;
    if (!pane || !container) return;
    setHeight(measure());
    const ro = new ResizeObserver(() => {
      const next = measure();
      requestAnimationFrame(() => setHeight(next));
    });
    ro.observe(pane);
    ro.observe(container);
    roRef.current = ro;
    return () => {
      ro.disconnect();
      roRef.current = null;
    };
  }, [activeIndex, childrenArray.length, measure]);
  React.useLayoutEffect(() => {
    if (height === 0 && activeIndex >= 0) {
      const next = measure();
      if (next !== 0) setHeight(next);
    }
  }, [activeIndex, height, measure]);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref: containerRef,
      "data-slot": "tabs-contents",
      style: { overflow: "hidden" },
      animate: { height },
      transition,
      ...props,
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "flex -mx-2",
          animate: { x: activeIndex * -100 + "%" },
          transition,
          children: childrenArray.map((child, index) => /* @__PURE__ */ jsx(
            "div",
            {
              ref: (el) => {
                itemRefs.current[index] = el;
              },
              className: "w-full shrink-0 px-2 h-full",
              children: child
            },
            index
          ))
        }
      )
    }
  );
}
function TabsContent({
  value,
  style,
  asChild = false,
  ...props
}) {
  const { activeValue } = useTabs();
  const isActive = activeValue === value;
  const Component = asChild ? Slot : motion.div;
  return /* @__PURE__ */ jsx(
    Component,
    {
      role: "tabpanel",
      "data-slot": "tabs-content",
      inert: !isActive,
      style: { overflow: "hidden", ...style },
      initial: { filter: "blur(0px)" },
      animate: { filter: isActive ? "blur(0px)" : "blur(4px)" },
      exit: { filter: "blur(0px)" },
      transition: { type: "spring", stiffness: 200, damping: 25 },
      ...props
    }
  );
}

const CworkTab = ({ activeTab: initialTab, tabs }) => {
  const [activeTab, setTab] = useState(initialTab);
  const baseClassName = "flex-1 rounded-md hover:bg-accent/50 rounded-b-none hover:border-b-2 hover:border-blue-500 hover:shadow-md";
  return /* @__PURE__ */ jsxs(
    Tabs,
    {
      onValueChange: setTab,
      value: activeTab,
      className: "bg-rounded-lg rounded-lg relative border-radius-lg bg-white mb-6 pt-2 pb-0",
      children: [
        /* @__PURE__ */ jsx(TabsHighlight, { className: "", children: /* @__PURE__ */ jsx(TabsList, { className: "h-10 inline-flex p-1 pb-0 w-full ", children: tabs.map(
          (tab) => /* @__PURE__ */ jsx(TabsHighlightItem, { value: tab.key, className: baseClassName + (activeTab === tab.key ? " bg-blue-100 border-b-2 border-blue-300  shadow-sm" : ""), children: /* @__PURE__ */ jsx(
            TabsTrigger,
            {
              value: tab.key,
              className: "h-full px-4 py-2 leading-0 w-full text-sm ",
              children: tab.label
            }
          ) }, tab.key)
        ) }) }),
        /* @__PURE__ */ jsx(
          TabsContents,
          {
            className: "bg-background p-3 h-80",
            children: tabs.map(
              (tab) => /* @__PURE__ */ jsx(TabsContent, { value: tab.key, className: "space-y-4", children: tab.content })
            )
          }
        )
      ]
    }
  );
};

export { CworkTab as C };
