import { Routes, RouterModule }     from '@angular/router';
import { ModuleWithProviders }      from '@angular/core';
import { QuestionListComponent }    from './question-list/question-list.component';
import { QuestionComponent }        from './question/question.component';

const appRoutes: Routes = [
    {
        path: 'questions',
        component: QuestionListComponent
    },
    {
        path: 'create-a-question',
        component: QuestionComponent
    }    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);