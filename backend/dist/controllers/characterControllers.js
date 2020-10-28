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
    get_movie(req, res) {
        //  const limitView = req.query.limit ? parseInt(req.query.limit) : 5;
        const sort = req.query.sort ? req.query.sort : 'year';
        const order = req.query.order ? req.query.order : '-1';
        const limitView = req.query.limit ? parseInt(req.query.limit) : 5;
        const page = req.query.page ? parseInt(req.query.page) : 0;
        const search = req.query.search ? req.query.search : "";
        console.log(search);
        const searchValue = { $regex: RegExp(search), $options: '-i' };
        const error = "No result";
        if (search != "") {
            const result = schema_1.default.find({ title: searchValue }, (err, user_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    // res.json(user_data);
                    service_1.successResponse('get user successfull', user_data, res);
                }
            }).skip(page * limitView).limit(limitView);
            if (result == null) {
                service_1.failureResponse("no movie with this name", error, res);
            }
        }
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
    get_movie_one(req, res) {
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
