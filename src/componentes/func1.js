import React, { Component } from "react";
import ReactDOM from "react-dom";
import MapaHead from "./mapa-head"
import BlogItems from "./blog-item"

//Agregando el mapa con MapaHead
const element = <MapaHead usemap={false}/>;
ReactDOM.render(element,document.getElementById('mapa-head'));

//agregando los elementos del blog

let elementosBlog=[
  {"titulo":"Title1","image":"##","link":"#","author":"miguel1","fecha":"12-12-19"},
  {"titulo":"Title2","image":"##","link":"#","author":"miguel2","fecha":"1-10-19"},
  {"titulo":"Title3","image":"##","link":"#","author":"miguel3","fecha":"25-6-19"}
];

let itemsBlog=<BlogItems items={elementosBlog}/>
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