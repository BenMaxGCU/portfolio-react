import {
  Center,
  Container,
  Image,
  Loader,
  useMantineColorScheme,
} from '@mantine/core';

import { Prism } from '@mantine/prism';
import ReactMarkdown from 'react-markdown';
import styles from './BlogPage.module.scss';
import { useDocumentTitle } from '@mantine/hooks';
import rehypeRaw from 'rehype-raw';
import { Helmet } from 'react-helmet-async';

type BlogPageProps = {
  image?: string;
  title: string;
  routerLink: string;
  markdown: string;
};

function ExternalLink(props: any) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}

function BlogPage({ image, title, routerLink, markdown }: BlogPageProps) {
  const { colorScheme } = useMantineColorScheme();
  const lightColourScheme = colorScheme === 'light';
  useDocumentTitle(`${title} ✨ Ben Maxwell`);

  return !markdown ? (
    <Center>
      <Loader />
    </Center>
  ) : (
    <Container
      className={lightColourScheme ? styles['page--light'] : styles.page}
    >
      <Helmet>
        <meta name="description" content={title} />

        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta
          property="og:url"
          content={`https://www.benmaxwell.dev/blog/${routerLink}`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:title" content={title} />
      </Helmet>
      {image && (
        <Image radius={'md'} src={image} imageProps={{ loading: 'lazy' }} />
      )}
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          a: ExternalLink,
          code({ node, inline, className, children, ...props }) {
            return !inline ? (
              <Prism
                children={String(children).replace(/\n$/, '')}
                language="jsx"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
        children={markdown}
      />
    </Container>
  );
}

export default BlogPage;
