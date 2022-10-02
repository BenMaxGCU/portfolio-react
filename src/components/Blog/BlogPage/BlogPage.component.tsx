import {
  Image,
  Container,
  Center,
  Loader,
  useMantineColorScheme,
} from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import styles from './BlogPage.module.scss';

type BlogPageProps = {
  image?: string;
  markdown: string;
};

function ExternalLink(props: any) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}

function BlogPage({ image, markdown }: BlogPageProps) {
  const { colorScheme } = useMantineColorScheme();
  const lightColourScheme = colorScheme === 'light';

  return !markdown ? (
    <Center>
      <Loader />
    </Center>
  ) : (
    <Container
      className={lightColourScheme ? styles['page--light'] : styles.page}
    >
      {image && (
        <Image radius={'md'} src={image} imageProps={{ loading: 'lazy' }} />
      )}
      <ReactMarkdown components={{ a: ExternalLink }} children={markdown} />
    </Container>
  );
}

export default BlogPage;
