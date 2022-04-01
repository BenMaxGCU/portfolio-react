import { Image, Container, Center, Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './BlogPage.module.scss';

type BlogPageProps = {
  image?: string;
  markdown: string;
};

function BlogPage({ image, markdown }: BlogPageProps) {
  const [markdownText, setMarkdownText] = useState('');

  useEffect(() => {
    import(`../../../assets/markdown/notes/${markdown}`)
      .then((md) => {
        fetch(md.default)
          .then((res) => res.text())
          .then((text) => setMarkdownText(text));
      })
      .catch((err) => console.log(err));
  });

  return !markdownText ? (
    <Center>
      <Loader />
    </Center>
  ) : (
    <Container className={styles.page}>
      {image && <Image radius={'md'} src={image} />}
      <ReactMarkdown children={markdownText} />
    </Container>
  );
}

export default BlogPage;
