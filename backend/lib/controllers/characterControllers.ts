import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { ICharacter } from '../modules/harryPotter/model';
import CharacterService from '../modules/harryPotter/service';
import e = require('express');


export class CharacterController{

    private character_service: CharacterService = new CharacterService();

    public get_character(req: Request, res: Response) {
       // if (req.params.id) {
            const user_filter = { _id: req.params.id };
            this.character_service.filterCharacter({}, (err: any, user_data: ICharacter) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('get user successfull', user_data, res);
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
            this.character_service.filterCharacter(user_filter, (err: any, user_data: ICharacter) => {
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



}