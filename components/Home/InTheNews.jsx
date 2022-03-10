const InTheNews = () => (
  <section>
    <div className="container mx-auto flex flex-col px-5 py-24">
      <div className="mx-auto">
        <svg
          className="m-auto h-20 w-20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
        <h2 className="title-font mb-4 text-2xl font-medium sm:text-3xl">
          Fair & fast personal loans
        </h2>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row"></div>
    </div>
  </section>
)

export default InTheNews
