import type { InfoPanelProps } from "@/components/InfoPanel";
import type { RoleCardProps } from "@/components/RoleCard";

export type Coordinate = {
  x?: number
  y?: number
}

export type Positioning = {
  padding?: Coordinate
  margin?: Coordinate
  gap?: Coordinate
}

export const GridStyle: { [key: string]: Positioning } = {
  page: {
    padding: {
      x: 1,
      y: 1
    }
  },
  section: {
    padding: {
      x: 1,
      y: 1
    },
    gap: {
      x: 4,
      y: 4
    }
  },
  panel: {
    gap: {
      x: 4,
      y: 4
    }
  },
  content: {
    gap: {
      x: 6,
      y: 6
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

export enum SectionBgType {
  heroSection = "hero",
  heroToInfoViaBlue = "heroToInfo",
  infoToInfoViaBlue = "infoToInfo",
  normalSection = "normal",
  infoSection = "info",
  purpleToTealViaBlue = "fun1",
  blueToPurple = "fun2",
  tealToRedViaLime = "fun3",
  redToPurpleViaLime = "fun4",
  footerToTransparent = "footer"
}

export type SectionBgProps = {
  sectionBgType: SectionBgType,
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
