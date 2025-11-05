import React, { useState } from 'react'
import Tooltip from './Tooltip'
import Editable from './Editable'
import Label from './Label'

interface FormFieldProps {
  id: string
  label: string
  value: string
  disabled?: boolean
  type: 'text' | 'email' | 'password' | 'number' | 'url' | 'search' | 'datetime'
  placeholder?: string
  tooltipDelay?: number
  autofocus?: boolean
  onChange?: (value: string) => void
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  value,
  type,
  placeholder,
  onChange,
  disabled = false,
  tooltipDelay = 500,
  autofocus = true
}) => {
  const [idle, setIdle] = useState(true);
  const className = "w-full min-w-40 px-2 py-1 border border-teal-300 rounded-xs shadow-sm focus:outline-none focus:ring-1 focus:ring-cascade-blue focus:border-cascade-blue bg-gray-100 text-gray-600"
  const classNameDark = " dark:border-gray-700 dark:bg-gray-700 dark:text-gray-500"
  const classNameIdle = "min-h-2 flex w-full min-w-40 px-2 py-1 border border-gray-200 dark:border-gray-700 rounded-xs hover:shadow-sm focus:outline-none focus:ring-1 focus:ring-cascade-blue focus:border-cascade-blue hover:bg-gray-100 dark:hover:bg-gray-700 cursor-text text-gray-600 dark:text-gray-100"

  return (
    <Tooltip
      openDelay={tooltipDelay}
      content={
        <div className="text-sm">
          Click to edit. {placeholder}
        </div>
      }
    >
      <div className="flex flex-col w-full">
        <Label >
          {label}
        </Label>
        {idle ? <div onClick={() => setIdle(false)} className={classNameIdle}>
          {value.length > 0 ? value : <span className="text-gray-500 dark:text-gray-500 italic">{placeholder}</span>}
        </div> :
          <Editable
            id={id}
            autofocus={autofocus}
            content={value}
            editable={!disabled}
            className={className + classNameDark}
            onBlur={(e, editor) => {
              onChange?.(editor?.getText() || '');
              setIdle(true);
            }}
            onCancel={(e, editor) => {
              onChange?.(editor?.getText() || '');
              setIdle(true);
            }}
          />}
      </div>
    </Tooltip>
  )
}

export default FormField
