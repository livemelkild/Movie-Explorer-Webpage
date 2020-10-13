
import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
//import { TestRoutes } from "../routes/test_routes";
import { CommonRoutes } from "../routes/common_routes";
import { CharacterRoutes } from "../routes/character_routes"


class App {

   public app: express.Application;
   public mongoUrl: string = "mongodb://gruppe9:gruppe9@it2810-09.idi.ntnu.no:27017/mytestdatabase";

   private character_route: CharacterRoutes = new CharacterRoutes();
  // private test_routes: TestRoutes = new TestRoutes();
   private common_routes: CommonRoutes = new CommonRoutes();


   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();
      this.character_route.route(this.app);
    //  this.test_routes.route(this.app);
      this.common_routes.route(this.app);

   }

private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
   }

private mongoSetup(): void {
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    console.log("Database is connected!");
}

}
export default new App().app;