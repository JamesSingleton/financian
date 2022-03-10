import Image from 'next/image'

const Steps = () => (
  <section className="body-font text-gray-700">
    <div className="container mx-auto flex flex-wrap px-5 py-24">
      <div className="flex w-full flex-wrap">
        <div className="mt-12 hidden md:mt-0 md:block md:w-1/2 lg:w-3/5">
          <Image
            className="h-full rounded-md"
            src="/static/images/writing-with-phone.jpeg"
            width={1080}
            height={720}
            alt="step"
          />
        </div>
        <div className="m-auto md:w-1/2 md:py-6 md:pr-10 lg:w-2/5">
          <div className="relative flex pb-16 md:ml-16 md:pb-24">
            <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
            </div>
            <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="title-font mb-1 text-sm font-medium uppercase tracking-wider text-gray-900">
                Check your rate
              </h2>
              <p className="leading-relaxed">
                Fill our a form to check your rate in as little as 5 minutes
              </p>
            </div>
          </div>
          <div className="relative flex pb-16 md:ml-16 md:pb-24">
            <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
              <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
            </div>
            <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="title-font mb-1 text-sm font-medium uppercase tracking-wider text-gray-900">
                Verify your information
              </h2>
              <p className="leading-relaxed">
                Most borrowers are approved instantly
              </p>
            </div>
          </div>
          <div className="relative flex md:ml-16">
            <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="title-font mb-1 text-sm font-medium uppercase tracking-wider text-gray-900">
                Get your money
              </h2>
              <p className="leading-relaxed">
                99% of personal loans are sent in just 1 business day of signing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Steps
