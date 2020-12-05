import { useState } from 'react';
import Link from 'next/link';
import { WEBSITE_NAME } from '@/lib/constants'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="relative bg-white">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="font-semibold text-4xl tracking-tight text-gray-900">
                  {WEBSITE_NAME}
                </span>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button type="button" onClick={() => setNavbarOpen(!navbarOpen)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open Menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/services">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Services
              </a>
            </Link>
            <Link href="/products">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Products
              </a>
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-indigo-700">
              Sign up
            </a>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on mobile menu state. */}
      <div className={
        "absolute top-0 inset-x-0 p-2 transition transform origin-top-right" +
        (!navbarOpen ? ' hidden' : '')
      }>
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-2xl tracking-tight">{WEBSITE_NAME}</span>
              </div>
              <div className="-mr-2">
                <button type="button" onClick={() => setNavbarOpen(!navbarOpen)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span className="text-base font-medium text-gray-900">
                    Services
                  </span>
                </a>
                <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span className="text-base font-medium text-gray-900">
                    Products
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div>
              <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Sign up
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                   Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;