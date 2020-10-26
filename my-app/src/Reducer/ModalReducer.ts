import { OPEN_MODAL, CLOSE_MODAL} from "../Action/Actions";

const initialState = { 
    id: 0,
    title: '',
    year: '',
    user_rating: '',
    img_url: '',
    gendre: []

}
interface ModalState {
    id: number,
    title: string,
    year: string,
    user_rating: string,
    img_url: string,
    gendre: string[]
}

export default function modalReducer(state: ModalState = initialState, action: { type: string, payload: any }):ModalState {
    switch (action.type) {
      case OPEN_MODAL:
        return { 
            ...action.payload, 
            show: true 
        };
      case CLOSE_MODAL:
        return { 
            ...action.payload, 
            show: false 
        };
      default:
        return state;
    }
  }

  export const selectModal = (state: ModalState) => state


  