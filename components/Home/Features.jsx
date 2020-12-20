import Image from 'next/image';

const Features = () => (
  <section className="text-gray-500 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="text-center mb-20">
        <h2 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
          Fair & fast personal loans
        </h2>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <div className="flex-grow">
            <h3 className="text-white text-lg title-font font-medium mb-3">Loans from $1,000 - $50,000</h3>
            <p className="leading-relaxed text-base">3 & 5 year loan terms with an APR range from 8.41% - 35.99%</p>
          </div>
        </div>
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="flex-grow">
            <h3 className="text-white text-lg title-font font-medium mb-3">Next day funding</h3>
            <p className="leading-relaxed text-base">99% of personal loan funds are sent just 1 business day after signing</p>
          </div>
        </div>
        <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-grow">
            <h3 className="text-white text-lg title-font font-medium mb-3">No early payment fee</h3>
            <p className="leading-relaxed text-base">You may pay off part or all of the loan at any time with no fee</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;