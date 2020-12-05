import Image from 'next/image';

const Hero = ({lightBackground}) => {
  return (
    <section className={ lightBackground ? 'bg-white h-96' : 'bg-gray-900 h-96'}>
      <div className="container">
      <Image
        src="/static/svg/undraw_Credit_card_re_blml.svg"
        alt="Picture of the author"
        width={350}
        height={350}
      />
      </div>
    </section>
  )
}

export default Hero;