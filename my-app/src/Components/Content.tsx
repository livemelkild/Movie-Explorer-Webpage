import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hvorfor går det ikke å importere filene?
import { RootStore } from "../store";
import { ExecFileOptionsWithStringEncoding } from "child_process";
import { isPropertySignature } from "typescript";


import{ searchInput, fetchPending, fetchSuccess, fetchError} from "../Action/Actions";

interface ModalState {
  id: number,
  title: string,
  year: string,
  user_rating: string,
  img_url: string,
  gendre: string[]
}

function content() {
  console.log("går inn i content");
  
  return(
    (dispatch: Function) => {
    dispatch(fetchPending());
    fetch('http://localhost:4000/api/character')
    .then(response => response.json())
    .then((data: ModalState) => dispatch(fetchSuccess(data)))
    .catch(error => dispatch(fetchError))
      }
    )
  }

export default content();



/*

 export const Content = (props: Props) => {
    const dispatch: Dispatch<any> = useDispatch();
      // Annen mulig løsning: 
      
      const searchState = useSelector((state: RootStore) => state.searchReducer.search);
      const [search, setSearch] = useState(searchState);


      return(
          <h1> {props.text} </h1>

      )
}

export default Content;

*/
