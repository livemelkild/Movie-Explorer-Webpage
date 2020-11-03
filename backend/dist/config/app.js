"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//import { TestRoutes } from "../routes/test_routes";
const movie_routes_1 = require("../routes/movie_routes");
const cors = require("cors");
class App {
    constructor() {
        this.mongoUrl = "mongodb://gruppe9:gruppe9@it2810-09.idi.ntnu.no:27017/mytestdatabase";
        this.movie_route = new movie_routes_1.MovieRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.movie_route.route(this.app);
        //  this.test_routes.route(this.app);
    }
    config() {
        //gjør at man kan koble mellom forskjellige domener (localhost:4000 og 3000)
        this.app.use(cors());
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
        console.log("Database is connected!");
    }
}
exports.default = new App().app;
