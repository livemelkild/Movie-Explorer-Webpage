import { IMovie } from './model';
import movie from './schema';

export default class CharacterService {
    

    public filterMovie(query: any, callback: any) {
      //  const moviePage = movie.Paginate();
        movie.find(query, callback).limit(5).Paginate();
    }

/*
    public createMovie(user_params: ICharacter, callback: any) {
        const _session = new movie(user_params);
        _session.save(callback);
    }

    
    public findByMovieID(query: any, callback: any) {
        movie.findById(query, callback);
    }

    public updateMovie(user_params: ICharacter, callback: any) {
        const query = { id: user_params._id };
        movie.findOneAndUpdate(query, user_params, callback);
    }
    
    public deleteMovie(_name: String, callback: any) {
        const query = { name: name };
        movie.deleteOne(query, callback);
    }
*/
}