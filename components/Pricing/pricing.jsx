const Pricing = () => {
  return (
    <div className="mt-16 pb-12 lg:mt-20">
      <div className="relative z-0">
        <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-10">
            <div className="max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:col-start-4 lg:col-end-8 lg:row-start-1 lg:row-end-4">
              <div className="relative z-10 rounded-lg shadow-xl">
              <div>
                  <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-teal-500"></div>
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-teal-500 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Get both packages
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <p className="text-center text-lg font-semibold font-display text-teal-500 uppercase tracking-widest">
                        Bundle
                      </p>
                      <h2 className="mt-2 text-center text-3xl font-semibold font-display text-gray-900 sm:-mx-6">
                        Application UI + Marketing
                      </h2>
                      <div className="mt-4 flex items-center justify-center font-display">
                        <span className="-ml-8 text-right text-2xl font-semibold text-gray-400 tracking-wide line-through sm:text-3xl">
                          $
                          298
                        </span>
                        <span className="px-3 flex items-start text-6xl tracking-tight font-medium text-gray-900 sm:text-7xl">
                          <span className="mt-2 mr-1 text-4xl leading-none sm:text-5xl">
                            $
                          </span>
                          <span>
                            249
                          </span>
                        </span>
                        <span className="flex flex-col ">
                          <span className="text-2xl font-semibold text-gray-400 tracking-wide sm:text-3xl">USD</span>
                                  </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                    <ul>
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          All application UI components
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          All marketing components
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          Lifetime access
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          Use on unlimited projects
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500 whitespace-nowrap">
                          Free updates
                        </p>
                      </li>
                      <li className="mt-4 flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500 whitespace-nowrap">
                          Community access
                        </p>
                      </li>
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a href="/checkout/4d5ccd7c-c0a3-4440-9f31-401a093dd7ba" className="block w-full text-center rounded-lg bg-gray-800 px-6 py-4 text-xl leading-6 font-semibold font-display text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                          Buy Early Access
                        </a>
                      </div>
                      <p className="mt-6 text-center text-base font-medium text-gray-900">
                        Buying for your team?
                        <a href="#team-pricing" className="text-teal-600 font-semibold hover:underline">
                          View team pricing →
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-1 lg:col-end-4 lg:row-start-2 lg:row-end-3">
              <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                <div className="flex-1 flex flex-col">
  <div className="bg-white px-6 pt-12 pb-10">
    <div>
      <h2 className="mt-2 text-center text-3xl font-semibold font-display text-gray-900">
        Application UI
      </h2>
      <div className="mt-4 flex items-center justify-center font-display">
        <span className="px-3 flex items-start text-6xl tracking-tight font-medium text-gray-900">
          <span className="mt-2 mr-2 text-4xl">
            $
          </span>
          <span>
            149
          </span>
        </span>
        <span className="flex flex-col ">
          <span className="text-2xl font-semibold text-gray-400 tracking-wide">USD</span>
                  </span>
      </div>
    </div>
  </div>
  <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
    <ul>
      <li className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p className="ml-3 text-base font-medium text-gray-500">
          All application UI components
        </p>
      </li>
      <li className="mt-4 flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p className="ml-3 text-base font-medium text-gray-500">
          Lifetime access
        </p>
      </li>
      <li className="mt-4 flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p className="ml-3 text-base font-medium text-gray-500">
          Use on unlimited projects
        </p>
      </li>
      <li className="mt-4 flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p className="ml-3 text-base font-medium text-gray-500">
          Free updates
        </p>
      </li>
      <li className="mt-4 flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p className="ml-3 text-base font-medium text-gray-500">
          Community access
        </p>
      </li>
    </ul>
    <div className="mt-8">
      <div className="rounded-lg shadow-md">
        <a href="/checkout/0ed326ca-c1fc-440b-b1ba-bdfb01c43185" className="block w-full text-center rounded-lg bg-white px-6 py-3 text-base font-semibold font-display text-teal-600 hover:text-teal-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
          Buy Early Access
        </a>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>
            <div className="mt-6 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-8 lg:col-end-11 lg:row-start-2 lg:row-end-3">
              <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                <div className="flex-1 flex flex-col">
  <div className="bg-white px-6 pt-12 pb-10">
    <div>
      <h2 className="mt-2 text-center text-3xl font-semibold font-display text-gray-900">
        Marketing
      </h2>
      <div className="mt-4 flex items-center justify-center font-display">
        <span className="px-3 flex items-start text-6xl tracking-tight font-medium text-gray-900">
          <span className="mt-2 mr-2 text-4xl">
            $
          </span>
          <span>
            149
          </span>
        </span>
        <span className="flex flex-col ">
          <span className="text-2xl font-semibold text-gray-400 tracking-wide">USD</span>
                  </span>
      </div>
    </div>
  </div>
  <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
    <ul>
      <li className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p className="ml-3 text-base font-medium text-gray-500">
          All marketing components
        </p>
      </li>
      <li className="mt-4 flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p className="ml-3 text-base font-medium text-gray-500">
          Lifetime access
        </p>
      </li>
      <li className="mt-4 flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p className="ml-3 text-base font-medium text-gray-500">
          Use on unlimited projects
        </p>
      </li>
      <li className="mt-4 flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p className="ml-3 text-base font-medium text-gray-500">
          Free updates
        </p>
      </li>
      <li className="mt-4 flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p className="ml-3 text-base font-medium text-gray-500">
          Community access
        </p>
      </li>
    </ul>
    <div className="mt-8">
      <div className="rounded-lg shadow-md">
        <a href="/checkout/1ab56599-ff3e-4666-9686-edda6c81c82a" className="block w-full text-center rounded-lg bg-white px-6 py-3 text-base font-semibold font-display text-teal-600 hover:text-teal-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
          Buy Early Access
        </a>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing;