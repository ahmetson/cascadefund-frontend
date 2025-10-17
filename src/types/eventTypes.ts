import type { InfoPanelProps } from "@/components/InfoPanel";
import type { RoleCardProps } from "@/components/profile/RolePanel";

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
      bottom: 'mb-4',
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

export interface Props {
  children?: any
  className?: string
  id?: string
  key?: string | number
}

export interface PanelEvents {
  onBackClick?: (arg0?: boolean) => void;
  // For list data
  onElementClick?: (arg0?: boolean) => void;
  onActionClick?: (arg0?: any) => void;
  onClick?: (arg0: boolean) => void;  // if the panel itself clicked
}

export interface ActionProps { variant?: string, href?: string, replaceWithChildren?: boolean, children: any, onClick?: () => void, className?: string }

export enum BgType {
  heroSection = "hero",
  heroToInfoViaBlue = "heroToInfo",
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
  subtitle?: string
  prefix?: string // If panels are listed how to group according to this session
  actions?: ActionProps[]
  children?: any
  panels?: (InfoPanelProps | RoleCardProps)[]
  bottomPanel?: InfoPanelProps
}

export const bgClassNames: { [key in BgType]: string } = {
  [BgType.heroSection]:
    "bg-gradient-to-br from-blue-500 via-blue-800 to-purple-500 text-white ",
  [BgType.heroToInfoViaBlue]:
    "bg-gradient-to-bl from-purple-500 via-blue-800 to-gray-100 ",
  [BgType.infoToInfoViaBlue]:
    "bg-gradient-to-br from-gray-50 via-blue-200 to-gray-50 ",
  [BgType.normalSection]: "network-bg text-white ",
  [BgType.infoSection]: "bg-gray-100 ",
  [BgType.purpleToTealViaBlue]:
    "bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white ",
  [BgType.blueToPurple]:
    "bg-gradient-to-r from-blue-600 to-purple-600 text-white ",
  [BgType.tealToRedViaLime]:
    "bg-gradient-to-br from-teal-500 via-lime-600 to-red-500 text-white ",
  [BgType.redToPurpleViaLime]:
    "bg-gradient-to-bl from-red-500 via-lime-600 to-purple-600 text-white ",
  [BgType.footerToTransparent]:
    "bg-gradient-to-b from-gray-900 to-transparent text-gray-600 ",
  [BgType.listContent]:
    "bg-gradient-to-b from-gray-200 via-transparent to-gray-300 ",
};


