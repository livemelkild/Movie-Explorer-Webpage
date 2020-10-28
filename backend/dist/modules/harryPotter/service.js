"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class CharacterService {
    filterMovie(query, callback) {
        //  const moviePage = movie.Paginate();
        schema_1.default.find(query, callback).limit(5).Paginate();
    }
}
exports.default = CharacterService;
