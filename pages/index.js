import Page from '@/components/Layout/Page';
import SectionItem from '@/components/Home/SectionItem'
import Hero from '@/components/Home/Hero'
import Features from '@/components/Home/Features'
import Testimonials from '@/components/Home/Testimonials'
import SocialMeta from '@/components/SocialMeta';
import { WEBSITE_NAME, WEBSITE_TITLE, WEBSITE_DESCRIPTION, WEBSITE_URL } from '@/lib/constants';
import Pricing from '@/components/Pricing'
import Steps from '@/components/Home/Steps';

const Index = () => (
  <Page>
    <SocialMeta 
      image="/static/twitter-cards/home.jpg"
      title={`Home | ${WEBSITE_NAME} - ${WEBSITE_TITLE}`}
      url={WEBSITE_URL}
      description={WEBSITE_DESCRIPTION}
    />
    <Hero />
    <Steps />
    <Features />
    <Pricing />
  </Page>
);

export default Index;