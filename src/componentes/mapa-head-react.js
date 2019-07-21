import React, { Component } from "react";
import ReactMapGL, {FlyToInterpolator } from 'react-map-gl';

class MapaHeadReact extends Component{
    constructor(props) {
        super(props)
        this.tk1 = "pk.eyJ1IjoibWlndWVsYW5nbWFnbyIsImEiOiJjanh2NGQzbTcwMTJwM2Ntdm12cGF1ajUwIn0.EambgAy-B3UzUBy0PEClAA";
        this.state = {
            viewport: {
                latitude: 19.28521,
                longitude: -99.73480,
                zoom: 12,
                bearing:180,
                pitch:30
            }
        }

        this._onViewportChange=(viewport)=>{
            //console.log(viewport,this)
            this.setState({viewport: {...this.state.viewport, ...viewport} });
        }
    }

    componentDidMount(){
        setTimeout(() => {
            let latitude=19.29024
            let longitude=-99.65631;
            this._onViewportChange({
                longitude,
                latitude,
                zoom: 14,
                bearing:0,
                pitch:45,
                transitionInterpolator: new FlyToInterpolator(),
                transitionDuration: 70000
            });    
        }, 500);
        
    }

    

    render() {
        const {viewport, settings} = this.state;
        return (
            <div className="mapa-obj"><ReactMapGL mapboxApiAccessToken={this.tk1} 
            mapStyle="mapbox://styles/mapbox/dark-v9"
            {...viewport} {...settings} width="100%" height="100%"
                onViewportChange={this._onViewportChange}
            /></div>
        );
    }

}

export default MapaHeadReact;