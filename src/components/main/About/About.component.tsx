import { Grid, Image, useMantineColorScheme } from '@mantine/core';

import AboutList from './AboutList/AboutList.component';
import { aboutImage } from '../../../assets/imgs';
import IconLinks from './IconLinks/IconLinks.component';
import styles from './About.module.scss';
import useWindowDimension from '../../../hooks/useWindowDimension';

function About() {
  const { colorScheme } = useMantineColorScheme();
  const windowDimension = useWindowDimension();

  const isMobile = windowDimension <= 1040;

  return !isMobile ? (
    <div
      className={colorScheme === 'dark' ? styles.about : styles['about--light']}
    >
      <Grid
        className={
          colorScheme === 'dark' ? styles.content : styles['content--light']
        }
      >
        <Grid.Col md={4} lg={6}>
          <h1>About Me</h1>
          <p>
            Hello, my name is Ben Maxwell. I am a software engineer with
            experience in UI design, frontend development and backend
            development. I am currently working at Arcadis IBI Group and have
            had great opportunities to work on projects for Transport Scotland,
            Traffic Scotland and National Transport Authority.
            <br />
            <br />
            Throughout my career in software engineering I have learned a
            multitude of languages and frameworks such as:
          </p>
          <AboutList />
          <IconLinks />
        </Grid.Col>
        <Grid.Col md={7} lg={6}>
          <Image radius="md" src={aboutImage} alt="About me portrait image" />
        </Grid.Col>
      </Grid>
    </div>
  ) : (
    <div
      className={colorScheme === 'dark' ? styles.about : styles['about--light']}
    >
      <Grid
        className={
          colorScheme === 'dark' ? styles.content : styles['content--light']
        }
      >
        <Grid.Col md={7} lg={6}>
          <Image
            radius="md"
            height={400}
            fit="contain"
            src={aboutImage}
            alt="About me portrait image"
          />
        </Grid.Col>
        <Grid.Col md={4} lg={6}>
          <h1>About Me</h1>
          <p>
            Hello, my name is Ben Maxwell. I am a software engineer with
            experience in UI design, frontend development and backend
            development. I am currently working at Arcadis IBI Group and have
            had great opportunities to work on projects for Transport Scotland,
            Traffic Scotland and National Transport Authority.
            <br />
            <br />
            Throughout my career in software engineering I have learned a
            multitude of languages and frameworks such as:
          </p>
          <AboutList />
          <IconLinks />
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default About;
