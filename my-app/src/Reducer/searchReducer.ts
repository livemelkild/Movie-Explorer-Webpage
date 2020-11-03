import { SEARCH } from "../Action/Actions";

const initialState = { 
    search: ''
}
interface SearchState {
    search: string
}

export function searchReducer(state: SearchState = initialState, action: { type: string, payload: any }) {
    switch(action.type) {
        case SEARCH :
            return {
                //returnerer den nye staten
                search: action.payload
            }
        default:
            return state    
    }
}

export default searchReducer; 