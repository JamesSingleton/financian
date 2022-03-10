import Image from 'next/image'
import classNames from 'classnames'

const Hero = ({ lightBackground, lightText, imageSrc, imageFirst }) => {
  const backgroundClass = classNames({
    'text-gray-700 body-font': true,
    'bg-white': lightBackground,
    'bg-gray-900': !lightBackground,
  })

  const containerClass = classNames({
    'container mx-auto flex px-5 py-24 items-center': true,
    'md:flex-row flex-col': imageFirst,
    'flex-row-reverse': !imageFirst,
  })

  const headingClass = classNames({
    'text-3xl font-extrabold tracking-tight  sm:text-4xl': true,
    'text-gray-900': !lightText,
    'text-gray-100': lightText,
  })

  return (
    <section className={backgroundClass}>
      <div className={containerClass}>
        <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            src={imageSrc}
            alt="Picture of the author"
            width={350}
            height={350}
          />
        </div>
        <div className="items-left flex flex-col text-left md:w-1/2 md:pl-16 lg:flex-grow lg:pl-24">
          <h2 className={headingClass}>
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">
              Start your free trial today.
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
