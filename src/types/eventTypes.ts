import type { InfoPanelProps } from "@/components/v2/InfoPanel";
import type { RoleCardProps } from "@/components/v2/RoleCard";

export interface PanelEvents {
    onBackClick?: (arg0?: boolean) => void;
    // For list data
    onElementClick?: (arg0?: boolean) => void;
    onActionClick?: (arg0?: boolean) => void;
    onClick?: (arg0: boolean) => void;  // if the panel itself clicked
}

export interface ActionProps {variant?: string, href?: string, replaceWithChildren?: boolean, children: any, onClick?: () => void, className?: string}

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
  subtitle?: string
  prefix?: string // If panels are listed how to group according to this session
  actions?: ActionProps[]
  children?: any
  panels?: (InfoPanelProps|RoleCardProps)[]
  bottomPanel?: InfoPanelProps
}
