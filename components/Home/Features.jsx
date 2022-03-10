import Image from 'next/image'

const Features = () => (
  <section className="body-font bg-gray-900 text-gray-400">
    <div className="container mx-auto px-5 py-24">
      <div className="mb-20 text-center">
        <h2 className="title-font mb-4 text-4xl font-medium text-white sm:text-3xl">
          <em>Fair & fast</em> personal loans
        </h2>
      </div>
      <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap sm:-m-4">
        <div className="mb-6 flex flex-col items-center p-4 text-center md:mb-0 md:w-1/3">
          <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
          </div>
          <div className="flex-grow">
            <h3 className="title-font mb-3 text-lg font-medium text-white">
              Loans from $1,000 - $50,000
            </h3>
            <p className="text-base leading-relaxed">
              3 & 5 year loan terms with an APR range from 8.41% - 35.99%
            </p>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-center p-4 text-center md:mb-0 md:w-1/3">
          <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
            <svg
              className="h-10 w-10"
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
          <div className="flex-grow">
            <h3 className="title-font mb-3 text-lg font-medium text-white">
              Next day funding
            </h3>
            <p className="text-base leading-relaxed">
              99% of personal loan funds are sent just 1 business day after
              signing
            </p>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-center p-4 text-center md:mb-0 md:w-1/3">
          <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gray-800 text-indigo-400">
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="flex-grow">
            <h3 className="title-font mb-3 text-lg font-medium text-white">
              No early payment fee
            </h3>
            <p className="text-base leading-relaxed">
              You may pay off part or all of the loan at any time with no fee
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Features
