import { Avatar, Col, Row, Statistic, Typography, Image } from 'antd';
import React, {useState} from 'react';
import JoinBeta from '../colors/JoinBeta';
import TopCoins from '../components/TopCoins';
import { useAllCoins, useCoinsData, useNewsApi, useTopCoins} from '../hooks/useCoinApis';
import millify from 'millify';
import { Link } from 'react-router-dom';



const Home = () => {
  const {Title ,  Paragraph , Text}  = Typography
  const {pageNumber, setPageNumber }   =  useState(1)

  const {data, isError, error}  = useCoinsData()
   const {data: totalTokens, isError : isTokenError, error : tokenError }  = useTopCoins()
   const  {data: topNews , isError : isNewsError , error : newsError}  = useNewsApi()
   
  
  if(isError) {
    return  <h1>{error.message}</h1>
  }

     const globalStats = data?.data.data
    return <div>
       <Title level={2} style={{textTransform: "capitalize"}}>Global  crypto stats</Title>
       <Row>
         <Col span={12}> <Statistic   title="Total crypto currencies"  value={data?.data.data.active_cryptocurrencies}     /> </Col>
         <Col span={12}> <Statistic   title="Upcoming IDOs"  value={data?.data.data.upcoming_icos}   /> </Col>
         <Col span={12}> <Statistic   title="Ongoing IDOs"  value={data?.data.data.ongoing_icos}     /> </Col>
         <Col span={12}> <Statistic   title="Ended IDOs"  value={data?.data.data.ended_icos}     /> </Col>
         <Col span={12}> <Statistic   title="Total Crypto Excahnges"  value={data?.data.data.markets}    /> </Col>
         <Col span={12}> <Statistic   title="Bitcoin Market Cap"  value={data?.data.data ? millify(data?.data.data.total_market_cap.btc) : ""}    /> </Col>
       </Row>
   
       <div className='top-crypto   heading-divs'>
       <div className='top-crypto-heading'>
           <Title level={3} style={{textTransform: "capitalize"}}>Top 10 crypto currencies by  market cap</Title>
            <Link to="/cryptos">Load more</Link>
          </div>
          <div className='top-token-container'>
           {totalTokens?.data.map((token, i) => (
            <div className='token-box' key={i}>
              <div className='token-box-heading'>
                  <Title level={3}> {token.market_cap_rank}. {token.name}  </Title>
                  <Avatar src={<Image src={token.image} style={{ width: 32 }} />} />
              </div>
              <div className='token-box-body'>
                <Paragraph> Price {token ? millify(token.current_price) :  ""}</Paragraph>
                <Paragraph>Market cap{token ? millify(token.market_cap) : ""}</Paragraph>
               
                <Paragraph>  Daily changes {token ? millify(token.current_price) : ""}</Paragraph>

              </div>
            </div>
           ))}
          </div>
       </div>

       <div className='top-news   heading-divs'>
       <div className='top-crypto-heading'>
           <Title level={3}  style={{textTransform: "capitalize"}}>Trending  crypto news</Title>
            <Link to="/news">Load more</Link></div>

            <div className='news-container'>
              {topNews?.data.map((news, i) => (
                <div className='news-container-box' key={i}>
                 <Title level={3}>{news.title}</Title>
                 <Paragraph>{news.description}</Paragraph>
                <button  className="more-btn" > <a href={news.url} target="_blank">read more </a></button>

                </div>
              ))}
            
            </div>

              
       </div>

      
      
       
    </div>;
}



export default Home;