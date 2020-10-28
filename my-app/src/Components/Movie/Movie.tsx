import { Dispatch } from "redux";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { isPropertySignature } from "typescript";
import { selectModal } from "../../Reducer/ModalReducer";

import { openModal, fetchPending, fetchSuccess, fetchError } from '../../Action/Actions';

interface ModalState {
    id: number,
    title: string,
    year: string,
    user_rating: string,
    img_url: string,
    gendre: string[]
}

interface Rootreducer {

        searchReducer: {
            search: any;
        };
        loadingReducer: {
            loading: any;
        };
        fetchDataReducer: {
            fetch: any;
            pending: boolean;
            error: any;
        };
        sortReducer: {
            sortBy: string;
            order: number;
        };
        ModalReducer: ModalState;
}

interface Props {
    id: number,
    title: string,
    year: string,
    user_rating: string,
    img_url: string,
    gendre: string[]
}

export const Movie = () => {
    const dispatch = useDispatch();
    const searchState = useSelector((state: RootStore) => state.searchReducer.search);

    console.log(searchState);
    
    //kjører bare en gang, henter filmene til initalstate
    useEffect( 
        () => {
            console.log("search one time");
            dispatch(fetchPending());
            fetch('http://localhost:4000/api/movie')
            .then(response => response.json())
            .then((data: ModalState) => dispatch(fetchSuccess(data)))
            .catch(error => dispatch(fetchError))
             
              }, [] 
            )
    //kjører hver gang search state blir oppdatert
    useEffect(
        () => {
            console.log("try to search more times");
              }, [searchState]
            )
    
     //legger inn et bilde, endre til å hente bilde på ID         
    function parseUrl(id: number) {
        return `https://upload.wikimedia.org/wikipedia/commons/5/5b/Killbill-vol1-logo.svg`;
      }
    
    // henter selector i modelreducer
    const state = useSelector(selectModal);
    console.log(state.id);

    
    return ( 

        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={parseUrl(state.id)} />
              <span className="card-title">Kill Bill</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a><button onClick={() =>
                dispatch(
                    openModal({
                        id: state.id,
                        title: state.title,
                        year: state.year,
                        user_rating: state.user_rating,
                        img_url: state.img_url,
                        gendre: []
                    })
                )
            }> </button></a>
            </div>
          </div>
        </div>
      </div>
   )};

{/*
        <div className = "movieContainer"
            onClick={() =>
                dispatch(
                    openModal({
                        id: state.id,
                        title: state.title,
                        year: state.year,
                        user_rating: state.user_rating,
                        img_url: state.img_url,
                        gendre: []
                    })
                )
            }> 
            <div className='movieName'>Kill Bill</div> 
            <img className = "picture" src= {parseUrl(state.id)} />
        </div>
        */}

 
    

export default Movie;