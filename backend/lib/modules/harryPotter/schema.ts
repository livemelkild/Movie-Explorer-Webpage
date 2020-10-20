import * as mongoose from 'mongoose';
//import { ModificationNote } from '../common/model';

const Schema = mongoose.Schema;

// [{"name":"Harry Potter","species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"31-07-1980","yearOfBirth":1980,"ancestry":"half-blood","eyeColour":"green","hairColour":"black","wand":{"wood":"holly","core":"phoenix feather","length":11},"patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alive":true,"image":"http://hp-api.herokuapp.com/images/harry.jpg"}

const character = new Schema(
    {
        _id: {type: String},
        name: {type: String},
        gender: {type: String},
        house: {type: String},
        dateOfBirth: {type: String},
        yearOfBirth: {type: Number},
        actor: {type: String},
        image: {type: String},
    //    modification_notes: [ModificationNote]
});
//skal referer til collection som vi lagde i databsen
export default mongoose.model('characters', character);
