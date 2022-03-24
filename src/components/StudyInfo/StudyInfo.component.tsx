import { Grid, Image, Text, Title } from '@mantine/core';

import CallToAction from '../CallToAction/CallToAction.component';
import styles from './StudyInfo.module.scss';

type CaseStudyJson = {
  title: string;
  desc: string;
  framework: string;
  language: string;
  about: string;
};

type StudyInfoProps = {
  hostedLink?: string;
  altColour?: boolean;
  data?: CaseStudyJson;
  image?: string;
  hideButton?: boolean;
};

function StudyInfo({
  hostedLink,
  altColour,
  data,
  image,
  hideButton,
}: StudyInfoProps) {
  return (
    <>
      <div className={styles.container}>
        <Grid className={styles.content} justify="center" align="center">
          <Grid.Col md={6} lg={4}>
            <Image
              src={image}
              alt={`${data?.title} case study image`}
              height={300}
              fit="contain"
            />
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <CallToAction
              title={data?.title}
              desc={data?.desc}
              externalLink={true}
              buttonLink={hostedLink ?? ''}
              buttonText={'Visit'}
              altColour={altColour}
              hideButton={hideButton}
            />
          </Grid.Col>
        </Grid>

        <Grid className={styles.content} justify="center" align="center">
          <Grid.Col md={6} lg={4}>
            <Title
              className={altColour ? styles['details--light'] : styles.details}
              order={2}
            >
              Framework: {data?.framework}
            </Title>
            <Title
              className={altColour ? styles['details--light'] : styles.details}
              order={2}
            >
              Language: {data?.language}
            </Title>
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Title
              className={
                altColour ? styles['aboutHeader--light'] : styles.aboutHeader
              }
              order={1}
            >
              About this Project
            </Title>
            <Text className={altColour ? styles['about--light'] : styles.about}>
              {data?.about}
            </Text>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}

export default StudyInfo;
