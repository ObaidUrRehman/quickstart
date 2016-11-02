import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TodoComponent} from "./todo.component";
import {FormsModule} from "@angular/forms";
import {DoneDirective} from "./done.directive";
import {FilterTodoPipe} from "./todo.pipe";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TodoComponent, DoneDirective, FilterTodoPipe ],
  bootstrap:    [ AppComponent ],


})
export class AppModule { }
