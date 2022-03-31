import {
  Image,
  Grid,
  Title,
  Text,
  useMantineColorScheme,
  SimpleGrid,
} from '@mantine/core';
import styles from './BlogItem.module.scss';

type BlogItemProps = {
  title: string;
  description: string;
  simpleBlogPost?: boolean;
};

function BlogItem({ title, description, simpleBlogPost }: BlogItemProps) {
  const { colorScheme } = useMantineColorScheme();

  return !simpleBlogPost ? (
    <Grid justify={'center'}>
      <Grid.Col md={6} lg={5} offset={1}>
        <Image
          radius={'sm'}
          src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg"
        />
      </Grid.Col>
      <Grid.Col md={5} lg={4}>
        <Title
          className={
            colorScheme === 'light' ? styles['title--light'] : styles.title
          }
        >
          {title}
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
      <Image
        radius={'sm'}
        src="https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg"
      />
      <Title>{title}</Title>
      <Text>{description}</Text>
    </SimpleGrid>
  );
}

export default BlogItem;
