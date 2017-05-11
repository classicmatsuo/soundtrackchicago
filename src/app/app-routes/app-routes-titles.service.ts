import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';

@Injectable()
export class RoutesTitles {
  // public paramSource: Subject<any> = new Subject<any>();
  // public getParams(params) {
  //   this.paramSource.next(params);
  // }
  public name = new Subject<any>();
}