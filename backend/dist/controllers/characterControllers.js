"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/harryPotter/service");
const schema_1 = require("../modules/harryPotter/schema");
class CharacterController {
    constructor() {
        this.character_service = new service_2.default();
    }
    get_movie(req, res) {
        //if (req.params.id) {
        const user_filter = { _id: req.params.id };
        this.character_service.filterMovie({}, (err, user_data) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
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
    get_house(req, res) {
        if (req.params.house) {
            const user_filter = { house: req.params.house };
            this.character_service.filterMovie(user_filter, (err, user_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('get user successfull', user_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
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
