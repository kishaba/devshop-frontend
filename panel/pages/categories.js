import React from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Title from '../components/Title'

const Index = () => {
  return (
    <Layout>
      <Title>Gerenciar categorias</Title>
      <div className='mt-4'>
        <div className='flex flex-wrap -mx-6'>
          <Card>
            <Card.Icon>
              <svg
                className='h-8 w-8 text-white'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z'
                  fill='currentColor'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinejoin='round'
                />
                <path
                  d='M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z'
                  stroke='currentColor'
                  strokeWidth='2'
                />
              </svg>
            </Card.Icon>
            <Card.Data>
              <Card.Title>2000</Card.Title>
              <Card.Description>Produtos</Card.Description>
            </Card.Data>
          </Card>

          <Card>
            <Card.Icon>
              <svg
                className='h-8 w-8 text-white'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z'
                  fill='currentColor'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinejoin='round'
                />
                <path
                  d='M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z'
                  stroke='currentColor'
                  strokeWidth='2'
                />
              </svg>
            </Card.Icon>
            <Card.Data>
              <Card.Title>2000</Card.Title>
              <Card.Description>Produtos</Card.Description>
            </Card.Data>
          </Card>
          <Card>
            <Card.Icon>
              <svg
                className='h-8 w-8 text-white'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z'
                  fill='currentColor'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinejoin='round'
                />
                <path
                  d='M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z'
                  stroke='currentColor'
                  strokeWidth='2'
                />
              </svg>
            </Card.Icon>
            <Card.Data>
              <Card.Title>2000</Card.Title>
              <Card.Description>Produtos</Card.Description>
            </Card.Data>
          </Card>
        </div>
      </div>
      <div className='mt-8'></div>
      <div className='flex flex-col mt-8'>
        <div className='-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
          <div className='align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200'>
            <table className='min-w-full'>
              <thead>
                <tr>
                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                    Name
                  </th>
                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                    Title
                  </th>
                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                    Status
                  </th>
                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                    Role
                  </th>
                  <th className='px-6 py-3 border-b border-gray-200 bg-gray-50'></th>
                </tr>
              </thead>

              <tbody className='bg-white'>
                <tr>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 h-10 w-10'>
                        <img
                          className='h-10 w-10 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </div>

                      <div className='ml-4'>
                        <div className='text-sm leading-5 font-medium text-gray-900'>
                          John Doe
                        </div>
                        <div className='text-sm leading-5 text-gray-500'>
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='text-sm leading-5 text-gray-900'>
                      Software Engineer
                    </div>
                    <div className='text-sm leading-5 text-gray-500'>
                      Web dev
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                      Active
                    </span>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                    Owner
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 h-10 w-10'>
                        <img
                          className='h-10 w-10 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </div>

                      <div className='ml-4'>
                        <div className='text-sm leading-5 font-medium text-gray-900'>
                          John Doe
                        </div>
                        <div className='text-sm leading-5 text-gray-500'>
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='text-sm leading-5 text-gray-900'>
                      Software Engineer
                    </div>
                    <div className='text-sm leading-5 text-gray-500'>
                      Web dev
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                      Active
                    </span>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                    Owner
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 h-10 w-10'>
                        <img
                          className='h-10 w-10 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </div>

                      <div className='ml-4'>
                        <div className='text-sm leading-5 font-medium text-gray-900'>
                          John Doe
                        </div>
                        <div className='text-sm leading-5 text-gray-500'>
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='text-sm leading-5 text-gray-900'>
                      Software Engineer
                    </div>
                    <div className='text-sm leading-5 text-gray-500'>
                      Web dev
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                      Active
                    </span>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                    Owner
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 h-10 w-10'>
                        <img
                          className='h-10 w-10 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </div>

                      <div className='ml-4'>
                        <div className='text-sm leading-5 font-medium text-gray-900'>
                          John Doe
                        </div>
                        <div className='text-sm leading-5 text-gray-500'>
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='text-sm leading-5 text-gray-900'>
                      Software Engineer
                    </div>
                    <div className='text-sm leading-5 text-gray-500'>
                      Web dev
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                      Active
                    </span>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                    Owner
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 h-10 w-10'>
                        <img
                          className='h-10 w-10 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </div>

                      <div className='ml-4'>
                        <div className='text-sm leading-5 font-medium text-gray-900'>
                          John Doe
                        </div>
                        <div className='text-sm leading-5 text-gray-500'>
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='text-sm leading-5 text-gray-900'>
                      Software Engineer
                    </div>
                    <div className='text-sm leading-5 text-gray-500'>
                      Web dev
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                      Active
                    </span>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                    Owner
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 h-10 w-10'>
                        <img
                          className='h-10 w-10 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </div>

                      <div className='ml-4'>
                        <div className='text-sm leading-5 font-medium text-gray-900'>
                          John Doe
                        </div>
                        <div className='text-sm leading-5 text-gray-500'>
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='text-sm leading-5 text-gray-900'>
                      Software Engineer
                    </div>
                    <div className='text-sm leading-5 text-gray-500'>
                      Web dev
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                      Active
                    </span>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                    Owner
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 h-10 w-10'>
                        <img
                          className='h-10 w-10 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </div>

                      <div className='ml-4'>
                        <div className='text-sm leading-5 font-medium text-gray-900'>
                          John Doe
                        </div>
                        <div className='text-sm leading-5 text-gray-500'>
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='text-sm leading-5 text-gray-900'>
                      Software Engineer
                    </div>
                    <div className='text-sm leading-5 text-gray-500'>
                      Web dev
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                      Active
                    </span>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                    Owner
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 h-10 w-10'>
                        <img
                          className='h-10 w-10 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </div>

                      <div className='ml-4'>
                        <div className='text-sm leading-5 font-medium text-gray-900'>
                          John Doe
                        </div>
                        <div className='text-sm leading-5 text-gray-500'>
                          john@example.com
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <div className='text-sm leading-5 text-gray-900'>
                      Software Engineer
                    </div>
                    <div className='text-sm leading-5 text-gray-500'>
                      Web dev
                    </div>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                      Active
                    </span>
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500'>
                    Owner
                  </td>

                  <td className='px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium'>
                    <a
                      href='#'
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Index
