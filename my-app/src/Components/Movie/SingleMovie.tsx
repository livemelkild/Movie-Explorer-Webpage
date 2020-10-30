import React, {useState} from "react";

import Rating from "./Rating"
import "../../materialize/css/materialize.css"
import "../../materialize/css/materialize.min.css"


interface iMovie {
        id: string | number,
        title: string,
        year: string | number,
        users_rating: string | number,
        img_url: string,
        genre: string,
        upvote: number,
    }


const SingleMovie = (props: iMovie) => {
const printList = []
var i; 
for(i = 0; i  < props.genre.length ; i++){
  printList.push(" " + props.genre[i]);
}

    return(

      <div className="card  light-blue darken-1">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src= {props.img_url} />
      </div>
      <div className="card-content light-blue accent-1">
        <span className="card-title activator light-blue accent-1">Info<i className="material-icons right">more_vert</i></span>
      </div>
      <div className="card-reveal light-blue accent-2">
        <span className="card-title grey-text text-darken-4"><b>{props.title}</b><i className="material-icons right">close</i></span>
        <p><div className="card-info">
              
              <br/>
              <p> <b> Year:</b> {props.year} <br/> <b>Genre:</b>  {printList}</p>
              <p></p>
            <div className="card-action">
              <Rating 
              title={props.title}
              upvote={props.upvote}
              />

            </div>
            </div></p>
      </div>
    </div>
    
    )
}


export default SingleMovie;

