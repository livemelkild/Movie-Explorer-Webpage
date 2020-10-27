"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class CharacterService {
    createMovie(user_params, callback) {
        const _session = new schema_1.default(user_params);
        _session.save(callback);
    }
    filterMovie(query, callback) {
        schema_1.default.find(query, callback).limit(100);
    }
    findByMovieID(query, callback) {
        schema_1.default.findById(query, callback);
    }
    updateMovie(user_params, callback) {
        const query = { id: user_params._id };
        schema_1.default.findOneAndUpdate(query, user_params, callback);
    }
    deleteMovie(_name, callback) {
        const query = { name: name };
        schema_1.default.deleteOne(query, callback);
    }
}
exports.default = CharacterService;
