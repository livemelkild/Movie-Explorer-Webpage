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

    

    //kjører bare en gang
    useEffect( 
        () => {
            console.log("search one time lol");

            dispatch(fetchPending());

            fetch('http://localhost:4000/api/character')
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
    

    function parseUrl(id: number) {
        return `https://upload.wikimedia.org/wikipedia/commons/5/5b/Killbill-vol1-logo.svg`;
      }

    const state = useSelector(selectModal);
    console.log(state.id);

    
    return (
        
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
        

    )};
    

export default Movie;