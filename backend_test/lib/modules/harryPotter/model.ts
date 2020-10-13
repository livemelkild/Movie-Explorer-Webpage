//import { ModificationNote } from "../common/model";

export interface ICharacter {
    _id: String;
    name: String;
    gender: String;
    house: String;
    dateOfBirth?: String;
    yearOfBirth?: Number;
    actor: String;
    image?: String;
    //modification_notes: ModificationNote[]
}