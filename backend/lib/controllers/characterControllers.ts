import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { ICharacter } from '../modules/harryPotter/model';
import CharacterService from '../modules/harryPotter/service';
import e = require('express');
import movie from "../modules/harryPotter/schema";

export class CharacterController{

    private character_service: CharacterService = new CharacterService();

    public get_movie(req: Request, res: Response) {
       //if (req.params.id) {
            const user_filter = { _id: req.params.id };
            this.character_service.filterMovie({}, (err: any, user_data: ICharacter) => {
                if (err) {
                    
                    mongoError(err, res);
                } else {
                    console.log(user_data);
                    res.json(user_data);
                    //successResponse('get user successfull', user_data, res);
                }
            });
     /*   } else {
            insufficientParameters(res);
        }
        */
    }

    public get_house(req: Request, res: Response) {
        if (req.params.house) {
            const user_filter = { house: req.params.house };
            this.character_service.filterMovie(user_filter, (err: any, user_data: ICharacter) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('get user successfull', user_data, res);
                }
            });
        } else {
            insufficientParameters(res);
        }
    }
    
    public get_movie_one(req: Request, res: Response) {
        if (req.params.title) {
            const user_filter = {title:req.params.title} ;
            
            //const user_filter = { $text: { $search: req.params.title } } ;
            console.log(user_filter);
            movie.find(user_filter, (err: any, user_data: ICharacter ) => { res.json(user_data)});
            /*
            this.character_service.findByMovieID(user_filter, (err: any, user_data: ICharacter) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    res.json(user_data);
                }
            });
            
        } else {
            insufficientParameters(res);
        }
        */
        
    } 
 }
}
