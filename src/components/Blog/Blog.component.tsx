import { Center, Grid, Loader } from '@mantine/core';
import styles from './Blog.module.scss';
import BlogItem from './BlogItem/BlogItem.component';

import { Record } from 'pocketbase';
import useBlog from './apiHooks/useBlog';
import getFileUrl from '../CaseStudies/apiHooks/getFileUrl';

function Blog() {
  const { data: blog_posts } = useBlog();

  return !blog_posts ? (
    <Center>
      <Loader />
    </Center>
  ) : (
    <div className={styles.blog}>
      <div className="blog-post">
        <div className={styles['centre-blog']}>
          <BlogItem
            title={blog_posts[0].title}
            description={blog_posts[0].description}
            image={getFileUrl(blog_posts[0] as Record, blog_posts[0].coverImg)}
            routerLink={`/blog/${blog_posts[0].routerId}`}
          />
        </div>
        {blog_posts.length > 1 && (
          <Grid justify={'center'}>
            {blog_posts.slice(1).map((post) => {
              return (
                <Grid.Col key={post.id} md={5} lg={4}>
                  <BlogItem
                    title={post.title}
                    description={post.description}
                    image={getFileUrl(post, post.coverImg)}
                    routerLink={`/blog/${post.routerId}`}
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
