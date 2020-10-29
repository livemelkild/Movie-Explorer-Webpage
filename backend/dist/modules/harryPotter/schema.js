"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');
//import { ModificationNote } from '../common/model';
const Schema = mongoose.Schema;
// [{"name":"Harry Potter","species":"human","gender":"male","house":"Gryffindor","dateOfBirth":"31-07-1980","yearOfBirth":1980,"ancestry":"half-blood","eyeColour":"green","hairColour":"black","wand":{"wood":"holly","core":"phoenix feather","length":11},"patronus":"stag","hogwartsStudent":true,"hogwartsStaff":false,"actor":"Daniel Radcliffe","alive":true,"image":"http://hp-api.herokuapp.com/images/harry.jpg"}
const movie = new Schema({
    _id: { type: String },
    title: { type: String },
    year: { type: String },
    users_rating: { type: String },
    img_url: { type: String },
    genre: { type: [String] },
    upvote: { type: Number },
});
movie.plugin(mongoosePaginate);
//skal referer til collection som vi lagde i databsen
//movie.createIndex( { title: "text",  } )
exports.default = mongoose.model('movies', movie);
