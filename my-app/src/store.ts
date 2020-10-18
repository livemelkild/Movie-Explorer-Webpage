import { createStore, combineReducers, Store } from "redux";

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





