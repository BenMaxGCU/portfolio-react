import {
  Image,
  Grid,
  Title,
  Text,
  useMantineColorScheme,
  SimpleGrid,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import styles from './BlogItem.module.scss';

type BlogItemProps = {
  title: string;
  description: string;
  image?: string;
  routerLink?: string;
  simpleBlogPost?: boolean;
};

function BlogItem({
  title,
  description,
  image,
  routerLink,
  simpleBlogPost,
}: BlogItemProps) {
  const { colorScheme } = useMantineColorScheme();

  return !simpleBlogPost ? (
    <Grid justify={'center'}>
      <Grid.Col md={6} lg={5} offset={1}>
        {image && (
          <Link to={routerLink!}>
            <Image radius={'sm'} src={image} imageProps={{ loading: 'lazy' }} />
          </Link>
        )}
      </Grid.Col>
      <Grid.Col md={5} lg={4}>
        <Title
          className={
            colorScheme === 'light' ? styles['title--light'] : styles.title
          }
        >
          <Link to={routerLink!}>{title}</Link>
        </Title>
        <Text
          className={
            colorScheme === 'light' ? styles['text--light'] : styles.text
          }
        >
          {description}
        </Text>
      </Grid.Col>
    </Grid>
  ) : (
    <SimpleGrid cols={1}>
      {image && (
        <Link to={routerLink!}>
          <Image radius={'sm'} src={image} imageProps={{ loading: 'lazy' }} />
        </Link>
      )}
      <Title
        className={
          colorScheme === 'light' ? styles['title--light'] : styles.title
        }
      >
        <Link to={routerLink!}>{title}</Link>
      </Title>
      <Text
        className={
          colorScheme === 'light' ? styles['text--light'] : styles.text
        }
      >
        {description}
      </Text>
    </SimpleGrid>
  );
}

export default BlogItem;
