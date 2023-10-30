import React from 'react'
import {Button, Stack, HStack} from "@chakra-ui/react"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <Stack bg={'blackAlpha.900'} >
      <HStack h={'20'} color={'white'} pl={'10'} gap={'4'} >
      <Button variant={'unstyled'} ><Link to={'/'} >Home</Link></Button>
      <Button variant={'unstyled'}><Link to={'/Coins'} >Coins</Link></Button>
      <Button variant={'unstyled'}><Link to={'/Exchanges'} >Exchanges</Link></Button>
      {/* <Button variant={'unstyled'}><Link to={'/coin/:id'} >CoinDetails</Link></Button> */}
      </HStack>
    </Stack>
  )
}

export default Header
