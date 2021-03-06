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
    public res : any;
    public datanew : any;

    id : number;
    name: string;
    constructor(private searchRes : SearchResultService) {
    	this.searchResults = searchRes;
    }

    lookupFilters = [
        {fieldname: 'sn',  fieldDescription: 'Serial Number'},
        {fieldname: 'tag',  fieldDescription: 'Asset Tag'},
        {fieldname: 'material',  fieldDescription: 'Material'}
    ];

    ngOnInit(): void {
            this.lookupData = this.searchResults.searchLookupResults();
    }

    public toInt(num: string) {
        return +num;
    }

    public sortByWordLength = (a: any) => {
        return a.city.length;
    }

    searchRecords(formData) : void {
        console.log(formData);
        // pass tag value
        var tag = formData;
        this.searchResults.searchFakeService().subscribe(data => {
            this.lookupData = data;
            //console.log(data[0].id);
        });
    }
}
