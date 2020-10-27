"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/harryPotter/service");
class CharacterController {
    constructor() {
        this.character_service = new service_2.default();
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
    get_character(req, res) {
        // if (req.params.id) {
        try {
            //tilrettelegger for at man kan velge å ha begrenset visninger og ikke
            //req.quer er en dictonary
            // const limitView = req.query.limit && req.query.limit === "none" ? 100 : 20;  
            const limitView = 7;
            const sort = {};
            const filter = {};
            const user_filter = { _id: req.params.id };
            if (req.query.filter != null) {
                const filter = { "house": req.query.filter };
                this.character_service.filterCharacter(filter, limitView, sort, (err, user_data) => {
                    if (err) {
                        service_1.mongoError(err, res);
                    }
                    else {
                        service_1.successResponse('get user successfull', user_data, res);
                    }
                });
            }
            this.character_service.filterCharacter(filter, limitView, sort, (err, user_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('get user successfull', user_data, res);
                }
            });
        }
        catch (err) {
            service_1.insufficientParameters(res);
        }
        /*   } else {
               insufficientParameters(res);
           }
           */
    }
}
exports.CharacterController = CharacterController;
