import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { CodelijstSelectComponent } from './codelijst-select.component';
import { ContenteditableModel } from './content-editable.directive';

@NgModule({
    declarations: [
        ContenteditableModel
    ], 
    imports:      [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ContenteditableModel   
    ]
})
export class NcassoFormModule {}