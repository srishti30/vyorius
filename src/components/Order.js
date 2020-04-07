import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';


  
function Order()
{   
    const layout = {
        labelCol: {
          
          col:10,
          span: 8,
        },
        wrapperCol: {
          span: 24,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 20,
        },
      };
    
  return (
    <div className="container"style={{width:"10",height:"20vh",margin:"80px"}}>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      
    > 
      
      <Form.Item
      
        label="Ordername"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your ordername!',
          },
        ]}
      >
        
        <Input />
      </Form.Item>
      

      <Form.Item size="small" 
        label="OrderDetails"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your orderdetails!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      
    </Form>
    </div>
    
  );
}

export default Order;
