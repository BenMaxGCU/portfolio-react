import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import './ColourToggle.module.scss'; 

function ColourToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  useHotkeys([['mod+B', () => toggleColorScheme()]]);

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? (
        <SunIcon style={{ width: 32, height: 32 }} />
      ) : (
        <MoonIcon style={{ width: 32, height: 32 }} />
      )}
    </ActionIcon>
  );
}

export default ColourToggle;