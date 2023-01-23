import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';

import Layout from './structure/Layout/Layout.component';
import {
  useColorScheme,
  useLocalStorageValue,
  useHotkeys,
} from '@mantine/hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  // State
  const preferredColorScheme = useColorScheme();
  const [colourScheme, setColourScheme] = useLocalStorageValue<ColorScheme>({
    key: 'colour-scheme',
    defaultValue: preferredColorScheme,
  });
  const client = new QueryClient();

  // Functions
  const toggleColourScheme = (value?: ColorScheme) =>
    setColourScheme(value || (colourScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['ctrl+B', () => toggleColourScheme()]]);

  return (
    <QueryClientProvider client={client}>
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
          withNormalizeCSS
        >
          <HelmetProvider>
            <Layout />
          </HelmetProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </QueryClientProvider>
  );
}

export default App;
