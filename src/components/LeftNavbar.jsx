import { Menu } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom'
import { AppleOutlined, AppstoreOutlined, AudioOutlined, BarChartOutlined, FieldTimeOutlined, InstagramOutlined, MediumOutlined, PlusOutlined, QuestionOutlined, RiseOutlined, SearchOutlined, SketchOutlined, StockOutlined, TwitterOutlined, UserAddOutlined, YoutubeOutlined } from '@ant-design/icons'
 
const LeftNavbar = () => {
    const {SubMenu, Item} = Menu
    return <div className='left-nav-container'>
        <div className='left-navb-header'>
        <div className='logo-container'>
          <Link to="/">  <p className='logo-title'>  <span className='logo-symbol'>ce</span>  coin explore</p></Link>
        </div>
           <Menu style={{backgroundColor: "rgb(18,12,24)" ,  color: "white", minHeight: "100vh"}} mode="inline" theme='dark'>
           <Item key="1" icon={<StockOutlined style={{fontSize: "20px"}}/>} style={{fontSize: "18px", textTransform: "capitalize", fontWeight: "400", color:"rgb(245, 243, 247"}}>   <Link to="/cryptos">crypto currencies</Link>  </Item>
             <Item key="2" icon={<BarChartOutlined  style={{fontSize: "20px"}}/>}style={{fontSize: "18px", textTransform: "capitalize", fontWeight: "400", color:"rgb(245, 243, 247"}}>  <Link to="/exchanges">exchanges </Link>  </Item> 
             <Item key="3" icon={ <SketchOutlined style={{fontSize: "20px"}}/>} style={{fontSize: "18px", textTransform: "capitalize", fontWeight: "400", color:"rgb(245, 243, 247"}}>  NFTs </Item>
             <Item key="5" icon={<RiseOutlined style={{fontSize: "20px"}}/>}style={{fontSize: "18px", textTransform: "capitalize", fontWeight: "400", color:"rgb(245, 243, 247"}}>   large movers </Item>
             <Item key="6" icon={<FieldTimeOutlined style={{fontSize: "20px"}}/>}style={{fontSize: "18px", textTransform: "capitalize", fontWeight: "400", color:"rgb(245, 243, 247"}}>  <Link to="/recently-added"> recently added </Link></Item>
             <Item key="7" icon = {<AppstoreOutlined style={{fontSize: "20px"}}/>}style={{fontSize: "18px", textTransform: "capitalize", fontWeight: "400", color:"rgb(245, 243, 247"}}>  categories </Item>
            
             <SubMenu key="9" title="Creators"  icon={<PlusOutlined style={{fontSize: "20px"}}/>}>
                 <Item key="10"> Apply  for  listing   </Item>
                  <Item key="11">apply for sponsored</Item>
               
             </SubMenu>

             <SubMenu key="12" title="Resources" icon={<SearchOutlined style={{fontSize: "20px"}}/>}>
                 <Item key="13">about coin explore </Item>
                  <Item key="14">learn crypto</Item>
                  <Item key="15">content hub</Item>
                  <Item key="16">products</Item>
               
             </SubMenu>
             <Item key="17" icon = {<QuestionOutlined  style={{fontSize: "20px"}}/>}style={{fontSize: "18px", textTransform: "capitalize", fontWeight: "400", color:"rgb(245, 243, 247"}}>  support</Item>
           </Menu>
           <div className='side-bar-footer'>
               <div className='side-footer-left'>
                   <div className='social-link'>
                       <AppleOutlined /> <span className='social-title'>ios app</span>
                   </div>
                   <div className='social-link'>
                   <TwitterOutlined /> <span className='social-title'>twitter</span>
                   </div>
                   <div className='social-link'>
                   <InstagramOutlined /> <span className='social-title'>instagram</span>
                   </div>
               </div>
               <div className='side-footer-right'>
               <div className='social-link'>
                       <YoutubeOutlined /> <span className='social-title'>you tube</span>
                   </div>
                   <div className='social-link'>
                   <MediumOutlined /> <span className='social-title'>medium</span>
                   </div>
                   <div className='social-link'>
                   <AudioOutlined /> <span className='social-title'>podcast</span>
                   </div>
               </div>
           </div>
        </div>
    </div>;
}

export default LeftNavbar;