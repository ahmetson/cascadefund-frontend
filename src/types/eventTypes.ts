import type { InfoPanelProps } from "@/components/v2/InfoPanel";

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
  normalSection = "normal",
  infoSection = "info"
}

export type SectionBgProps = {
    sectionBgType: SectionBgType,
    overlay?: 'circles' | 'rectangles'
}

export interface SectionProps {
  className?: string
  bg?: SectionBgProps,
  icon?: React.ReactNode,
  title: string
  prefix?: string // If panels are listed how to group according to this session
  actions?: ActionProps[]
  children?: any
  panels?: InfoPanelProps[]
  bottomPanel?: InfoPanelProps
}
