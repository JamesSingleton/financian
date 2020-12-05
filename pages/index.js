import Page from '@/components/Layout/Page';
import Hero from '@/components/Home/Hero'
import SocialMeta from '@/components/SocialMeta';
import { WEBSITE_NAME, WEBSITE_TITLE, WEBSITE_DESCRIPTION, WEBSITE_URL } from '@/lib/constants';

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
      imageSrc="/static/svg/undraw_Credit_card_re_blml.svg"
    />
  </Page>
);

export default Index;