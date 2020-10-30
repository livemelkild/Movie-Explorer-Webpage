"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterRoutes = void 0;
const characterControllers_1 = require("../controllers/characterControllers");
const schema_1 = require("../modules/harryPotter/schema");
class CharacterRoutes {
    constructor() {
        this.character_controller = new characterControllers_1.CharacterController();
    }
    route(app) {
        app.get("/api/movie", (req, res) => {
            this.character_controller.get_movie(req, res);
        });
        app.put("/api/upVote/:title", (req, res) => {
            console.log("opppp");
            schema_1.default.findOneAndUpdate({ title: req.params.title }, { $inc: { upvote: 1 } }, { new: true }).then(data => res.json);
        });
        app.put("/api/downVote/:title", (req, res) => {
            console.log("need");
            schema_1.default.findOneAndUpdate({ title: req.params.title }, { $inc: { upvote: -1 } }, { new: true }).then(data => res.json);
        });
    }
}
exports.CharacterRoutes = CharacterRoutes;
