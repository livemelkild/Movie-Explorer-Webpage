import { FILTER_COMEDY, FILTER_DRAMA, FILTER_HORROR, FILTER_ROMANCE, FILTER_THRILLER } from "../Action/Actions";

interface FilterState  {
    filterby: string;
}

const initialState = {
    filterby: ""
};

export default function filterReducer(state: FilterState = initialState, action: { type: string }):FilterState {
    switch(action.type){
        case FILTER_ROMANCE:
            return{
                 filterby: 'Romance',}
        case FILTER_THRILLER:
                return{
                     
                    filterby: 'Thriller',}
        case FILTER_HORROR:
            return{
               
                 filterby: 'Horror'
                 ,}
        case FILTER_DRAMA:
            return{
                
                 filterby: 'Drama',
                }
        case FILTER_COMEDY:
            return{
                
                filterby: 'Comedy',
            }
        default:
            return{
                filterby: ""
            }
    }
}

export const selectFilter = (state: string) => state;