import Pocketbase, { Record } from 'pocketbase';
import { useQuery } from 'react-query';

export interface Post {
  id: string;
  title: string;
  description: string;
  coverImg: string;
  markdownText: string;
  created: Date;
  routerId: string;
}

const allBlogPosts = async (): Promise<Post[] | Record[]> => {
  const client = new Pocketbase('https://portfolio-pb.fly.dev');
  return await client.records.getFullList('blog_posts', 200, {});
};

const useBlog = () => {
  return useQuery<Post[] | Record[], Error>(['blog_posts'], allBlogPosts, {
    staleTime: Infinity,
  });
};

export default useBlog;
