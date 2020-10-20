
import { Application, Request, Response } from 'express';
import { CharacterController } from '../controllers/characterControllers';

export class CharacterRoutes {

    private character_controller: CharacterController = new CharacterController();

    public route(app: Application) {

        app.get("/api/character", (req: Request, res: Response) => {
            this.character_controller.get_character(req, res);
        })

        app.get("/api/character/house", (req: Request, res: Response) => {
            this.character_controller.get_house(req, res);
        })
    }
}