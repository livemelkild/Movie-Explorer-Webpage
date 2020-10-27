"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class CharacterService {
    filterCharacter(query, limitView, sort, callback) {
        schema_1.default.find(query, callback).sort(sort).limit(limitView);
        //  characters.find(query, callback).sort(sort).skip(limitView).limit(limitView);
    }
}
exports.default = CharacterService;
