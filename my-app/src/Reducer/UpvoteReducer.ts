import { SET_UPVOTE, REMOVE_UPVOTE } from "../Action/Actions";

const initialState = {
    ranking: 0,
    id: ""
}

interface UpvoteState {
    ranking: number
    id: string
}

export default function upvoteReducer(state: UpvoteState = initialState, action: { type: string, payload: any }) {
    switch(action.type) {
        case SET_UPVOTE:
            return {
                id: action.payload,
                ranking: 1
            }
        case REMOVE_UPVOTE:
            return {
                id: action.payload,
                ranking: -1
            }
            default:
                return{
                    ...state,
                    ranking: 0
                }
        } 
      
    }

    export const selectOrder = (state: number) => state;
