import React, { useRef } from 'react';

import About from '../About/About.component';
import Banner from '../../utility/Banner/Banner.component';
import Footer from '../../../structure/Footer/Footer.component';
import Hero from '../Hero/Hero.component';
import { useMantineColorScheme } from '@mantine/core';

function Home() {
  const { colorScheme } = useMantineColorScheme();
  const aboutRef = useRef<null | HTMLDivElement>(null);

  const scrollIntoView = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero scrollToComponent={scrollIntoView} />
      <div ref={aboutRef}>
        <About />
      </div>
      <Banner
        title={'Get in Touch!'}
        desc={
          'Interested in working with me? Click the button below to reveal my email address. \n I will try to respond ASAP.'
        }
        altColour={colorScheme === 'light'}
        buttonText={'Reveal Email'}
        buttonLink={'https://mailhide.io/en/e/ZEQSF'}
      />
      <Banner
        title={'Resume'}
        desc={'Check out my experience'}
        altColour={colorScheme === 'dark'}
        buttonText={'Download My Resume'}
        buttonLink={require('../../../assets/docs/bm-resume.pdf')}
        buttonDownload={true}
        buttonDownloadText={'bm-resume.pdf'}
        buttonIcon={true}
      />
      <Footer />
    </>
  );
}

export default Home;
