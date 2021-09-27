import React, { Children, useState } from 'react'
import Menu from '../Menu'
import { MdLabel, MdHome } from 'react-icons/md'

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const close = () => {
    setSidebarOpen(false)
  }
  const open = () => {
    setSidebarOpen(true)
  }

  return (
    <div>
      <div className="flex h-screen bg-gray-200">
        <div
          className={sidebarOpen ? 'block' : 'hidden'}
          onClick={close}
          className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"
        ></div>

        <div
          className={
            'fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 ' +
            (sidebarOpen
              ? 'translate-x-0 ease-out'
              : '-translate-x-full ease-in')
          }
        >
          <Menu.Brand>DevShop</Menu.Brand>
          <Menu.Nav>
            <Menu.NavItem href="/" Icon={MdHome}>
              Home
            </Menu.NavItem>
            <Menu.NavItem href="/categories" Icon={MdLabel}>
              Categorias
            </Menu.NavItem>
            <Menu.NavItem href="/products" Icon={MdLabel}>
              Produtos
            </Menu.NavItem>
          </Menu.Nav>
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
            <div className="flex items-center">
              <button
                onClick={open}
                className="text-gray-500 focus:outline-none lg:hidden"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center">
              <button className="flex mx-4 text-gray-600 focus:outline-none">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(old => !old)}
                  className="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none"
                >
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                    alt="Your avatar"
                  />
                </button>

                <div
                  onClick={() => setDropdownOpen(false)}
                  className={
                    'fixed inset-0 h-full w-full z-10 ' + dropdownOpen
                      ? 'block '
                      : ''
                  }
                ></div>

                {dropdownOpen && (
                  <div
                    className={
                      'absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 '
                    }
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                    >
                      Products
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
export default Layout
