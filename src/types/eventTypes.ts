import { ButtonVariant } from "@/components/custom-ui/Button"
import { IconProps, IconType } from "@/components/icon"
import React from "react"

export interface ComponentProps {
  children?: any
  className?: string
  id?: string
  key?: string | number
  ref?: any
}

export enum BlurSize {
  blur0 = 'blur-0',
  blurXs = 'blur-xs',
  blurSm = 'blur-sm',
  blurMd = 'blur-md',
  blurLg = 'blur-lg',
  blurXl = 'blur-xl',
  blur2xl = 'blur-2xl',
  blur3xl = 'blur-3xl',
  blur4xl = 'blur-4xl',
  blur5xl = 'blur-5xl',
  blurNone = 'blur-none',
}

export enum RoundedSize {
  roundedXs = 'rounded-xs',
  roundedNone = 'rounded-none',
  roundedSm = 'rounded-sm',
  roundedMd = 'rounded-md',
  roundedLg = 'rounded-lg',
  roundedXl = 'rounded-xl',
  rounded2xl = 'rounded-2xl',
  rounded3xl = 'rounded-3xl',
  roundedFull = 'rounded-full',
}
export enum BorderRadiusSize {
  borderRadiusXs = 'border-radius-xs',
  borderRadiusNone = 'border-radius-none',
  borderRadiusSm = 'border-radius-sm',
  borderRadiusMd = 'border-radius-md',
  borderRadiusLg = 'border-radius-lg',
  borderRadiusXl = 'border-radius-xl',
  borderRadius2xl = 'border-radius-2xl',
  borderRadius3xl = 'border-radius-3xl',
}
export enum ShadowSize {
  shadowSm = 'shadow-sm',
  shadowXs = 'shadow-xs',
  shadowMd = 'shadow-md',
  shadowLg = 'shadow-lg',
  shadowXl = 'shadow-xl',
  shadow2xl = 'shadow-2xl',
  shadow3xl = 'shadow-3xl',
  shadow4xl = 'shadow-4xl',
  shadow5xl = 'shadow-5xl',
  shadowNone = 'shadow-none'
}
export enum BorderSize {
  border0 = 'border-0',
  border1 = 'border-1',
  border2 = 'border-2',
  border4 = 'border-4',
  borderNone = 'border-none'
}

export type Coordinate = {
  x?: string
  y?: string
  left?: string
  right?: string
  top?: string
  bottom?: string
}

export type Positioning = {
  padding?: Coordinate
  margin?: Coordinate
  gap?: Coordinate
}

export const GridStyle: { [key: string]: Positioning } = {
  page: {
    padding: {
      x: 'px-1',
      y: 'py-1',
      left: 'pl-1',
      right: 'pr-1',
      top: 'pt-1',
      bottom: 'pb-1',
    }
  },
  section: {
    padding: {
      x: 'px-4',
      y: 'py-4',
      left: 'pl-4',
      right: 'pr-4',
      top: 'pt-4',
      bottom: 'pb-4',
    },
    gap: {
      x: 'space-x-4',
      y: 'space-y-4',
      left: 'space-l-4',
      right: 'space-r-4',
      top: 'space-t-4',
      bottom: 'space-b-4',
    },
  },
  panel: {
    gap: {
      x: 'space-x-4',
      y: 'space-y-4',
      left: 'space-l-4',
      right: 'space-r-4',
      top: 'space-t-4',
      bottom: 'space-b-4',
    },
    margin: {
      x: 'mx-4',
      y: 'my-4',
      left: 'ml-4',
      right: 'mr-4',
      top: 'mt-4',
      bottom: 'mb-6',
    }
  },
  content: {
    padding: {
      x: 'px-1',
      y: 'py-1',
      left: 'pl-1',
      right: 'pr-1',
      top: 'pt-1',
      bottom: 'pb-1',
    },
    gap: {
      x: 'space-x-6',
      y: 'space-y-6',
      left: 'space-l-6',
      right: 'space-r-6',
      top: 'space-t-6',
      bottom: 'space-b-6',
    }
  }
}



export interface PanelEvents {
  onBackClick?: (arg0?: boolean) => void;
  // For list data
  onElementClick?: (arg0?: boolean) => void;
  onActionClick?: (arg0?: any) => void;
  onClick?: (arg0: boolean) => void;  // if the panel itself clicked
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface ActionProps {
  variant?: ButtonVariant,
  replaceWithChildren?: boolean,
  children: any,
  uri?: string,
  onClick?: () => void,
  popoverContent?: React.ReactNode,
  className?: string,
  icon?: IconType | IconProps
  disabled?: boolean
}

export enum BgType {
  heroSection = "hero",
  heroToInfoViaBlue = "heroToInfo",
  heroToSocialization = "heroToSocialization",
  infoToInfoViaBlue = "infoToInfo",
  normalSection = "normal",
  infoSection = "info",
  purpleToTealViaBlue = "fun1",
  blueToPurple = "fun2",
  tealToRedViaLime = "fun3",
  redToPurpleViaLime = "fun4",
  footerToTransparent = "footer",
  listContent = "listContent"
}

export type SectionBgProps = {
  sectionBgType: BgType,
  overlay?: 'circles' | 'rectangles'
}

export interface SectionProps {
  className?: string
  bg?: SectionBgProps,
  icon?: React.ReactNode,
  title?: string
  titleClassName?: string
  subtitle?: string[] | string
  prefix?: string // If panels are listed how to group according to this session
  actions?: ActionProps[]
  children?: any
  panels?: (any)[]
  bottomPanel?: any
}

export const bgClassNames: { [key in BgType]: string } = {
  [BgType.heroSection]:
    "bg-gradient-to-br from-blue-500 via-blue-800 to-purple-500 text-white dark:text-gray-900 dark:from-blue-800 dark:via-blue-500 dark:to-purple-800",
  [BgType.heroToInfoViaBlue]:
    "bg-gradient-to-bl from-purple-500 via-blue-800 to-gray-100 dark:text-gray-900 dark:from-purple-800 dark:via-blue-500 dark:to-gray-800",
  [BgType.heroToSocialization]:
    "bg-gradient-to-br from-purple-500 via-blue-500 to-blue-600 text-white dark:text-gray-900 dark:from-purple-800 dark:via-blue-500 dark:to-blue-800",
  [BgType.infoToInfoViaBlue]:
    "bg-gradient-to-br from-gray-50 via-blue-200 to-gray-50 dark:text-gray-900 dark:from-gray-800 dark:via-blue-500 dark:to-gray-800",
  [BgType.normalSection]: "network-bg text-white dark:text-gray-900 dark:from-gray-900 dark:via-blue-500 dark:to-gray-900",
  [BgType.infoSection]: "bg-gray-100 dark:text-gray-900 dark:from-gray-900 dark:via-blue-500 dark:to-gray-900",
  [BgType.purpleToTealViaBlue]:
    "bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white dark:text-gray-900 dark:from-purple-800 dark:via-blue-500 dark:to-teal-800",
  [BgType.blueToPurple]:
    "bg-gradient-to-r from-blue-600 to-purple-600 text-white dark:text-gray-900 dark:from-blue-800 dark:to-purple-800",
  [BgType.tealToRedViaLime]:
    "bg-gradient-to-br from-teal-500 via-lime-600 to-red-500 text-white dark:text-gray-900 dark:from-teal-800 dark:via-lime-500 dark:to-red-800",
  [BgType.redToPurpleViaLime]:
    "bg-gradient-to-bl from-red-500 via-lime-600 to-purple-600 text-white dark:text-gray-900 dark:from-red-800 dark:via-lime-500 dark:to-purple-800",
  [BgType.footerToTransparent]:
    "bg-gradient-to-b from-gray-900 to-transparent text-gray-600 dark:text-gray-900 dark:from-gray-800 dark:to-transparent",
  [BgType.listContent]:
    "bg-gradient-to-b from-gray-200 via-transparent to-gray-300 dark:text-gray-900 dark:from-gray-800 dark:via-transparent dark:to-gray-800",
};

export interface LinkProps {
  uri: string
  children: string
  icon?: string
}