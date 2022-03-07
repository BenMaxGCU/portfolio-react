import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import React, { useState } from 'react';

import Layout from './structure/Layout/Layout.component';
import { useColorScheme } from '@mantine/hooks';

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
      <MantineProvider
        theme={{
          colorScheme: colourScheme,
          fontFamily: 'Alata, sans-serif',
          headings: { fontFamily: 'Alata, sans-serif' },
        }}
        withGlobalStyles
      >
        <Layout />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
