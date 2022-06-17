import {useQuery} from 'react-query'
import axios from 'axios'
import { useState } from 'react';

//global stats 
const options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/global',
  headers: {
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
    'X-RapidAPI-Key': '512311850cmshc611bc0b1498a0ap134326jsnfad3ebf00a65'
  }
};

//tatal coins 

const TopCoins = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/markets',
  params: {vs_currency: 'usd', page: '1', per_page: '10', order: 'market_cap_desc'},
  headers: {
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
    'X-RapidAPI-Key': '512311850cmshc611bc0b1498a0ap134326jsnfad3ebf00a65'
  }
};

const allCryotos = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/markets',
  params: {vs_currency: 'usd', page: '1', per_page: '100', order: 'market_cap_desc'},
  headers: {
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
    'X-RapidAPI-Key': '512311850cmshc611bc0b1498a0ap134326jsnfad3ebf00a65'
  }
};

// crypto  news headers 

const newsOptions = {
  method: 'GET',
  url: 'https://crypto-news16.p.rapidapi.com/news/top/4',
  headers: {
    'X-RapidAPI-Key': '512311850cmshc611bc0b1498a0ap134326jsnfad3ebf00a65',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
  }
};

const newsListOptions = {
  method: 'GET',
  url: 'https://crypto-news16.p.rapidapi.com/news/top/50',
  headers: {
    'X-RapidAPI-Key': '512311850cmshc611bc0b1498a0ap134326jsnfad3ebf00a65',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
  }
};

const exchangeOptions = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/exchanges',
  headers: {
    'X-RapidAPI-Key': '512311850cmshc611bc0b1498a0ap134326jsnfad3ebf00a65',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
};

// function  to  fetch  API
 const fetchGlobalStats  = ()  => {
    return  axios.request(options)
  }

  //get  exchanges funtion

  const getAllExchanges = () => {
    return axios.request(exchangeOptions)
  }

  const getNewsList = () => {
    return axios.request(newsListOptions)
  }

  
  // function  to  fetch  news 
  const fetchNewsApi = () => {
    return axios.request(newsOptions)
  } 

 
  
 export const useCoinsData = () => {
  
       return useQuery("global-stats",   fetchGlobalStats)
}

//get  all coins

const getTopCoins = () => {
  return axios.request(TopCoins)
}
const getAllCryptos = () => {
  return axios.request(allCryotos)
}

export const useTopCoins = () => {
  return useQuery("top-coins", getTopCoins)
}


export const useAllCryptoQuery = () => {
  return useQuery("all-cryptos", getAllCryptos)
}


//get crypto new 

export const  useNewsApi =  ()  => {

  return useQuery("top-news", fetchNewsApi)
}

export const  useAllNewsQuery = () => {
  return useQuery("all-news", getNewsList)
}

export const useExchangeQuery = () => {
  return useQuery("all-exchanges", getAllExchanges)
}


/*

FETCH   COIN  BY  ID

*/






