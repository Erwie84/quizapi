import { NgModule }                 from '@angular/core';
import { HttpModule }               from '@angular/http';
import { RouterModule }             from '@angular/router';
import { FormsModule, 
         ReactiveFormsModule }      from '@angular/forms';
import { BrowserModule }            from '@angular/platform-browser';
import { AppComponent }             from './app.component';
import { routing }                  from './app.routing';
import { NcassoFormModule }         from './form/form.module';
import { NavigationComponent }      from './navigation/navigation.component';
import { QuestionListComponent }    from './question-list/question-list.component';
import { QuestionComponent }        from './question/question.component';

@NgModule({
  imports:      [ 
      BrowserModule,
      HttpModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      routing,
      NcassoFormModule
  ],
  declarations: [ 
      AppComponent,
      NavigationComponent,
      QuestionListComponent,
      QuestionComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }