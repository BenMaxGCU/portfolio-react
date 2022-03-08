import {
  Center,
  Grid,
  Image,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import {
  studyGhibli,
  studyGym,
  studyKanban,
  studyNasa,
  studyRecipe,
  studySudoku,
  studyTechreads,
  studyTesting,
  studyTodo,
} from '../../assets/imgs';

import CallToAction from '../CallToAction/CallToAction.component';
import Footer from '../../structure/Footer/Footer.component';
import styles from './CaseStudies.module.scss';

function CaseStudies() {
  const { colorScheme } = useMantineColorScheme();
  const lightColourScheme = colorScheme === 'light';

  return (
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
        <Grid
          justify="center"
          align="center"
          style={{ margin: 0, padding: '3rem 1.5rem' }}
        >
          <Grid.Col md={5} lg={4}>
            <CallToAction
              title="Kanban Board"
              desc="An Angular based Kanban Application"
              buttonLink={'/kanban'}
              altColour={lightColourScheme}
            />
          </Grid.Col>
          <Grid.Col md={5} lg={3} offset={1}>
            <Image
              src={studyKanban}
              alt="Kanban board case study image"
              height={300}
              fit="contain"
            />
          </Grid.Col>
        </Grid>

        <Grid justify="center" align="center" style={{ margin: 0 }}>
          <Grid.Col md={5} lg={3}>
            <Image
              src={studyNasa}
              alt="Nasa image case study image"
              height={300}
            />
          </Grid.Col>
          <Grid.Col md={5} lg={4} offset={1}>
            <CallToAction
              title="Nasa Picture of the Day Application"
              desc="A React based Nasa POD App"
              buttonLink={'/nasa'}
              altColour={lightColourScheme}
            />
          </Grid.Col>
        </Grid>

        <Grid
          justify="center"
          align="center"
          style={{ margin: 0, padding: '3rem 1.5rem' }}
        >
          <Grid.Col md={5} lg={4}>
            <CallToAction
              title="Studio Ghibli App"
              desc="A React based Movie Info Application"
              buttonLink={'/ghibli'}
              altColour={lightColourScheme}
            />
          </Grid.Col>
          <Grid.Col md={5} lg={3} offset={1}>
            <Image
              src={studyGhibli}
              alt="Movie information case study image"
              height={300}
              fit="contain"
            />
          </Grid.Col>
        </Grid>

        <Grid justify="center" align="center" style={{ margin: 0 }}>
          <Grid.Col md={5} lg={3}>
            <Image
              src={studyTodo}
              alt="To-do list case study image"
              height={300}
              fit="contain"
            />
          </Grid.Col>
          <Grid.Col md={5} lg={4} offset={1}>
            <CallToAction
              title="To-Do List"
              desc="A React based To-Do List"
              buttonLink={'/todo'}
              altColour={lightColourScheme}
            />
          </Grid.Col>
        </Grid>

        <Grid
          justify="center"
          align="center"
          style={{ margin: 0, padding: '3rem 1.5rem' }}
        >
          <Grid.Col md={5} lg={4}>
            <CallToAction
              title="Recipe Application"
              desc="A React based Recipe Search Application"
              buttonLink={'/recipes'}
              altColour={lightColourScheme}
            />
          </Grid.Col>
          <Grid.Col md={5} lg={3} offset={1}>
            <Image
              src={studyRecipe}
              alt="Recipe search case study image"
              height={300}
              fit="contain"
            />
          </Grid.Col>
        </Grid>

        <Grid justify="center" align="center" style={{ margin: 0 }}>
          <Grid.Col md={5} lg={3}>
            <Image
              src={studySudoku}
              alt="Self-solving sodoku case study image"
              height={300}
              fit="contain"
            />
          </Grid.Col>
          <Grid.Col md={5} lg={4} offset={1}>
            <CallToAction
              title="Self-Solving Sudoku Application"
              desc="A Python based Sudoku Puzzle"
              buttonLink={'/soduko'}
              altColour={lightColourScheme}
            />
          </Grid.Col>
        </Grid>

        <Grid
          justify="center"
          align="center"
          style={{ margin: 0, padding: '3rem 1.5rem' }}
        >
          <Grid.Col md={5} lg={4}>
            <CallToAction
              title="TechReads Book Application"
              desc="A React based application for Book Reviews"
              buttonLink={'/books'}
              altColour={lightColourScheme}
            />
          </Grid.Col>
          <Grid.Col md={5} lg={3} offset={1}>
            <Image
              src={studyTechreads}
              alt="TechReads Book application case study image"
              height={300}
              fit="contain"
            />
          </Grid.Col>
        </Grid>

        <Grid justify="center" align="center" style={{ margin: 0 }}>
          <Grid.Col md={5} lg={3}>
            <Image
              src={studyTesting}
              alt="Testing report system case study image"
              height={300}
              fit="contain"
            />
          </Grid.Col>
          <Grid.Col md={5} lg={4} offset={1}>
            <CallToAction
              title="In-House Testing Report System"
              desc="A C# based application for In-House Testing Reporting"
              buttonLink={'/reporting'}
              altColour={lightColourScheme}
            />
          </Grid.Col>
        </Grid>

        <Grid
          justify="center"
          align="center"
          style={{ margin: 0, padding: '3rem 1.5rem' }}
        >
          <Grid.Col md={5} lg={4}>
            <CallToAction
              title="Gym booking and account system"
              desc="A C# based application for a Gym"
              buttonLink={'/gym'}
              altColour={lightColourScheme}
            />
          </Grid.Col>
          <Grid.Col md={5} lg={3} offset={1}>
            <Image
              src={studyGym}
              alt="Gym booking and accounts system case study image"
              height={300}
              fit="contain"
            />
          </Grid.Col>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default CaseStudies;
