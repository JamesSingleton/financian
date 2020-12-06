import Page from '@/components/Layout/Page';
import Hero from '@/components/Home/Hero'
import SocialMeta from '@/components/SocialMeta';
import { WEBSITE_NAME, WEBSITE_TITLE, WEBSITE_DESCRIPTION, WEBSITE_URL } from '@/lib/constants';
import Pricing from '@/components/Pricing'

const Index = () => (
  <Page>
    <SocialMeta 
      image="/static/twitter-cards/home.jpg"
      title={`Home | ${WEBSITE_NAME} - ${WEBSITE_TITLE}`}
      url={WEBSITE_URL}
      description={WEBSITE_DESCRIPTION}
    />
    <Hero 
      lightBackground={true}
      lightText={false}
      imageFirst={true}
      imageSrc="/static/svg/undraw_Credit_card.svg"
    />
    <Hero 
      lightBackground={false}
      lightText={true}
      imageFirst={false}
      imageSrc="/static/svg/undraw_pay_online.svg"
    />
    <Hero 
      lightBackground={true}
      lightText={false}
      imageFirst={true}
      imageSrc="/static/svg/undraw_personal_finance.svg"
    />
    <Pricing />
  </Page>
);

export default Index;