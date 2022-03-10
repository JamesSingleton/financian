import Image from 'next/image'
import Form from './Form'
import styles from './Hero.module.css'

const Hero = () => (
  <section className={`${styles.hero} md:py-10 md:px-20`}>
    <div className="container flex flex-col items-center px-5 py-24 md:flex-row">
      <div className="order-2 mb-10 ml-auto w-full md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
        <Form />
      </div>
    </div>
  </section>
)

export default Hero
