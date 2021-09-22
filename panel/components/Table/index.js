import React from 'react'

const Table = ({ children }) => {
  return <table className="min-w-full">{children}</table>
}

const TableHead = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  )
}
const TableTh = ({ children }) => {
  return (
    <th className="px-6 py-3 border-b border-gray-200 bg-blue-100 text-left text-xs leading-4 font-medium text-gray-700 uppercase tracking-wider">
      {children}
    </th>
  )
}
const TableBody = ({ children }) => {
  return <tbody className="bg-white">{children}</tbody>
}
const TableTr = ({ children }) => <tr>{children}</tr>
const TableTd = ({ children }) => (
  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
    {children}
  </td>
)
Table.Head = TableHead
Table.Th = TableTh
Table.Body = TableBody
Table.Tr = TableTr
Table.Td = TableTd

export default Table
