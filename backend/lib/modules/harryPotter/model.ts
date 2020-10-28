//import { ModificationNote } from "../common/model";

export interface ICharacter {
    _id: String;
    title: String;
    year: String;
    users_rating: String;
    img_url: String;
    genre: String[];
    
    //modification_notes: ModificationNote[]
}
