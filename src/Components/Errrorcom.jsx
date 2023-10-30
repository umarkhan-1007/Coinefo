import React from 'react'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Stack, } from '@chakra-ui/react'

const Errrorcom = () => {
  return (
    <>
    <Stack >
     <Alert status="error">
    <AlertIcon />
    <AlertTitle>Erro will facting coin</AlertTitle>
    <AlertDescription>
      check your internet conection
    </AlertDescription>
  </Alert>;
    </Stack>
    </>
  )
}

export default Errrorcom
