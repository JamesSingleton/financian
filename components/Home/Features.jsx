import Image from 'next/image';

const Features = () => (
  <section className="text-gray-500 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <Image 
          alt="feature" 
          className="object-cover object-center h-full w-full" 
          src="https://dummyimage.com/460x500" 
          width={460}
          height={500}
        />
      </div>
      <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-teal-400 mb-5">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Check your rate</h2>
            <p className="leading-relaxed text-base">Fill out a form to checkout your rate in minutes</p>
            <a className="mt-3 text-teal-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-teal-400 mb-5">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Verify your information</h2>
            <p className="leading-relaxed text-base">Most borrowers are instantly approved</p>
            <a className="mt-3 text-teal-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col mb-10 lg:items-start items-center">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-teal-400 mb-5">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Get your money</h2>
            <p className="leading-relaxed text-base">98% of personal loan funds are sent in just one business day</p>
            <a className="mt-3 text-teal-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;