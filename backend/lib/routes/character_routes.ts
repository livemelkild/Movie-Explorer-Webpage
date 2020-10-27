
import { Application, Request, Response } from 'express';
import { CharacterController } from '../controllers/characterControllers';

export class CharacterRoutes {

    private character_controller: CharacterController = new CharacterController();

    public route(app: Application) {

        //skal man ha :character - hva har det å si
        app.get("/api/character/:id", (req: Request, res: Response) => {
            console.log(req.params); //params -id
            console.log(req.query); // query - filter
            this.character_controller.get_character(req, res);
        })
//: search er en paramter som blir tatt inn - kolonet altså

/*
        app.get("/api/character/:search", (req: Request, res: Response) => {
            this.character_controller.get_search(req, res);
        })
        */
    }

}