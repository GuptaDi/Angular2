import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchResultService {
	
  constructor() { }

   searchLookupResults(){
  	return [
  {
    "name": "Wing",
    "email": "tellus.eu.augue@arcu.com",
    "regDate": "2016-01-09T14:48:34-08:00",
    "city": "Paglieta",
    "age": 25
  }];
  }
}
