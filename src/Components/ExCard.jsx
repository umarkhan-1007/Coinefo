import { VStack, Image, Heading, Text, HStack, StatHelpText, StatArrow, Stat } from '@chakra-ui/react';
import React from 'react';

const ExCard = ({ name, img, rank, url ,voli,}) => {
  return (
    <>
      <a href={url} target={'blank'}>
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

          <Heading size={'md'} noOfLines={'1'}>
            {rank}
          </Heading>
          <Text fontSize={'lg'} textTransform={'uppercase'} fontWeight={'600'}
          noOfLines={'1'}>
            {name}
          </Text>
          <HStack>
            <VStack wrap={'wrap'} noOfLines={'1'}>
            <Stat>
            <StatHelpText>
            <StatArrow type='increase' />
            {`24 High ${voli}`}
            </StatHelpText>
            </Stat>
            </VStack>
          </HStack>
        </VStack>
      </a>
    </>
  );
};

export default ExCard;
