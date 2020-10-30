
import { Application, Request, Response } from 'express';
import { CharacterController } from '../controllers/characterControllers';
import movie from "../modules/harryPotter/schema";

export class CharacterRoutes {

    private character_controller: CharacterController = new CharacterController();

    public route(app: Application) {

        app.get("/api/movie", (req: Request, res: Response) => {
            this.character_controller.get_movie(req, res);
        })

        app.put("/api/upVote/:title", (req: Request, res: Response) => {
            console.log("opppp")
            movie.findOneAndUpdate(
                {title: req.params.title },
                { $inc: { upvote: 1}}, {new: true}
            ).then(data =>
                res.json);   
            
        })

        app.put("/api/downVote/:title", (req: Request, res: Response) => {
            console.log("need")
            movie.findOneAndUpdate(
                {title: req.params.title },
                { $inc: { upvote: -1}}, {new: true}
            ).then(data =>
                res.json);
        })

    }
}
