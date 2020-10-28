import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { ICharacter } from '../modules/harryPotter/model';
import CharacterService from '../modules/harryPotter/service';
import e = require('express');
import movie from "../modules/harryPotter/schema";
//import movie from './schema';



export class CharacterController{

    private character_service: CharacterService = new CharacterService();

    public get_movie(req: any, res: Response) {
      //  const limitView = req.query.limit ? parseInt(req.query.limit) : 5;

        const sort = req.query.sort ? req.query.sort : 'year';
        const order = req.query.order ? req.query.order : '-1';
        const limitView = req.query.limit ? parseInt(req.query.limit) : 5;
        const page = req.query.page ? parseInt(req.query.page) : 1;
        let content = {};
        console.log(limitView);
        console.log(page);
   //if (req.params.id) {
/*
        movie.paginate(content,{
            page: page,
            limit: limitView
        }).then(side => {
            console.log(side);
            res.json(side)
        })
            .catch(err => {
                res.status(500).json(err);
            });
    
*/
           
            const user_filter = { _id: req.params.id };

            movie.find({}, (err: any, user_data: ICharacter) => {
                if (err) {
                    mongoError(err, res);
                } else {
                   // res.json(user_data);
                    successResponse('get user successfull', user_data, res);
                }
            }).skip(page + limitView).limit(limitView);
     /*   } else {
            insufficientParameters(res);
        }
        */
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
