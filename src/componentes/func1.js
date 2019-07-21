import React, { Component } from "react";
import ReactDOM from "react-dom";
import MapaHead from "./mapa-head"
import MapaHeadReact from "./mapa-head-react"
import BlogItems from "./blog-item"

//Agregando el mapa con MapaHead
//const element = <MapaHead usemap={true}/>;
//ReactDOM.render(element,document.getElementById('mapa-head'));

const element2 = <MapaHeadReact />;
ReactDOM.render(element2,document.getElementById('mapa-head'));

//agregando los elementos del blog



let itemsBlog=<BlogItems limit={3} feed="https://blog.itecgeo.com/feed/"/>
console.log(itemsBlog)
ReactDOM.render(itemsBlog,document.getElementById('blog-container1'));


//para hacer funcionar el nav burguer
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });