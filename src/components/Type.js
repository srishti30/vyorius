import React, { Component } from 'react';
import { Card } from 'antd';
import { Radio, Input } from 'antd';
import { TimePicker } from 'antd';
import "./Type.css";
import {Link} from "react-router-dom";
const { RangePicker } = TimePicker;



class Type extends Component {
    state = { 
      value: 1,
     };
     onChange = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
    };
  
    render() { 
      const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };
     
      const { value } = this.state;
        return ( 
            
            <div className="container-bg"style={{ margin:"200px",position:"centre" }} id="potfolio" >
            <div className="container">
            <div className="site-card-border-less-wrapper">
    <Card title="SELECT TYPE OF DELIVERY" bordered={true} 
    style={{ width: 500,size:"300" ,height:"50vh", margin:"200px",background:"white",border: "1px solid black"}}>
    <Radio.Group onChange={this.onChange} value={value}>
    <h5>DELIVERY </h5>
    <Radio style={radioStyle} value={1}>
    
      Schedule a delivery at your nearest station
    </Radio>
    <h5>PICK UP</h5>
    <Radio style={radioStyle} value={2}>
    Pick up by yourself
  </Radio>
  
    <Radio style={radioStyle} value={4}>
          More...
          {value === 3 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
          </Radio>
         
      </Radio.Group>
    </Card>

    <Card title="DELIVERY LOCATION" bordered={true} style={{ width: 500 ,height:"50vh", margin:"200px",top:"30px", border: "1px solid black"}}>
    <Radio.Group onChange={this.onChange} value={value}>
    <h5>ORIGIN ADDRESS </h5>
    <Radio style={radioStyle} value={1}>
    
     We will let you know the nearest station 
    </Radio>
    <h5>DESTINATION ADDRESS</h5>
    <Radio style={radioStyle} value={2}>
    We will let you know the nearest station to pick up your package
  </Radio>
  
   
         
      </Radio.Group>
      <div style={{font:"bold"}}>
      <h5>PICK TIME SLOT</h5>
      <RangePicker />
    </div>
    <Link  style={{margin:"10px",position:"relative"}} to ="/Product" class="btn btn-info primary">Proceed</Link>
    </Card>
  </div>
  
  </div>
  </div>
          
         );
    }
}
 
export default Type;

