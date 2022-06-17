import React from 'react';
import { useAllNewsQuery } from '../hooks/useCoinApis';
import { Typography } from 'antd';
import { LoadingOutlined, LoginOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const NewsPage = () => {
    const {data : topNews, error, isError, isLoading} = useAllNewsQuery()
      const {Title, Paragraph} = Typography
    if(isError) {
        return <h1>{error.message}</h1>
    }

    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: 104,
          }}
          spin
        />
      );

    if(isLoading){
        return <div className='loading-div'>
         <Spin indicator={antIcon} />;


        </div>
    }
    return <div>
        
       <div className='news-container'>
              {topNews?.data.map((news, i) => (
                <div className='news-container-box' key={i}>
                 <Title level={3}>{news.title}</Title>
                 <Paragraph>{news.description}</Paragraph>
                <button  className="more-btn" > <a href={news.url} target="_blank">read more </a></button>

                </div>
              ))}
            
            </div>
    </div>;
}


export default NewsPage;