"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoutes = void 0;
class TestRoutes {
    route(app) {
        app.get('/api/test', (req, res) => {
            res.status(200).json({ message: "Get request successfull" });
        });
        app.post('/api/test/abc', (req, res) => {
            //koble til databasen ved hjelp av schemas
            //gjøre noe greier
            //returnere data
            res.status(200).json({ message: "Post request successfull" });
        });
    }
}
exports.TestRoutes = TestRoutes;
