import { YEAR_ASC, YEAR_DESC, TITLE_ASC, TITLE_DESC } from "../Action/Actions";

const initialState = {
    sortBy: 'Year',
    order: -1
}

interface SortState {
    sortBy: string,
    order: number
}

export function sortReducer(state: SortState = initialState, action: { type: string }) {
    switch(action.type) {
        case YEAR_ASC:
            return {
                ...state,
                sortBy: 'Year',
                order: -1
            }
        case YEAR_DESC:
            return {
                ...state,
                sortBy: 'Year',
                order: 1
            }
        case TITLE_ASC:
            return {
                ...state,
                sortBy: 'Title',
                order: 1
            }
        case TITLE_DESC:
            return {
                ...state,
                sortBy: 'Title',
                order: -1
            }
            default:
                return{
                    ...state
                }
        } 
      
    }

    export default sortReducer; 
