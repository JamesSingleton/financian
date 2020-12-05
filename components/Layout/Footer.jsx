import { WEBSITE_NAME } from '@/lib/constants'

const Footer = () => (
  <footer className="bg-gray-900 mt-12">
    <div className="mx-auto py-12 px-4 sm:px-6 lg:py-8 lg:px-6 md:flex md:items-center md:justify-between">
      <p className="mt-8 text-base leading-6 text-gray-300 md:mt-0 md:order-1 text-center">
        Copyright © {`${new Date().getFullYear()}`} {WEBSITE_NAME}. All rights reserved.
      </p>    
    </div>
  </footer>
)

export default Footer;