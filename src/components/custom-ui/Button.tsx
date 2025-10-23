import React from 'react'
import BorderBeam from '../ui/border-beam'
import ElectricBorder from '../ElectricBorder'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'default'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  className?: string
  outline?: boolean
  focus?: boolean
}

/**
 * @param outline - Whether the button should have an outline, 
 * if variant is secondary, the outline will show less important outline
 * @param variant - The variant of the button
 * @returns 
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  outline = false,
  focus = false,
}) => {
  const getAnimationColors = (): { colorFrom: string, colorTo: string } => {
    switch (variant) {
      case 'primary':
        return { colorFrom: '#f43f5e', colorTo: '#0ea5e9' } // bg-rose-500, hover:bg-sky-600
      case 'secondary':
        return { colorFrom: '#9ca3af', colorTo: '#5eead4' } // bg-gray-400, hover:bg-teal-300
      case 'danger':
        return { colorFrom: '#f97316', colorTo: '#8b5cf6' } // bg-orange-500, hover:bg-violet-600
      case 'success':
        return { colorFrom: '#22c55e', colorTo: '#4f46e5' } // bg-green-500, hover:bg-indigo-600
      default:
        return { colorFrom: '#f0fdfa', colorTo: '#d1d5db' } // bg-teal-50, hover:bg-gray-200
    }
  }

  const getVariantStyles = () => {
    const defaultStyle = 'border border-gray-300 bg-teal-50 hover:bg-gray-200'

    switch (variant) {
      case 'primary':
        return 'bg-rose-500 text-white hover:bg-sky-600'
      case 'secondary':
        return 'bg-gray-400 text-white hover:bg-teal-300'
      case 'danger':
        return 'bg-orange-500 text-white hover:bg-violet-600'
      case 'success':
        return 'bg-green-500 text-white hover:bg-indigo-600'
      default:
        return defaultStyle
    }
  }

  const getOutlineStyles = (): string => {
    if (!outline) {
      return ''
    }
    let outlineStyle = 'bg-gray-50! text-gray-700! hover:text-stone-700 border '

    switch (variant) {
      case 'primary':
        outlineStyle += 'border-rose-300 hover:border-sky-600! hover:bg-sky-100!';
        break;
      case 'secondary':
        outlineStyle += 'border-gray-300 hover:border-teal-500! hover:bg-teal-100!';
        break;
      case 'danger':
        outlineStyle += 'border-orange-300 hover:border-violet-600! hover:bg-violet-100!';
        break;
      case 'success':
        outlineStyle += 'border-green-300 hover:border-indigo-600! hover:bg-indigo-100!';
        break;
      default:
        outlineStyle += 'border-gray-300 hover:border-gray-600 hover:bg-teal-100!';
        break;
    }

    return outlineStyle
  }

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 pr-2 py-1 text-sm'
      case 'md':
        return 'px-4 pr-3 py-2 text-sm'
      case 'lg':
        return 'px-6 pr-5 py-3 text-base'
      default:
        return 'px-4 pr-3 py-2 text-sm'
    }
  }

  return (

    <BorderBeam size={12} colorFrom={getAnimationColors().colorFrom} colorTo={getAnimationColors().colorTo}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          ${disabled ? '' : 'hyperlink'}
          ${getVariantStyles()}
          ${getOutlineStyles()}
          ${focus ? '' : getSizeStyles()}
          rounded font-medium transition-colors duration-200
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${className}
          `}
      >
        {focus ? <ElectricBorder
          color={getAnimationColors().colorFrom}
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 2 }}
          className={cn(
            `${getSizeStyles()}`,
            'mr-1'
          )}
        >
          {children}
        </ElectricBorder> : children}
      </button>
    </BorderBeam>
  )
}

export default Button
