import React, { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';
import {Link} from "react-router-dom";
import "./Start_page.tsx";


function Start_page(){
  const test = () => {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
  };
  //document.addEventListener("DOMContentLoaded",test);
  
  useEffect( () => {
    test();
  },[]);

    return(
        <nav>
        <div className="nav-wrapper green darken-3">
        <a href="#!" className="brand-logo center">Movie Expolrer</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          <Link className = "start_link" to="/next">
            <li><a> <b>Search</b></a></li>
          </Link>
          </ul>
        </div>
      <div>
        <h1 className="homepage"> </h1>
        <div className="slider">
        <ul className="slides">
        <li>
        <img src="https://secure.static.tumblr.com/4d3dd0aabf6c52c57afc18879c169ae1/riqitkz/9nhn15y8u/tumblr_static_2012_movies_collage.jpg" /> 
        <div className="caption center-align">
          <h3><b>Find your favourite movie</b></h3>
          <h5 className="light grey-text text-lighten-3"></h5>
        </div>
      </li>
      
      <li>
        <img src="https://www.barnevakten.no/wp-content/uploads/2010/11/harry-potter-deathly-hallows-1-1.jpg" /> 
        <div className="caption right-align ">
          <h3> <b> Comedy, Action, Magic? </b></h3>
          <h5 className="light grey-text text-lighten-3"></h5>
        </div>
      </li>
      <li>
      <img src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2018/03/13153742/RT_300EssentialMovies_700X250.jpg" /> 
        <div className="caption center-align">
          <h3> <b>No limits... </b> </h3>
          <h5 className="light grey-text text-lighten-3"></h5>
        </div>
        </li>
        </ul>     
    </div>
    </div>

    </nav>
   

    )
}

export default Start_page;