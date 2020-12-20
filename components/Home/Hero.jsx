import Image from 'next/image'
import Form from './Form'
import styles from './Hero.module.css';

const Hero = () => (
  <section className={styles.hero}>
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 order-2 ml-auto">
        <Form />
      </div>
    </div>
  </section>
)

export default Hero;