import { Helmet } from 'react-helmet-async';
// sections
import { HomeHero } from '../sections/home';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Landing Page | CreatoorAI</title>
      </Helmet>

      <HomeHero />
    </>
  );
}
