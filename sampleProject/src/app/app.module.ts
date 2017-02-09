import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Import Router Module
import {RouterModule, Routes} from '@angular/router';
// ag-grid
import {AgGridModule} from "ag-grid-ng2/main";
import {DataTableModule} from "angular2-datatable";


import { AppComponent } from './app.component';
import { SearchResultComponent } from './search-result/search-result.component';
/*
// create route object , which takes 2 arguments - path and component
const appRoutes: Routes = [
  {path: 'search-result', component: SearchResultComponent },
  {path: '', redirectTo: '/search-result', pathMatch: 'full'},
  {path: '', redirectTo: '/search-result', pathMatch: 'full'}
] */


@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    HttpModule //,
    // Add route object
   // appRoutes
  // AgGridModule.forRoot() ,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
