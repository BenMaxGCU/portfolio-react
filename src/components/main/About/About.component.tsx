import { Grid, Image, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import styles from './About.module.scss';
import AboutList from './AboutList/AboutList.component';
import IconLinks from './IconLinks/IconLinks.component';

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
          <Image
            radius="md"
            src="https://i.pinimg.com/474x/f0/94/f9/f094f9bf1ff86bdb51cea95aae0551f6.jpg"
            alt="About me portrait image"
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default About;
