"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;
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
exports.default = mongoose.model('movies', movie);
