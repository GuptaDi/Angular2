import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {HttpModule , Http} from '@angular/http';


@Injectable()
export class SearchResultService {
	private url: string;
	//private headers: Headers;
	//private options: RequestOptions;

  constructor(private http: Http) { 
  	this.url = 'https://jsonplaceholder.typicode.com/users';
 	//this.headers = new Headers({ 'Content-Type': 'application/json' });
    //this.options = new RequestOptions({ headers: this.headers });
  }

   searchLookupResults(){
  	return [
  {
    "name": "Wing",
    "email": "tellus.eu.augue@arcu.com",
    "regDate": "2016-01-09T14:48:34-08:00",
    "city": "Paglieta",
    "age": 25
  },
  {
    "name": "Whitney",
    "email": "sed.dictum@Donec.org",
    "regDate": "2017-01-23T20:09:52-08:00",
    "city": "Bear",
    "age": 32
  },
  {
    "name": "Oliver",
    "email": "mauris@Craslorem.ca",
    "regDate": "2015-11-19T19:11:33-08:00",
    "city": "Bruderheim",
    "age": 31
  }];
  }

  searchFakeService(){
  	return this.http.get(this.url)
    .map(data => data.json());  
  }
}
