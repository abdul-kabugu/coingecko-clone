import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {QueryClientProvider, QueryClient}  from 'react-query'
import  {ReactQueryDevtools} from 'react-query/devtools'
import  'antd/dist/antd.less'
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);


