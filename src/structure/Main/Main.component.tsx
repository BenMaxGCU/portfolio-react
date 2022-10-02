import { Route, Routes } from 'react-router-dom';

import CaseStudies from '../../components/CaseStudies/CaseStudies.component';
import Home from '../../components/main/Home/Home.component';
import StudyInfo from '../../components/StudyInfo/StudyInfo.component';
import { Center, Loader, useMantineColorScheme } from '@mantine/core';
import Blog from '../../components/Blog/Blog.component';
import BlogPage from '../../components/Blog/BlogPage/BlogPage.component';
import DownloadButton from '../../components/utility/DownloadButton/DownloadButton.component';
import useCaseStudies from '../../components/CaseStudies/apiHooks/useCaseStudies';
import useBlog from '../../components/Blog/apiHooks/useBlog';
import getFileUrl from '../../components/CaseStudies/apiHooks/getFileUrl';

function Main() {
  const { data: caseStudies } = useCaseStudies();
  const { data: blog_posts } = useBlog();
  const { colorScheme } = useMantineColorScheme();

  return !caseStudies || !blog_posts ? (
    <Center>
      <Loader />
    </Center>
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/blog" element={<Blog />} />
      {caseStudies.map((caseStudy) => {
        return !caseStudy.hasChildComponent ? (
          <Route
            key={caseStudy.routerId}
            path={`/${caseStudy.routerId}`}
            element={
              <StudyInfo
                data={caseStudy}
                image={getFileUrl(caseStudy, caseStudy.studyImg)}
                altColour={colorScheme === 'light'}
                hostedLink={caseStudy.hostedLink}
                hideButton={caseStudy.hostedLink.length === 0}
              />
            }
          />
        ) : (
          <Route
            key={caseStudy.routerId}
            path={`/${caseStudy.routerId}`}
            element={
              <StudyInfo
                data={caseStudy}
                image={getFileUrl(caseStudy, caseStudy.studyImg)}
                altColour={colorScheme === 'light'}
                hostedLink={caseStudy.hostedLink}
                hideButton={caseStudy.hostedLink.length === 0}
                childComp={
                  <DownloadButton
                    buttonText={'Download Dissertation'}
                    buttonLink={require('../../assets/docs/Honours - Final Report (Ben Maxwell).docx')}
                    altColour={colorScheme === 'light'}
                  />
                }
              />
            }
          />
        );
      })}
      {blog_posts.length > 0 &&
        blog_posts.map((post) => {
          return (
            <Route
              key={post.routerId}
              path={`/blog/${post.routerId}`}
              element={
                <BlogPage
                  image={getFileUrl(post, post.coverImg)}
                  markdown={post.markdownText}
                />
              }
            />
          );
        })}
    </Routes>
  );
}

export default Main;
