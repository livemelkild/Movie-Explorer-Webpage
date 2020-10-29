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

        const order = req.query.order ? parseInt(req.query.order) : 0;

        const limitView = req.query.limit ? parseInt(req.query.limit) : 5;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        const search = req.query.search ? req.query.search : "";

        console.log(search)
        //kan søke på deler av et ord med store og små bokstaver
        const searchValue = {$regex : RegExp(search), $options : '-i'}
        const error = "No result"

        //dersom det er lagt inn et søk

        const filter = req.query.filter ? req.query.filter : "";
        console.log(filter)

        console.log("utenfor: " + order)
        



        if (search != "" ){
            

                
            if (filter != ""){
                console.log(filter)
                movie.find({genre: filter, title: searchValue}, (err: any, user_data: ICharacter) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                    // res.json(user_data);
                        successResponse('get user successfull', user_data, res);
                    }
                }).skip(page*limitView).limit(limitView)

            }
            else if (order === 1){
                console.log("innenfor: " + order)
                movie.find({title: searchValue}, (err: any, user_data: ICharacter) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                    // res.json(user_data);
                        successResponse('get user successfull', user_data, res);
                    }
                }).sort({year : 1}).skip(page*limitView).limit(limitView)
            } else if (order === -1){
                console.log("innenfor: " + order)
                movie.find({title: searchValue}, (err: any, user_data: ICharacter) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                    // res.json(user_data);
                        successResponse('get user successfull', user_data, res);
                    }
                }).sort({year : -1}).skip(page*limitView).limit(limitView)
            } else {
                movie.find({title: searchValue}, (err: any, user_data: ICharacter) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                    // res.json(user_data);
                        successResponse('get user successfull', user_data, res);
                    }
                }).skip(page*limitView).limit(limitView)
            }

        }
        //laster all filmer
        else{
            movie.find({}, (err: any, user_data: ICharacter) => {
                if (err) {
                    mongoError(err, res);
                } else {
                   // res.json(user_data);
                    successResponse('get user successfull', user_data, res);
                }
            }).skip(page*limitView).limit(limitView);
        }

        console.log(limitView);
        console.log(page);

           


     /*   } else {
            insufficientParameters(res);
        }
        */
    }



    
    public get_movie_search(req: any, res: Response) {
        const limitView = req.query.limit ? parseInt(req.query.limit) : 5;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        const filter = req.query.filter ? req.query.filter : "";

        if (filter != ""){
            const genre = [filter]
            console.log(genre)
            movie.find({genre: genre}, (err: any, user_data: ICharacter) => {
                if (err) {
                    mongoError(err, res);
                } else {
                   // res.json(user_data);
                    successResponse('get user successfull', user_data, res);
                }
            }).skip(page*limitView).limit(limitView)

        }


/*

        if(filter != ""){
            const searchValue = {$regex : RegExp(this.saveSearch()), $options : '-i'}

            const genre = [filter]

            const filterresult = movie.find({genre: genre}).skip(page*limitView).limit(limitView)

            if (search != ""){
                    console.log(genre)
                    filterresult.find({title: searchValue}, (err: any, user_data: ICharacter) => {
                        if (err) {
                            mongoError(err, res);
                        } else {
                           // res.json(user_data);
                            successResponse('get user successfull', user_data, res);
                        }
                    }).skip(page*limitView).limit(limitView)

            }

        }
*/
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
