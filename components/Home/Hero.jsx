import Image from 'next/image'
import Form from './Form'
import styles from './Hero.module.css';

const Hero = () => (
  <section className={`${styles.hero} md:py-10 md:px-20`}>
    <div className="container flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0 order-2 ml-auto w-full">
        <Form />
      </div>
    </div>
  </section>
)

export default Hero;