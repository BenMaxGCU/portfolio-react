import { Grid, Image, useMantineColorScheme } from '@mantine/core';

import AboutImg from './../../../assets/imgs/about-img.jpg';
import AboutList from './AboutList/AboutList.component';
import IconLinks from './IconLinks/IconLinks.component';
import styles from './About.module.scss';

function About() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <div
      className={colorScheme === 'dark' ? styles.about : styles['about--light']}
    >
      <Grid
        className={
          colorScheme === 'dark' ? styles.content : styles['content--light']
        }
      >
        <Grid.Col span={6}>
          <h1>About Me</h1>
          <p>
            Hello, my name is Ben Maxwell. I am a software engineer with
            experience in UI design, web development and backend development.
            Throughout my studies in software engineering I have learned a
            multitude of languages and frameworks such as:
          </p>
          <AboutList />
          <IconLinks />
        </Grid.Col>
        <Grid.Col span={6}>
          <Image radius="md" src={AboutImg} alt="About me portrait image" />
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default About;
