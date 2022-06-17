import React, {useState} from 'react';
import { useExchangeQuery } from '../hooks/useCoinApis';
import { Table } from 'antd';
import millify from 'millify';


const Exchanges = () => {
    const {data, error, isError, isLoading} = useExchangeQuery()
      const [myData,setMyData] = useState([])

   // const allData = data?.data


    console.log(data)
    if(isError){
        return <h3>{error.message}</h3>
    }
    return <div>
        <div className='exchanges-wrapper'>
          
       <table className='table-container'>
           <thead >
           <tr>
               <th>#Exchange </th>
               <th>#Trust Sore </th>
               <th>#24 Volume normalized</th>
               <th>#24h Volume </th></tr>
           </thead>
           <tbody>
              {data?.data.map(data => (
                  <tr className='data-row'>
                      <td><img src={data.image} alt="logo" className='image-logo'/>    {data.name}</td>
                      <td>{data.trust_score === 10 ? <div className='score-container'> <div className='high-score'></div>  <span>{data.trust_score}</span> </div> : <div className='score-container'><div className='high-score'></div> <span>{data.trust_score}</span> </div>}</td>
                      <td>{millify(data.trade_volume_24h_btc)}</td>
                      <td>{millify(data.trade_volume_24h_btc_normalized)}</td>
                      
                  </tr>
              ))}
           </tbody>
       </table>
           

 
       </div>
        

        
    </div>;
}



export default Exchanges;