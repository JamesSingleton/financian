import {
  WEBSITE_NAME,
  WEBSITE_TITLE,
  WEBSITE_DESCRIPTION,
  WEBSITE_URL,
} from '@/lib/constants'
import Page from '@/components/Layout/Page'
import Hero from '@/components/Home/Hero'
import SocialMeta from '@/components/SocialMeta'
import Steps from '@/components/Home/Steps'
import Features from '@/components/Home/Features'
import InTheNews from '@/components/Home/InTheNews'

const Index = () => (
  <Page>
    <SocialMeta
      image="/static/twitter-cards/hero-image.webp"
      title={`${WEBSITE_NAME} - ${WEBSITE_TITLE}`}
      url={WEBSITE_URL}
      description={WEBSITE_DESCRIPTION}
    />
    <Hero />
    <Features />
    <InTheNews />
    <Steps />
  </Page>
)

export default Index
