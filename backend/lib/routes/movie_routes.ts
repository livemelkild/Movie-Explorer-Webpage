
import { Application, Request, Response } from 'express';
import { MovieController as MovieController } from '../controllers/MovieControllers';
import movie from "../modules/movie/schema";

export class MovieRoutes {

    private movie_controller: MovieController = new MovieController();

    public route(app: Application) {

        app.get("/api/movie", (req: Request, res: Response) => {
            this.movie_controller.get_movie(req, res);
        })

        app.put("/api/upVote/:title", (req: Request, res: Response) => {
            this.movie_controller.up_rating(req, res)
            
        })

        app.put("/api/downVote/:title", (req: Request, res: Response) => {

            this.movie_controller.down_rating(req, res)
        })

    }
}
