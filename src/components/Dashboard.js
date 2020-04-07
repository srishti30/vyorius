import React from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {  Space} from 'antd';
import Order from "./Order"
import Maps from "./Maps";


import Delivery from "./Delivery";
import Head from "./Head";


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;




function Dashboard(){
  return(
    <Layout style={{}}>>
   
    <Head/>
    
    
    <Content  theme="dark" style={{ padding: '0 50px'}}>

      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        
      </Breadcrumb>
      
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider  theme="dark"className="site-layout-background" width={200}>
          <Menu theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <UserOutlined />
                  About Us
                </span>
              }
            >
              <Menu.Item key="1">Mission</Menu.Item>
              <Menu.Item key="2">Vision</Menu.Item>
            
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <LaptopOutlined />
                  Delivery System
                </span>
              }
            >
              <Menu.Item key="5">New Delivery</Menu.Item>
              <Menu.Item key="6">Already ordered</Menu.Item>
              
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <NotificationOutlined />
                  Reviews
                </span>
              }
            >
              <Menu.Item key="9">Rate us</Menu.Item>
              <Menu.Item key="10">Give feedback</Menu.Item>
              
            </SubMenu>
          </Menu>
        </Sider>
        <div  >
      

        <Order></Order>
        
        <Maps/>
        
        <Delivery></Delivery>
        </div>
        
       
        <Content theme="dark" style={{ padding: '0 24px', minHeight: 400}}></Content>
      </Layout>
     
    </Content>
    <Footer  style={{ textAlign: 'center' }}> VYORIUS LIMITED</Footer>
  </Layout>
  
);
  
}
export default Dashboard;
