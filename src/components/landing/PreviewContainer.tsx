import Link from "../custom-ui/Link"

interface PreviewContainerProps {
  children: React.ReactNode
  previewUrl?: string
}

const PreviewContainer = ({ children, previewUrl = 'preview.cascadefund.org' }: PreviewContainerProps) => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        <Link asNewTab={true} className="font-mono text-xs text-gray-400 ml-1 underline" uri={previewUrl}>
          {previewUrl}
        </Link>
      </div>
      <div className="p-6 bg-gray-900 dark:bg-gray-800">
        {children}
      </div>
    </div>
  )
}

export default PreviewContainer
