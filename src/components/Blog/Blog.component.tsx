import { Center, Grid, Loader } from '@mantine/core';
import styles from './Blog.module.scss';
import BlogItem from './BlogItem/BlogItem.component';

import { blogData } from '../../assets/json';

function Blog() {
  return !blogData ? (
    <Center>
      <Loader />
    </Center>
  ) : (
    <div className={styles.blog}>
      <div className="blog-post">
        <div className={styles['centre-blog']}>
          <BlogItem
            title={blogData.posts[0].title}
            description={blogData.posts[0].desc}
            image={blogData.posts[0].image}
            routerLink={blogData.posts[0].routerLink}
          />
        </div>
        {blogData.posts.length > 1 && (
          <Grid justify={'center'}>
            {blogData.posts
              .filter((x, index) => index !== 0)
              .map((post) => {
                return (
                  <Grid.Col md={5} lg={4}>
                    <BlogItem
                      title={post.title}
                      description={post.desc}
                      image={post.image}
                      routerLink={post.routerLink}
                      simpleBlogPost={true}
                    />
                  </Grid.Col>
                );
              })}
          </Grid>
        )}
      </div>
    </div>
  );
}

export default Blog;
