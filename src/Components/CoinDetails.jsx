import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lodar from './Lodar';
import { Api } from '../index';
import Errrorcom from './Errrorcom';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  HStack,
  Image,
  RadioGroup,
  Radio,
  VStack,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
  Button,
} from '@chakra-ui/react';
import Chart from './Chart';

const CoinDetails = () => {
  const params = useParams();
  const [coin, setcoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState('inr');
  const [days, setDays] = useState('24');
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  const btns = ["24h", "1W", "15d" ,"1m", "1Y"]

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays('24h')
        setLoading(true)
        break;
      case "1d":
        setDays('7d')
        setLoading(true)
        break;
      case "15d":
        setDays('15d')
        setLoading(true)
        break;
      case "1m":
        setDays('30d')
        setLoading(true)
        break;
      case "1y":
        setDays('365d')
        setLoading(true)
        break;
    
      default:
        setDays("24h")
        setLoading(true)
        break;
    }
  }

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${Api}/coins/${params.id}`);
        // console.log(data);
        const {data:chartdata} = await axios.get(`${Api}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
        setChartArray(chartdata.prices)
        setcoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  },[params.id, days, currency]);

  if (error) return <Errrorcom />;

  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Lodar />
      ) : (
        <>
          <Box width={'full'} borderWidth={1}>
            <Chart arr={chartArray} currency={currencySymbol} days={days}/>
          </Box>
          <HStack>
              {btns.map((i) => {
                return (
                  <Button key={i} onClick={()=> switchChartStats(i)}>{i}</Button>
                )
              })}
          </HStack>
          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value={'inr'}>INR</Radio>
              <Radio value={'usd'}>USD</Radio>
              <Radio value={'eur'}>EUR</Radio>
            </HStack>
          </RadioGroup>
          <VStack spacing={'4'} p={'16'} alignItems={'flex-start'}>
            <Text
              fontSize={'md'}
              alignSelf={'center'}
              textTransform={'capitalize'}
              fontFamily={'cursive'}
            >
              Last Updated on {Date().split('G')[0]}
            </Text>

            <Image src={coin.image.large} />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
              <StatHelpText>
                <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease"} />
                {coin.market_data.price_change_percentage_24h}
              </StatHelpText>
            </Stat>

            <Badge fontSize={'2xl'} bg={'blackAlpha.800'} color={'white'}>{`#${coin.market_cap_rank}`}</Badge>

            <Custombar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} />
            <Box w={'full'} p={'4'}>
            <Items title={"Max Supply"} value={`${coin.market_data.max_supply}`}  />
            <Items title={"Circulating Supply"} value={`${coin.market_data.circulating_supply}`}  />
            <Items title={"Market Cap"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}  />
            <Items title={"M C Change 24H"} value={`${coin.market_data.market_cap_change_24h}`}  />
            <Items title={"All Time High"} value={`${currencySymbol}${coin.market_data.ath[currency]}`}  />
            <Items title={"All Time low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`}  />
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};


const Custombar = ({high, low}) => {
  return(
    <VStack w={'full'} >
    <Progress value={80} w={'full'}/>
    <HStack justifyContent={'space-between'} w={'full'}>
      <Badge children={low} colorScheme='red'/>
      <Text>24H Range</Text>
      <Badge children={high} colorScheme='green'/>
    </HStack>
  </VStack>
    )
}

const Items = ({title, value}) => {
return(
<HStack justifyContent={'space-between'} w={'full'} pt={'10'} fontFamily={'sans-serif'}>
  <Text fontSize={'xl'}>{title}</Text>
  <Badge fontSize={'xl'}>{value}</Badge>
</HStack>
)
}

export default CoinDetails;
