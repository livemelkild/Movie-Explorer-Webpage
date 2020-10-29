
import { Application, Request, Response } from 'express';
import { CharacterController } from '../controllers/characterControllers';

export class CharacterRoutes {

    private character_controller: CharacterController = new CharacterController();

    public route(app: Application) {

        app.get("/api/movie", (req: Request, res: Response) => {
            this.character_controller.get_movie(req, res);
        })

        app.get("/api/search/:title", (req: Request, res: Response) => {
            this.character_controller.get_movie_search(req, res);
        })
    }
}
