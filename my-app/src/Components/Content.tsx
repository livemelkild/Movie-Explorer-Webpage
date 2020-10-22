import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hvorfor går det ikke å importere filene?
import {searchArtist} from "../Action/Actions";
import { RootStore } from "../store";
import { ExecFileOptionsWithStringEncoding } from "child_process";
import { isPropertySignature } from "typescript";


interface Props{
  text: string;
}

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
