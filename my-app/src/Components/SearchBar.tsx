import { Dispatch } from "redux";
import * as React from "react";
import { useDisptach } from "react-redux";


type SearchProps = {
    search: string;
}

export const SearchBar: React.FC<SearchProps> = ({ search }) => {
    const dispatch: Dispatch<any> = useDisptach();
    
}