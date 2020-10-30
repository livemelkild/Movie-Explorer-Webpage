"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRoutes = void 0;
const MovieControllers_1 = require("../controllers/MovieControllers");
class MovieRoutes {
    constructor() {
        this.movie_controller = new MovieControllers_1.MovieController();
    }
    route(app) {
        app.get("/api/movie", (req, res) => {
            this.movie_controller.get_movie(req, res);
        });
        app.put("/api/upVote/:title", (req, res) => {
            this.movie_controller.up_rating(req, res);
        });
        app.put("/api/downVote/:title", (req, res) => {
            this.movie_controller.down_rating(req, res);
        });
    }
}
exports.MovieRoutes = MovieRoutes;
