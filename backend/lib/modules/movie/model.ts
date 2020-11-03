//import { ModificationNote } from "../common/model";

export interface IMovie {
    _id: String;
    title: String;
    year: String;
    users_rating: String;
    img_url: String;
    genre: String[];
    upvote: String;
    
    //modification_notes: ModificationNote[]
}
