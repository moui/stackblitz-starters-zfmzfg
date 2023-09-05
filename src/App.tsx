import { Box, Button, Group } from '@mantine/core';
import { FC } from 'react';
import Mapa from './Mapview';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <Mapa />
      <Group grow>
        <Button />
        <Button />
        <Button />
      </Group>
    </>
  );
};
