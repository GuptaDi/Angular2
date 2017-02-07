import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  
  searchResults : FormGroup;
  constructor(private fb: FormBuilder) { 
  	this.searchResults = fb.group({
  		'name' : ['Divya']
  	});
  }

  ngOnInit() {
  }

}
