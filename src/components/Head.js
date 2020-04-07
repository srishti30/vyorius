import React, { Component } from 'react';
import { Layout,Menu } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const {Header}=Layout;

function Head()
{
return(
    <Layout>
    <Header className="header">
    <div className="logo" />
   
     
      
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

      <Menu.Item key="1">Vyorius</Menu.Item>
        <Menu.Item key="2">Search order</Menu.Item>
        <Menu.Item key="3">Review</Menu.Item>
        <Menu.Item key="4">Contact us</Menu.Item>
        
     
      <Avatar style={{left:"800px"}} size="medium" icon={<UserOutlined />}></Avatar>
    
      </Menu>
      
    </Header>
    </Layout>

);
}
export default Head;



  