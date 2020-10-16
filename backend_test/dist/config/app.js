"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//import { TestRoutes } from "../routes/test_routes";
const common_routes_1 = require("../routes/common_routes");
const character_routes_1 = require("../routes/character_routes");
class App {
    constructor() {
        this.mongoUrl = "mongodb://gruppe9:gruppe9@it2810-09.idi.ntnu.no:27017/mytestdatabase";
        this.character_route = new character_routes_1.CharacterRoutes();
        // private test_routes: TestRoutes = new TestRoutes();
        this.common_routes = new common_routes_1.CommonRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.character_route.route(this.app);
        //  this.test_routes.route(this.app);
        this.common_routes.route(this.app);
    }
    config() {
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
