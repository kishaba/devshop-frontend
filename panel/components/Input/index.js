import React from 'react'

const Input = ({
  type = 'text',
  placeholder = '',
  label = '',
  value,
  onChange,
  name,
  helptext = null
}) => {
  return (
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={'id-' + name}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-password"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      <p className="text-gray-600 text-xs italic mb-4">{helptext}</p>
    </div>
  )
}

export default Input
