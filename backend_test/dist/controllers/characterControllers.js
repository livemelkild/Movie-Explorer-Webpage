"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/harryPotter/service");
class CharacterController {
    constructor() {
        this.character_service = new service_2.default();
    }
    get_character(req, res) {
        if (req.params.id) {
            const user_filter = { _id: req.params.id };
            this.character_service.filterCharacter(user_filter, (err, user_data) => {
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
    get_house(req, res) {
        if (req.params.house) {
            const user_filter = { house: req.params.house };
            this.character_service.filterCharacter(user_filter, (err, user_data) => {
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
}
exports.CharacterController = CharacterController;
