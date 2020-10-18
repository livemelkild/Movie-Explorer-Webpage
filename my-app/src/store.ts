import { createStore, Store } from "redux";
import rootReducer from "./Reducer/RootReducer";

export type Character = {
    id: number;
    name: string;
    house: string;
};

export type AppState = {
    people: Character[];
}

function configureStore(): Store<AppState> {
    const store = createStore(rootReducer, undefined)
}

export const Store = configureStore();


export function addCharacter(personName: string){
    return{
        type: "ADD_PERSON",
        payload:personName
    } as const;
}





