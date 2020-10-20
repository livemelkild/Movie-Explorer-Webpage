"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class CharacterService {
    createCharacter(user_params, callback) {
        const _session = new schema_1.default(user_params);
        _session.save(callback);
    }
    filterCharacter(query, callback) {
        schema_1.default.find(query, callback);
    }
    updateCharacter(user_params, callback) {
        const query = { id: user_params._id };
        schema_1.default.findOneAndUpdate(query, user_params, callback);
    }
    deleteCharacter(_name, callback) {
        const query = { name: name };
        schema_1.default.deleteOne(query, callback);
    }
}
exports.default = CharacterService;
