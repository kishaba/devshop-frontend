import React from 'react'
import { useQuery } from '../../lib/graphql'

const Select = ({
  placeholder = '',
  label = '',
  value,
  onChange,
  name,
  helptext = null,
  options = [],
  initial = {},
  errorMessage = null
}) => {
  return (
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={'id-' + name}
      >
        {label}
      </label>
      <select
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      >
        {initial && <option value={initial.id}>{initial.label}</option>}
        {options.map(opt => {
          return (
            <option key={opt.id} value={opt.id} selected={value == opt.id}>
              {opt.label}
            </option>
          )
        })}
      </select>
      {errorMessage && (
        <p className="text-red-500 text-xs italic my-2">{errorMessage}</p>
      )}
      <p className="text-gray-600 text-xs italic mb-4">{helptext}</p>
    </div>
  )
}

export default Select
