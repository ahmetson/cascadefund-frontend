import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../animate-ui/components/animate/tooltip";

interface Props {
  content: string | React.ReactNode;
  children: any
}

const Component: React.FC<Props> = ({ children, content }) => {
  return (
    <TooltipProvider openDelay={50}>
      <Tooltip>
        <TooltipTrigger className={``}>
          {children}
        </TooltipTrigger>
        <TooltipContent autoFocus className="bg-teal-900 text-blue-100 border-color-teal-900">
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default Component