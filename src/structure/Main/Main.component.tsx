import { Route, Routes } from 'react-router-dom';
import {
  ghibliData,
  gymData,
  kanbanData,
  nasaData,
  recipeData,
  reportingData,
  sodokuData,
  techreadsData,
  todoData,
  blogData,
  honoursData,
} from '../../assets/json';
import {
  studyGhibli,
  studyGym,
  studyKanban,
  studyNasa,
  studyRecipe,
  studySudoku,
  studyTechreads,
  studyTesting,
  studyTodo,
} from '../../assets/imgs';

import CaseStudies from '../../components/CaseStudies/CaseStudies.component';
import Home from '../../components/main/Home/Home.component';
import StudyInfo from '../../components/StudyInfo/StudyInfo.component';
import { useMantineColorScheme } from '@mantine/core';
import Blog from '../../components/Blog/Blog.component';
import BlogPage from '../../components/Blog/BlogPage/BlogPage.component';

function Main() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/blog" element={<Blog />} />
      <Route
        path="/honours"
        element={
          <StudyInfo
            data={honoursData}
            altColour={colorScheme === 'light'}
            hostedLink={''}
            hideButton={true} 
          />
        }
      />
      <Route
        path="/todo"
        element={
          <StudyInfo
            data={todoData}
            image={studyTodo}
            altColour={colorScheme === 'light'}
            hostedLink={'https://todo-list-blond.vercel.app/'}
          />
        }
      />
      <Route
        path="/recipes"
        element={
          <StudyInfo
            data={recipeData}
            image={studyRecipe}
            altColour={colorScheme === 'light'}
            hostedLink={'https://recipe-app-eta.vercel.app/'}
          />
        }
      />
      <Route
        path="/soduko"
        element={
          <StudyInfo
            data={sodokuData}
            image={studySudoku}
            altColour={colorScheme === 'light'}
            hostedLink={''}
            hideButton={true}
          />
        }
      />
      <Route
        path="/books"
        element={
          <StudyInfo
            data={techreadsData}
            image={studyTechreads}
            altColour={colorScheme === 'light'}
            hostedLink={''}
            hideButton={true}
          />
        }
      />
      <Route
        path="/reporting"
        element={
          <StudyInfo
            data={reportingData}
            image={studyTesting}
            altColour={colorScheme === 'light'}
            hostedLink={''}
            hideButton={true}
          />
        }
      />
      <Route
        path="/gym"
        element={
          <StudyInfo
            data={gymData}
            image={studyGym}
            altColour={colorScheme === 'light'}
            hostedLink={''}
            hideButton={true}
          />
        }
      />
      <Route
        path="/ghibli"
        element={
          <StudyInfo
            data={ghibliData}
            image={studyGhibli}
            altColour={colorScheme === 'light'}
            hostedLink={'https://ghibli-app-three.vercel.app/'}
          />
        }
      />
      <Route
        path="/nasa"
        element={
          <StudyInfo
            data={nasaData}
            image={studyNasa}
            altColour={colorScheme === 'light'}
            hostedLink={'https://nasa-rework.vercel.app/'}
          />
        }
      />
      <Route
        path="/kanban"
        element={
          <StudyInfo
            data={kanbanData}
            image={studyKanban}
            altColour={colorScheme === 'light'}
            hostedLink={'https://angular-practice-one.vercel.app/'}
          />
        }
      />
      {blogData.posts.length > 0 &&
        blogData.posts.map((post) => {
          return (
            <Route
              path={post.routerLink}
              element={<BlogPage image={post.image} markdown={post.markdown} />}
            />
          );
        })}
    </Routes>
  );
}

export default Main;
