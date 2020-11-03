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
        app.put("/api/upVote/:title", (req, res) => {
            this.character_controller.up_rating(req, res);
        });
        app.put("/api/downVote/:title", (req, res) => {
            this.character_controller.down_rating(req, res);
        });
    }
}
exports.CharacterRoutes = CharacterRoutes;
