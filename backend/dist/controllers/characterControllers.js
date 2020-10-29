"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/harryPotter/service");
const schema_1 = require("../modules/harryPotter/schema");
//import movie from './schema';
class CharacterController {
    constructor() {
        this.character_service = new service_2.default();
    }
    save_rating(req, res) {
        const id = req.query.id;
        const ratings = parseInt(req.query.ranking);
        console.log(id);
        console.log(ratings);
        const movies = schema_1.default.find({ id: id });
        const updateRating = schema_1.default.updateOne({ _id: id }, { $inc: {
                raiting: ratings
            }
        });
        res.json(updateRating);
    }
    get_movie(req, res) {
        //  const limitView = req.query.limit ? parseInt(req.query.limit) : 5;
        const id = req.query.id;
        console.log(id);
        const order = req.query.order ? parseInt(req.query.order) : 0;
        const limitView = req.query.limit ? parseInt(req.query.limit) : 5;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        const search = req.query.search ? req.query.search : "";
        console.log(search);
        //kan søke på deler av et ord med store og små bokstaver
        const searchValue = { $regex: RegExp(search), $options: '-i' };
        const error = "No result";
        //dersom det er lagt inn et søk
        const filter = req.query.filter ? req.query.filter : "";
        console.log(filter);
        console.log("utenfor: " + order);
        if (search != "") {
            if (filter != "") {
                console.log(filter);
                schema_1.default.find({ genre: filter, title: searchValue }, (err, user_data) => {
                    if (err) {
                        service_1.mongoError(err, res);
                    }
                    else {
                        // res.json(user_data);
                        service_1.successResponse('get user successfull', user_data, res);
                    }
                }).skip(page * limitView).limit(limitView);
            }
            else if (order === 1) {
                console.log("innenfor: " + order);
                schema_1.default.find({ title: searchValue }, (err, user_data) => {
                    if (err) {
                        service_1.mongoError(err, res);
                    }
                    else {
                        // res.json(user_data);
                        service_1.successResponse('get user successfull', user_data, res);
                    }
                }).sort({ year: 1 }).skip(page * limitView).limit(limitView);
            }
            else if (order === -1) {
                console.log("innenfor: " + order);
                schema_1.default.find({ title: searchValue }, (err, user_data) => {
                    if (err) {
                        service_1.mongoError(err, res);
                    }
                    else {
                        // res.json(user_data);
                        service_1.successResponse('get user successfull', user_data, res);
                    }
                }).sort({ year: -1 }).skip(page * limitView).limit(limitView);
            }
            else {
                schema_1.default.find({ title: searchValue }, (err, user_data) => {
                    if (err) {
                        service_1.mongoError(err, res);
                    }
                    else {
                        // res.json(user_data);
                        service_1.successResponse('get user successfull', user_data, res);
                    }
                }).skip(page * limitView).limit(limitView);
            }
        }
        //laster all filmer
        else {
            schema_1.default.find({}, (err, user_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    // res.json(user_data);
                    service_1.successResponse('get user successfull', user_data, res);
                }
            }).skip(page * limitView).limit(limitView);
        }
        console.log(limitView);
        console.log(page);
        /*   } else {
               insufficientParameters(res);
           }
           */
    }
    get_movie_search(req, res) {
        const limitView = req.query.limit ? parseInt(req.query.limit) : 5;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        const filter = req.query.filter ? req.query.filter : "";
        if (filter != "") {
            const genre = [filter];
            console.log(genre);
            schema_1.default.find({ genre: genre }, (err, user_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    // res.json(user_data);
                    service_1.successResponse('get user successfull', user_data, res);
                }
            }).skip(page * limitView).limit(limitView);
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
            const user_filter = { title: req.params.title };
            //const user_filter = { $text: { $search: req.params.title } } ;
            console.log(user_filter);
            schema_1.default.find(user_filter, (err, user_data) => { res.json(user_data); });
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
exports.CharacterController = CharacterController;
