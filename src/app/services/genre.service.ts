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

   // Fetch all existing comments
   getGenres(genresUrl:string) : Observable<Genre[]>{
       // ...using get request
       return this.http.get(genresUrl)
                      // ...and calling .json() on the response to return data
                       .map((res:Response) => res.json())
                       // .publishReplay(1)
                       // .refCount()
                       //...errors if any
                       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }
}
