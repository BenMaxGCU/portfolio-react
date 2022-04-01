import { Grid } from '@mantine/core';
import styles from './Blog.module.scss';
import BlogItem from './BlogItem/BlogItem.component';

import { studyGhibli } from '../../assets/imgs';
import blogPost from '../../assets/markdown/notes/Create a React Studio Ghibli Info app.md';
import { useEffect, useState } from 'react';
import BlogPage from './BlogPage/BlogPage.component';

function Blog() {
  const [exampleText, setExampleText] = useState('');

  useEffect(() => {
    fetch(blogPost)
      .then((res) => res.text())
      .then((text) => setExampleText(text));
  });

  return (
    <div className={styles.blog}>
      {/* 
      <div className="blog-post">
        <div className={styles['centre-blog']}>
          <BlogItem title="title" description="desc" />
        </div>
        <Grid justify={'center'}>
          <Grid.Col md={5} lg={4}>
            <BlogItem title="title" description="desc" simpleBlogPost={true} />
          </Grid.Col>
          <Grid.Col md={5} lg={4}>
            <BlogItem title="title" description="desc" simpleBlogPost={true} />
          </Grid.Col>
        </Grid>
      </div>
       */}
      <BlogPage image={studyGhibli} markdown={exampleText} />
    </div>
  );
}

export default Blog;
