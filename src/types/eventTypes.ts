export interface PanelEvents {
    onBackClick?: (arg0?: boolean) => void;
    // For list data
    onElementClick?: (arg0?: boolean) => void;
    onActionClick?: (arg0?: boolean) => void;
}

export interface ActionProps {variant?: string, href?: string, label: string, onClick?: () => void}