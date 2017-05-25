/* * * ./app/comments/components/comment.service.ts * * */
// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Genre }  from '../sidenav/genre/genre';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GenreService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  // private commentsUrl = 'http://localhost:3000/api/comments';
  // private genresUrl = 'https://jsonplaceholder.typicode.com/posts'; 
  private genresUrl = '../assets/json/data.json';

   // Fetch all existing comments
   getGenres() : Observable<Genre[]>{
       // ...using get request
       return this.http.get(this.genresUrl)
                      // ...and calling .json() on the response to return data
                       .map((res:Response) => res.json())
                       //...errors if any
                       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      
   }
}
