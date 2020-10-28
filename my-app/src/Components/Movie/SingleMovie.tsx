import React from "react";
import "./SingleMovie.css"

interface iMovie {
        title: string | number,
        year: string | number,
        users_rating: string | number,
        img_url: string,
        genre: string
}

const SingleMovie = (props: iMovie) => {
const genreList = props.genre;

    return(
    <div className="container">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src= {props.img_url} alt="hei"/>
                <span className="card-title">{ props.title}</span>
            </div>
            <div className="card-content">
            <p> Year: {props.year}, Genre: {props.genre[0]}</p>
            </div>
            <div className="card-action">
              <a><button> </button></a>
            </div>
          </div>
        </div>
    </div>
    )
}

export default SingleMovie;