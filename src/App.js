
import './App.css';
import {Routes, Route} from 'react-router-dom'
import TopCoins from './components/TopCoins';
import {Layout} from 'antd'
import LeftNavbar from './components/LeftNavbar';
import TopNavbar from './components/TopNavbar';
import Home from './pages/Home';
import Exchanges from './pages/Exchanges';
import RecentlyAdded from './pages/RecentlyAdded';
import Markets from './pages/Markets';
import NewsPage from './pages/NewsPage';
import CoinDetails from './pages/CoinDetails';
const { Header, Content, Sider,Footer } = Layout;


function App() {
 
  return (
    <div className="App">
      
        
        <Layout style={{minHeight: "100vh"}}>
      <Sider  width={250} style={{overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0, color: "white"}}>  <LeftNavbar /> </Sider>
      <Layout style={{ marginLeft: 250 }}>
        <Header style={{backgroundColor: "#FFFFFF", height: "50px", borderBottom: "1px solid #d8e0e6", marginLeft: "1px", paddingLeft: "1px", paddingRight: "3px"}}> <TopNavbar /> </Header>
        <Content style={{backgroundColor: "F2F9FD", padding: "10px"}}>
          <Routes>
            <Route  path='/'  element={<Home />}      />
            <Route  path='/exchanges'  element={<Exchanges />}      />
            <Route  path='/recently-added'  element={<RecentlyAdded />}      />
            <Route  path='/cryptos'  element={<Markets />}      />
            <Route  path='/cryptos/:tokenId'  element={<CoinDetails />}      />
            <Route  path='/news'  element={<NewsPage />}      />
           
          </Routes>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>

        </div>
)}

export default App;
