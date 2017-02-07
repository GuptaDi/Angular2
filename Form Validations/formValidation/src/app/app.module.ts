import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import the 3 components we created.
import { SimpleformComponent } from './simpleform/simpleform.component';
import { ComplexformComponent } from './complexform/complexform.component';
import { FormvalidationsComponent } from './formvalidations/formvalidations.component';

@NgModule({
  declarations: [
    AppComponent,
    // declare the 3 components as part of root @NgModule
    SimpleformComponent,
    ComplexformComponent,
    FormvalidationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // Include reactive forms in our app in @NgModule imports block
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
