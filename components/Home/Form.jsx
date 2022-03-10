import { useState } from 'react'
const Form = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col items-center rounded-xl bg-gray-100 px-12 pt-14 pb-6 text-center shadow-md">
      <div className="mb-8 w-full">
        <h2 className="mb-4 text-3xl font-medium md:text-5xl">
          You are more than just a credit score
        </h2>
        <h3 className="text-xl leading-8 md:px-14">
          Fair & fast online loans from <span>$1,000 - $50,000</span>
        </h3>
      </div>
      <div className="w-80">
        <label
          id="listbox-label"
          className="block text-left text-sm font-medium text-gray-700"
        >
          I want to
        </label>
        <div className="relative mt-1 mb-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          >
            <span className="flex items-center">
              <span className="ml-3 block truncate">Pay off credit cards</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {isOpen && (
            <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
              <ul
                tabIndex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-item-3"
                className="max-h-56 overflow-auto rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <li
                  id="listbox-item-0"
                  className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                >
                  <div className="flex items-center">
                    <span className="ml-3 block truncate font-normal">
                      Wade Cooper
                    </span>
                  </div>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative inline-block w-full text-center">
          <button className="mx-auto flex rounded border-0 bg-gray-900 py-2 px-8 text-lg font-medium uppercase text-white hover:bg-indigo-600 focus:outline-none">
            check your rate
          </button>
          <div className="font-sm mt-2">
            <svg
              className="inline-block h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Won't affect your credit score
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
