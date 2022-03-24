import { Grid, List } from '@mantine/core';

function AboutList() {
  return (
    <>
      <Grid gutter={32}>
        <Grid.Col span={4} offset={1}>
          <List size={'lg'} listStyleType={'none'}>
            <List.Item style={{ color: '#C94B62', fontWeight: '600' }}>
              Languages:{' '}
            </List.Item>
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
        </Grid.Col>
        <Grid.Col span={4}>
          <List size={'lg'} listStyleType={'none'}>
            <List.Item style={{ color: '#C94B62', fontWeight: '600' }}>
              Frameworks:{' '}
            </List.Item>
            <List.Item>.NET MVC</List.Item>
            <List.Item>.NET Core</List.Item>
            <List.Item>Spring</List.Item>
            <List.Item>Xamarin</List.Item>
            <List.Item>React Native</List.Item>
            <List.Item>Angular</List.Item>
            <List.Item>React</List.Item>
            <List.Item>Electron</List.Item>
          </List>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default AboutList;
