import { Image, Container } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import styles from './BlogPage.module.scss';

type BlogPageProps = {
  image?: string;
  markdown: string;
};

function BlogPage({ image, markdown }: BlogPageProps) {
  return (
    <Container className={styles.page}>
      {image && <Image radius={'md'} src={image} />}
      <ReactMarkdown children={markdown} />
    </Container>
  );
}

export default BlogPage;
