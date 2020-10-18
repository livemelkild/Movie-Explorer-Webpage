import Actions from '../Action/searchAction'; 

const initialState = { 
    search: ''
}

export function searchReducer(state: initialState, action:Actions) {
    switch(action.type) {
        case 'SEARCH_ARTIST' :
            return {
                ...state,
                search: action.payload
            }
             
    }
}

export default searchReducer; 