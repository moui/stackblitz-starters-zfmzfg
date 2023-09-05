import { Box, Button, Group } from '@mantine/core';
import React from 'react';
import { FC } from 'react';
import { DespachoButton } from './DespachoButton';
import Mapa from './Mapview';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [estadoDespacho, setEstadoDespacho] = React.useState<string>('');
  return (
    <Box>
      <Mapa />
      <Button mt="xs" color="orange.5" fullWidth>
        Despachar
      </Button>
      <Group mt="xs" grow>
        <Button>Rutear</Button>
        <Button>Reporte</Button>
      </Group>
    </Box>
  );
};
