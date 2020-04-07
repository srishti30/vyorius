import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Delivery from "./Delivery";

 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
       

      
         <div className="container" style={{width:"300",height:"80vh",margin:"200px"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAOKoIRn7cZBCMFzTO-wT92u4rascmp_T4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
        </div>
       
      
      
      
    );
  }
}
 
export default SimpleMap;


 

