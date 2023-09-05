import { Button, ButtonProps, CheckIcon, Flex } from '@mantine/core';
import { useState } from 'react';
import { FC } from 'react';

export const DespachoButton: FC<{ actionName: string; props: ButtonProps }> = ({
  actionName,
  ...props
}) => {
  const [cargaHistorica, setCargaHistorica] = useState<boolean>(false);

  if (!cargaHistorica) {
    return (
      <Flex gap="xs">
        <Button fullWidth {...props}>
          {actionName}
        </Button>
        <Button icon={<CheckIcon />} />
      </Flex>
    );
  } else {
    return null;
  }
};
