
import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
//import { TestRoutes } from "../routes/test_routes";
import { MovieRoutes } from "../routes/movie_routes"
import * as cors from "cors";

class App {

   public app: express.Application;
   public mongoUrl: string = "mongodb://gruppe9:gruppe9@it2810-09.idi.ntnu.no:27017/mytestdatabase";

   private movie_route: MovieRoutes = new MovieRoutes();

   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();
      this.movie_route.route(this.app);
    //  this.test_routes.route(this.app);
   }

private config(): void {
   //gjør at man kan koble mellom forskjellige domener (localhost:4000 og 3000)
      this.app.use(cors());
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