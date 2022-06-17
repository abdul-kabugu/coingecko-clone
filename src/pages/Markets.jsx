import React from 'react';
import { useQuery } from 'react-query';
import { useAllCryptoQuery } from '../hooks/useCoinApis';
import { Avatar, Typography,Image,  } from 'antd';
import millify from 'millify';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { Link } from 'react-router-dom';

const Markets = () => {
  const { data: totalTokens, error, isError, isLoading} = useAllCryptoQuery()

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 204,
      }}
      spin
    />
  );
  
  const {Title, Paragraph, Text} = Typography
  
  if(isError) {
    return <h3>{error.message}</h3>
  }

  if(isLoading){
    return <div className='loading-div'>
     <Spin indicator={antIcon} />;


    </div>
}
    return <div>
        <h1>this is total crypto page </h1>

        <div className='top-token-container'>
           {totalTokens?.data.map((token, i) => (
            <div className='token-box' key={i}>
              <div className='token-box-heading'>
                  <Title level={3}> {token.market_cap_rank}. <Link to={`/cryptos/${token.id}`}> {token.name} </Link> </Title>
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
       


    </div>;
}

export default Markets;