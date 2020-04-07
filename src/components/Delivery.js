import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Card } from 'antd';

const { Meta } = Card;
class Delivery extends Component {
    state = { 
        name:'abcdgdjhsjfh'
     };
    render() { 
        return ( 
            <div className="container" style={{margin:"150px",position:"relative", left:"80px", top:"20px"}}>
            <label for="exampleInputEmail1"><h5>Delivery details</h5></label>    
    <input class="form-control form-control-sm" type="text" placeholder=".Delivery details"></input>
                 <span>
                 <button className="btn btn-primary">confirm address</button>
                <Link  style={{margin:"20px",position:"relative"}} to ="/Type" class="btn btn-info primary">Proceed</Link>
                </span>
                </div>
         );
    }
}
 
export default Delivery;


