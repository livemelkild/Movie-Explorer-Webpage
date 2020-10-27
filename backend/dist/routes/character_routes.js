"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterRoutes = void 0;
const characterControllers_1 = require("../controllers/characterControllers");
class CharacterRoutes {
    constructor() {
        this.character_controller = new characterControllers_1.CharacterController();
    }
    route(app) {
        //skal man ha :character - hva har det å si
        app.get("/api/character/:id", (req, res) => {
            console.log(req.params); //params -id
            console.log(req.query); // query - filter
            this.character_controller.get_character(req, res);
        });
        //: search er en paramter som blir tatt inn - kolonet altså
        /*
                app.get("/api/character/:search", (req: Request, res: Response) => {
                    this.character_controller.get_search(req, res);
                })
                */
    }
}
exports.CharacterRoutes = CharacterRoutes;
