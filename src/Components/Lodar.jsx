import React from 'react';
import { Spinner, Stack } from '@chakra-ui/react';

const Loding = () => {
  return (
    <Stack
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      w={'full'}
      h={'90vh'}
    >
      <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
    </Stack>
  );
};

export default Loding;
