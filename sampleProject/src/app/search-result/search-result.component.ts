import { Component, OnInit } from '@angular/core';
import {FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { DataFilterPipe }   from './data-filter.pipe';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import {SearchResultService} from '../search-result.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  providers: [DataFilterPipe, SearchResultService]
})
export class SearchResultComponent implements OnInit {
    public data;
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";
searchResults : any;
public lookupData : any;
    constructor(private searchRes : SearchResultService) {
    	this.searchResults = searchRes;
    }

    ngOnInit(): void {
		console.log(this.searchResults.searchLookupResults());
console.log("###");
//console.log(aa);
	   //myService.someEvent.subscribe(value => this.someMethod(value));
            this.lookupData = this.searchResults.searchLookupResults();

           // this.searchLookupResults();
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    searchLookupResults() : void {
    console.log(this.searchResults.searchLookupResults());

    }

}
