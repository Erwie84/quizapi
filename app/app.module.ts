import { NgModule }             from '@angular/core';
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';
import { FormsModule, 
         ReactiveFormsModule }  from '@angular/forms';
import { BrowserModule }        from '@angular/platform-browser';
import { AppComponent }         from './app.component';

@NgModule({
  imports:      [ 
      BrowserModule,
      HttpModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }