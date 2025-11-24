import Link from "../custom-ui/Link"

interface PreviewContainerProps {
  children: React.ReactNode
  previewUrl?: string
  staticUrl?: boolean
  className?: string
  childrenClassName?: string
}

const PreviewContainer = ({ children, previewUrl = 'app.cascadefund.org', staticUrl = false, className = '', childrenClassName = '' }: PreviewContainerProps) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header px-3 sm:px-4 py-1.5 sm:py-2">
        <div className="terminal-dot bg-red-500"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        {previewUrl.length > 0 && <>
          {staticUrl ? <span className="font-mono text-[10px] sm:text-xs text-gray-400 ml-1 truncate">{previewUrl}</span> : <Link asNewTab={true} className="font-mono text-[10px] sm:text-xs text-gray-400 ml-1 truncate" uri={previewUrl}>
            https://app.cascadefund.org{previewUrl}
          </Link>}
        </>}
      </div>
      <div className={`p-4 sm:p-5 md:p-6 bg-gray-700 dark:bg-gray-800 ${childrenClassName}`}>
        {children}
      </div>
    </div>
  )
}

export default PreviewContainer
