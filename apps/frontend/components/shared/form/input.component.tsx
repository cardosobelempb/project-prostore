'use client'

import { InputHTMLAttributes } from 'react'

export interface InputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  onChangeValue?: (value: string) => void
}

function InputComponent({
  label,
  error,
  className = '',
  onChangeValue,
  ...props
}: InputComponentProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="text-sm">{label}</label>}
      <input
        {...props}
        className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2
         ${error ? 'border-red-500' : ''}
        `}
        onChange={e => {
          props.onChange?.(e)
          onChangeValue?.(e.target.value)
        }}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}

export default InputComponent
