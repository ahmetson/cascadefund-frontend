export interface PanelEvents {
    onBackClick?: (arg0?: boolean) => void;
    // For list data
    onElementClick?: (arg0?: boolean) => void;
    onActionClick?: (arg0?: boolean) => void;
    onClick?: (arg0: boolean) => void;  // if the panel itself clicked
}

export interface ActionProps {variant?: string, href?: string, children: any, onClick?: () => void, className?: string}