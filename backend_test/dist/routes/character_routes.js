"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterRoutes = void 0;
const characterControllers_1 = require("../controllers/characterControllers");
class CharacterRoutes {
    constructor() {
        this.character_controller = new characterControllers_1.CharacterController();
    }
    route(app) {
        app.get("/api/character/:id", (req, res) => {
            this.character_controller.get_character(req, res);
        });
        app.get("/api/character/house", (req, res) => {
            this.character_controller.get_house(req, res);
        });
    }
}
exports.CharacterRoutes = CharacterRoutes;
