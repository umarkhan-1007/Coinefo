import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Api } from '../index';
import { Container, HStack } from '@chakra-ui/react';
import Loding from './Lodar';
import ExCard from './ExCard';
import Errrorcom from './Errrorcom';

const Exchange = () => {
  const [Loder, setLoder] = useState(true);
  const [showCoin, setShowcoin] = useState([]);
  const [Error, setError] = useState(false);

  useEffect(() => {
    const res = async () => {
      try {
        const { data } = await axios.get(`${Api}/exchanges`);
        setShowcoin(data);
        setLoder(false);
        // console.log(data);
      } catch (error) {
        setError(true)
        setLoder(false)
      }
    };

    res();
  }, []);

  if (Error) return <Errrorcom/>

  return (
    <>
      <Container h={'container.md'} maxW={'container.xl'}>
        {Loder ? (
          <Loding />
        ) : (
          <>
            <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
              {showCoin.map(e => {
                return (
                  <ExCard
                    key={e.id}
                    img={e.image}
                    rank={e.trust_score_rank}
                    name={e.name}
                    url={e.url}
                    voli={Math.floor(e.trade_volume_24h_btc)}
                  />
                );
              })}
            </HStack>
          </>
        )}
      </Container>
    </>
  );
};

export default Exchange;
