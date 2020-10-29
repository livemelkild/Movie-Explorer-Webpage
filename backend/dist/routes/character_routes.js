"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterRoutes = void 0;
const characterControllers_1 = require("../controllers/characterControllers");
class CharacterRoutes {
    constructor() {
        this.character_controller = new characterControllers_1.CharacterController();
    }
    route(app) {
        app.get("/api/movie", (req, res) => {
            this.character_controller.get_movie(req, res);
        });
        app.put("/api/movie", (req, res) => {
            this.character_controller.save_rating(req, res);
        });
        app.get("/api/search/:title", (req, res) => {
            this.character_controller.get_movie_search(req, res);
        });
    }
}
exports.CharacterRoutes = CharacterRoutes;
