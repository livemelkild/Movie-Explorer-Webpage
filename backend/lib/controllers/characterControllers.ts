import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { ICharacter } from '../modules/harryPotter/model';
import CharacterService from '../modules/harryPotter/service';
import e = require('express');


export class CharacterController{

    private character_service: CharacterService = new CharacterService();

    public get_character(req: Request, res: Response) {
       // if (req.params.id) {
           try{

            //tilrettelegger for at man kan velge å ha begrenset visninger og ikke
            //req.quer er en dictonary
           // const limitView = req.query.limit && req.query.limit === "none" ? 100 : 20;  
            const limitView = 7;
            const sort = {};
            const filter = {};
            const user_filter = { _id: req.params.id };

            if (req.query.filter != null){
                const filter = {"house":req.query.filter};
                this.character_service.filterCharacter(filter, limitView, sort, (err: any, user_data: ICharacter) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                        successResponse('get user successfull', user_data, res);
                    }
                });
            }

            this.character_service.filterCharacter(filter, limitView, sort, (err: any, user_data: ICharacter) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('get user successfull', user_data, res);
                }
            });

           } catch(err) {
            insufficientParameters(res);
           }

     /*   } else {
            insufficientParameters(res);
        }
        */
    }
 /* 
    public get_search(req: Request, res: Response) {
         if (req.params.search) {
             const user_filter = { name: req.params.search };
             this.character_service.filterCharacter({user_filter}, (err: any, user_data: ICharacter) => {
                 if (err) {
                     mongoError(err, res);
                 } else {
                     successResponse('get user successfull', user_data, res);
                 }
             });
       } else {
             insufficientParameters(res);
         }
         */
     }
