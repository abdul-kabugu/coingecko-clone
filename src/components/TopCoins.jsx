import React from 'react';
import { useCoinsData } from '../hooks/useCoinApis';

const TopCoins = () => {
    const {data, isError, error}  = useCoinsData()
   console.log(data)
      if(isError ){
          return <h1>{error.message}</h1>
      }
    return <div>
        this  is top  coins 
    </div>;
}

// #endregion

export default TopCoins;