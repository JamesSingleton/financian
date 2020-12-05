import Page from '@/components/Layout/Page';
import Pricing from '@/components/Pricing/pricing'
import Hero from '@/components/Home/Hero'

const Index = () => (
  <Page>
    <Hero lightBackground={true} />
    <Hero lightBackground={false}/>
    <Hero lightBackground={true} />
  </Page>
);

export default Index;