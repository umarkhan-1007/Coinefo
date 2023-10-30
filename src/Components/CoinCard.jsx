import { Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = '₹ ' }) => {
  return (
    <Link to={`/coin/${id}`}>
      <VStack
        w={'52'}
        shadow={'md'}
        p={'10'}
        borderRadius={'lg'}
        transition={'all 0.3s'}
        m={'4'}
        css={{
          '&:hover': {
            transform: 'scale(1.1)',
            filter: 'inherit',
          },
        }}
      >
        <Image w={'10'} h={'10'} src={img} objectFit={'cover'} />

        <Heading size={'md'}>{symbol}</Heading>
        <Heading size={'md'} noOfLines={'1'}>
          {`${currencySymbol}${price}`}
        </Heading>
        <Text
          fontSize={'lg'}
          textTransform={'uppercase'}
          fontWeight={'600'}
          noOfLines={'1'}
        >
          {name}
        </Text>
      </VStack>
    </Link>
  );
};

export default CoinCard;
