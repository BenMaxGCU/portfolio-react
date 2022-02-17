import { Group, List } from '@mantine/core';
import React from 'react';
import './About.scss';

function About() {
  return (
    <>
      <Group spacing={'sm'}>
        <List>
          <List.Item>Languages: </List.Item>
          <List.Item>C#</List.Item>
          <List.Item>Java</List.Item>
          <List.Item>JavaScript</List.Item>
          <List.Item>TypeScript</List.Item>
          <List.Item>Python</List.Item>
          <List.Item>PHP</List.Item>
          <List.Item>SQL</List.Item>
          <List.Item>HTML</List.Item>
          <List.Item>CSS</List.Item>
        </List>
        <List>
          <List.Item>Frameworks: </List.Item>
          <List.Item>Bootstrap</List.Item>
          <List.Item>.NET MVC</List.Item>
          <List.Item>.NET Core</List.Item>
          <List.Item>Xamarin</List.Item>
          <List.Item>Angular</List.Item>
          <List.Item>React</List.Item>
          <List.Item>jQuery</List.Item>
        </List>
      </Group>
    </>
  );
}

export default About;
