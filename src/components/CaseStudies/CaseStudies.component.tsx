import {
  Center,
  Grid,
  Image,
  Loader,
  Title,
  useMantineColorScheme,
} from '@mantine/core';

import CallToAction from '../CallToAction/CallToAction.component';
import Footer from '../../structure/Footer/Footer.component';
import styles from './CaseStudies.module.scss';
import useCaseStudies from './apiHooks/useCaseStudies';
import getFileUrl from './apiHooks/getFileUrl';
import useWindowDimension from '../../hooks/useWindowDimension';

function CaseStudies() {
  const { data: caseStudies } = useCaseStudies();
  const { colorScheme } = useMantineColorScheme();
  const windowDimension = useWindowDimension();

  const lightColourScheme = colorScheme === 'light';
  const isMobile = windowDimension <= 1040;

  return !caseStudies ? (
    <Center>
      <Loader />
    </Center>
  ) : (
    <div className={styles.container}>
      <Center className={styles.header}>
        <Title
          className={lightColourScheme ? styles['title--light'] : styles.title}
          order={1}
        >
          My Case Studies
        </Title>
      </Center>
      <div className={styles.studies}>
        {!isMobile
          ? caseStudies.map((caseStudy, index) => {
              const evenIndex = index % 2 === 0;
              return evenIndex ? (
                <Grid
                  key={index}
                  justify="center"
                  align="center"
                  style={{ margin: 0 }}
                >
                  <Grid.Col md={5} lg={3}>
                    <Image
                      src={getFileUrl(caseStudy, caseStudy.studyImg)}
                      alt={`${caseStudy.studyId} image`}
                      height={300}
                      fit="contain"
                    />
                  </Grid.Col>
                  <Grid.Col md={5} lg={4} offset={1}>
                    <CallToAction
                      title={caseStudy.title}
                      desc={caseStudy.description}
                      buttonLink={`/${caseStudy.routerId}`}
                      altColour={lightColourScheme}
                    />
                  </Grid.Col>
                </Grid>
              ) : (
                <Grid
                  key={index}
                  justify="center"
                  align="center"
                  style={{ margin: 0, padding: '3rem 1.5rem' }}
                >
                  <Grid.Col md={5} lg={4}>
                    <CallToAction
                      title={caseStudy.title}
                      desc={caseStudy.description}
                      buttonLink={`/${caseStudy.routerId}`}
                      altColour={lightColourScheme}
                    />
                  </Grid.Col>
                  <Grid.Col md={5} lg={3} offset={1}>
                    <Image
                      src={getFileUrl(caseStudy, caseStudy.studyImg)}
                      alt={`${caseStudy.studyId} image`}
                      height={300}
                      fit="contain"
                    />
                  </Grid.Col>
                </Grid>
              );
            })
          : caseStudies.map((caseStudy, index) => {
              return (
                <Grid
                  key={index}
                  justify="center"
                  align="center"
                  style={{ margin: 0 }}
                >
                  <Grid.Col md={5} lg={3}>
                    <Image
                      src={getFileUrl(caseStudy, caseStudy.studyImg)}
                      alt={`${caseStudy.studyId} image`}
                      height={300}
                      fit="contain"
                    />
                  </Grid.Col>
                  <Grid.Col md={5} lg={4} offset={1}>
                    <CallToAction
                      title={caseStudy.title}
                      desc={caseStudy.description}
                      buttonLink={`/${caseStudy.routerId}`}
                      altColour={lightColourScheme}
                    />
                  </Grid.Col>
                </Grid>
              );
            })}
      </div>
      <Footer />
    </div>
  );
}

export default CaseStudies;
