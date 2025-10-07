export interface ComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface LinkProps extends ComponentProps {
  href: string
  target?: string
  rel?: string
}
