import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { IMovie } from '../modules/movie/model';
import CharacterService from '../modules/movie/service';
import e = require('express');
import movie from "../modules/movie/schema";



export class MovieController{

    private character_service: CharacterService = new CharacterService();

    
    public async up_rating(req: any, res: Response){

        const title = req.params.title;
        console.log("put func" + title);

    
        movie.findOneAndUpdate(
            {title: req.params.title },
            { $inc: { upvote: 1}}, {new: true}
        ).then(data =>
            successResponse("hei", data, res));   
        }
       
    public async down_rating(req: any, res: Response){
        const title = req.params.title;
        console.log(title);
       

        movie.findOneAndUpdate(
            {title: req.params.title },
            { $inc: { upvote: -1}}, {new: true}
        ).then(data =>
            successResponse("hade", data, res));
    }
    

    public get_movie(req: any, res: Response) {
      //  const limitView = req.query.limit ? parseInt(req.query.limit) : 5;
        const id = req.query.id;
        console.log(id)
        const ratings = parseInt(req.query.ranking);
        console.log(ratings)

        const order = req.query.order ? parseInt(req.query.order) : 0;

        const limitView = req.query.limit ? parseInt(req.query.limit) : 12;
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
                movie.find({genre: filter, title: searchValue}, (err: any, user_data: IMovie) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                        successResponse('get user successfull', user_data, res);
                    }
                }).skip(page*limitView).limit(limitView)

            }
            else if (order === 1){
                console.log("innenfor: " + order)
                movie.find({title: searchValue}, (err: any, user_data: IMovie) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                        successResponse('get user successfull', user_data, res);
                    }
                }).sort({year : 1}).skip(page*limitView).limit(limitView)
            } else if (order === -1){
                console.log("innenfor: " + order)
                movie.find({title: searchValue}, (err: any, user_data: IMovie) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                        successResponse('get user successfull', user_data, res);
                    }
                }).sort({year : -1}).skip(page*limitView).limit(limitView)
            } else {
                movie.find({title: searchValue}, (err: any, user_data: IMovie) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                        successResponse('get user successfull', user_data, res);
                    }
                }).skip(page*limitView).limit(limitView)
            }

        }
        //laster all filmer
        else{
            movie.find({}, (err: any, user_data: IMovie) => {
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

    }
 
}
