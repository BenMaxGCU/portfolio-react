import React, { useState } from 'react';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import Layout from './structure/Layout/Layout.component';

function App() {
  // State
  const preferredColorScheme = useColorScheme();
  const [colourScheme, setColourScheme] =
    useState<ColorScheme>(preferredColorScheme);

  // Functions
  const toggleColourScheme = (value?: ColorScheme) =>
    setColourScheme(value || (colourScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colourScheme}
      toggleColorScheme={toggleColourScheme}
    >
      <MantineProvider theme={{ colorScheme: colourScheme }} withGlobalStyles>
        <Layout />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
