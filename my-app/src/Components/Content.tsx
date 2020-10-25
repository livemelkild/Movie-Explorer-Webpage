import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hvorfor går det ikke å importere filene?
import { RootStore } from "../store";
import { ExecFileOptionsWithStringEncoding } from "child_process";
import { isPropertySignature } from "typescript";


import{ searchInput, fetchPending, fetchSuccess, fetchError} from "../Action/Actions";



function content() {
  return (dispatch: Function) => {
    dispatch(fetchPending());
    fetch('http://localhost:4000/api/character')
    .then(res => res.json())
    .then(res => {
      if(res.error) {
          throw(res.error);
      }
  })
  .catch(error => {
      dispatch(fetchError(error));
  })
  }
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
