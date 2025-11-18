import Link from "../custom-ui/Link"

interface PreviewContainerProps {
  children: React.ReactNode
  previewUrl?: string
  staticUrl?: boolean
  className?: string
  childrenClassName?: string
}

const PreviewContainer = ({ children, previewUrl = 'preview.cascadefund.org', staticUrl = false, className = '', childrenClassName = '' }: PreviewContainerProps) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        {previewUrl.length > 0 && <>
          {staticUrl ? <span className="font-mono text-xs text-gray-400 ml-1">{previewUrl}</span> : <Link asNewTab={true} className="font-mono text-xs text-gray-400 ml-1 underline" uri={previewUrl}>
            https://cascadefund.org{previewUrl}
          </Link>}
          {!staticUrl &&
            <span className="no-underline text-xs text-gray-400 ml-1">view on browser</span>
          }
        </>}
      </div>
      <div className={`p-6 bg-gray-700 dark:bg-gray-800 ${childrenClassName}`}>
        {children}
      </div>
    </div>
  )
}

export default PreviewContainer
