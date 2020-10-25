import { Dispatch } from "redux";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// hvorfor går det ikke å importere filene?
import { RootStore } from "../store";

type Props = {
    text: string
}


 export const PrintText = (props: Props) => {
    const dispatch: Dispatch<any> = useDispatch();
      // Annen mulig løsning: 
      
      const searchState = useSelector((state: RootStore) => state.searchReducer.search);
      const [search, setSearch] = useState(searchState);


      return(
          <h1> {props.text} </h1>

      )
}

export default PrintText;
