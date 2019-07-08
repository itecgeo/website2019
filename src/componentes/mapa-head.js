
import React, { Component } from "react";
import * as maptalks from 'maptalks';
//import {BigPointLayer} from 'maptalks.biglayer';
//import axios from 'axios';

class MapaHead extends Component{
    constructor(props){
        super(props)
        this.elementoDOM=<div className="mapa-obj" id="containermap1">ok aqqui... va el mapa</div>
        this.puntos=[]
    }

    componentDidMount(){
        this.map = new maptalks.Map("containermap1", {
            center: [-99.6022393, 19.23002433],
            zoom: 15,
            pitch:40,
            baseLayer: new maptalks.TileLayer('base', {
              'urlTemplate' : 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
              'subdomains'  : ['a','b','c','d'],
              'attribution'  : '&copy; <a href="http://www.osm.org/copyright">OSM</a> contributors, '+
              '&copy; <a href="https://carto.com/attributions">CARTO</a>'
            })
        });
        /*
        //Todo este codigo es para ir por los puntos (equivalente a ajax en react)
        //importa axios para que se pueda usar
        axios.get("assets/toluca_zona_denue.geojson").then(res=>{
            let eljson=res.data;
            this.puntos=eljson["features"].map((f)=>{
                let geom=[ f.geometry.coordinates[0],f.geometry.coordinates[1],1 ]
                return geom//new maptalks.Marker(geom,{})
            })
            //let layerBig=new BigPointLayer("v2",this.puntos).addTo(this.map)
            //console.log(layerBig)
            //let layer= new maptalks.VectorLayer("v1",this.puntos).addTo(this.map)
            
        })
        */
        setTimeout(()=>{
            this.map.animateTo({
                center: [-99.6514,19.2911],
                zoom: 18,
                pitch: 65,
                bearing: 360
              }, {
                duration: 76000
              });  
        },4000)
          
    }

    render(){
        return this.elementoDOM;
    }

}

export default MapaHead
